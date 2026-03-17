
import { create } from "zustand";
import { persist } from 'zustand/middleware'


export const useAuthStore = create()(
    persist(
        (set) => ({
            user: null,
            isLoading: false,
            isLoggedIn: false,
            error: null,

            login: async (userName, password) => {
                set({ isLoading: true, })
                try {
                    const res = await fetch("http://localhost:3000/api/auth/login", {
                        method: "POST", headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ userName, password }),
                        // credentials: "include",
                    })
                    const { data } = await res.json()
                    console.log("data")
                    set({ user: data, isLoggedIn: true })
                    return data
                } catch (error) {
                    set({ error: error.message })
                } finally {
                    set({ isLoading: false })
                }
            },

            logOut: () => {
                set({ user: null, isLoggedIn: false })
            }
        }),{name:"user-storage"}
    ))