import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCardComponent } from './card.component';



@NgModule({
  declarations: [AppCardComponent],
  imports: [
    CommonModule
  ],
  exports: [AppCardComponent]
})
export class AppCardModule { }
