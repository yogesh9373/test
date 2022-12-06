import { Fonts } from "./Fonts"

export const getFontStyle=(variant)=>{
if(variant==='body-1'){
return Fonts.body1
}if(variant==='body-2'){
return Fonts.body2
}
else{
    return Fonts.body3
}
}