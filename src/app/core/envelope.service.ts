import { Injectable, inject } from '@angular/core';
import { DbService } from './db.service';
import { Envelope } from '../models/envelope.model';
import { Category } from '../models/category.model';

const toISO = (d: Date | string): string => (d instanceof Date ? d.toISOString() : d);

@Injectable({ providedIn: 'root' })
export class EnvelopeService {
  private db = inject(DbService);

  async getAll(): Promise<Envelope[]> {
    const db = await this.db.getDb();
    const result = await db.find({ selector: { type: 'envelope' } });
    return result.docs as Envelope[];
  }

  async getById(id: string): Promise<Envelope | undefined> {
    try {
      const db = await this.db.getDb();
      return (await db.get(id)) as Envelope;
    } catch {
      return undefined;
    }
  }

  async create(data: {
    name: string;
    budget: number;
    endDate: Date | string;
    createdAt: Date | string;
  }): Promise<string> {
    const db = await this.db.getDb();
    const _id = crypto.randomUUID();
    await db.put({
      _id,
      type: 'envelope',
      name: data.name,
      budget: data.budget,
      endDate: toISO(data.endDate),
      createdAt: toISO(data.createdAt),
    });
    return _id;
  }

  async update(
    id: string,
    data: { name?: string; budget?: number; endDate?: Date | string },
  ): Promise<void> {
    const db = await this.db.getDb();
    const doc = await db.get(id);
    const patch: Record<string, unknown> = { ...data };
    if (data.endDate !== undefined) patch['endDate'] = toISO(data.endDate);
    await db.put({ ...doc, ...patch });
  }

  async delete(id: string): Promise<void> {
    const db = await this.db.getDb();
    const [catResult, expResult] = await Promise.all([
      db.find({ selector: { type: 'category', envelopeId: id } }),
      db.find({ selector: { type: 'expense', envelopeId: id } }),
    ]);
    const toDelete = [...catResult.docs, ...expResult.docs].map(
      (doc: Record<string, unknown>) => ({ ...doc, _deleted: true }),
    );
    if (toDelete.length) await db.bulkDocs(toDelete);
    const envelope = await db.get(id);
    await db.remove(envelope);
  }

  async getCategories(envelopeId: string): Promise<Category[]> {
    const db = await this.db.getDb();
    const result = await db.find({ selector: { type: 'category', envelopeId } });
    return result.docs as Category[];
  }

  async addCategory(envelopeId: string, name: string): Promise<Category> {
    const db = await this.db.getDb();
    const existing = await db.find({ selector: { type: 'category', envelopeId } });
    const colorIndex = existing.docs.length % 8;
    const _id = crypto.randomUUID();
    await db.put({ _id, type: 'category', envelopeId, name, colorIndex });
    return { _id, type: 'category', envelopeId, name, colorIndex };
  }

  async renameCategory(_id: string, name: string): Promise<void> {
    const db = await this.db.getDb();
    const doc = await db.get(_id);
    await db.put({ ...doc, name });
  }

  async deleteCategory(_id: string): Promise<void> {
    const db = await this.db.getDb();
    const result = await db.find({ selector: { type: 'expense', categoryId: _id } });
    if (result.docs.length > 0) throw new Error('CATEGORY_IN_USE');
    const doc = await db.get(_id);
    await db.remove(doc);
  }
}
