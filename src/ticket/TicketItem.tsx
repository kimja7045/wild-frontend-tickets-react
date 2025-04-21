import { Ticket } from '../model/Ticket';
import { Dispatch } from './lib/ticketReducer';

export const TicketItem = ({
  ticket,
  dispatch,
}: {
  ticket: Ticket;
  dispatch: Dispatch;
}) => {
  const handleClick = () => {
    dispatch({ type: 'TOGGLE_TICKET', id: ticket.id });
  };

  return (
    <li>
      <div className="title">{ticket.title}</div>
      <div className="description">{ticket.description}</div>
      <button className="status" onClick={handleClick}>
        {ticket.status === 'open' ? 'Open' : 'Closed'}
      </button>
    </li>
  );
};
