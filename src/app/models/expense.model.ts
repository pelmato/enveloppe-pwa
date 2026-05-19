export interface Expense {
  _id: string;
  _rev?: string;
  type: 'expense';
  envelopeId: string;
  categoryId?: string;
  name?: string;
  amount: number;
  date: string;
}
