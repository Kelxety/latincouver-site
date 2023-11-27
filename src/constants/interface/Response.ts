export interface ApiResponse<T> {
  count: number;
  next: any;
  previous: any;
  results: T[];
}
