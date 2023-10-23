import { View, TouchableOpacity, Text } from 'react-native';

const TabBarFollow = ({ state, descriptors, navigation, position }) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const inputRange = state.routes.map((_, i) => i);
        const opacity = position.interpolate({
          inputRange,
          outputRange: inputRange.map((i) => (i === index ? 1 : 0)),
        });

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            <View
              style={{
                alignItems: 'center',
                paddingVertical: '15px',
                borderBottomWidth: '1px',
                borderStyle: 'solid',
                borderBottomColor: 'black',
                opacity: isFocused ? 1 : 0.5,
              }}
            >
              <Text>{label === 'Follower' ? 'Người theo dõi: 3' : 'Đang theo dõi: 69'}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBarFollow;
