import type {Meta, StoryObj} from "@storybook/react";
import Calculator from "./Calculator";
import {within, userEvent} from "@storybook/testing-library";
import {expect} from "@storybook/jest";

const meta: Meta<typeof Calculator> = {
    component: Calculator,
    title: 'Calculator',
    tags: ['autodocs']
}

export default meta;

type Story = StoryObj<typeof meta>;

export const defaultCalculator: Story = {
    play: async ({canvasElement}) => {
        const canvas = within(canvasElement)
        const button8Exists = canvas.getByText('8')
        await expect(button8Exists).toBeInTheDocument();
    }
}