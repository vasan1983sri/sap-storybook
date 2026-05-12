import type { Meta, StoryObj } from '@storybook/react';
import { StrikeThrough } from './StrikeThrough';

const meta: Meta<typeof StrikeThrough> = {
    component: StrikeThrough,
    title: 'StrikeThrough',
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof StrikeThrough>;

export const Default: Story = {
    render: () => <StrikeThrough />,
};