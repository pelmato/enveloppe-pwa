import { Injectable, inject } from '@angular/core';
import { DbService } from './db.service';
import { Expense } from '../models/expense.model';

@Injectable({ providedIn: 'root' })
export class ExpenseService {
  private db = inject(DbService);

  async getByEnvelope(envelopeId: number): Promise<Expense[]> {
    const expenses = await this.db.expenses.where({ envelopeId }).toArray();
    return expenses.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  getById(id: number): Promise<Expense | undefined> {
    return this.db.expenses.get(id);
  }

  create(data: Omit<Expense, 'id'>): Promise<number> {
    return this.db.expenses.add(data as Expense);
  }

  async update(id: number, data: Partial<Omit<Expense, 'id'>>): Promise<void> {
    await this.db.expenses.update(id, data);
  }

  delete(id: number): Promise<void> {
    return this.db.expenses.delete(id);
  }
}
