import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./modules/module1/module1.module').then(m => m.Module1Module) },
  { path: '', loadChildren: () => import('./modules/css-animations/css-animations.module').then(m => m.CssAnimationsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
