import { Image, TouchableOpacity, View } from 'react-native';
import Poster2 from '../assets/img/poster-2.jpg';

const PostBanner = () => {
  return (
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
  );
};

export default PostBanner;
