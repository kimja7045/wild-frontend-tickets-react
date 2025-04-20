export interface Ticket {
  id: number;
  title: string;
  description: string;
  status: 'open' | 'closed';
  toggle(): void;
}
