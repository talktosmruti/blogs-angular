import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { BlogPost } from '../blog-post.model';
import { BlogPostTileComponent } from '../blog-post-tile/blog-post-tile.component';
import { BlogDataService } from '../blog-data.service';

@Component({
  selector: 'app-blog-post-list',
  templateUrl: './blog-post-list.component.html',
  styleUrls: ['./blog-post-list.component.scss']
})
export class BlogPostListComponent implements OnInit {

  blogPosts: BlogPost[][]
  currentPage: number;
  @ViewChildren('tile') blogTiles: QueryList<BlogPostTileComponent>;
  constructor(private blogService: BlogDataService) { }

  ngOnInit() {
    this.currentPage = 0;
    this.blogPosts= this.blogService.getData()
    
}

  updatePage(newPage:number){
    console.log('event received'+newPage)
    this.currentPage = newPage;
  }

  expandAll(){
    this.blogTiles.forEach(element => {
      element.showFull();
    });
  }

  markAllfav(){
    this.blogPosts[this.currentPage].forEach(e =>{
      e.isFav =true;
    })
  }

}
