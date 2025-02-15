import type {Meta, StoryObj} from "@storybook/react";
import TrafficLight from "./TrafficLight";
import React from "react";

const meta: Meta<typeof TrafficLight> = {
    component: TrafficLight,
    title: 'Traffic Light',
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: {type: "select"},
            options: ['green','yellow','red']
        }
    }
}
export default meta;

type Story = StoryObj<typeof meta>;


export const Base: Story = {

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
