import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {path: "", component: IndexComponent},
  {path: 'about', component: AboutComponent }
];

@NgModule({
  declarations: [
    AboutComponent,
  ],
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
