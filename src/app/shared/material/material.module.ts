import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';




@NgModule({
  imports: [
    CommonModule
  ],exports: [
    MatSidenavModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class MaterialModule { }
