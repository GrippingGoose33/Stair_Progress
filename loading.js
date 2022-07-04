import React, {useState, useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';
import styles from './styles';

const loading = (Wrapped) => {
    return function LoadingWrapper(props){
        const [loading, setLoading] = useState(true);
        useEffect(() => {
            setTimeout(() => {
                setLoading(true);
            }, 1000);
        }, []);

        if (loading) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator size="large"/>
                </View>
            );
        }
        else{
            return <Wrapped {...props} />;
        }
    }
}

export default loading;