import { Image, Linking, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Logo from '../assets/img/logo.png';
import Meta from '../assets/img/meta.png';
import Icon from 'react-native-vector-icons/FontAwesome';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={{ width: '100%', height: '100%', paddingHorizontal: '20px' }}>
      <Text style={{ textAlign: 'center', color: '#A6A6AA', fontSize: '18px', marginTop: '20px' }}>
        Tiếng Việt
      </Text>
      <Image
        source={Logo}
        style={{ width: '60px', height: '60px', marginHorizontal: 'auto', marginTop: '40px' }}
      />
      <View style={{ marginTop: '40px' }}>
        <TextInput
          placeholder="Tên người dùng, email/số di động"
          style={{
            padding: '15px',
            borderWidth: '1px',
            borderColor: '#A6A6AA',
            borderStyle: 'solid',
            borderRadius: '10px',
            color: '#A6A6AA',
            fontWeight: '600',
            fontSize: '18px',
          }}
        />
        <TextInput
          placeholder="Mật khẩu"
          style={{
            padding: '15px',
            borderWidth: '1px',
            borderColor: '#A6A6AA',
            borderStyle: 'solid',
            borderRadius: '10px',
            color: '#A6A6AA',
            fontWeight: '600',
            fontSize: '18px',
            marginTop: '20px',
          }}
        />
      </View>
      <View style={{ marginTop: '40px' }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#1544eb',
            borderRadius: '30px',
            paddingVertical: '15px',
          }}
          onPress={() => navigation.navigate('Main')}
        >
          <Text
            style={{
              color: '#ffff',
              fontSize: '18px',
              textAlign: 'center',
              fontWeight: '600',
            }}
          >
            Đăng nhập
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ChangePassword')}>
          <Text
            style={{ fontSize: '18px', marginTop: '10px', textAlign: 'center', fontWeight: '600' }}
          >
            Bạn quên mật khẩu ư?
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 'auto', marginBottom: '20px' }}>
        <TouchableOpacity
          style={{
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: '#1544eb',
            paddingVertical: '15px',
            borderRadius: '30px',
          }}
          onPress={() => navigation.navigate('Signup')}
        >
          <Text style={{ color: '#1544eb', textAlign: 'center', fontWeight: '600' }}>
            Tạo tài khoản mới
          </Text>
        </TouchableOpacity>
        <View
          style={{
            marginTop: '10px',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image source={Meta} style={{ width: '30px', height: '20px' }} />
          <Text style={{ fontSize: '20px', fontWeight: '600', marginLeft: '5px' }}>Meta</Text>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;