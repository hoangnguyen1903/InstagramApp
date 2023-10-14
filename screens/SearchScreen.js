import { Image, TextInput, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Poster1 from '../assets/img/poster-1.jpg';
import Poster2 from '../assets/img/poster-2.jpg';
import Poster3 from '../assets/img/poster-3.jpg';

const SearchScreen = () => {
  return (
    <View style={{ width: '100%', height: '100%' }}>
      <View
        style={{
          backgroundColor: 'rgba(0,0,0,0.1)',
          paddingHorizontal: '20px',
          paddingVertical: '10px',
          marginHorizontal: '15px',
          borderRadius: '10px',
          flexDirection: 'row',
          marginBottom: '15px',
        }}
      >
        <Icon name="search" size={24} />
        <TextInput
          style={{ outlineStyle: 'none', marginLeft: '20px', fontSize: '18px', fontWeight: '500' }}
          placeholder="Tìm kiếm"
          placeholderTextColor="rgba(0,0,0,0.8)"
        />
      </View>
      <View>
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity style={{ position: 'relative', width: '33%', height: '120px' }}>
            <Image source={Poster2} style={{ width: '100%', height: '100%' }} />
            <View
              style={{
                position: 'absolute',
                width: '20px',
                height: '20px',
                borderRadius: '5px',
                backgroundColor: 'rgba(255,255,255,0.8)',
                top: '10px',
                right: '10px',
                zIndex: '99',
              }}
            ></View>
            <View
              style={{
                position: 'absolute',
                width: '20px',
                height: '20px',
                borderRadius: '5px',
                backgroundColor: 'rgba(255,255,255,0.5)',
                top: '15px',
                right: '5px',
                zIndex: '9',
              }}
            ></View>
          </TouchableOpacity>
          <TouchableOpacity style={{ position: 'relative', width: '33%', height: '120px' }}>
            <Image source={Poster2} style={{ width: '100%', height: '100%' }} />
            <View
              style={{
                position: 'absolute',
                width: '20px',
                height: '20px',
                borderRadius: '5px',
                backgroundColor: 'rgba(255,255,255,0.8)',
                top: '10px',
                right: '10px',
                zIndex: '99',
              }}
            ></View>
            <View
              style={{
                position: 'absolute',
                width: '20px',
                height: '20px',
                borderRadius: '5px',
                backgroundColor: 'rgba(255,255,255,0.5)',
                top: '15px',
                right: '5px',
                zIndex: '9',
              }}
            ></View>
          </TouchableOpacity>
          <TouchableOpacity style={{ position: 'relative', width: '33%', height: '120px' }}>
            <Image source={Poster2} style={{ width: '100%', height: '100%' }} />
            <View
              style={{
                position: 'absolute',
                width: '20px',
                height: '20px',
                borderRadius: '5px',
                backgroundColor: 'rgba(255,255,255,0.8)',
                top: '10px',
                right: '10px',
                zIndex: '99',
              }}
            ></View>
            <View
              style={{
                position: 'absolute',
                width: '20px',
                height: '20px',
                borderRadius: '5px',
                backgroundColor: 'rgba(255,255,255,0.5)',
                top: '15px',
                right: '5px',
                zIndex: '9',
              }}
            ></View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SearchScreen;
