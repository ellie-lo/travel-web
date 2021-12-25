import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterdata'
})
export class FilterdataPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value);
    console.log(args);
    if (value == null) {
      return []
    }
    return value.filter((v: any) => {
      // console.log(v.Name);
      // return v.Name.indexOf(args) !== -1
      return v.Name.match(args)
    });
  }

}
