import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { BlogPost } from '../blog-post.model';
import { AppendPipe } from '../append.pipe';
import { TruncatePipe } from '../truncate.pipe';


@Component({
  selector: 'app-blog-post-tile',
  templateUrl: './blog-post-tile.component.html',
  styleUrls: ['./blog-post-tile.component.scss'],
})
export class BlogPostTileComponent implements OnInit {

  @Input() post: BlogPost;
  fullSummary: string;
  constructor(private append: AppendPipe, private truncate: TruncatePipe) { }

  ngOnInit() {
      this.fullSummary = this.post.summary;
      this.post.summary = this.truncate.transform(this.post.summary, 30);
  }

  showFull(){
    this.post.summary= this.fullSummary;
  }

  markFav(){
    this.post.isFav = !this.post.isFav;
  }

}
