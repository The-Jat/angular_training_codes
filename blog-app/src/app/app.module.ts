import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogPostsDataService } from './blog-posts-data.service';
import { NavbarComponent } from './navbar/navbar.component';
import { AllBlogsComponent } from './all-blogs/all-blogs.component';
import { AllBlogsLeftComponent } from './all-blogs-left/all-blogs-left.component';
import { FooterComponent } from './footer/footer.component';
import { BlogCategoriesComponent } from './blog-categories/blog-categories.component';
import { HttpClientModule } from '@angular/common/http';

//working on pagination thing
import {NgxPaginationModule} from 'ngx-pagination';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { ContentComponent } from './content/content.component'; // <-- import the module


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AllBlogsComponent,
    AllBlogsLeftComponent,
    FooterComponent,
    BlogCategoriesComponent,
    BlogViewComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule// the pagination thing
  ],
  providers: [BlogPostsDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
