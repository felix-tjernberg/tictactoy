import type { Meta, StoryObj } from '@storybook/svelte'
import { within, userEvent } from '@storybook/testing-library'

import playerTwo from './[playerTwo]StoryWrapper.svelte'

const meta = {
    title: 'Pages/∕[playerOne]∕vs∕[playerTwo]',
    component: playerTwo,
    tags: ['autodocs'],
    argTypes: {},
} satisfies Meta<playerTwo>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultState: Story = {}

function wait(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

export const Story1: Story = {}
Story1.storyName = '(Visaul test) No JS available Changing gamestate 3 times'
Story1.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const iframe = canvas.getByTestId('iframe') as HTMLIFrameElement
    await (iframe.src = 'http://localhost:5173/a/vs/b?gameState=xo--------')
    console.log(iframe)
    await wait(500)
    await (iframe.src = 'http://localhost:5173/a/vs/b?gameState=xox-------')
    await wait(500)
    await (iframe.src = 'http://localhost:5173/a/vs/b?gameState=xoxo------')
}

export const Story2: Story = {}
Story2.storyName = '(Visaul test) No JS available Changing gamestate to a victory'
Story2.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const iframe = canvas.getByTestId('iframe') as HTMLIFrameElement
    await (iframe.src = 'http://localhost:5173/a/vs/b?gameState=oxoxoxox--')
}

export const Story3: Story = {}
Story3.storyName = '(Visaul test) No JS available Changing gamestate to b victory'
Story3.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const iframe = canvas.getByTestId('iframe') as HTMLIFrameElement
    await (iframe.src = 'http://localhost:5173/a/vs/b?gameState=ooxoxoxo--')
}

export const Story4: Story = {}
Story4.storyName = '(Visaul test) No JS available Changing gamestate to tie'
Story4.play = async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const iframe = canvas.getByTestId('iframe') as HTMLIFrameElement
    await (iframe.src = 'http://localhost:5173/a/vs/b?gameState=oxoxooxxxo')
}

export const Story5: Story = {
    args: {
        allowJS: true,
    },
}
Story5.storyName = '(Visualt test) Allow JS'
