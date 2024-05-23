import { Injectable } from '@angular/core';
import { Apollo, gql, QueryRef } from 'apollo-angular';
import {Store} from "@ngrx/store";
import {UsersApiActions} from "../shared/state/users/users.actions";

export interface User {
  username: string;
  email: string;
}

export interface UsersResult {
  count: number;
  users: User[];
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private usersQuery: QueryRef<{users: UsersResult}, { offset: number}>;
  private findUserQuery: QueryRef<{ user: User }, {username: string}>;

  constructor(private apollo: Apollo, private store:Store) {
    this.usersQuery = this.apollo.watchQuery({
      query: gql`query users($offset: Int!) {
        users(offset: $offset) {
          count
          users {
            username
            email
          }
        }
      }`
    });

    this.findUserQuery = this.apollo.watchQuery({
      query: gql`query character($name: String!) {
        user(username: $name) {
          username
          email
        }
      }`
    });
  }

  async getUsers(offset: number): Promise<UsersResult> {
    const result = await this.usersQuery.refetch({ offset });
    this.store.dispatch(UsersApiActions.retrievedUsersList({users: result.data.users.users}));
    return result.data.users;
  }

  async findUser(username: string): Promise<User> {
    const result = await this.findUserQuery.refetch({ username });
    return result.data.user;
  }
}
