export interface ICategory {
  id: number;
  code?: string | null;
  name?: string | null;
}

export type NewCategory = Omit<ICategory, 'id'> & { id: null };
