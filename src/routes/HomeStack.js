import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from '../screens/Login';
import Home from '../screens/Home';

const screens = {
    Login:{
        screen: Login
    }
    ,
    Home:{
        screen: Home
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);