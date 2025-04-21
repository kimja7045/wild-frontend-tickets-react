import { useTickets } from './ticket/hook/useTickets';
import { TicketForm } from './ticket/TicketForm';

export const Main = () => {
  const { tickets, ticketActions } = useTickets();

  return (
    <main>
      <div>ticketList</div>
      <TicketForm addTicket={ticketActions.addTicket} />
    </main>
  );
};
