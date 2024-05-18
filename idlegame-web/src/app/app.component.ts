import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterOutlet} from "@angular/router";
import {GameComponent} from "./features/game/game.component";
import {LoginComponent} from "./features/login/login.component";
import {HeaderComponent} from "./shared/layout/header.component";
import {FooterComponent} from "./shared/layout/footer.component";

@Component({
  selector: 'idle-root',
  standalone: true,
  imports: [GameComponent, CommonModule, RouterOutlet, LoginComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
