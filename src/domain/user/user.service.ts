import { Injectable } from '@nestjs/common';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
  async authenticate(user: User, password: string): Promise<boolean> {
    return user.authenticate(password);
  }
  async updateProfile(user: User, profileDto: object): Promise<void> {
    user.updateProfile(profileDto);
  }
}
