import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { ConfigData } from "../data/ConfigData";
import { Article } from "../data/Article";

@Injectable()
export class ArticleService {
    _url: string = ConfigData.URL;
    constructor(private _http: Http) {

    }

    public getList() {
        return this._http.get(this._url + "article/getall");
    }
    public save(_article:Article) {
        return this._http.post(this._url + "article/add",_article);
    }
}