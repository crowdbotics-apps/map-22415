import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList169674Navigator from '../features/NotificationList169674/navigator';
import Settings169673Navigator from '../features/Settings169673/navigator';
import Settings169665Navigator from '../features/Settings169665/navigator';
import UserProfile169663Navigator from '../features/UserProfile169663/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
NotificationList169674: { screen: NotificationList169674Navigator },
Settings169673: { screen: Settings169673Navigator },
Settings169665: { screen: Settings169665Navigator },
UserProfile169663: { screen: UserProfile169663Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
