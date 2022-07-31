import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IBlogData } from './blog-posts-data-interface';

@Injectable({
  providedIn: 'root'
})
export class BlogPostsDataService {

  constructor(private http: HttpClient) { }
  private _url: string = "/assets/blog-posts.json";

  getBlogPostsData(){

    return this.http.get<IBlogData[]>(this._url);
  
  }
}
