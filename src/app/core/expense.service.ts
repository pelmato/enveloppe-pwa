import { Injectable, inject } from '@angular/core';
import { DbService } from './db.service';
import { Expense } from '../models/expense.model';

const toISO = (d: Date | string): string => (d instanceof Date ? d.toISOString() : d);

@Injectable({ providedIn: 'root' })
export class ExpenseService {
  private db = inject(DbService);

  async getByEnvelope(envelopeId: string): Promise<Expense[]> {
    const db = await this.db.getDb();
    const result = await db.find({ selector: { type: 'expense', envelopeId } });
    const expenses = result.docs as Expense[];
    return expenses.sort((a: Expense, b: Expense) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }

  async getById(id: string): Promise<Expense | undefined> {
    try {
      const db = await this.db.getDb();
      return (await db.get(id)) as Expense;
    } catch {
      return undefined;
    }
  }

  async create(data: {
    envelopeId: string;
    amount: number;
    date: Date | string;
    categoryId?: string;
    name?: string;
  }): Promise<string> {
    const db = await this.db.getDb();
    const _id = crypto.randomUUID();
    await db.put({
      _id,
      type: 'expense',
      envelopeId: data.envelopeId,
      amount: data.amount,
      date: toISO(data.date),
      ...(data.categoryId !== undefined && { categoryId: data.categoryId }),
      ...(data.name !== undefined && { name: data.name }),
    });
    return _id;
  }

  async update(
    id: string,
    data: {
      envelopeId?: string;
      amount?: number;
      date?: Date | string;
      categoryId?: string;
      name?: string;
    },
  ): Promise<void> {
    const db = await this.db.getDb();
    const doc = await db.get(id);
    const patch: Record<string, unknown> = { ...data };
    if (data.date !== undefined) patch['date'] = toISO(data.date);
    await db.put({ ...doc, ...patch });
  }

  async delete(id: string): Promise<void> {
    const db = await this.db.getDb();
    const doc = await db.get(id);
    await db.remove(doc);
  }
}
