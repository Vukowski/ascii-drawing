import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'mk-draw-selection',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent {

  selection = 0;
  

  form = new FormGroup({
    drawingSelection: new FormControl(0),
  });

  onSubmit(value: any){
    this.selection = value;
    console.log(this.selection);
  }

}
