import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CssAnimationsRoutingModule } from './css-animations-routing.module';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    CssAnimationsRoutingModule
  ]
})
export class CssAnimationsModule { }
