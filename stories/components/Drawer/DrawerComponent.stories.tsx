import { DrawerComponent } from "./DrawerComponent";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof DrawerComponent> = {
    component: DrawerComponent,
    title: "Drawer",
    tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const SampleDrawer: Story = {
    render: () => <DrawerComponent />,
};