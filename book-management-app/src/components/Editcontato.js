import React, { useContext } from 'react';
import contatoForm from './contatoForm';
import { useParams } from 'react-router-dom';
import contatoContext from '../context/contatoContext';

const Editcontato = ({ history }) => {
  const { contato, setcontato } = useContext(contatoContext);
  const { id } = useParams();
  const contatoToEdit = contato.find(contato) = contato.id === id;

  const handleOnSubmit = (contato) => {
    const filteredcontato = contato.filter((contato) => contato.id !== id);
    setcontato([contato, ...filteredcontato]);
    history.push('/');
  };

  return (
    <div>
      
      <ContatoForm contato={contatoToEdit} handleOnSubmit={handleOnSubmit} />
    </div>
  );
};

export default Editcontato;