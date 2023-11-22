import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store'; // Importa a store do Redux
import { ChakraProvider } from '@chakra-ui/react';

// Obtém o elemento com id 'root' do HTML
const container = document.getElementById('root');
const root = createRoot(container);

// Renderiza a aplicação React
root.render(
  // Wrap da aplicação com o Provider do Redux para conectar a store ao componente App
  <Provider store={store}>
    {/* Provider fornece o contexto da store para todos os componentes da aplicação */}
    <ChakraProvider>
      {/* Inicia o modo rigoroso (StrictMode) para detectar potenciais problemas na aplicação */}
      <React.StrictMode>
        <App /> {/* Renderiza o componente principal da aplicação */}
      </React.StrictMode>
    </ChakraProvider>
  </Provider>
);