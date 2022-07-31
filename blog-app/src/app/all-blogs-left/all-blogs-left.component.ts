import { Component, OnInit } from '@angular/core';
import { BlogPostsDataService } from '../blog-posts-data.service';

@Component({
  selector: 'app-all-blogs-left',
  templateUrl: './all-blogs-left.component.html',
  styleUrls: ['./all-blogs-left.component.css']
})
export class AllBlogsLeftComponent implements OnInit {

  public blog_data:any = [];
  public p: number = 1; // for pagination
  constructor(private _blogPostDataService: BlogPostsDataService) { }

  ngOnInit(): void {
    this._blogPostDataService.getBlogPostsData()
      .subscribe(data => this.blog_data = data);
  
   }

   funcNotImplemented(data:any){
    alert(" functionality not implemented, the id is : " + data.id);
    //return data.id;
    //this.id = data.id;
   }

}
