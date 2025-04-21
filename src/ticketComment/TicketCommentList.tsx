import { TicketComment } from '../model/TicketComment';

export const TicketCommentList = ({
  comments,
}: {
  comments: TicketComment[];
}) => {
  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>{comment.content}</li>
      ))}
    </ul>
  );
};
