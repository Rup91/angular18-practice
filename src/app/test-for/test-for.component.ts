import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-test-for',
  standalone: true,
  imports: [NgFor],
  templateUrl: './test-for.component.html',
  styleUrl: './test-for.component.scss'
})
export class TestForComponent {

  numberLists: Array<Number>
  text: String;

  constructor() {
    this.text = '@for'
    this.numberLists = [10, 20, 30, 40, 50, 60, 70, 80]
  }
}
