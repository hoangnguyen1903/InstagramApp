import { View, ScrollView } from 'react-native';
import PostBanner from '../components/PostBanner';
import Search from '../components/Search';

const SearchScreen = ({ navigation }) => {
  return (
    <View style={{ width: '100%', height: '100%' }}>
      <Search />
      <ScrollView>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: '5px',
          }}
        >
          <PostBanner navigation={navigation} />
          <PostBanner navigation={navigation} />
          <PostBanner navigation={navigation} />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: '5px',
          }}
        >
          <PostBanner navigation={navigation} />
          <PostBanner navigation={navigation} />
          <PostBanner navigation={navigation} />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: '5px',
          }}
        >
          <PostBanner navigation={navigation} />
          <PostBanner navigation={navigation} />
          <PostBanner navigation={navigation} />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: '5px',
          }}
        >
          <PostBanner navigation={navigation} />
          <PostBanner navigation={navigation} />
          <PostBanner navigation={navigation} />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: '5px',
          }}
        >
          <PostBanner navigation={navigation} />
          <PostBanner navigation={navigation} />
          <PostBanner navigation={navigation} />
        </View>
      </ScrollView>
    </View>
  );
};

export default SearchScreen;
