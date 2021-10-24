export class User {
  readonly id: string | null;
  name: string;
  email: string;
  password: string;
  avatar: string;
  hasNetflix: boolean;
  hasAmazon: boolean;
  hasDisney: boolean;

  constructor(options: {
    id?: string,
    name?: string,
    email?: string,
    password?: string,
    avatar?: string,
    hasNetflix?: boolean,
    hasAmazon?: boolean,
    hasDisney?: boolean,
  } = {}) {
    this.id = options.id || null;
    this.name = options.name || '';
    this.email = options.email || '';
    this.password = options.password || '';
    this.avatar = options.avatar || '';
    this.hasNetflix = options.hasNetflix || false;
    this.hasAmazon = options.hasAmazon || false;
    this.hasDisney = options.hasDisney || false;
  }
}
