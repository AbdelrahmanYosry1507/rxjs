import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './featuers/products/product/product.component';
import { AboutUsComponent } from './about-us/about-us.component';
const routes: Routes = [
  {
    path: '', component: ProductComponent
  },
  {
    path:'aboutus' ,component:AboutUsComponent
  }
  // {
  //   path: '',
  //   loadChildren: () => import('./khloud/khloud.module').then(m => m.KhloudModule)
  // }
  // {
  //   path: 'dd',
  //   loadChildren: () => import('./khloud/khloud.module').then(m => m.KhloudModule)
  // }
  // {
  //   path: 'dd',
  //   loadChildren: () => import('./khloud/khloud.module').then(m => m.KhloudModule)
  // }
  // {
  //   path: 'ee',
  //   loadChildren: () => import('./khloud/khloud.module').then(m => m.KhloudModule)
  // }
  // {
  //   path: 'ww',
  //   loadChildren: () => import('./khloud/khloud.module').then(m => m.KhloudModule)
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
