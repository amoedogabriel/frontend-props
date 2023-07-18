import React from 'react';
import Navigation from './components/Navigation';
import Products from './components/Products';

const App = () => {
  const productLinks = [
    { label: 'Cadastrar', url: '/products/add' },
    { label: 'Editar', url: '/products/edit' },
    { label: 'Deletar', url: '/products/delete' },
  ];

  return (
    <div>
      <Navigation
        storeTitle="Minha Loja"
        loginLink="/login"
        signupLink="/signup"
        productLinks={productLinks}
      />
      <Products />
    </div>
  );
};

export default App;
