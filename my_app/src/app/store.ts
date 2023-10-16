import { configureStore } from "@reduxjs/toolkit"
import counterSlice from "../features/counter/counterSlice"

export interface RootState {
  counterR: ReturnType<typeof counterSlice>
}

export const store = configureStore({
  reducer: {
    counterR: counterSlice,
  },
})
