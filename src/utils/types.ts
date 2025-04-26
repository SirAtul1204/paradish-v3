export type Nullable<T> = T | null;

export class RouteError {
  public status: number;
  public message: string;
  constructor(status: number, message: string) {
    this.status = status;
    this.message = message;
  }
}

export class RedirectError {
  public path: string;
  constructor(path: string) {
    this.path = path;
  }
}
