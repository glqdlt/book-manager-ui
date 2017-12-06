import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-write-book',
  templateUrl: './write-book.component.html',
  styleUrls: ['./write-book.component.css']
})
export class WriteBookComponent implements OnInit {

  FORM_DATA : object[] =[
    {type: 'text', label : 'subject'},
    {type: 'text', label : 'author'},
    {type: 'number', label : 'book_type'},
    {type: 'text', label : 'note'},
    {type: 'text', label : 'path'},
    {type: 'text', label : 'server_name'},
    {type: 'text', label : 'reg_id'},
    {type: 'text', label : 'future_date'},
    {type: 'text', label : 'reg_date'},
    {type: 'text', label : 'update_date'},
    {type: 'text', label : 'read_status'},
    {type: 'text', label : 'review_url'}
    ];

  constructor() { }

  ngOnInit() {
  }

}
