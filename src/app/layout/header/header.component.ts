import { Component, OnInit ,Input, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() adder: any;
  @Output() addEvent = new EventEmitter();

  constructor() { }
  
  addPost() {
    this.addEvent.emit(this.adder); 
  }
  ngOnInit(): void {
  }

}
