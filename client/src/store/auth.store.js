
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
                        credentials: "include",
                    })
                    const { data } = await res.json()

                    set({ user: data, isLoggedIn: true })
                    return data
                } catch (error) {
                    set({ error: error.message })
                } finally {
                    set({ isLoading: false })
                }
            },

            logOut: async () => {
                set({ user: null, isLoggedIn: false })
                const res = await fetch("http://localhost:3000/api/auth/logout", {

                    credentials: "include",
                })
                const { message } = await res.json()
                return message
            }
        }), { name: "user-storage" }
    ))