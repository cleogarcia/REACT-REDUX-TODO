// Importando a função combineReducers do Redux para combinar reducers individuais
import { combineReducers } from "redux";

// Importando os reducers individuais para serem combinados
import todos from "./todos"; // Reducer para manipular as tarefas (todos)
import visibilityFilterReducer from "./visibilityFilter"; // Reducer para o filtro de visibilidade

// Combinando os reducers em um único rootReducer
export default combineReducers({
  todos, // Adicionando o reducer 'todos'
  visibilityFilter: visibilityFilterReducer // Adicionando o reducer 'visibilityFilter' com uma chave específica
});