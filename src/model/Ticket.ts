import { TicketComment } from './TicketComment';

export interface Ticket {
  id: number;
  title: string;
  description: string;
  status: 'open' | 'closed';
  comments: TicketComment[];
}

export interface TicketActions {
  addTicket({
    title,
    description,
  }: {
    title: string;
    description: string;
  }): void;

  toggleTicketStatus(id: number): void;
}
