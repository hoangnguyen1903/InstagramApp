import { Image, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import Name from '../assets/img/name.png';
import Plane from '../assets/img/paper-plane.png';
import Person from '../assets/img/person.jpg';
import Poster1 from '../assets/img/poster-1.jpg';
import Poster2 from '../assets/img/poster-2.jpg';
import Poster3 from '../assets/img/poster-3.jpg';
import Icon from 'react-native-vector-icons/FontAwesome5';

const HomeScreen = () => {
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
          <Image
            source={Plane}
            style={{ width: '23px', height: '20px', tintColor: '#0000', marginLeft: '25px' }}
          />
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator
        contentContainerStyle={{
          height: 'auto',
        }}
      >
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            marginTop: '10px',
            borderBottomWidth: '1px',
            borderStyle: 'solid',
            borderBottomColor: 'rgba(0,0,0,0.3)',
            paddingBottom: '5px',
          }}
        >
          <View style={{ alignItems: 'center', marginLeft: '15px', width: '80px' }}>
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
          <View style={{ alignItems: 'center', marginLeft: '15px', width: '80px' }}>
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
          <View style={{ alignItems: 'center', marginLeft: '15px', width: '80px' }}>
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
          <View style={{ alignItems: 'center', marginLeft: '15px', width: '80px' }}>
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
          <View style={{ alignItems: 'center', marginLeft: '15px', width: '80px' }}>
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
                source={Person}
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '30px',
                  marginRight: '10px',
                }}
              />
              <View>
                <Text style={{ fontStyle: 'italic', fontSize: '16px' }}>hoangnguyen.19</Text>
                <Text style={{ fontSize: '16px', fontWeight: 'bold' }}>Ho Chi Minh, Viet Nam</Text>
              </View>
            </View>
            <Icon name="ellipsis-v" size={24} />
          </View>
          <View style={{ marginTop: '10px' }}>
            <Image source={Poster1} style={{ width: '100%', height: '400px' }} />
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
                <Icon name="heart" size={28} style={{ marginRight: '15px' }} />
                <Icon name="comment" size={28} style={{ marginRight: '15px' }} />
                <Image
                  source={Plane}
                  style={{ width: '28px', height: '28px', tintColor: 'black' }}
                />
              </View>
              <Icon name="bookmark" size={28} />
            </View>
            <Text style={{ fontWeight: 'bold', fontSize: '16px', marginBottom: '10px' }}>
              44.686 lượt thích
            </Text>
            <TouchableOpacity>
              <Text style={{ fontSize: '16px', color: '#ccccc', marginBottom: '10px' }}>
                Xem tất cả 64 bình luận
              </Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: '10px' }}>
              <Image
                source={Person}
                style={{ width: '24px', height: '24px', borderRadius: '30px', marginRight: '10px' }}
              />
              <TextInput
                style={{ outlineStyle: 'none' }}
                placeholder="Thêm bình luận..."
                placeholderTextColor="#ccccc"
              />
            </View>
            <Text style={{ color: '#ccccc' }}>3 ngày trước</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
