import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { ContentComponent } from './content/content.component';

const routes: Routes = [
  {path: ' ', component: AppComponent},
  {path: 'blog-id/:', component: ContentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
