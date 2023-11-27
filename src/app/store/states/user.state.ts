import { EntityState } from '@ngrx/entity';
import { User } from 'src/app/models/user.interface';

export interface UserState extends EntityState<User> {
  selectedUserId: number | null;
}