import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    return (
        <View style={[styles.containerStayle, props.style]}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStayle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#FFF',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#DDD',
        position: 'relative'
    }
};

export { CardSection };
