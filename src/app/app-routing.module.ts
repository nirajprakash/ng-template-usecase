import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';

const routes: Routes = [
  {
    path:"",
    loadComponent:() => import("./home/home.component").then((m)=> m.HomeComponent),
  },

  {
    path: "",
    component: ContainerComponent,
    children: [
      {
        path:"reusable",
        loadChildren:() => import("./reusable/reusable.module").then((m)=> m.ReusableModule)
      },
    
      {
        path:"dynamic",
        loadChildren:() => import("./dynamic/dynamic.module").then((m)=> m.DynamicModule)
      },
    
      {
        path:"conditional",
        loadChildren:() => import("./conditional/conditional.module").then((m)=> m.ConditionalModule)
      },
    
      {
        path:"customized",
        loadChildren:() => import("./customized/customized.module").then((m)=> m.CustomizedModule)
      }
    
    ]
  }

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
