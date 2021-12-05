import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  adder = false;
  addPost() {
    this.adder = !this.adder;
  }
  ngOnInit(): void {

  }
}
