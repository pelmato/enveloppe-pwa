import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'amount' })
export class AmountPipe implements PipeTransform {
  transform(value: number | null | undefined): string {
    if (value == null) return '0';
    const rounded = Math.round(value * 100) / 100;
    return parseFloat(rounded.toFixed(2)).toString().replace('.', ',');
  }
}
