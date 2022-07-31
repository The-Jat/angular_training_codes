import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  public blog_id = 0;
  constructor() { }

  ngOnInit(): void {
  }
  showAllBlogs():boolean{
    console.log(this.blog_id);
    if(this.blog_id === 0){
      return true;
    }else{
      return false;
    }
  }
}
