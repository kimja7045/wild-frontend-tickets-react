import { TicketComment } from './TicketComment';

export interface Ticket {
  id: number;
  title: string;
  description: string;
  status: 'open' | 'closed';
  comments: TicketComment[];
}
