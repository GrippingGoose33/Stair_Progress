import React from 'react';
import { View, Button} from 'react-native';
import loading from './loading';
import styles from './styles';

const First  = loading(({navigation}) => (
    <View style={styles.container}>
        <Button title='Second' 
            onPress={() => navigation.navigate('Second')}
        />
        <Button title='Third'
            onPress={() => navigation.navigate('Third')}
        />
    </View>
));

export default First;