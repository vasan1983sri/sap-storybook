import type { Meta, StoryObj } from "@storybook/react";
import {AutoSearch} from "./AutoSearch";
import State from "../../utils/State.json";

const meta: Meta<typeof AutoSearch> = {
    component: AutoSearch,
    title: 'AutoSearch',
    tags: ['autodocs']
}

export default meta;

type Story = StoryObj<typeof AutoSearch>;

export const Base: Story = {
    
}