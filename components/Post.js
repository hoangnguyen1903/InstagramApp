import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FormatTimestamp from '../utils/FormatTimestamp';
import { useState } from 'react';

const Post = (props) => {
  const { userName, avatarUrl, caption, imageUrl, likes, comments, timestamp, location } =
    props.item;
  const [like, isLike] = useState('black');

  return (
    <View
      style={{
        marginTop: '10px',
        marginBottom: '10px',
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: '15px',
        }}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <Image
            source={avatarUrl}
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '30px',
              marginRight: '10px',
            }}
          />
          <View>
            <Text style={{ fontStyle: 'italic', fontSize: '16px' }}>{userName}</Text>
            <Text style={{ fontSize: '16px', fontWeight: 'bold' }}>{location}</Text>
          </View>
        </View>
        <Icon name="ellipsis-v" size={24} />
      </View>
      <View style={{ marginTop: '10px' }}>
        <Image source={imageUrl} style={{ width: '100%', height: '400px' }} />
      </View>
      <View style={{ paddingHorizontal: '15px' }}>
        <View
          style={{
            marginVertical: '10px',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => isLike('red')}>
              <Icon name="heart" size={28} style={{ marginRight: '15px' }} color={like} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="comment" size={28} style={{ marginRight: '15px' }} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="paper-plane" size={28} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Icon name="bookmark" size={28} />
          </TouchableOpacity>
        </View>
        <Text style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '10px' }}>
          {likes} lượt thích
        </Text>
        <View
          style={{
            marginBottom: '10px',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Text style={{ fontWeight: 'bold', fontSize: '16px' }}>{userName}</Text>
          <Text style={{ fontWeight: '400', fontSize: '16px', marginLeft: '5px' }}>{caption}</Text>
        </View>
        <TouchableOpacity>
          <Text style={{ fontSize: '16px', color: '#ccccc', marginBottom: '10px' }}>
            Xem tất cả {comments} bình luận
          </Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: '10px' }}>
          <Image
            source={avatarUrl}
            style={{ width: '24px', height: '24px', borderRadius: '30px', marginRight: '10px' }}
          />
          <TextInput
            style={{ outlineStyle: 'none' }}
            placeholder="Thêm bình luận..."
            placeholderTextColor="#ccccc"
          />
        </View>
        <Text style={{ color: '#ccccc' }}>{FormatTimestamp(timestamp)}</Text>
      </View>
    </View>
  );
};

export default Post;
