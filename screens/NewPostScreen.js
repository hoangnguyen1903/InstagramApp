import { Text, TextInput, TouchableOpacity, View, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ImageUpload from '../components/ImageUpload';
import { useState } from 'react';

const NewPostScreen = ({ navigation }) => {
  const [content, setContent] = useState('');
  const [location, setLocation] = useState('');

  return (
    <View style={{ width: '100%', height: '100%', paddingHorizontal: '15px' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: '15px' }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
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
      <View style={{ marginTop: '15px', marginBottom: '30px' }}>
        <TextInput
          value={content}
          onChangeText={(text) => setContent(text)}
          placeholder="Nội dung bài viết..."
          placeholderTextColor="rgba(0,0,0,0.5)"
          style={{
            outlineStyle: 'none',
            borderBottomWidth: '1px',
            borderBottomColor: '#ccc',
            borderStyle: 'solid',
            paddingBottom: '10px',
            marginTop: '20px',
            fontSize: '20px',
          }}
        />
        <TextInput
          value={location}
          onChangeText={(text) => setLocation(text)}
          placeholder="Vị trí bài viết..."
          placeholderTextColor="rgba(0,0,0,0.5)"
          style={{
            outlineStyle: 'none',
            borderBottomWidth: '1px',
            borderBottomColor: '#ccc',
            borderStyle: 'solid',
            paddingBottom: '10px',
            marginTop: '20px',
            fontSize: '20px',
          }}
        />
      </View>
      <View style={{ marginBottom: '15px' }}>
        <Button title="Đăng tải" disabled={content && location ? false : true} />
      </View>
    </View>
  );
};

export default NewPostScreen;
