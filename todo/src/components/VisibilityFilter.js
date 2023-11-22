// Importando componentes e hooks necessários
import { Container, Tab, TabList, Tabs } from "@chakra-ui/react";
import { useDispatch } from "react-redux"; // Importando 'useDispatch' do React Redux
import { VISIBILITY_FILTER } from "../constants"; // Importando constante 'VISIBILITY_FILTER' do arquivo de constantes
import { setFilter } from "../redux/actions"; // Importando a action 'setFilter' do Redux

// Componente funcional VisibilityFilter
export const VisibilityFilter = () => {
    const dispatch = useDispatch(); // Obtendo a função 'dispatch' do Redux

    return (
        <Container centerContent>
            <Tabs>
                <TabList>
                    {/* Mapeando os valores de 'VISIBILITY_FILTER' para renderizar os tabs */}
                    {Object.keys(VISIBILITY_FILTER).map(filterkey => {
                        const currentFilter = VISIBILITY_FILTER[filterkey];
                        
                        return (
                            <Tab 
                                key={`visibility-filter-${currentFilter}`}
                                onClick={() => dispatch(setFilter(currentFilter))} // Dispara a ação 'setFilter' com o filtro atual
                            >
                                {currentFilter} {/* Renderiza o nome do filtro como conteúdo do Tab */}
                            </Tab>
                        );
                    })}
                </TabList>
            </Tabs>
        </Container>
    );
}