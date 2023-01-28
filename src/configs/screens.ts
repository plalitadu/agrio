import { RootStackParamList } from "./common";

type Screen = {
    [x in keyof RootStackParamList]: keyof RootStackParamList
}

  const SCREEN:Screen={
    
    LOGIN:'LOGIN',
    SIGNUP:'SIGNUP'

  }

  export {SCREEN}