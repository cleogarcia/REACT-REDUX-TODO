// Importando a função createStore do Redux para criar a store
import { createStore } from 'redux';

// Importando o rootReducer, que combina todos os reducers da aplicação
import rootReducer from './reducer';

// Criando e exportando a store do Redux usando o rootReducer combinado
export default createStore(rootReducer);
//npm run build