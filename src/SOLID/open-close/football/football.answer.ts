class Footballer {
  public name;
  public age;
  public role;
  constructor(name: string, age: number, role: PlayerRole) {
    this.name = name;
    this.age = age;
    this.role = role;
  }

  getRole(): string {
    return this.role.getRole();
  }
}

class PlayerRole {
  getRole() {}
}

class GoalkeeperRole extends PlayerRole {
  getRole() {
    return 'Goalkeeper';
  }
}
class ForwardRole extends PlayerRole {
  getRole() {
    return 'Forward';
  }
  getStatus() {
    return this.getRole() + ' RIP';
  }
}

const jo = new Footballer('Jo Guru', 32, new GoalkeeperRole());

const forward = new ForwardRole();
const sam = new Footballer('Sam karuntee', 31, forward);
console.log(forward.getStatus());
