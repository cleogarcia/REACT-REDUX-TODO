// Importando o filtro de visibilidade do arquivo de constantes
import { VISIBILITY_FILTER } from "../constants";

// Função para filtrar as tarefas com base no filtro de visibilidade
export const getTodosByVisibilityFilter = (store, visibilityFilter) => {
    switch (visibilityFilter) {
        case VISIBILITY_FILTER.COMPLETED:
            // Retorna apenas as tarefas completadas (com 'completed' como true)
            return store.todos.filter(todo => todo.completed);
        case VISIBILITY_FILTER.INCOMPLETED:
            // Retorna apenas as tarefas não completadas (com 'completed' como false)
            return store.todos.filter(todo => !todo.completed);
        default:
            // Retorna todas as tarefas se nenhum filtro específico for aplicado
            return store.todos;
    }
}