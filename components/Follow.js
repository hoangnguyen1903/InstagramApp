import { Text, TouchableOpacity, View } from 'react-native';
import { Avatar } from 'react-native-paper';

const Follow = ({ name }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: '15px',
      }}
    >
      <Avatar.Image size={60} source={require('../assets/img/person.jpg')} />
      <View style={{ justifyContent: 'space-around' }}>
        <Text style={{ color: 'black', fontWeight: 'bold' }}>hoangnguyen.19</Text>
        <Text style={{ color: 'rgba(0,0,0,0.7)' }}>Huy Hoang Nguyen</Text>
      </View>
      {name === 'Follower' ? (
        <>
          <TouchableOpacity
            style={{
              backgroundColor: 'blue',
              paddingHorizontal: '10px',
              paddingVertical: '10px',
              borderRadius: '10px',
            }}
          >
            <Text
              style={{
                textAlign: 'center',
                color: 'white',
                fontWeight: 'bold',
              }}
            >
              Theo dõi
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#ccc',
              paddingHorizontal: '10px',
              paddingVertical: '10px',
              borderRadius: '10px',
            }}
          >
            <Text style={{ textAlign: 'center', color: 'black', fontWeight: 'bold' }}>Xoá</Text>
          </TouchableOpacity>
        </>
      ) : (
        <TouchableOpacity
          style={{
            backgroundColor: '#ccc',
            paddingHorizontal: '10px',
            paddingVertical: '10px',
            borderRadius: '10px',
          }}
        >
          <Text style={{ textAlign: 'center', color: 'black', fontWeight: 'bold' }}>
            Huỷ theo dõi
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Follow;
