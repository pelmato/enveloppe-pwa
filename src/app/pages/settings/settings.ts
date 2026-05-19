import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIconButton, MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatFormField, MatLabel, MatHint } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SyncService } from '../../core/sync.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-settings',
  imports: [
    RouterLink,
    FormsModule,
    DatePipe,
    MatToolbar,
    MatIconButton,
    MatButton,
    MatIcon,
    MatFormField,
    MatLabel,
    MatHint,
    MatInput,
  ],
  templateUrl: './settings.html',
  styleUrl: './settings.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Settings implements OnInit {
  protected syncService = inject(SyncService);
  private snackBar = inject(MatSnackBar);

  readonly status = this.syncService.status;
  readonly lastSync = this.syncService.lastSync;
  readonly lastError = this.syncService.lastError;

  remoteUrl = '';
  syncing = signal(false);

  ngOnInit(): void {
    this.remoteUrl = this.syncService.getRemoteUrl() ?? '';
  }

  saveUrl(): void {
    const url = this.remoteUrl.trim();
    if (!url) return;
    this.syncService.setRemoteUrl(url);
    this.snackBar.open('URL enregistrée', 'OK', { duration: 2000 });
  }

  clearUrl(): void {
    this.syncService.clearRemoteUrl();
    this.remoteUrl = '';
  }

  async syncNow(): Promise<void> {
    this.syncing.set(true);
    try {
      await this.syncService.sync();
      this.snackBar.open('Synchronisation terminée', 'OK', { duration: 2000 });
    } catch {
      this.snackBar.open(this.lastError() ?? 'Erreur de synchronisation', 'OK', {
        duration: 4000,
      });
    } finally {
      this.syncing.set(false);
    }
  }
}
