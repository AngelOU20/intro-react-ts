import { useForm } from '../hooks/useForm';

interface FormData {
  postal: string;
  direction: string;
  city: string;
}

const initialState = {
  postal: '232715',
  direction: 'Avenida abc 127',
  city: 'Lima',
};

export const Form2: React.FC = () => {
  const { postal, direction, city, formState, handleChange } =
    useForm<FormData>(initialState);

  return (
    <div className="flex flex-column">
      <form autoComplete="off">
        <h3>Formulario con custom hook</h3>
        <div className="input-outer-wrap">
          <div className="control-wrap">
            <input
              type="text"
              className="custom-input"
              name="postal"
              value={postal}
              onChange={handleChange}
            />
            <label className="custom-label">Código postal</label>
          </div>
        </div>

        <div className="input-outer-wrap">
          <div className="control-wrap">
            <input
              type="text"
              className="custom-input"
              name="direction"
              value={direction}
              onChange={handleChange}
            />
            <label className="custom-label">Dirección</label>
          </div>
        </div>

        <div className="input-outer-wrap">
          <div className="control-wrap">
            <input
              type="text"
              className="custom-input"
              name="city"
              value={city}
              onChange={handleChange}
            />
            <label className="custom-label">Ciudad</label>
          </div>
        </div>
      </form>

      <pre>{JSON.stringify(formState, null, 2)}</pre>
    </div>
  );
};
