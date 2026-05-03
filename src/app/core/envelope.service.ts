import { Injectable, inject } from '@angular/core';
import { DbService } from './db.service';
import { Envelope } from '../models/envelope.model';
import { Category } from '../models/category.model';

@Injectable({ providedIn: 'root' })
export class EnvelopeService {
  private db = inject(DbService);

  getAll(): Promise<Envelope[]> {
    return this.db.envelopes.toArray();
  }

  getById(id: number): Promise<Envelope | undefined> {
    return this.db.envelopes.get(id);
  }

  create(data: Omit<Envelope, 'id'>): Promise<number> {
    return this.db.envelopes.add(data as Envelope);
  }

  async update(id: number, data: Partial<Omit<Envelope, 'id'>>): Promise<void> {
    await this.db.envelopes.update(id, data);
  }

  async delete(id: number): Promise<void> {
    const expenseKeys = await this.db.expenses.where({ envelopeId: id }).primaryKeys();
    await this.db.expenses.bulkDelete(expenseKeys as number[]);
    const categoryKeys = await this.db.categories.where({ envelopeId: id }).primaryKeys();
    await this.db.categories.bulkDelete(categoryKeys as number[]);
    await this.db.envelopes.delete(id);
  }

  getCategories(envelopeId: number): Promise<Category[]> {
    return this.db.categories.where({ envelopeId }).toArray();
  }

  async addCategory(envelopeId: number, name: string): Promise<Category> {
    const existing = await this.db.categories.where({ envelopeId }).toArray();
    const colorIndex = existing.length % 8;
    const id = await this.db.categories.add({ envelopeId, name, colorIndex } as Category);
    return { id, envelopeId, name, colorIndex };
  }

  async renameCategory(id: number, name: string): Promise<void> {
    await this.db.categories.update(id, { name });
  }

  async deleteCategory(id: number): Promise<void> {
    const count = await this.db.expenses.where({ categoryId: id }).count();
    if (count > 0) throw new Error('CATEGORY_IN_USE');
    await this.db.categories.delete(id);
  }
}
