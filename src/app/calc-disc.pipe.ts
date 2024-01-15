import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calcDisc',
  standalone: true
})
export class CalcDiscPipe implements PipeTransform {
  transform(originalPrice: number, discountPercentage: number): number {
    if (isNaN(originalPrice) || isNaN(discountPercentage)) {
      return originalPrice;
    }

    const discountAmount = (originalPrice * discountPercentage) / 100;
    const discountedPrice = originalPrice - discountAmount;
   var discountedPricee:number=Math.round(discountedPrice);
    return discountedPricee;
  }

}
