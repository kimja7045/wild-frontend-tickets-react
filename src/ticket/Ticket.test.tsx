import { fireEvent, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { Ticket } from '../model/Ticket';
import { TicketItem } from './TicketItem';

const context = describe;

describe('TicketItem', () => {
  const ticket: Ticket = {
    id: 1,
    title: 'TITLE',
    description: 'DESCRIPTION',
    status: 'open',
    comments: [{ id: 1, content: 'COMMENT' }],
  };

  const dispatch = vi.fn();

  beforeEach(() => {
    vi.resetAllMocks();
  });

  function renderTicketItem() {
    render(<TicketItem ticket={ticket} dispatch={dispatch} />);
  }

  it('renders title and description', () => {
    renderTicketItem();

    screen.getByText(/TITLE/);
    screen.getByText(/DESCRIPTION/);
  });

  context('when user clicks toggle button', () => {
    it('calls dispatch function', () => {
      renderTicketItem();

      fireEvent.click(screen.getByRole('button', { name: /Open/ }));

      expect(dispatch).toBeCalled();

      const firstArguments = dispatch.mock.calls[0];

      const action = firstArguments[0];

      expect(action.type).toBe('TOGGLE_TICKET');
      expect(action.id).toBe(ticket.id);

      expect(action).toEqual({
        type: 'TOGGLE_TICKET',
        id: ticket.id,
      });
    });
  });

  // TODO: TicketComment 테스트 분리하기
  it('renders comments', () => {
    renderTicketItem();

    screen.getByText(/COMMENT/);
  });

  context('when user submits comment', () => {
    it('calls dispatch function', () => {
      renderTicketItem();

      fireEvent.change(screen.getByRole('textbox', { name: /Comment/ }), {
        target: { value: 'New Comment' },
      });
      fireEvent.click(screen.getByRole('button', { name: /Add Comment/ }));

      expect(dispatch).toBeCalled();

      const firstArguments = dispatch.mock.calls[0];

      const action = firstArguments[0];

      expect(action.type).toBe('ADD_COMMENT');
      expect(action.payload.ticketId).toBe(ticket.id);
      expect(action.payload.comment).toBe('New Comment');
    });
  });
});
