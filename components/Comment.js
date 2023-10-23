import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Avatar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Comment = () => {
  const [like, isLike] = useState(false);

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '15px',
      }}
    >
      <Avatar.Image size={50} source={require('../assets/img/person.jpg')} />
      <View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: '10px' }}>
          <Text
            style={{
              fontWeight: 'bold',
              color: 'black',
              fontSize: '14px',
              marginRight: '10px',
            }}
          >
            hoangnguyen.19
          </Text>
          <Text style={{ fontWeight: 'bold', color: 'rgba(0,0,0,0.5)', fontSize: '14px' }}>
            12 giờ
          </Text>
        </View>
        <Text style={{ width: '240px', marginBottom: '10px' }}>
          Loremasdsasss sssssssssssssssss sssssssssssssssssasxczcxz
        </Text>
        <Text style={{ fontWeight: 'bold', color: 'rgba(0,0,0,0.5)', fontSize: '14px' }}>
          Trả lời
        </Text>
      </View>
      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity onPress={() => isLike(!like)}>
          <Icon name="heart" size={24} color={like ? 'red' : 'black'} />
        </TouchableOpacity>
        <Text
          style={{
            fontWeight: 'bold',
            color: 'black',
            fontSize: '14px',
            marginTop: '10px',
          }}
        >
          85
        </Text>
      </View>
    </View>
  );
};

export default Comment;
