import type {Meta, StoryObj} from "@storybook/react";
import TrafficLight from "./TrafficLight";

const meta: Meta<typeof TrafficLight> = {
    component: TrafficLight,
    title: 'Traffic Light'
}
export default meta;

type Story = StoryObj<typeof meta>;


export const Base: Story = {
    args: {
        variant: 'green'
    }
}

export const Yellow: Story = {
    args: {
        variant: 'yellow'
    }
}

export const Red: Story = {
    args: {
        variant: 'red'
    }
}

export const customTrafficLight: Story = {
    args: {
        variant: 'yellow'
    },
    render: function Component(args) {
        const a = args.variant;
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid black',
                gap: 10,
                width: 'max-content',
                padding: 10
            }}>
                <TrafficLight variant="red"/>
                <TrafficLight variant="yellow"/>
                <TrafficLight variant="green"/>
            </div>
        )
    }

}
