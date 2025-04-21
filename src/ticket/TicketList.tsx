import { memo } from 'react';
import { Ticket } from '../model/Ticket';
import { TicketItem } from './TicketItem';
import { Dispatch } from './lib/ticketReducer';

export const TicketList = ({
  tickets,
  dispatch,
}: {
  tickets: Ticket[];
  dispatch: Dispatch;
}) => {
  return (
    <ul id="ticket-list">
      {tickets.map((ticket) => (
        <TicketItemMemo key={ticket.id} ticket={ticket} dispatch={dispatch} />
      ))}
    </ul>
  );
};

const TicketItemMemo = memo(TicketItem);
