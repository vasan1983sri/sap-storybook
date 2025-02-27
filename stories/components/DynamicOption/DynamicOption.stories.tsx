import { fn } from "@storybook/test";
import { DynamicOption } from "./DynamicOption";
import { Meta, StoryObj } from "@Storybook/react"

const meta: Meta<typeof DynamicOption> = {

    component: DynamicOption,
    title: 'DynamicOption',
    tags: ['autodocs'],
    parameters: {
        layout: 'centered'
    },
    args: { onClick: fn()}
}

export default meta

type Story = StoryObj<typeof meta>

export const optionRadio: Story = {
    args: {
        type: "radio",
        value: 'Radio Button',
        transform: 'scale(1.5)'
    }
}

export const optionCheckbox: Story = {
    args: {
        type: "checkbox",
        value: 'Small Checkbox',
        transform: 'scale(1.5)'
    }
}

export const optionTexbox: Story = {
    args: {
        type: "input"
    }
}