import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawComponent } from './draw/draw.component';
import { SelectionComponent } from './selection/selection.component';

@Component({
  selector: 'mk-draw-root',
  standalone: true,
  imports: [CommonModule, DrawComponent, SelectionComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ascii-drawing';

  selection: number;

  constructor(){
    this.selection = 0;
  }

  @Input()
  onDrawSelection(drawSelectionEvent: any){
    this.selection = drawSelectionEvent.drawingSelection;
  }

}
