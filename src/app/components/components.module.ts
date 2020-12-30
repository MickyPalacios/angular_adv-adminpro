import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncrmentadorComponent } from './incrmentador/incrmentador.component';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { DonaComponent } from './dona/dona.component';

@NgModule({
  declarations: [IncrmentadorComponent, DonaComponent],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule
  ],
  exports: [
    IncrmentadorComponent,
    DonaComponent    
  ]
})
export class ComponentsModule { }
