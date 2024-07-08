import { Component } from '@angular/core';

@Component({
  selector: 'app-test-switch',
  standalone: true,
  imports: [],
  templateUrl: './test-switch.component.html',
  styleUrl: './test-switch.component.scss'
})
export class TestSwitchComponent {

      type: String = 'yellow-circle'


      show(type: String) {
        this.type = type;
      }
}
