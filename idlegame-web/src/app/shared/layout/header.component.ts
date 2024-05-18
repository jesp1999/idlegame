import { Component } from '@angular/core';
import {ThemeToggleComponent} from "../theme-toggle/theme-toggle.component";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'idle-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [ThemeToggleComponent, MatIcon]
})
export class HeaderComponent {

  constructor() { }
}
