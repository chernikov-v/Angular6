import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from 'src/app/models/product.interface';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(products: IProduct[] | null, field?: string | null): any {
    if (!products || !field) return products;
    return products.sort(({ [field]: date1 }, { [field]: date2 }) => {
      
      if (date1 > date2) return -1;
      if (date1 < date2) return 1;
      return 0;
    });
  }

}
