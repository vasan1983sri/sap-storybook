import { Meta, StoryObj} from "@storybook/react";
import { Sudoku } from "./Sudoku";

const meta: Meta<typeof Sudoku> = {
    title: "Sudoku",
    component: Sudoku,
};

export default meta;

type Story = StoryObj<typeof Sudoku>;

export const Primary: Story = {
    args: {
        // Add your props here
    },
};