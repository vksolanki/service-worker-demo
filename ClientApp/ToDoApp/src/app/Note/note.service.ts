import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { ConfigData } from "../data/ConfigData";

@Injectable()
export class NoteService {
    _url: string = ConfigData.URL;
    constructor(private _http: Http) {

    }

    public getList() {
        return this._http.get(this._url + "note/getall");
    }
}