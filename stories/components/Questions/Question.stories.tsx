import type {Meta, StoryObj} from '@Storybook/react'
import {Questions} from "./Questions";

const meta: Meta<typeof Questions> = {
    component: Questions,
    title: 'Questions',
    tags: ['autodocs']
}

export default meta;

type Story = StoryObj<typeof meta>

export const sample: Story = {}