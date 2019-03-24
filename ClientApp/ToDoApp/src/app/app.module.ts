import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NoteInfoComponent } from './Note/noteinfo.component';
import { NoteListComponent } from './Note/notelist.component';
import { NoteService } from './Note/note.service';
import { ArticleInfoComponent } from './article/articleinfo.component';
import { ArticleListComponent } from './article/articlelist.component';
import { ArticleService } from './article/article.service';
import { SubWordPipe } from './custome-pipe/subword.pipe';
import { AddArticleComponent } from './article/addarticle.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes = [
  { path: '', component: ArticleListComponent },
  { path: 'addarticle', component: AddArticleComponent },

];

@NgModule({
  declarations: [
    AppComponent, NoteInfoComponent, NoteListComponent
    , ArticleInfoComponent, ArticleListComponent, SubWordPipe
    , AddArticleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [NoteService, ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
