import type {Meta, StoryObj} from '@Storybook/react'
import { Checkboxes } from './Checkboxes'
import {fn} from "@storybook/test";

const meta: Meta<typeof Checkboxes> = {
    component: Checkboxes,
    title: 'Checkbox',
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    args: { onClick: fn()}
}

export default meta;

type Story = StoryObj<typeof meta>

export const smallCheckbox: Story = {
    args: {
        checked: '',
        transform: 'scale(1.0)',
        name: 'Small Checkbox',
        value: 'Small'
    }
}

export const mediumCheckbox: Story = {
    args: {
        checked: 'checked',
        transform: 'scale(1.5)',
        name: 'Medium Checkbox'
    }
}

export const largeCheckbox: Story = {
    args: {
        transform: 'scale(2.0)',
        name: 'Large Checkbox'
    }
}

