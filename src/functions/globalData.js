import { createContext } from 'react'

const date = new Date()
const month = date.getMonth()
export const currentMonth = createContext(month)
const day = date.getDate()
export const activeBox = createContext(day)
