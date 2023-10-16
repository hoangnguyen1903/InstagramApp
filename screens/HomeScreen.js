import { Image, Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import Name from '../assets/img/name.png';
import Person from '../assets/img/person.jpg';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Post from '../components/Post';

const postList = [
  {
    postId: '123456789',
    userId: '987654321',
    userName: 'hoang.19',
    avatarUrl:
      'https://images.unsplash.com/photo-1562093772-c36f2d77edc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
    caption: 'This is a sample post caption.',
    imageUrl:
      'https://images.unsplash.com/photo-1617975251517-b90ff061b52e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
    likes: 1000,
    comments: 50,
    location: 'Ho Chi Minh City, Viet Nam',
    timestamp: '2023-10-16T14:30:00',
  },
  {
    postId: '123456789',
    userId: '987654321',
    userName: 'hoang.1903',
    avatarUrl:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80',
    caption: 'This is a sample post caption.',
    imageUrl:
      'https://images.unsplash.com/photo-1626847152035-cb3f14d8534b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
    likes: 1000,
    comments: 50,
    location: 'Ha Noi, Viet Nam',
    timestamp: '2023-10-16T14:30:00',
  },
  {
    postId: '123456789',
    userId: '987654321',
    userName: 'hoang.20',
    avatarUrl:
      'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1899&q=80',
    caption: 'This is a sample post caption.',
    imageUrl:
      'https://images.unsplash.com/photo-1667983786354-1b8f31a5d471?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
    likes: 1000,
    comments: 50,
    location: 'New York City, USA',
    timestamp: '2023-10-16T14:30:00',
  },
];

const userList = [
  {
    userId: '987654321',
    userName: 'hoang.19',
    avatarUrl:
      'https://images.unsplash.com/photo-1562093772-c36f2d77edc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
    fullName: 'John Doe',
    followers: 10000,
    following: 500,
    posts_count: 150,
    location: 'New York, NY',
  },
  {
    userId: '987654321',
    userName: 'hoang.1903',
    avatarUrl:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80',
    fullName: 'John Doe',
    followers: 10000,
    following: 500,
    posts_count: 150,
    location: 'New York, NY',
  },
  {
    userId: '987654321',
    userName: 'hoang.20',
    avatarUrl:
      'https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1899&q=80',
    followers: 10000,
    following: 500,
    posts_count: 150,
    location: 'New York, NY',
  },
  {
    userId: '987654321',
    userName: 'hnguyen.19',
    avatarUrl:
      'https://plus.unsplash.com/premium_photo-1674777843203-da3ebb9fbca0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80',
    fullName: 'John Doe',
    followers: 10000,
    following: 500,
    posts_count: 150,
    location: 'Texas, USA',
  },
];

const commentList = [
  {
    commentId: '987654321',
    postId: '123456789',
    userId: '555555555',
    content: 'Great photo! 👌',
    likes: 20,
    timestamp: '2023-10-16T15:45:00',
  },
];

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ width: '100%', height: '100%' }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: '10px',
          paddingHorizontal: '15px',
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Image source={Name} style={{ width: '105px', height: '30px', marginRight: '5px' }} />
          <Icon name="angle-down" size="24px" />
        </View>
        <View
          style={{
            paddingVertical: '15px',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Icon name="heart" size="24px" />
          <Icon name="paper-plane" size="24px" style={{ marginLeft: '25px' }} />
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator
        contentContainerStyle={{
          height: 'auto',
        }}
      >
        <View
          style={{
            marginTop: '10px',
            borderBottomWidth: '1px',
            borderStyle: 'solid',
            borderBottomColor: 'rgba(0,0,0,0.3)',
            paddingBottom: '5px',
          }}
        >
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{ alignItems: 'center', paddingHorizontal: '5px' }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Story')}
                style={{ alignItems: 'center' }}
              >
                <Image
                  source={Person}
                  style={{
                    borderRadius: '50px',
                    width: '80px',
                    height: '80px',
                    borderWidth: '5px',
                    borderColor: '#ae1188',
                    marginBottom: '10px',
                  }}
                />
                <Text style={{ fontSize: '13px' }}>Tin của bạn</Text>
              </TouchableOpacity>
            </View>

            {userList.length > 0 &&
              userList.map((item) => {
                return (
                  <View key={item.userId} style={{ paddingHorizontal: '5px' }}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Story')}
                      style={{ alignItems: 'center' }}
                    >
                      <Image
                        source={item.avatarUrl}
                        style={{
                          borderRadius: '50px',
                          width: '80px',
                          height: '80px',
                          borderWidth: '5px',
                          borderColor: '#ae1188',
                          marginBottom: '10px',
                        }}
                      />
                      <Text style={{ fontSize: '13px' }}>{item.userName}</Text>
                    </TouchableOpacity>
                  </View>
                );
              })}
          </ScrollView>
        </View>
        <FlatList
          data={postList}
          renderItem={({ item }) => <Post item={item} />}
          keyExtractor={(item) => item.postId}
        />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
