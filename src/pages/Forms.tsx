import Form from '../components/Form/Form';
import CardType from '../types/card';

interface FormProps {
  state: CardType[];
  onCreateCard: Function;
}

export default function Forms({ state, onCreateCard }: FormProps) {
  return (
    <div data-testid="forms-page">
      <h1>Forms</h1>
      <Form state={state} onCreateCard={onCreateCard} />
    </div>
  );
}
