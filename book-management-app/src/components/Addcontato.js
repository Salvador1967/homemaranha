import React, { useContext } from 'react';
import contatoForm from './contatoForm';
import contatoContext from '../context/contatoContext';

const Addcontato = ({ history }) => {
  const { contato, setcontato } = useContext(contatoContext);

  const handleOnSubmit = (contato) => {
    setcontato([contato, ...contato]);
    history.push('/');
  };

  return (
    <React.Fragment>
      <bookForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default Addcontato;