import type { Meta, StoryObj } from "@storybook/react";
import {QuizPage} from "./QuizPage";

const meta : Meta<typeof QuizPage> = {
    component: QuizPage,
    title: 'Quiz',
    tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof meta>

export const sampleQuiz: Story ={
}