import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SorteoComponent } from './sorteo/sorteo.component';
import { SectionComponent } from './section.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SectionComponent, SorteoComponent],
  exports: [SectionComponent],
})
export class SectionModule {}
