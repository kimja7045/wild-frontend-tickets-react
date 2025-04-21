import { useReducer } from 'react';
import { TicketForm } from './ticket/TicketForm';
import { TicketList } from './ticket/TicketList';
import { ticketReducer } from './ticket/lib/ticketReducer';

export const Main = () => {
  const [tickets, dispatch] = useReducer(ticketReducer, []);

  return (
    <main>
      <TicketList tickets={tickets} dispatch={dispatch} />
      <TicketForm dispatch={dispatch} />
    </main>
  );
};
