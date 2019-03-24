import { Component, OnInit } from '@angular/core';
import { ArticleService } from './article.service';
import { Article } from '../data/Article';
import { Router } from '@angular/router';

@Component({
    selector: 'addarticle',
    templateUrl: './addarticle.component.html'
})
export class AddArticleComponent implements OnInit {
    Article: Article;
    constructor(private _articleService: ArticleService, private _router: Router) {
        this.Article = new Article();
    }

    public ngOnInit() {

    }

    addArticle(_Article: Article) {
        try {
            this._articleService.save(_Article).subscribe(done => {
                this._router.navigateByUrl("/");
            }, error => {
                console.log("Some Error", error);
            })
        } catch (error) {
            console.log(error);
        }
    }
}
