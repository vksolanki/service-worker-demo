import { Component, Input, OnInit } from '@angular/core';
import { NoteData } from '../data/NoteData';
import { NoteService } from './note.service';

@Component({
    selector: 'notelist',
    templateUrl: './notelist.component.html'
})
export class NoteListComponent implements OnInit {
    NoteList: NoteData[];

    constructor(private _NoteService: NoteService) {

    }

    public ngOnInit() {
        this._NoteService.getList().subscribe(data => {
            this.NoteList = <NoteData[]>data.json();
        });
    }
}
