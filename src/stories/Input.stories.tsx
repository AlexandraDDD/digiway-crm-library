// stories/Input.stories.tsx
import React from 'react'
import { type StoryFn, type Meta } from '@storybook/react'
import { Input, InputProps } from '../components/Input'

export default {
  title: 'Components/Input',
  component: Input
} as Meta

const Template: StoryFn<React.ComponentProps<typeof Input>> = (args) => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
  value: '',
  onChange: () => {},
  placeholder: 'Enter text'
} as React.ComponentProps<typeof Input>

export const WithValue = Template.bind({})
WithValue.args = {
  value: 'Hello, World!',
  onChange: () => {},
  placeholder: 'Enter text'
} as React.ComponentProps<typeof Input>
