import {Inject, Pipe, PipeTransform} from '@angular/core';
import {APP_BASE_HREF} from "@angular/common";

@Pipe({
  name: 'assets'
})
export class AssetsPipe implements PipeTransform {
  baseUrl: string;
  constructor(@Inject(APP_BASE_HREF) baseHref: string) {
    this.baseUrl = baseHref;
  }

  transform(value:string, ... args: any): string {

    return this.baseUrl + value;
  }

}
