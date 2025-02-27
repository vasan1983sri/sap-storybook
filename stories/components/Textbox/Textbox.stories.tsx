import TextBox from "./TextBox";
import { Meta, StoryObj } from "@Storybook/react"

const meta: Meta<typeof TextBox> = {
    component: TextBox,
    title: 'TextBox',
    tags: ['autodocs'],
    argTypes: {
        type: {
            description: 'Type of Input its accept'
        },
        width: {
            description: 'Width of the text box'
        },
        textAlign: {
            description: 'Text align'
        }
    }
}

export default meta;

type Story = StoryObj<typeof meta>;

export const defaultTextBox: Story = {}