import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"",
    loadComponent:() => import("./home/home.component").then((m)=> m.HomeComponent),
  },

  {
    path:"reusable",
    loadChildren:() => import("./reusable/reusable.module").then((m)=> m.ReusableModule)
  },

  {
    path:"dynamic",
    loadChildren:() => import("./dynamic/dynamic.module").then((m)=> m.DynamicModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
