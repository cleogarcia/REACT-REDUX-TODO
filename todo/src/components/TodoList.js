// Importando componentes e hooks necessários
import { Box } from "@chakra-ui/react";
import { useSelector} from "react-redux";
import {getTodosByVisibilityFilter} from "../redux/selector";
import { Todo } from "./Todo";

// Componente funcional TodoList
export const TodoList = ()=>{
    // Obtendo 'todos' e 'visibilityFilter' do estado global usando 'useSelector'
    const{todos, visibilityFilter} = useSelector(state => state);
      // Filtrando as tarefas com base no filtro de visibilidade atual
    const filterTodos = getTodosByVisibilityFilter(todos, visibilityFilter);
     // Renderiza a lista de tarefas filtradas ou uma mensagem se não houver tarefas
    // Verifica se há tarefas filtradas
    // Mapeia cada tarefa filtrada para renderizar o componente 'Todo'
    // Renderiza o componente Todo para cada tarefa
    // Exibida se não houver tarefas
    return(
        <Box my={3}>           
              {filterTodos.length ? filterTodos.map(todo =>(
                <Todo key={`todo-${todo.id}`} todo={todo}/>
            )) : <Box textAlign="center" my="4"> No Todo Yay!</Box>}        
        </Box>
    )
}