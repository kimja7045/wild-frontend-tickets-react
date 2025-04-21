import { FormEvent } from 'react';
import { TextField } from '../component/TextField';
import { TextArea } from '../component/TextArea';
import { SubmitButton } from '../component/SubmitButton';

// Organism 수준 컴포넌트
export const TicketForm = ({
  addTicket,
}: {
  addTicket: ({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) => void;
}) => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const title = formData.get('title') as string;
    const description = formData.get('description') as string;

    addTicket({ title, description });

    form.reset();
  };

  return (
    <form id="add-ticket-form" onSubmit={handleSubmit}>
      <TextField label="Title" name="title" placeholder="Title" />
      <TextArea
        label="Description"
        name="description"
        placeholder="Description"
      />
      <SubmitButton label="Add Ticket" />
    </form>
  );
};
