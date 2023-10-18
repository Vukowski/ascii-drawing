import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mk-draw-draw',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.scss']
})
export class DrawComponent {

  private drawingTable: number[];

  constructor(){
    this.drawingTable = [];
  }

}
