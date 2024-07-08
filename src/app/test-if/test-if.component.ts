import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-test-if',
  standalone: true,
  imports: [NgIf],
  templateUrl: './test-if.component.html',
  styleUrl: './test-if.component.scss'
})
export class TestIfComponent {

    btnTxt: String;
    isToggle:  Boolean;
    isShow: Boolean;
    buttonText:  String;
    txt: String;

    constructor() {
      this.btnTxt = 'Show';
      this.isToggle = true;
      this.isShow = true;
      this.buttonText = 'Show';
      this.txt = '@If..@else'
    }

    showHide() {
      this.isToggle = !this.isToggle;
      this.btnTxt = this.isToggle ? 'Hide' : 'Show'
    }

    toggle() {
      this.isShow = !this.isShow;
      this.buttonText = this.isShow ? 'Hide' : 'Show';
    }



}
