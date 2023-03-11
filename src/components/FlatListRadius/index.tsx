import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  FlatList,
} from 'react-native';
import {Text} from '../Text';
import Icon from 'react-native-vector-icons/FontAwesome5';

type FlatListRadiusProps = {
  data?: any;
  onPress: Function;
  selectedId: string;
};

const FlatListRadius: React.FC<FlatListRadiusProps> = props => {
  return (
    <FlatList
      style={{paddingTop: 15}}
      data={props.data}
      renderItem={item => (
        <TouchableOpacity
          onPress={() => {
            return props.onPress(item.item.id);
          }}
          style={styles.item}>
          <View style={{flex: 0.2, alignItems: 'center'}}>
            <View style={{backgroundColor: '#F2F2F2'}}>
              <Icon name="image" size={20} color="#111111" />
            </View>
          </View>
          <View style={{flex: 0.5, marginTop: -10}}>
            <Text style={{fontSize: 12, fontWeight: '200'}}>
              Serial: {item.item.serial}
            </Text>
            <Text style={styles.title}>{item.item.title}</Text>
          </View>
          <View style={{flex: 0.3, alignItems: 'center'}}>
            {item.item.id === props.selectedId ? (
              <Icon
                name="check-circle"
                size={18}
                color="#469B72"
                style={{
                  borderRadius: 10,
                  backgroundColor: '#469B72',
                  color: 'white',
                }}
              />
            ) : (
              <Icon
                name="circle"
                size={18}
                color="#202020"
                borderColor="black"
              />
            )}
          </View>
        </TouchableOpacity>
      )}
      keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#ffffff',
  },
  container: {
    padding: 20,
    marginTop: -5,
    height: '100%',
    width: '100%',
    backgroundColor: '#FFFFFF',
  },
  imageBox: {
    alignItems: 'center',
    width: 10,
    height: 10,
  },
  content: {
    paddingTop: 40,
  },
  btnStyle: {
    color: '#ffffff',
    borderRadius: 8,
  },

  item: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    padding: 10,
    height: 70,
    borderColor: '#E2E2E2',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
    paddingTop: 28,
  },
  title: {
    fontSize: 16,
  },
  icon: {marginTop: -14},
});

export {FlatListRadius};
