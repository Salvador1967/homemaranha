import React, { useState } from 'react';
import { Form, Button } from '';
import { v4 as uuidv4 } from 'uuid';

const contatoForm = (props) => {
  const [contato, setContato] = useState({
    nome: props.contato ? props.contato.nome : '',
    email: props.contato ? props.contato.email : '',
    telefone: props.contato ? props.contatotelefone : '',
    datanascimento: props.contato ? props.contato.datanascimento : ''
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { nome, email, telefone, datanascimento } = contato;

 // quando enviar o formulário chama essa função
  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [nome, email, telefone, datanascimento];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const contato = {
        id: uuidv4(),
        nome,
        email,
        telefone,
        datanascimento,
      };
      props.handleOnSubmit(contato);
    } else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { nome, value } = event.target;
    switch (nome) {
      case 'quantity':
        if (value === '' || parseInt(value) === +value) {
          setcontato((prevState) => ({
            ...prevState,
            [nome]: value
          }));
        }
        break;
      case 'price':
        if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setcontato((prevState) => ({
            ...prevState,
            [nome]: value
          }));
        }
        break;
      default:
        setcontato((prevState) => ({
          ...prevState,
          [nome]: value
        }));
    }
  };

  return (
    <div className="main-form">
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="nome">
          <Form.Label>contato nome</Form.Label>
          <Form.Control
            className="input-control"
            type="nome"
            name="nome"
            value={nome}
            placeholder="Enter nome of contato"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="nome">
          <Form.Label>telefone</Form.Label>
          <Form.Control
            className="input-control"
            type="email"
            name="email"
            value={email}
            placeholder="Enter name of email"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="telefone">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            className="input-control"
            type="number"
            name="telefone"
            value={quantity}
            placeholder="Enter available telefone"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="datanasacimento">
          <Form.Label>datanascimento</Form.Label>
          <Form.Control
            className="input-control"
            type="datanascimento"
            name=" datanascimento"
            value={datanascimento}
            placeholder="Enter datanascimento of contato"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ContatoForm;