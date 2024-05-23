import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {Observable, Subject, takeUntil, tap} from "rxjs";
import {Store} from "@ngrx/store";
import {selectUsers} from "../../shared/state/users/users.selector";
import {User} from "../../shared/models/users.model";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'idle-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  destroyed:Subject<void> = new Subject<void>();
  users$: Observable<readonly User[]> = this.store.select(selectUsers)
    .pipe(takeUntil(this.destroyed), tap((users) => {
      return users;
    }));
  offset = 0;

  constructor(private usersService: UsersService,
              private store: Store) {}

  ngOnInit() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const unusedUser = this.usersService.getUsers(this.offset);
  }
}
