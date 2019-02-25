import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter2'
  })
export class FilterPipeCategory implements PipeTransform {
    transform(items: any[], searchText: string): any[] {
       var result;
      
        if(!items) return [];
        if(!searchText) return items;
        if(searchText=="Todas"){
            result =items;
        }
        if(searchText=="Animales"){
            result =items.filter(op=>{if(op.Categoria!=null){return op.Categoria.includes("1")}});
        }
        if(searchText=="Autos"){
            result =items.filter(op=>{if(op.Categoria!=null){return op.Categoria.includes("2")}});
        } 
        if(searchText=="Naturaleza"){
            result =items.filter(op=>{if(op.Categoria!=null){return op.Categoria.includes("3")}});
        }
        if(searchText=="Musica"){
            result =items.filter(op=>{if(op.Categoria!=null){return op.Categoria.includes("4")}});
        }
        if(searchText=="Pistas"){
            result =items.filter(op=>{if(op.Categoria!=null){return op.Categoria.includes("5")}});
        }
        if(searchText=="Pop"){
            result =items.filter(op=>{if(op.Categoria!=null){return op.Categoria.includes("6")}});
        }
        if(searchText=="Tutoriales"){
            result =items.filter(op=>{if(op.Categoria!=null){return op.Categoria.includes("9")}});
        }
     
       return result;
     }
  }