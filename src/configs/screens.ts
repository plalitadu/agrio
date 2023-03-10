import { RootStackParamList } from "./common";

type Screen = {
    [x in keyof RootStackParamList]: keyof RootStackParamList
}

  const SCREEN:Screen={
    
    LOGIN:'LOGIN',
    SIGNUP:'SIGNUP',
    POLICY:'POLICY',
    FARM:'FARM',
    MAINTAB:'MAINTAB',
    HOME:'HOME',
    DEVICE:'DEVICE',
    SHOP:'SHOP',
    SETTING:'SETTING',
    MANAGE:'MANAGE',
    ADDFARM:'ADDFARM',
    ROOMDETAIL: 'ROOMDETAIL'

  }

  export {SCREEN}