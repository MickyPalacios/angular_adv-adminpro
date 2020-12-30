
import { Component, OnInit } from '@angular/core';
//import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})

export class Grafica1Component implements OnInit {

  public labels1: string[] = ['Pan', 'Refresco', 'Tacos'];
  public data1 = [ [20, 30, 40] ];

  constructor() { }

  ngOnInit(): void {
  }

  

}
