import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestForComponent } from './test-for/test-for.component';
import { TestIfComponent } from './test-if/test-if.component';
import { TestEmptyComponent } from './test-empty/test-empty.component';
import { TestSwitchComponent } from './test-switch/test-switch.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TestForComponent, TestIfComponent, TestEmptyComponent,  TestSwitchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'todo-app';
}
