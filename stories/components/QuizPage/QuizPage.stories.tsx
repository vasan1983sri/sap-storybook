import type {Meta, StoryObj} from '@Storybook/react'
import {QuizPage} from "./QuizPage";
import quizzes from "../Questions/Quizzes.json";

const meta : Meta<typeof QuizPage> = {
    component: QuizPage,
    title: 'Quiz',
    tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof meta>

export const sampleQuiz: Story ={
}