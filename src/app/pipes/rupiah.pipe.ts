import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rupiah',
  standalone: true
})
export class RupiahPipe implements PipeTransform {

  transform(value: number): string {
    if (isNaN(value)) return '-';

    return 'Rp. ' + value
      .toFixed(2)                                 // jadi 15000.00
      .replace('.', ',')                          // jadi 15000,00
      .replace(/\B(?=(\d{3})+(?!\d))/g, '.')      // jadi 15.000,00
  }

}
