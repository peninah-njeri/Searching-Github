import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output()query = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  formSubmit(value){
    this.query.emit(value.username);
  }

}
