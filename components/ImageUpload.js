import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform } from 'react-native';
import DefaultImage from '../assets/img/default-image.png';
import * as ImagePicker from 'expo-image-picker';

const ImageUpload = () => {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', marginTop: '15px' }}>
      <Image
        source={{ uri: image ? image : DefaultImage }}
        style={{
          width: '100%',
          height: 400,
          overflow: 'auto',
          objectFit: 'cover',
          marginBottom: '10px',
        }}
      />
      <Button title="Chọn ảnh" onPress={pickImage} />
    </View>
  );
};

export default ImageUpload;
