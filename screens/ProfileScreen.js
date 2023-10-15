import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Person from '../assets/img/person.jpg';
import TabBarProfile from '../components/TabBarProfile';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PostBanner from '../components/PostBanner';

const TopTab = createMaterialTopTabNavigator();

const ProfileScreen = () => {
  return (
    <View style={{ width: '100%', height: '100%' }}>
      <View
        style={{
          flexDirection: 'row',
          marginVertical: '15px',
          alignItems: 'center',
          paddingHorizontal: '15px',
        }}
      >
        <Text style={{ fontSize: '24px', fontWeight: 'bold', marginRight: 'auto' }}>
          hoangnguyen.19
        </Text>
        <TouchableOpacity style={{ marginRight: '25px' }}>
          <Icon name="plus-square" size={24} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="bars" size={24} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View
          style={{
            marginTop: '15px',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            paddingHorizontal: '15px',
          }}
        >
          <View style={{ alignItems: 'center' }}>
            <Image
              source={Person}
              style={{ width: '100px', height: '100px', borderRadius: '50px' }}
            />
            <Text
              style={{ fontSize: '16px', color: 'black', fontWeight: 'bold', marginTop: '5px' }}
            >
              hoangnguyen.19
            </Text>
          </View>
          <View style={{ alignItems: 'center', marginLeft: '10px' }}>
            <Text style={{ fontSize: '20px', color: 'black', fontWeight: 'bold' }}>0</Text>
            <Text style={{ fontSize: '16px', color: 'black', fontWeight: '400' }}>Bài viết</Text>
          </View>
          <View style={{ alignItems: 'center', marginLeft: '10px' }}>
            <Text style={{ fontSize: '20px', color: 'black', fontWeight: 'bold' }}>0</Text>
            <Text style={{ fontSize: '16px', color: 'black', fontWeight: '400' }}>
              Người the...
            </Text>
          </View>
          <View style={{ alignItems: 'center', marginLeft: '10px' }}>
            <Text style={{ fontSize: '20px', color: 'black', fontWeight: 'bold' }}>0</Text>
            <Text style={{ fontSize: '16px', color: 'black', fontWeight: '400' }}>Đang the...</Text>
          </View>
        </View>
        <View
          style={{
            marginTop: '15px',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: '15px',
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: 'rgba(0,0,0,0.1)',
              paddingHorizontal: '5px',
              paddingVertical: '5px',
              borderTopLeftRadius: '5px',
              borderBottomLeftRadius: '5px',
            }}
          >
            <Text style={{ color: 'black', fontWeight: 'bold' }}>Chỉnh sửa trang cá...</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'rgba(0,0,0,0.1)',
              paddingHorizontal: '5px',
              paddingVertical: '5px',
              borderTopLeftRadius: '5px',
              borderBottomLeftRadius: '5px',
            }}
          >
            <Text style={{ color: 'black', fontWeight: 'bold' }}>Chia sẻ trang cá nh...</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'rgba(0,0,0,0.1)',
              paddingHorizontal: '5px',
              paddingVertical: '5px',
              borderRadius: '5px',
            }}
          >
            <Icon name="user-plus" size={18} color="black" />
          </TouchableOpacity>
        </View>
        <TopTab.Navigator
          screenOptions={{ headerShown: false }}
          tabBar={(props) => <TabBarProfile {...props} />}
          initialRouteName="PostList"
        >
          <TopTab.Screen name="PostList" component={PostList} />
          <TopTab.Screen name="FriendList" component={FriendList} />
        </TopTab.Navigator>
      </ScrollView>
    </View>
  );
};

const PostList = () => {
  return (
    <View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: '5px',
        }}
      >
        <PostBanner />
        <PostBanner />
        <PostBanner />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: '5px',
        }}
      >
        <PostBanner />
        <PostBanner />
        <PostBanner />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: '5px',
        }}
      >
        <PostBanner />
        <PostBanner />
        <PostBanner />
      </View>
    </View>
  );
};
const FriendList = () => {
  return (
    <View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: '5px',
        }}
      >
        <PostBanner />
        <PostBanner />
        <PostBanner />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: '5px',
        }}
      >
        <PostBanner />
        <PostBanner />
        <PostBanner />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: '5px',
        }}
      >
        <PostBanner />
        <PostBanner />
        <PostBanner />
      </View>
    </View>
  );
};

export default ProfileScreen;
