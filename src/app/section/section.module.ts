import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { SorteoComponent } from './sorteo/sorteo.component';
import { SectionComponent } from './section.component';

@NgModule({
  imports: [BrowserModule, CommonModule, FormsModule],
  declarations: [SectionComponent, SorteoComponent],
  exports: [SectionComponent],
})
export class SectionModule {}
