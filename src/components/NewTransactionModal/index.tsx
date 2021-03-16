import { Container } from './styles';
import Modal from 'react-modal';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement('#root');

export function NewTransactionModal({
  isOpen,
  onRequestClose
}: NewTransactionModalProps) {
  return (
    <Container>
      <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
      />
    </Container>
  );
}