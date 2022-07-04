import React from 'react';
import { View, Button} from 'react-native';
import loading from './loading';
import styles from './styles';

const Third  = loading(({navigation}) => (
    <View style={styles.container}>
        <Button title='First' 
            onPress={() => navigation.navigate('First')}
        />
        <Button title='Second'
            onPress={() => navigation.navigate('Second')}
        />
    </View>
));

export default Third;