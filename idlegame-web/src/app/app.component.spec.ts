import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {ApolloTestingModule} from "apollo-angular/testing";
import {StoreModule} from "@ngrx/store";

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, ApolloTestingModule, StoreModule.forRoot()],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
