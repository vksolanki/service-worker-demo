import { Component, Input, OnInit } from '@angular/core';
import { NoteData } from '../data/NoteData';

@Component({
    selector: 'noteinfo',
    templateUrl: './noteinfo.component.html'
})
export class NoteInfoComponent implements OnInit{
    @Input() Note: NoteData;
    ngOnInit()
    {
        console.log(this.Note);
    }
}
