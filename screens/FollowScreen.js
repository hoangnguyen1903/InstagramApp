import { Button, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TabBarFollow from '../components/TabBarFollow';
import Search from '../components/Search';
import Follow from '../components/Follow';

const TopTab = createMaterialTopTabNavigator();

const FollowScreen = ({ navigation, route }) => {
  const { initialRouteName } = route.params;
  return (
    <View style={{ width: '100%', height: '100%' }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: '15px',
          paddingHorizontal: '15px',
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} />
        </TouchableOpacity>
        <Text
          style={{
            marginLeft: '25px',
            fontSize: '20px',
            fontWeight: 'bold',
            marginRight: 'auto',
          }}
        >
          hoangnguyen.19
        </Text>
      </View>
      <TopTab.Navigator
        screenOptions={{ headerShown: false }}
        tabBar={(props) => <TabBarFollow {...props} />}
        initialRouteName={initialRouteName}
        style={{ marginTop: '20px' }}
      >
        <TopTab.Screen name="Follower" component={FollowerList} />
        <TopTab.Screen name="Following" component={FollowingList} />
      </TopTab.Navigator>
    </View>
  );
};

const FollowerList = () => {
  return (
    <ScrollView style={{ marginTop: '15px' }}>
      <Search />
      <View style={{ paddingHorizontal: '15px' }}>
        <Follow name="Follower" />
        <Follow name="Follower" />
        <Follow name="Follower" />
        <Follow name="Follower" />
        <Follow name="Follower" />
        <Follow name="Follower" />
        <Follow name="Follower" />
        <Follow name="Follower" />
        <Follow name="Follower" />
        <Follow name="Follower" />
        <Follow name="Follower" />
        <Follow name="Follower" />
      </View>
    </ScrollView>
  );
};

const FollowingList = () => {
  return (
    <ScrollView style={{ marginTop: '15px' }}>
      <Search />
      <View style={{ paddingHorizontal: '15px' }}>
        <Follow />
        <Follow />
        <Follow />
      </View>
    </ScrollView>
  );
};

export default FollowScreen;
