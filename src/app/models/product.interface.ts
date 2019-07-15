export interface IProduct {
  id: number;
  image?: string;
  category?: string;
  title: string;
  description?: string;
  qty?: number;
  price?: number;
  createdAt : Date; 
}
