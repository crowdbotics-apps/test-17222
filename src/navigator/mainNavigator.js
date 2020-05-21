import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import SignIn249043Navigator from '../features/SignIn249043/navigator';
import Settings49041Navigator from '../features/Settings49041/navigator';
import UserProfile49034Navigator from '../features/UserProfile49034/navigator';
import Settings49033Navigator from '../features/Settings49033/navigator';
import Settings49031Navigator from '../features/Settings49031/navigator';
import SignIn249029Navigator from '../features/SignIn249029/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
SignIn249043: { screen: SignIn249043Navigator },
Settings49041: { screen: Settings49041Navigator },
UserProfile49034: { screen: UserProfile49034Navigator },
Settings49033: { screen: Settings49033Navigator },
Settings49031: { screen: Settings49031Navigator },
SignIn249029: { screen: SignIn249029Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
