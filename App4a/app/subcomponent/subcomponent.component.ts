import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
//import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-subcomponent',
  templateUrl: './subcomponent.component.html',
  styleUrls: ['./subcomponent.component.css']
})
export class SubcomponentComponent implements OnInit 
{
  // Add input decorator as it will receve the data from parent
  @Input('parentData') public namep;
  
  // Create object of event class
  @Output() public MyEvent = new EventEmitter();
 
  // Action listener for button
  public SendEvent()
  {
    // Send the event to parent
    this.MyEvent.emit('Hello from child');
  }
  constructor() { }

  ngOnInit() {
  }

}
