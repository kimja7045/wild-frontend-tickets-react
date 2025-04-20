import { useId } from 'react';

// Molecule 수준 컴포넌트
export const TextField = ({
  label,
  name,
  placeholder,
}: {
  label: string;
  name: string;
  placeholder: string;
}) => {
  const id = useId();

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type="text" name={name} placeholder={placeholder} id={id} />
    </div>
  );
};
