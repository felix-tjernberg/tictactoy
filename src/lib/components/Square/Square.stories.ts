import type { Meta, StoryObj } from '@storybook/svelte'
import { expect, jest } from '@storybook/jest'
import { within, userEvent } from '@storybook/testing-library'

import Square from './SquareStoryWrapper.svelte'
import { FUNCTION_TEST_STRING } from './FUNCTION_TEST_STRING'

const meta = {
    title: 'Components/Square',
    component: Square,
    tags: ['autodocs'],
    argTypes: {
        label: { control: 'text' },
        functionTest: { table: { disable: true } },
        name: { table: { disable: true } },
        value: { table: { disable: true } },
    },
} satisfies Meta<Square>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultState: Story = {}

const story1Label = 'I be label'
export const Story1: Story = {
    args: {
        label: story1Label,
    },
}
Story1.storyName = 'Label Story'
Story1.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const squareText = canvas.getByText(story1Label)
    expect(squareText).toBeTruthy()
}

export const Story2: Story = {
    args: {
        label: 'Click me for event',
        functionTest: true,
    },
}
Story2.storyName = 'Event Story'
Story2.play = async ({ canvasElement }) => {
    console.log = jest.fn()
    const canvas = within(canvasElement)
    const square = canvas.getByRole('button')
    await userEvent.click(square)
    await expect(console.log).toHaveBeenCalledWith(FUNCTION_TEST_STRING)
}

const story3name = 'I be name'
const story3value = 'I be value'
export const Story3: Story = {
    args: {
        name: story3name,
        value: story3value,
    },
}
Story3.storyName = 'Value & Name Story'
Story3.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const square = canvas.getByRole('button') as HTMLButtonElement
    expect(square.name).toBe(story3name)
    expect(square.value).toBe(story3value)
}

const story4label = 'I be hover label'
export const Story4: Story = {
    args: {
        hoverLabel: story4label,
    },
}
Story4.storyName = 'Hover Story'
Story4.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const square = canvas.getByRole('button') as HTMLButtonElement
    const hoverLabel = canvas.getByTestId('hover-label') as HTMLSpanElement
    await userEvent.hover(square)
    await expect(hoverLabel.textContent).toBe(story4label)
}
