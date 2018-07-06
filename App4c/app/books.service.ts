import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  GetBatchDetails()
{
  return [
    {"Name":"Thinking in c++", "Price":9000, "Details":"4 Months"},
    {"Name":"Java programming", "Price":7500, "Details":"4 Months"},
    {"Name":"WEB", "Price":2500, "Detials":"3 Months"},
    {"Name":"Data Structures", "Price":4000, "Details":"3 Months"},
        ];
}

}
