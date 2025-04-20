import { useMemo, useState } from 'react';
import { Ticket, TicketActions } from '../../model/Ticket';

export const useTickets = (): {
  tickets: Ticket[];
  ticketActions: TicketActions;
} => {
  const [tickets, setTickets] = useState<Ticket[]>([]);

  const ticketActions = useMemo<TicketActions>(
    () => ({
      addTicket({
        title,
        description,
      }: {
        title: string;
        description: string;
      }) {
        setTickets((prevTickets) => {
          const id = Math.max(...prevTickets.map((ticket) => ticket.id), 0) + 1;

          const ticket: Ticket = {
            id,
            title,
            description,
            status: 'open',
            comments: [],
          };
          return [...prevTickets, ticket];
        });
      },

      toggleTicketStatus(id: number) {
        setTickets((prevTickets) =>
          prevTickets.map((ticket) =>
            ticket.id === id
              ? {
                  ...ticket,
                  status: ticket.status === 'open' ? 'closed' : 'open',
                }
              : ticket,
          ),
        );
      },
    }),
    [setTickets],
  );

  return { tickets, ticketActions };
};
