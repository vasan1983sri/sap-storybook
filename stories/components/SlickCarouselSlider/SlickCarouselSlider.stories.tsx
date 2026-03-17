import { Meta, StoryObj } from "@storybook/react";
import { SlickCarouselSlider } from "./SlickCarouselSlider";

const meta: Meta<typeof SlickCarouselSlider> = {
    component: SlickCarouselSlider,
    title: "SlickCarouselSlider",
    tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof SlickCarouselSlider>;
export const customSlider: Story = {
    args: {
        // Add your custom props here
    },
};