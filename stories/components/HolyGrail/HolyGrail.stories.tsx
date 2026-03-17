import { Meta, StoryObj } from '@storybook/react';
import { HolyGrail } from './HolyGrail';
const meta: Meta<typeof HolyGrail> = {
    component: HolyGrail,
    title: 'Prep/HolyGrail',
    tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const SampleHolyGrail: Story = {};