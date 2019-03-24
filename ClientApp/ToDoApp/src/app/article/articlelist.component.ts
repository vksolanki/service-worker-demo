import { Component, OnInit } from '@angular/core';
import { ArticleService } from './article.service';
import { Article } from '../data/Article';

@Component({
    selector: 'articlelist',
    templateUrl: './Articlelist.component.html'
})
export class ArticleListComponent implements OnInit {
    ArticleList: Article[];
    constructor(private _ArticleService: ArticleService) {

    }

    public ngOnInit() {
        this._ArticleService.getList().subscribe(data => {
            this.ArticleList = <Article[]>data.json();
        });
    }

    addArticle() {

    }
}
