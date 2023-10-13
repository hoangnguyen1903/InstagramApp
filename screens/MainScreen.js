import { Image, Text, View, ScrollView } from 'react-native';
import Name from '../assets/img/name.png';
import Plane from '../assets/img/paper-plane.png';
import Person from '../assets/img/person.jpg';
import Icon from 'react-native-vector-icons/FontAwesome5';

const MainScreen = () => {
  return (
    <View style={{ width: '100%', height: '100%', padding: '15px' }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View
          style={{
            paddingVertical: '15px',
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
          <Image
            source={Plane}
            style={{ width: '23px', height: '20px', tintColor: '#0000', marginLeft: '25px' }}
          />
        </View>
      </View>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{
          marginTop: '10px',
        }}
      >
        <View style={{ alignItems: 'center', marginRight: '30px', width: '80px' }}>
          <Image
            source={Person}
            style={{
              borderRadius: '50px',
              width: '80px',
              height: '80px',
              borderWidth: '3px',
              borderColor: '#ae1188',
              marginBottom: '10px',
            }}
          />
          <Text>Tin của bạn</Text>
        </View>
        <View style={{ alignItems: 'center', marginRight: '30px', width: '80px' }}>
          <Image
            source={Person}
            style={{
              borderRadius: '50px',
              width: '80px',
              height: '80px',
              borderWidth: '3px',
              borderColor: '#ae1188',
              marginBottom: '10px',
            }}
          />
          <Text>Tin của bạn</Text>
        </View>
        <View style={{ alignItems: 'center', marginRight: '30px', width: '80px' }}>
          <Image
            source={Person}
            style={{
              borderRadius: '50px',
              width: '80px',
              height: '80px',
              borderWidth: '3px',
              borderColor: '#ae1188',
              marginBottom: '10px',
            }}
          />
          <Text>Tin của bạn</Text>
        </View>
        <View style={{ alignItems: 'center', marginRight: '30px', width: '80px' }}>
          <Image
            source={Person}
            style={{
              borderRadius: '50px',
              width: '80px',
              height: '80px',
              borderWidth: '3px',
              borderColor: '#ae1188',
              marginBottom: '10px',
            }}
          />
          <Text>Tin của bạn</Text>
        </View>
        <View style={{ alignItems: 'center', marginRight: '30px', width: '80px' }}>
          <Image
            source={Person}
            style={{
              borderRadius: '50px',
              width: '80px',
              height: '80px',
              borderWidth: '3px',
              borderColor: '#ae1188',
              marginBottom: '10px',
            }}
          />
          <Text>Tin của bạn</Text>
        </View>
        <View style={{ alignItems: 'center', marginRight: '30px', width: '80px' }}>
          <Image
            source={Person}
            style={{
              borderRadius: '50px',
              width: '80px',
              height: '80px',
              borderWidth: '3px',
              borderColor: '#ae1188',
              marginBottom: '10px',
            }}
          />
          <Text>Tin của bạn</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default MainScreen;
