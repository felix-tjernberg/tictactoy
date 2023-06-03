import { fail, redirect } from '@sveltejs/kit'

export const actions = {
    default: async ({ cookies, request }) => {
        const data = await request.formData()
        const playerOne = data.get('playerOne')
        const playerTwo = data.get('playerTwo')

        if (!playerOne || !playerTwo) {
            return fail(400, { error: 'Please enter two player names', playerOne, playerTwo })
        }

        throw redirect(302, `${playerOne}/vs/${playerTwo}`)
    },
}
