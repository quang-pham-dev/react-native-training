import React, { Component } from 'react';
import { Text, View } from 'react-native';

// Components
import Title from 'components/Title';

// Styles
import styles from './styles';
import { BOUNDARY_ERROR_MESSAGE } from 'constants/Common';

export default class ErrorBoundary extends Component {
  state = {
    hasError: false,
    error: null
  };

  static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <View style={styles.container}>
          <View style={styles.subContainer}>
            <Title.HeadingPage
              style={styles.bigBoldText}
              titleName={BOUNDARY_ERROR_MESSAGE}
              titleAlign='center'
            />
          </View>
        </View>
      );
    }

    return this.props.children;
  }
}
