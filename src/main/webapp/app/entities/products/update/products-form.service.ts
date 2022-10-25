import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { IProducts, NewProducts } from '../products.model';

/**
 * A partial Type with required key is used as form input.
 */
type PartialWithRequiredKeyOf<T extends { id: unknown }> = Partial<Omit<T, 'id'>> & { id: T['id'] };

/**
 * Type for createFormGroup and resetForm argument.
 * It accepts IProducts for edit and NewProductsFormGroupInput for create.
 */
type ProductsFormGroupInput = IProducts | PartialWithRequiredKeyOf<NewProducts>;

type ProductsFormDefaults = Pick<NewProducts, 'id'>;

type ProductsFormGroupContent = {
  id: FormControl<IProducts['id'] | NewProducts['id']>;
  code: FormControl<IProducts['code']>;
  name: FormControl<IProducts['name']>;
  quantity: FormControl<IProducts['quantity']>;
  category: FormControl<IProducts['category']>;
};

export type ProductsFormGroup = FormGroup<ProductsFormGroupContent>;

@Injectable({ providedIn: 'root' })
export class ProductsFormService {
  createProductsFormGroup(products: ProductsFormGroupInput = { id: null }): ProductsFormGroup {
    const productsRawValue = {
      ...this.getFormDefaults(),
      ...products,
    };
    return new FormGroup<ProductsFormGroupContent>({
      id: new FormControl(
        { value: productsRawValue.id, disabled: true },
        {
          nonNullable: true,
          validators: [Validators.required],
        }
      ),
      code: new FormControl(productsRawValue.code, {
        validators: [Validators.required, Validators.maxLength(20)],
      }),
      name: new FormControl(productsRawValue.name, {
        validators: [Validators.required, Validators.maxLength(255)],
      }),
      quantity: new FormControl(productsRawValue.quantity, {
        validators: [Validators.required],
      }),
      category: new FormControl(productsRawValue.category, {
        validators: [Validators.required],
      }),
    });
  }

  getProducts(form: ProductsFormGroup): IProducts | NewProducts {
    return form.getRawValue() as IProducts | NewProducts;
  }

  resetForm(form: ProductsFormGroup, products: ProductsFormGroupInput): void {
    const productsRawValue = { ...this.getFormDefaults(), ...products };
    form.reset(
      {
        ...productsRawValue,
        id: { value: productsRawValue.id, disabled: true },
      } as any /* cast to workaround https://github.com/angular/angular/issues/46458 */
    );
  }

  private getFormDefaults(): ProductsFormDefaults {
    return {
      id: null,
    };
  }
}
