import User from './user';

export interface Users {
  incomplete_results: boolean
  items: User[]
  total_count: number
}