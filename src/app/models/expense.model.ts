export interface Expense {
  id?: number;
  envelopeId: number;
  categoryId?: number;
  name?: string;
  amount: number;
  date: Date;
}
