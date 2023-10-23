import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Post from '../components/Post';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useState } from 'react';
import CommentModal from '../components/CommentModal';

const post = {
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
};

const PostScreen = ({ navigation }) => {
  const [modal, setModal] = useState(false);
  return (
    <View style={{ width: '100%', height: '100%' }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: '15px',
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
          Khám phá
        </Text>
      </View>
      <ScrollView>
        <Post item={post} setModal={setModal} />
      </ScrollView>
      <CommentModal modal={modal} setModal={setModal} />
    </View>
  );
};

export default PostScreen;
