import { Ticket } from '../../model/Ticket';

export type TicketAction =
  | TicketAddAction
  | TicketToggleAction
  | TicketAddCommentAction;

export type Dispatch = (action: TicketAction) => void;

export const ticketReducer = (
  tickets: Ticket[],
  action: TicketAction,
): Ticket[] => {
  switch (action.type) {
    case 'ADD_TICKET':
      const newTicket: Ticket = {
        ...action.payload,
        id: tickets.length + 1,
        status: 'open',
        comments: [],
      };

      return [...tickets, newTicket];
    case 'TOGGLE_TICKET':
      const newTickets: Ticket[] = tickets.map((ticket) =>
        ticket.id === action.id
          ? { ...ticket, status: ticket.status === 'open' ? 'closed' : 'open' }
          : ticket,
      );
      return newTickets;
    case 'ADD_COMMENT':
      const commentIds = tickets.reduce(
        (commentIds, ticket) => [
          ...commentIds,
          ...ticket.comments.map((comment) => comment.id),
        ],
        [] as number[],
      );

      const id = Math.max(...commentIds, 0) + 1;

      const newTicketList: Ticket[] = tickets.map((ticket) =>
        ticket.id === action.payload.ticketId
          ? {
              ...ticket,
              comments: [
                ...ticket.comments,
                {
                  id,
                  content: action.payload.comment,
                },
              ],
            }
          : ticket,
      );
      return newTicketList;
    default:
      return tickets;
  }
};

type TicketAddAction = {
  type: 'ADD_TICKET';
  payload: { title: string; description: string };
};

type TicketToggleAction = {
  type: 'TOGGLE_TICKET';
  id: number;
};

type TicketAddCommentAction = {
  type: 'ADD_COMMENT';
  payload: {
    ticketId: number;
    comment: string;
  };
};
