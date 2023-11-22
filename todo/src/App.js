// Importando componentes do Chakra UI
import { Container, Heading } from '@chakra-ui/react';

// Importando os componentes relacionados à lista de tarefas
import { AddTodo } from './components/AddTodo'; // Componente para adicionar uma nova tarefa
import { TodoList } from './components/TodoList'; // Componente para exibir a lista de tarefas
import { VisibilityFilter } from './components/VisibilityFilter'; // Componente para o filtro de visibilidade das tarefas

// Componente principal da aplicação
function App() {
  return (
    <Container maxW="container.sm">
      <Heading my="4">Todo List</Heading> {/* Título da lista de tarefas */}
      <AddTodo /> {/* Componente para adicionar uma nova tarefa */}
      <TodoList /> {/* Componente para exibir a lista de tarefas */}
      <VisibilityFilter /> {/* Componente para o filtro de visibilidade das tarefas */}
    </Container>
  );
}

export default App; // Exporta o componente principal da aplicação