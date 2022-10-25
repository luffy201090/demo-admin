import { IProducts, NewProducts } from './products.model';

export const sampleWithRequiredData: IProducts = {
  id: 79224,
  code: 'Switchable Alaska',
  name: 'bandwidth-monitored',
  quantity: 13205,
};

export const sampleWithPartialData: IProducts = {
  id: 96949,
  code: 'Generic Account port',
  name: 'parsing Infrastructure',
  quantity: 98000,
};

export const sampleWithFullData: IProducts = {
  id: 68350,
  code: 'Trafficway compressi',
  name: 'withdrawal',
  quantity: 654,
};

export const sampleWithNewData: NewProducts = {
  code: 'Sleek Auto',
  name: 'Delaware methodologies',
  quantity: 93955,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
