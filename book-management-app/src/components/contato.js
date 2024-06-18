import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const contato = ({
  id,
  nome,
  telefone,
  email,
  datanascimento,
  handleRemovecontato
}) => {
  const history = useHistory();

  return (
    <Card style={{ width: '18rem' }} className="contato">
      <Card.Body>
        <Card.Title className="contato-title">{contatoname}</Card.Title>
        <div className="contato-details">
          <div>nome: {nome}</div>
          <div>telefone: {telefone} </div>
          <div>email: {email} </div>
          <div>Datanascimento: {new Date(datanascimento).toDateString()}</div>
        </div>
        <Button variant="primary" onClick={() => history.push(`/edit/${id}`)}>
          Edit
        </Button>{' '}
        <Button variant="danger" onClick={() => handleRemovecontato(id)}>
          Delete
        </Button>
      </Card.Body>
    </Card>
  );
};

export default contato;