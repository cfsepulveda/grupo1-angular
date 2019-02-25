import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
  })
export class FilterPipe implements PipeTransform {
    transform(items: any[], searchText: string): any[] {
        var result;
        if(!items) return [];
        if(!searchText) return items;
        if(searchText=="imagen"){
            result =items.filter(op=>{return op.url.includes(".jpg")});
        }
        if(searchText=="audio"){
            result =items.filter(op=>{return op.url.includes(".mp3")});
        } 
        if(searchText=="video"){
           result =items.filter(op=>{return op.url.includes(".mp4")});
        }
        if(searchText=="reset"){
            result =items;
        }       
      console.log(result);
       return result;
     }
  }