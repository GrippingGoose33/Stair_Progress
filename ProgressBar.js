import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from "react-types";
import styles from "./style";
import {ProgressBarComponent, progressProps} from "./ProgressBarComponent";
import style from './style';

function ProgressLabel({show, progress}) {
    return (
        show && (
            <Text stile={style.progressText}>{Math.round(progress*100)}%</Text>
        )
    )
}

function ProgressBar({progress, label}) {
    return (
        <View>
            <ProgressLabel show={label} progress={progress}/>
            <ProgressBarComponent
                {...progressProps}
                style={styles.progress}
                progress={progress}
            />
        </View>
    );
}

ProgressBar.propTypes = {
    progress: PropTypes.number.isRequired,
    lable: PropTypes.bool.isRequired,
}

ProgressBar.defaultProps = {
    progress: 0,
    lable: false,
}

export default ProgressBar;