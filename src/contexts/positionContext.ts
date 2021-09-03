import { createContext } from 'react'

export const PositionDispatcher = createContext<React.Dispatch<React.SetStateAction<number[]>> | null>(null)