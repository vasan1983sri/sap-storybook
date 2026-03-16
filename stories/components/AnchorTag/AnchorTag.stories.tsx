import type { Meta, StoryObj } from '@storybook/react';
import { AnchorTag } from './AnchorTag';

const meta: Meta<typeof AnchorTag> = {
    component: AnchorTag,
    title: 'AnchorTag',
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof AnchorTag>;

export const Default: Story = {
    args: {
        href: '#',
        children: 'Anchor Tag',
    },
};