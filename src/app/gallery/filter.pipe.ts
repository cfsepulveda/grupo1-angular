import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
  })
export class FilterPipe implements PipeTransform {
    transform(items: any[], searchText: string): any[] {
        var result;
        if(!items) return [];
        if(!searchText) return items;
        if(searchText=="Imagen"){
            result =items.filter(op=>{return op.url.includes(".jpg")+op.url.includes(".png")});
        }
        if(searchText=="Audio"){
            result =items.filter(op=>{return op.url.includes(".mp3")});
        } 
        if(searchText=="Video"){
           result =items.filter(op=>{return op.url.includes(".mp4")});
        }
        if(searchText=="Todo"){
            result =items;
        }       
      console.log(result);
       return result;
     }
  }