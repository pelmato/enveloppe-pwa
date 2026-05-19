import { Injectable } from '@angular/core';
import PouchDB from 'pouchdb-browser';
import PouchDBFind from 'pouchdb-find';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
PouchDB.plugin(PouchDBFind as any);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyDB = any;

@Injectable({ providedIn: 'root' })
export class DbService {
  private readonly _db: AnyDB = new PouchDB('enveloppe-db');
  readonly ready: Promise<void>;

  constructor() {
    this.ready = this._init();
  }

  private async _init(): Promise<void> {
    await this._db.createIndex({ index: { fields: ['type'] } });
    await this._db.createIndex({ index: { fields: ['type', 'envelopeId'] } });
    await this._db.createIndex({ index: { fields: ['type', 'categoryId'] } });
  }

  async getDb(): Promise<AnyDB> {
    await this.ready;
    return this._db;
  }
}
