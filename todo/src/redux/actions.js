// Importando as constantes de ação do arquivo de tipos de ações (actionsTypes)
import { ADD_TODO, TOGGLE_TODO, SET_FILTER } from "./actionsTypes";

// Variável para controlar o ID das próximas tarefas a serem adicionadas
let nextTodoId = 0;

// Ação para adicionar uma nova tarefa
export const addTodo = content => ({
    type: ADD_TODO, // Tipo da ação para adicionar uma tarefa
    payload: {
        id: ++nextTodoId, // Incrementa o ID para a próxima tarefa
        content // Conteúdo da tarefa a ser adicionada
    }
});

// Ação para alternar o estado de uma tarefa entre concluída e não concluída
export const toggleTodo = id => ({
    type: TOGGLE_TODO, // Tipo da ação para alternar o estado de uma tarefa
    payload: { id } // ID da tarefa a ser alternada
});

// Ação para definir o filtro de visibilidade das tarefas
export const setFilter = filter => ({
    type: SET_FILTER, // Tipo da ação para definir o filtro de visibilidade
    payload: { filter } // Filtro de visibilidade a ser definido
});