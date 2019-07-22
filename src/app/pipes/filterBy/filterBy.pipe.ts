import { Pipe, PipeTransform } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { IProduct } from 'src/app/models/product.interface';

@Pipe({
  name: 'filterBy'
})
export class FilterPipe implements PipeTransform {

  transform(products: IProduct[] | null, query?: any): any {
    return products && query ? products.filter(({ title }) => title.toLocaleLowerCase().includes(query.toLocaleLowerCase())) : products;
  }

}
