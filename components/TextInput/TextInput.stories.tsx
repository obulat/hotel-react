import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { TextInput, TextInputProps } from './TextInput';

export default {
  title: 'Form Elements/TextInput',
  component: TextInput,
  decorators: [story => <div style={{ width: 'minmax(100%, 320px)' }}>{story()}</div>],
} as Meta;

const Template: Story<TextInputProps> = (args) => <TextInput {...args} />;

export const TextField = Template.bind({});
TextField.args = {
  label: 'Text Field',
  status: 'default',
  placeholder: 'type here'
};
