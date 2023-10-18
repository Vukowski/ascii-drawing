import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  @Output()
  drawSelectionEvent: EventEmitter<number> = new EventEmitter();

  selection = 0;


  form = new FormGroup({
    drawingSelection: new FormControl(0),
  });

  onSubmit(value: any) {
    this.selection = value;
    this.drawSelectionEvent.emit(this.selection);
  }

}
