import { ICategory, NewCategory } from './category.model';

export const sampleWithRequiredData: ICategory = {
  id: 2529,
  code: 'Namibia Sa',
  name: 'Clothing navigate gold',
};

export const sampleWithPartialData: ICategory = {
  id: 97365,
  code: 'transparen',
  name: 'Borders bus',
};

export const sampleWithFullData: ICategory = {
  id: 72183,
  code: 'hack Rusti',
  name: 'Mexico pixel syndicate',
};

export const sampleWithNewData: NewCategory = {
  code: 'Group inde',
  name: 'withdrawal Cotton Steel',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
