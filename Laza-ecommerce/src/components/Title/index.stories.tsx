import React, { useState } from 'react';
import { storiesOf } from '@storybook/react-native';
import Title from './index';
import CenterView from '../../../storybook/stories/CenterView';

storiesOf('Title', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => <Title titleName='title' />)
  .add('Heading Page', () => <Title.HeadingPage titleName='Welcome' />)
  .add('Sub Heading Page', () => (
    <Title.subHeadingPage titleName='Please enter your data to continue' />
  ))
  .add('Title Left Section', () => <Title.titleLeftSection titleName='New Product' />)
  .add('Title Right Section', () => <Title.titleRightSection titleName='View all' />);
