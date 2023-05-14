import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomizedComponent } from './customized.component';

const routes: Routes = [

  {
    path: "",
    component: CustomizedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomizedRoutingModule { }
