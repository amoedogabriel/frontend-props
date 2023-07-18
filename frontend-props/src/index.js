import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const productLinks = [
  { label: 'Cadastrar', url: '/products/add' },
  { label: 'Editar', url: '/products/edit' },
  { label: 'Deletar', url: '/products/delete' },
];

ReactDOM.render(
  <React.StrictMode>
    <App
      storeTitle="Minha Loja"
      loginLink="/login"
      signupLink="/signup"
      productLinks={productLinks}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
