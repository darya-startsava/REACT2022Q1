import { useController, UseControllerProps } from 'react-hook-form';
import FormValues from '../types/formValues';

export default function DateInput(props: UseControllerProps<FormValues>) {
  const { field } = useController(props);
  return (
    <label className="form-label">
      Date of Birth:
      {/* @ts-ignore */}
      <input className="form-control" type="date" {...field} placeholder={props.name} />
    </label>
  );
}
