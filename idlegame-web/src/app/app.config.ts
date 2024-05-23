import { ApplicationConfig } from "@angular/core";
import { provideRouter } from "@angular/router";

import { routes } from "./app.routes";
import { provideHttpClient } from '@angular/common/http';
import { graphqlProvider } from './graphql.provider';
import { provideStore } from '@ngrx/store';

import {UsersCollectionReducer} from "./shared/state/users/users.collection.reducer";
import {UsersReducer} from "./shared/state/users/users.reducer";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), provideHttpClient(), graphqlProvider,
    provideStore({
      users: UsersReducer,
      usersCollections: UsersCollectionReducer,
    })
],
};
