import React, { useState } from 'react';
import { storiesOf } from '@storybook/react-native';
import Title from './index';
import CenterView from '../../../storybook/stories/CenterView';

storiesOf('Title', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('normal', () => <Title titleName='title' />)
  .add('headingPage', () => <Title.HeadingPage titleName='Welcome' />)
  .add('subHeadingPage', () => (
    <Title.subHeadingPage titleName='Please enter your data to continue' />
  ))
  .add('titleLeftSection', () => <Title.titleLeftSection titleName='New Product' />)
  .add('titleRightSection', () => <Title.titleRightSection titleName='View all' />);
