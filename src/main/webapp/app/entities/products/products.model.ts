import { ICategory } from 'app/entities/category/category.model';

export interface IProducts {
  id: number;
  code?: string | null;
  name?: string | null;
  quantity?: number | null;
  category?: Pick<ICategory, 'id' | 'name'> | null;
}

export type NewProducts = Omit<IProducts, 'id'> & { id: null };
