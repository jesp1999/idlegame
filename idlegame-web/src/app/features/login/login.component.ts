import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {CharactersService} from "../../services/characters.service";
import {Character} from "../../shared/models/characters.model";
import {Observable, Subject, takeUntil, tap} from "rxjs";
import {Store} from "@ngrx/store";
import {selectCharacters} from "../../shared/state/characters.selector";

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
  characters$: Observable<readonly Character[]> = this.store.select(selectCharacters)
    .pipe(takeUntil(this.destroyed), tap((characters) => {
      return characters;}));
  offset = 0;

  constructor(private charactersService: CharactersService, private store: Store) {}

  ngOnInit() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const unused = this.charactersService.getCharacters(this.offset);
  }
}
