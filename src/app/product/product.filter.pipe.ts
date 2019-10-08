import { PipeTransform, Pipe } from '@angular/core';
import { Product } from './product.model';

@Pipe({
    name:'productFilter'
})
export class ProductFilterPipe implements PipeTransform
{
    transform(product:Product[],SearchItems:string):Product[]
    {
        if(!product|| !SearchItems)
        {
            return product;
        }
        return product.filter(product=> 
            product.name.toLowerCase().indexOf
            (SearchItems.toLowerCase()) !== -1);
    }
}