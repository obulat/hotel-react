import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from './Button';

export default {
  title: 'Form Elements/Button',
  component: Button,
  decorators: [story => <div style={{ width: 'minmax(100%, 320px)', height: '44px' }}>{story()}</div>],
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Click me',
};

export const PrimaryHigh = Template.bind({});
PrimaryHigh.args = {
  label: 'Click me',
  height: 'full'
};

export const Outlined = Template.bind({});
Outlined.args = {
  label: 'Click me',
  type: 'outlined'
};

export const Wide = Template.bind({});
Wide.args = {
  width: 'full',
  label: 'Click Me',
};

export const WideIcon = Template.bind({});
WideIcon.args = {
  width: 'full',
  label: 'Click Me',
  icon: 'arrow_forward'
};
export const WideHighIcon = Template.bind({});
WideHighIcon.args = {
  width: 'full',
  height: 'full',
  label: 'Click Me',
  icon: 'arrow_forward'
};
export const Text = Template.bind({});
Text.args = {
  type: 'text',
  label: 'Click me',
};
