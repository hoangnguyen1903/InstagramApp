import { Image, TextInput, View, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import PostBanner from '../components/PostBanner';

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
      <ScrollView>
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
      </ScrollView>
    </View>
  );
};

export default SearchScreen;
