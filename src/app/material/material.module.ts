import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatToolbarModule,
  ],
  exports: [   
    FlexLayoutModule,
    MatToolbarModule,
  ] ,
  declarations: []
})
export class MaterialModule { }