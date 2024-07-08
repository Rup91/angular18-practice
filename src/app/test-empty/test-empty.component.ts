import { Component } from '@angular/core';

@Component({
  selector: 'app-test-empty',
  standalone: true,
  imports: [],
  templateUrl: './test-empty.component.html',
  styleUrl: './test-empty.component.scss'
})
export class TestEmptyComponent {

    txt: String;
    countryLists: Array<any> = [];

    constructor() {
      this.txt = '@empty';
      this.countryLists = [];
    //   setTimeout(() => {
    //     this.countryLists = [
    //       {
    //         id: '#1',
    //         name: 'India',
    //         capital: 'New Delhi'

    //       },
    //       {
    //         id: '#2',
    //         name: 'Holland',
    //         capital: 'Amsterdam'

    //       },
    //       {
    //         id: '#3',
    //         name: 'UK',
    //         capital: 'London'

    //       }
    //     ]
    // }, 3000)
    }


}
