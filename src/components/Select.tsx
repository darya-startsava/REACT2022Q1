import { useController, UseControllerProps } from 'react-hook-form';
import FormValues from '../types/formValues';

export default function Select(props: UseControllerProps<FormValues>) {
  const { field } = useController(props);
  return (
    <label>
      Country of Birth:
      {/* @ts-ignore */}
      <select defaultValue={'DEFAULT'} className="form-select" {...field}>
        <option value="DEFAULT" disabled>
          --choose country--
        </option>
        <option value="USA">USA</option>
        <option value="UK">UK</option>
        <option value="Canada">Canada</option>
        <option value="Australia">Australia</option>
        <option value="France ">France </option>
        <option value="Germany">Germany</option>
        <option value="Sweden">Sweden</option>
        <option value="Spain">Spain</option>
        <option value="Denmark">Denmark</option>
      </select>
    </label>
  );
}
