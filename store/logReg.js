export const state = () => ({
	vldNewEmail: null,
})

export const mutations = {
	changVldEmail (state,email) { state.vldNewEmail = email },
}