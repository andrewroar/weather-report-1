import { createContext, useContext } from "react"
export type GlobalContent = {
  target?:string|undefined
  setTarget:(c: string|undefined) => void
  countries: string[]
  setCountries:(c: string[]) => void
}
export const MyGlobalContext = createContext<GlobalContent>({
  target:'Hello World',
  countries: ['Hello World'], // set a default value
  setCountries: () => {},
  setTarget:() => {}
})

export const useGlobalContext = () => useContext(MyGlobalContext)
