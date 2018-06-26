import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name : 'nationalcode'
})
export class NationalCodePipe implements PipeTransform{
    transform(value : number, code : any='91', countryName : any): any{
        return "+" + code + " - " + value;
    }
}
