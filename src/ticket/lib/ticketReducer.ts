import { Ticket } from '../../model/Ticket';

type TicketAction =
  | TicketAddAction
  | TicketToggleAction
  | TicketAddCommentAction;

export const ticketReducer = (state: Ticket[], action: TicketAction) => {
  switch (action.type) {
    case 'ADD_TICKET':
      return [
        ...state,
        {
          ...action.payload,
          id: state.length + 1,
          status: 'open',
          comments: [],
        },
      ];
    case 'TOGGLE_TICKET':
      return state.map((ticket) =>
        ticket.id === action.id
          ? { ...ticket, status: !ticket.status }
          : ticket,
      );
    case 'ADD_COMMENT':
      return state.map((ticket) =>
        ticket.id === action.payload.ticketId
          ? {
              ...ticket,
              comments: [
                ...ticket.comments,
                {
                  id: ticket.comments.length + 1,
                  text: action.payload.comment,
                },
              ],
            }
          : ticket,
      );
    default:
      return state;
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
