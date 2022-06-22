import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterView from '../../../storybook/stories/CenterView';
import MoreLessText from './index';

const longText =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, quasi adipisci? Ex laboriosam, accusantium cupiditate aperiam debitis omnis, fuga numquam iusto veniam perferendis voluptas cumque ipsum molestias eius commodi et';

storiesOf('Less More Text', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Default', () => <MoreLessText numberOfLines={2}>{longText}</MoreLessText>);
