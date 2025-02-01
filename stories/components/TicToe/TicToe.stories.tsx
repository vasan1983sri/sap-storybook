import {Meta, StoryObj} from "@storybook/react";
import TicToe from "./TicToe";

const meta: Meta <typeof TicToe> = {
    component: TicToe,
    title: 'TicToe',
    tags: ['autodocs']
}

export default meta;

type Story = StoryObj<typeof meta>

export const defaultTicToe: Story ={

}

