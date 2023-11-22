// Importando os tipos de ações (action types)
import { ADD_TODO, TOGGLE_TODO } from "../actionsTypes";

// Estado inicial para os todos
const initialState = {
    todos: []
}

// Reducer para manipular as ações relacionadas aos todos
const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO: {
            // Desestruturação dos dados da ação para adicionar uma nova tarefa
            const { id, content } = action.payload;
            return {
                // Adiciona uma nova tarefa ao array de todos mantendo as anteriores e incluindo a nova
                todos: [
                    ...state.todos,
                    { content, completed: false, id }
                ]
            }
        }
        case TOGGLE_TODO: {
            // Altera o estado de uma tarefa para completa ou incompleta baseado no ID fornecido
            const { id } = action.payload;
            const updatedTodos = state.todos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            );
            return { todos: updatedTodos };
        }
        default:
            return state; // Retorna o estado atual se a ação não for reconhecida
    }
}

export default todosReducer; // Exporta o reducer de todos