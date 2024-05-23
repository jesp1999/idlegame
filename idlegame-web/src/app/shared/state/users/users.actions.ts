import { createActionGroup, props} from "@ngrx/store";
import { User } from "../../models/users.model";

export const UsersActions = createActionGroup({
  source: 'Users',
  events: {
    'Add User': props<{ username: User }>(),
    'Remove User': props<{ username: User }>(),
    'Set User': props<{ username: User[] }>(),
  },
});

export const UsersApiActions = createActionGroup({
  source: 'Users API',
  events: {
    'Retrieved Users List': props<{ users: ReadonlyArray<User> }>(),
  },
});

