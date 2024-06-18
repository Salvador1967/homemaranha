import React, { useContext } from 'react';
import _ from 'lodash';
import contato from './contato';
import contatoContext from '../context/contatoContext';

const contatoList = () => {
  const { contato, setcontato } = useContext(contatoContext);

  const handleRemovecontato = (id) => {
    setcontato(contato.filter((contato) => contato.id !== id));
  };

  return (
    <React.Fragment>
      <div className="contato
      -list">
        {!_.isEmpty(contato) ? (
          contato.map((contato) => (
            <contato key={contato.id} {...contato} handleRemovecontato={handleRemovecontato} />
          ))
        ) : (
          <p className="message">No contato available. Please add some contato.</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default contatoList;