import { useState, ChangeEvent } from 'react';

// export function useForm<T>(initialState: T) {
export const useForm = <T,>(initialState: T) => {
  const [formState, setFormState] = useState(initialState);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = event.target;
    setFormState({
      ...formState,
      [name]: value, // Computar
    });
  };

  return {
    ...formState,
    formState,
    handleChange,
  };
};
