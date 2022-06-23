import React, { Component } from 'react';
import { View } from 'react-native';

// LIBS
// import * as Sentry from '@sentry/react-native';


// Components
import Title from 'components/Title';

// Constants
import { BOUNDARY_ERROR_MESSAGE } from 'constants/Common';

// Styles
import styles from './styles';

export default class ErrorBoundary extends Component {
  state = {
    hasError: false,
    error: null
  };

  static getDerivedStateFromError(error: any) {
    // Sentry.captureException(error);
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
