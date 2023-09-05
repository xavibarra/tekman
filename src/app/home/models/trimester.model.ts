export interface Trimester {
  id: number;
  name: string;
  total: number;
  done: number;
}

export interface Session {
  id: number;
  name: string;
  number: number;
  done?: boolean;
}
