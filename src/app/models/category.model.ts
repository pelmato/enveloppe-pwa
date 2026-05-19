export interface Category {
  _id: string;
  _rev?: string;
  type: 'category';
  envelopeId: string;
  name: string;
  colorIndex: number;
}
