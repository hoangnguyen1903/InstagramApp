import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ImageUpload from '../components/ImageUpload';

const NewPostScreen = () => {
  return (
    <View style={{ width: '100%', height: '100%', paddingHorizontal: '15px' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: '15px' }}>
        <TouchableOpacity>
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
          Bài biết mới
        </Text>
        <TouchableOpacity>
          <Text style={{ color: '#409eff', fontSize: '20px', fontWeight: '600' }}>Chia sẻ</Text>
        </TouchableOpacity>
      </View>
      <ImageUpload />
      <View style={{ marginTop: '15px' }}>
        <View
          style={{
            borderBottomWidth: '1px',
            borderStyle: 'solid',
            borderBottomColor: 'rgba(0,0,0,0.3)',
            paddingVertical: '15px',
          }}
        >
          <TextInput
            placeholder="Nội dung bài viết..."
            style={{ outlineStyle: 'none', fontSize: '18px' }}
          />
        </View>
        <View
          style={{
            borderBottomWidth: '1px',
            borderStyle: 'solid',
            borderBottomColor: 'rgba(0,0,0,0.3)',
            paddingVertical: '15px',
          }}
        >
          <TextInput
            placeholder="Vị trí bài viết..."
            style={{ outlineStyle: 'none', fontSize: '18px' }}
          />
        </View>
      </View>
    </View>
  );
};

export default NewPostScreen;
