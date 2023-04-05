import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent {
  @Input() title: string = "esfjesjfs"
  @Input() description?: String
  public array: string[] = ['Arbid','Big','Art']

  @Output() changed: EventEmitter<string> = new EventEmitter()

  public onChange(event: any) {
    console.log('onChange',event)
    this.changed.emit(event.target.value)
  }
}


