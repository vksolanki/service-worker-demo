import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../data/Article';

@Component({
    selector: 'articleinfo',
    templateUrl: './articleinfo.component.html'
})
export class ArticleInfoComponent implements OnInit{
    @Input() Article: Article;
    ngOnInit()
    {
         console.log(this.Article);
    }
}
