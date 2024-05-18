import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'idle-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
}
