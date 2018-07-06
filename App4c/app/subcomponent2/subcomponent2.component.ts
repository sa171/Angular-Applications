import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-subcomponent2',
  templateUrl: './subcomponent2.component.html',
  styleUrls: ['./subcomponent2.component.css']
})
export class Subcomponent2Component implements OnInit {

  public batches = [];

  // Add the instance of service in side constructor
  constructor(private _batchservice:BooksService)
  {
    
  }

  // call the service method once in ngOnInit method
  ngOnInit() 
  {
    this.batches = this._batchservice.GetBatchDetails();
  }


}
