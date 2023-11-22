// Importando componentes e hooks necessários
import { Button, Flex, FormControl, Input } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions"; // Importando a action 'addTodo' do Redux

// Componente funcional AddTodo
export const AddTodo = () => {
    const dispatch = useDispatch(); // Obtendo a função 'dispatch' do Redux
    const [value, setValue] = useState(''); // Estado local para o valor do input

    // Função para lidar com o envio do formulário
    const handleSubmit = e => {
        e.preventDefault(); // Evita o comportamento padrão do formulário de recarregar a página
        dispatch(addTodo(value)); // Dispara a ação 'addTodo' do Redux, passando o valor do input
        setValue(''); // Limpa o valor do input após adicionar a tarefa
    }

    // Função para lidar com a mudança do input
    const handleInput = e => {       
        setValue(e.target.value); // Atualiza o valor do input conforme o usuário digita
    }

    // Renderiza o formulário para adicionar uma nova tarefa
    return (
        <form onSubmit={handleSubmit}> {/* Define a função 'handleSubmit' para o evento 'submit' do formulário */}
            <Flex>
                <FormControl>
                    <Input
                        type="text"
                        value={value}
                        onChange={handleInput} // Define a função 'handleInput' para o evento 'change' do input
                        borderTopRightRadius={0}
                        borderBottomRightRadius={0}
                    />
                </FormControl>
                <Button 
                    colorScheme="teal" 
                    type="submit" // Submete o formulário quando o botão é clicado
                    disabled={!value} // Desabilita o botão se 'value' estiver vazio
                    borderTopLeftRadius={0}
                    borderBottomRightRadius={0}
                >
                    Add Todo
                </Button>
            </Flex>
        </form>
    );
}