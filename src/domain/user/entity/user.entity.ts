export abstract class User {
  protected id: number;
  protected email: string;

  constructor(id: number, email: string) {
    this.id = id;
    this.email = email;
  }

  abstract authenticate(password: string): Promise<boolean>;
  abstract updateProfile(profileData: object): Promise<void>;
}

export class Admin extends User {
  constructor(id: number, email: string) {
    super(id, email);
  }

  async authenticate(password: string): Promise<boolean> {
    return true;
  }
  async updateProfile(profileData: object): Promise<void> {
    Promise.resolve('Update Admin');
  }
}
export class RegularUser extends User {
  constructor(id: number, email: string) {
    super(id, email);
  }

  async authenticate(password: string): Promise<boolean> {
    return true;
  }
  async updateProfile(profileData: object): Promise<void> {
    Promise.resolve('Update RegularUser');
  }
}
