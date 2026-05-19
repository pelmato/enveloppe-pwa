import { Injectable, inject, signal } from '@angular/core';
import { DbService } from './db.service';

export type SyncStatus = 'idle' | 'syncing' | 'error' | 'not_configured';

const REMOTE_KEY = 'enveloppe_sync_url';

@Injectable({ providedIn: 'root' })
export class SyncService {
  private db = inject(DbService);

  readonly status = signal<SyncStatus>('not_configured');
  readonly lastSync = signal<string | null>(null);
  readonly lastError = signal<string | null>(null);

  constructor() {
    if (this.isConfigured()) {
      this.status.set('idle');
    }
    window.addEventListener('online', () => {
      if (this.isConfigured()) this.sync();
    });
  }

  getRemoteUrl(): string | null {
    return localStorage.getItem(REMOTE_KEY);
  }

  setRemoteUrl(url: string): void {
    localStorage.setItem(REMOTE_KEY, url);
    this.status.set('idle');
  }

  clearRemoteUrl(): void {
    localStorage.removeItem(REMOTE_KEY);
    this.status.set('not_configured');
    this.lastSync.set(null);
    this.lastError.set(null);
  }

  isConfigured(): boolean {
    return !!this.getRemoteUrl();
  }

  async sync(): Promise<void> {
    const url = this.getRemoteUrl();
    if (!url) {
      this.status.set('not_configured');
      return;
    }

    this.status.set('syncing');
    this.lastError.set(null);
    try {
      const localDb = await this.db.getDb();
      await localDb.sync(url);
      this.status.set('idle');
      this.lastSync.set(new Date().toISOString());
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e);
      this.status.set('error');
      this.lastError.set(msg);
      throw e;
    }
  }
}
