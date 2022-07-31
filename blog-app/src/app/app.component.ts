import { Component } from '@angular/core'; 

import { AllBlogsComponent } from './all-blogs/all-blogs.component';
import { AllBlogsLeftComponent } from './all-blogs-left/all-blogs-left.component';
import { FooterComponent } from './footer/footer.component';
  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'The Blog App';
  public blog_id:number = 0;

  onBlogClicking(id: number){
    this.blog_id = id;
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
