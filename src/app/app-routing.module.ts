import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NateComponent } from './nate/nate.component';
import { PhotoComponent } from './photo/photo.component';
import { Component } from '@angular/core/src/metadata/directives';

const routes: Routes = [
{
  path: '',
  component: HomeComponent
},
{
  path: 'about',
  component: AboutComponent
},
{
  path: 'nate',
  component: NateComponent
},
{
  path: 'photo',
  component: PhotoComponent
}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
