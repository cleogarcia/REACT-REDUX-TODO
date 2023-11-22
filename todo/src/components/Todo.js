// Importando componentes e hooks necessários
import { Box, Checkbox, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTodo } from "../redux/actions"; // Importando a action 'toggleTodo' do Redux

// Componente funcional Todo
export const Todo = ({ todo }) => {
    const dispatch = useDispatch(); // Obtendo a função 'dispatch' do Redux
    const [checked, setChecked] = useState(false); // Estado local para controlar o estado do checkbox

    // Função para lidar com a alteração do checkbox
    const handleChecked = () => dispatch(toggleTodo(todo.id)); // Dispara a ação 'toggleTodo' do Redux, passando o ID da tarefa

    // Efeito para atualizar o estado do checkbox com base no estado 'completed' da tarefa
    useEffect(() => {
        setChecked(todo.completed); // Atualiza o estado do checkbox com base no estado 'completed' da tarefa
    }, [todo]); // Dispara o efeito sempre que 'todo' mudar

    // Renderiza a caixa de tarefa com um checkbox e o texto da tarefa
    return (
        <Box mb={1} bgColor={"lightcoral"} p={2}>
            <Checkbox 
                onChange={handleChecked} // Define a função 'handleChecked' para o evento 'change' do checkbox
                colorScheme="teal" 
                isChecked={checked} // Define o estado do checkbox
            >
                {/* Renderiza o texto da tarefa */}
                <Text as={todo.completed && "del"}>{todo.content}</Text>
            </Checkbox>
        </Box>
    );
}