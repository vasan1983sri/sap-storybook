import { Meta, StoryObj } from "@storybook/react";
import Time from './Time'

const meta: Meta<typeof Time> = {
    component: Time,
    title: 'Time',
    tags: ['autodocs']
}

export default meta;

type Story = StoryObj<typeof Time>
export const Default: Story = {
    args:{
        startTime: new Date()
    }
    
}