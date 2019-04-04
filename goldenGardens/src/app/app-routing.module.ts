import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductIndexComponent } from './product-index/product-index.component';
import { AboutComponent } from './about/about.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:"products",component:ProductIndexComponent},
  {path: "", component: IndexComponent},
  {path: 'about', component: AboutComponent },
  {path:"login",component:LoginComponent}
];

@NgModule({
  declarations: [
    AboutComponent,
  ],
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
