import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import NovoContatoTela from '../telas/NovoContatoTela';
import ListaContatosTela from '../telas/ListaContatosTela';

const LugaresNavigator = createStackNavigator ({
    ListaContatos: ListaContatosTela,
    Agenda: NovoContatoTela
});

export default createAppContainer (LugaresNavigator);