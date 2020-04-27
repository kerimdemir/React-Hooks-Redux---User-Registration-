import React, {useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {
  Router,
  Scene,
  Drawer,
  Reducer,
  Actions,
} from 'react-native-router-flux';
import {Colors, Fonts, Metrics} from '../themes';
import {Home, Login} from './index';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SideBar} from './SideBar';
import {user_token} from '../services/helpers';

const styles = StyleSheet.create({
  navBar: {
    height: 50,
    backgroundColor: 'white', // changing navbar color
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  },
  navTitle: {
    color: Colors.TEMPLATE_COLOR, // changing navbar title color
    fontFamily: Fonts.type.bold,
  },
  routerScene: {},
});

const reducerCreate = params => {
  const defaultReducer = new Reducer(params);
  return (state, action) => {
    //   console.log('ACTION:', action);
    return defaultReducer(state, action);
  };
};
const BackButton = () => {
  return (
    <TouchableOpacity onPress={() => Actions.pop()}>
      <AntDesign
        name={'arrowleft'}
        style={{marginLeft: Metrics.WIDTH * 0.02}}
        color={Colors.TEMPLATE_COLOR}
        size={Fonts.moderateScale(30)}
      />
    </TouchableOpacity>
  );
};
const Navigation = () => {
  const [isToken, setIsToken] = useState('isLoader');
  useEffect(() => {
    user_token().then(token => {
      if (token == null) {
        setIsToken(false);
      } else {
        setIsToken(true);
      }
    });
  }, []);

  return (
    <Router
      createReducer={reducerCreate}
      navigationBarStyle={styles.navBar}
      titleStyle={styles.navTitle}
      sceneStyle={styles.routerScene}>
      <Scene key="root" hideNavBar>
        <Scene key="Login" hideNavBar title="Login" component={Login} />
        <Drawer
          initial={isToken}
          contentComponent={SideBar}
          key={'drawer'}
          leftTitle={() => (
            <SimpleLineIcons
              name="menu"
              size={24}
              color={Colors.TEMPLATE_COLOR}
            />
          )}
          drawerWidth={Metrics.WIDTH * 0.7}
          drawerPosition={'left'}
          open={false}>
          <Scene
            key="Home"
            component={Home}
            renderRightButton={() => (
              <Ionicons
                style={{marginRight: 10}}
                name="ios-notifications-outline"
                size={35}
                color={Colors.TEMPLATE_COLOR}
              />
            )}
          />
        </Drawer>
      </Scene>
    </Router>
  );
};
export default Navigation;
