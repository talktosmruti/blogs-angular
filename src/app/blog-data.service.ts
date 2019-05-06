import { Injectable } from '@angular/core';
import { BlogPost } from './blog-post.model';

@Injectable({
  providedIn: 'root'
})
export class BlogDataService {

  constructor() { }

  getData(): BlogPost[][]{
    return [
      [
        {title: "title1", summary: "summary1"},
        {title: "title2", summary: "summary2"},
        {title: "title3", summary: "summary3"},
        {title: "title4", summary: "Lorem ipsum purus habitant mi adipiscing nam primis nostra, urna himenaeos mi sem class cursus sociosqu eu lacus, tempor senectus quam arcu lacus a eu vel quam pulvinar ultrices maecenas netus sagittis sapien."+

        "Felis taciti dolor curae lorem consectetur viverra lorem vehicula pulvinar aptent amet, at hendrerit platea ornare vulputate vitae vestibulum etiam non purus et purus ac commodo mi scelerisque duis."+
        
        "Eget ac consectetur facilisis curae litora scelerisque gravida, malesuada porta augue himenaeos pulvinar pretium taciti etiam, justo mauris turpis facilisis pharetra dapibus."+
        
        "Praesent fusce sit a gravida ipsum nunc quisque, tempus aliquam amet aenean nunc torquent ac facilisis, varius tristique feugiat congue nisl metus fringilla nostra proin rutrum placerat malesuada hac ipsum."
        }
      ],
      [
      {title: "title4", summary: "summary4"},
      {title: "title5", summary: "summary5"},
      {title: "title6", summary: "summary6"},
      {title: "title7", summary: "Lorem ipsum purus habitant mi adipiscing nam primis nostra, urna himenaeos mi sem class cursus sociosqu eu lacus, tempor senectus quam arcu lacus a eu vel quam pulvinar ultrices maecenas netus sagittis sapien."+

      "Felis taciti dolor curae lorem consectetur viverra lorem vehicula pulvinar aptent amet, at hendrerit platea ornare vulputate vitae vestibulum etiam non purus et purus ac commodo mi scelerisque duis."+
      
      "Eget ac consectetur facilisis curae litora scelerisque gravida, malesuada porta augue himenaeos pulvinar pretium taciti etiam, justo mauris turpis facilisis pharetra dapibus."+
      
      "Praesent fusce sit a gravida ipsum nunc quisque, tempus aliquam amet aenean nunc torquent ac facilisis, varius tristique feugiat congue nisl metus fringilla nostra proin rutrum placerat malesuada hac ipsum."
      }
    ]
  ];
  }
}
