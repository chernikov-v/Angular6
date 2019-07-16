export interface IProduct {
  id: number | string;
  image?: string;
  category?: string;
  title: string;
  description?: string;
  qty?: number;
  price?: number;
  createdAt : Date; 
}
