import { FormEvent } from 'react';
import { Dispatch } from '../ticket/lib/ticketReducer';
import { TextField } from '../component/TextField';
import { SubmitButton } from '../component/SubmitButton';

export const TicketCommentForm = ({
  ticketId,
  dispatch,
}: {
  ticketId: number;
  dispatch: Dispatch;
}) => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const comment = formData.get('content') as string;

    dispatch({ type: 'ADD_COMMENT', payload: { ticketId, comment } });

    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField label="Comment" name="content" placeholder="Comment" />
      <SubmitButton label="Add Comment" />
    </form>
  );
};
