import { 
    Pipe, 
    PipeTransform 
 } from '@angular/core';  
 
 @Pipe ({ 
    name: 'subword' 
 }) 
 
 export class SubWordPipe implements PipeTransform { 
    transform(value: string, numofword: number): string { 
        var str2 = value.replace(/(([^\s]+\s\s*){numofword})(.*)/,"$1…");
        return str2;
    } 
 } 