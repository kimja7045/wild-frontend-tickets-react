// Organism 수준 컴포넌트
export const TicketForm = () => {
  return (
    <div>
      <SubmitButton label="Add Ticket" />
    </div>
  );
};

// Atom 수준 컴포넌트
export const SubmitButton = ({ label }: { label: string }) => {
  return <button type="submit">{label}</button>;
};
