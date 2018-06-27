import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy/lazy.component';
import { RouterModule } from '@angular/router';
import { LAZY_ROUTES } from './lazy.routing';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LAZY_ROUTES)
  ],
  declarations: [LazyComponent]
})
export class LazyModule { }
