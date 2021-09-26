export class User {
  readonly id: string | null;
  name: string;
  email: string;
  password: string;
  avatar: string;
  hasNetflix: boolean;
  hasAmazon: boolean;
  hasDisney: boolean;

  constructor(
    id?: string,
    name?: string,
    email?: string,
    password?: string,
    avatar?: string,
    hasNetflix?: boolean,
    hasAmazon?: boolean,
    hasDisney?: boolean,
  ) {
    this.id = id || null;
    this.name = name || '';
    this.email = email || '';
    this.password = password || '';
    this.avatar = avatar || '';
    this.hasNetflix = hasNetflix || false;
    this.hasAmazon = hasAmazon || false;
    this.hasDisney = hasDisney || false;
  }
}
