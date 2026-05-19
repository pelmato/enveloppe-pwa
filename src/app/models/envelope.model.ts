export interface Envelope {
  _id: string;
  _rev?: string;
  type: 'envelope';
  name: string;
  budget: number;
  endDate: string;
  createdAt: string;
}
