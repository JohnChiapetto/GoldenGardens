import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductIndexComponent } from './product-index/product-index.component';
import { AboutComponent } from './about/about.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path:"products", component:ProductIndexComponent },
  { path: 'about',   component: AboutComponent },
  { path:"login",    component:LoginComponent },
  { path: "",        component: IndexComponent }
];

@NgModule({
  declarations: [],
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
