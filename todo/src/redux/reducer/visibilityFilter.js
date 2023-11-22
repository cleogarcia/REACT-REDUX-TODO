// Importando o tipo de ação SET_FILTER e o filtro de visibilidade do arquivo de constantes
import { SET_FILTER } from "../actionsTypes";
import { VISIBILITY_FILTER } from "../../constants";

// Estado inicial para o filtro de visibilidade, definido como VISIBILITY_FILTER.ALL
const initialState = VISIBILITY_FILTER.ALL;

// Reducer para manipular a ação SET_FILTER, que atualiza o filtro de visibilidade das tarefas
const visibilityFilterReducer = (state = initialState, action) => {
    switch (action.type) { // Utilizando 'switch' para verificar o tipo de ação recebida
        case SET_FILTER: {
            return action.payload.filter; // Retorna o filtro definido na ação recebida
        }
        default: {
            return state; // Retorna o estado atual se a ação não for reconhecida
        }
    }
};

export default visibilityFilterReducer; // Exporta o reducer de filtro de visibilidade