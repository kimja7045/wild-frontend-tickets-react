import { describe, expect, it } from 'vitest';
import { Ticket } from '../../model/Ticket';
import { ticketReducer } from './ticketReducer';

describe('ticket reducer', () => {
  describe('addTicket', () => {
    it('adds a Ticket', () => {
      const prevTickets: Ticket[] = [];
      const newTicket = {
        title: 'test',
        description: 'test',
      };

      const nextTickets = ticketReducer(prevTickets, {
        type: 'ADD_TICKET',
        payload: newTicket,
      });

      expect(nextTickets).toEqual([
        { ...newTicket, id: 1, status: 'open', comments: [] },
      ]);
    });
  });

  describe('toggleTicketStatus', () => {
    it('toggles ticket status', () => {
      const prevTickets: Ticket[] = [
        {
          id: 1,
          title: 'test',
          description: 'test',
          status: 'open',
          comments: [],
        },
      ];

      const nextTickets = ticketReducer(prevTickets, {
        type: 'TOGGLE_TICKET',
        id: 1,
      });

      expect(nextTickets).toEqual([{ ...prevTickets[0], status: 'closed' }]);
    });
  });

  describe('addComment', () => {
    it('adds a Comment', () => {
      const prevTickets: Ticket[] = [
        {
          id: 1,
          title: 'title',
          description: 'description',
          status: 'open',
          comments: [],
        },
      ];

      const nextTickets = ticketReducer(prevTickets, {
        type: 'ADD_COMMENT',
        payload: { ticketId: 1, comment: 'comment' },
      });

      expect(nextTickets).toEqual([
        { ...prevTickets[0], comments: [{ id: 1, content: 'comment' }] },
      ]);
    });
  });
});
