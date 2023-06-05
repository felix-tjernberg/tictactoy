import type { Meta, StoryObj } from '@storybook/svelte'
import { expect, jest } from '@storybook/jest'
import { within, userEvent } from '@storybook/testing-library'

import PlayField from './PlayFieldStoryWrapper.svelte'

const meta = {
    title: 'Compositions/PlayField',
    component: PlayField,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<PlayField>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultState: Story = {}

const story1GameStateString = '---------'
export const Story1: Story = {}
Story1.storyName = 'Button values Story'
Story1.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const buttons = canvas.getAllByRole('button') as HTMLButtonElement[]
    expect(buttons).toHaveLength(9)
    for (let [index, button] of buttons.entries()) {
        expect(button.value).toBe(
            'o' + story1GameStateString.slice(0, index) + 'x' + story1GameStateString.slice(index + 1),
        )
    }
}

export const Story2: Story = {}
Story2.storyName = 'Fill the board Story'
Story2.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const buttons = canvas.getAllByRole('button') as HTMLButtonElement[]
    const gameState = canvas.getByTestId('gameState')
    await expect(gameState.textContent).toBe('x---------')
    await userEvent.click(buttons[0])
    await expect(buttons[0].disabled).toBe(true)
    await expect(gameState.textContent).toBe('ox--------')
    await userEvent.click(buttons[1])
    await expect(buttons[1].disabled).toBe(true)
    await expect(gameState.textContent).toBe('xxo-------')
    await userEvent.click(buttons[2])
    await expect(buttons[2].disabled).toBe(true)
    await expect(gameState.textContent).toBe('oxox------')
    await userEvent.click(buttons[3])
    await expect(buttons[3].disabled).toBe(true)
    await expect(gameState.textContent).toBe('xxoxo-----')
    await userEvent.click(buttons[4])
    await expect(buttons[4].disabled).toBe(true)
    await expect(gameState.textContent).toBe('oxoxox----')
    await userEvent.click(buttons[5])
    await expect(buttons[5].disabled).toBe(true)
    await expect(gameState.textContent).toBe('xxoxoxo---')
    await userEvent.click(buttons[6])
    await expect(buttons[6].disabled).toBe(true)
    await expect(gameState.textContent).toBe('oxoxoxox--')
    await userEvent.click(buttons[7])
    await expect(buttons[7].disabled).toBe(true)
    await expect(gameState.textContent).toBe('xxoxoxoxo-')
    await userEvent.click(buttons[8])
    await expect(buttons[8].disabled).toBe(true)
    await expect(gameState.textContent).toBe('oxoxoxoxox')
}
