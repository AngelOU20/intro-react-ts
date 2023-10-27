import { ChangeEvent, useState } from 'react';

export const Form: React.FC = () => {
  const [formState, setFormState] = useState({
    name: 'Julio Ucharima',
    email: 'julio_ucharima@usmp.pe',
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { value, name } = event.target;
    console.log({ value, name });

    setFormState({
      ...formState,
      [name]: value, // Computar
    });
  };

  return (
    <div className="flex flex-column">
      <form autoComplete="off">
        <h3>Formulario normal</h3>
        <div className="input-outer-wrap">
          <div className="control-wrap">
            <input
              type="text"
              className="custom-input"
              name="name"
              value={formState.name}
              onChange={handleChange}
            />
            <label className="custom-label">Nombre</label>
          </div>
        </div>

        <div className="input-outer-wrap">
          <div className="control-wrap">
            <input
              type="email"
              className="custom-input"
              name="email"
              value={formState.email}
              onChange={handleChange}
            />
            <label className="custom-label">Email</label>
          </div>
        </div>
      </form>

      <pre>{JSON.stringify(formState, null, 2)}</pre>
    </div>
  );
};
