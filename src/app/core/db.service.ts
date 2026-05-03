import { Injectable } from '@angular/core';
import Dexie, { Table } from 'dexie';
import { Envelope } from '../models/envelope.model';
import { Category } from '../models/category.model';
import { Expense } from '../models/expense.model';

@Injectable({ providedIn: 'root' })
export class DbService extends Dexie {
  envelopes!: Table<Envelope, number>;
  categories!: Table<Category, number>;
  expenses!: Table<Expense, number>;

  constructor() {
    super('enveloppe-db');
    this.version(1).stores({
      envelopes: '++id',
      categories: '++id, envelopeId',
      expenses: '++id, envelopeId, categoryId',
    });
  }
}
