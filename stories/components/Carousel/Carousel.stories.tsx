import { Meta, StoryObj } from '@storybook/react';
import { Carousel } from './Carousel';

const meta: Meta<typeof Carousel> = {
    component: Carousel,
    title: 'Carousel',
    tags: ['autodocs'],
}; 

export default meta
type Story = StoryObj<typeof meta>;

export const SampleCarousel: Story = {}