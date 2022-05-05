import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: "user",
    initialState: {
        country_code: "+44"
    },
    reducers: {
        update_user: (state, action) => {
            Object.entries(action.payload).map(e => {
                state[e[0]] = e[1]
                return true
            })
        }
    }
})

export const { update_user } = userSlice.actions

export default userSlice.reducer