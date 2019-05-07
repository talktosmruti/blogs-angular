import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogPostListComponent } from './blog-post-list/blog-post-list.component';
import { BlogPostTileComponent } from './blog-post-tile/blog-post-tile.component';
import { TruncatePipe } from './truncate.pipe';
import { AppendPipe } from './append.pipe';
import { PaginatorComponent } from './paginator/paginator.component';
import { BlogDataService } from './blog-data.service';
import { HighlighterDirective } from './highlighter.directive';
import { CardTileComponent } from './card-tile/card-tile.component';
import { ShellComponent } from './shell/shell.component'

@NgModule({
  declarations: [
    AppComponent,
    BlogPostListComponent,
    BlogPostTileComponent,
    TruncatePipe,
    AppendPipe,
    PaginatorComponent,
    HighlighterDirective,
    CardTileComponent,
    ShellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AppendPipe, TruncatePipe, BlogDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
