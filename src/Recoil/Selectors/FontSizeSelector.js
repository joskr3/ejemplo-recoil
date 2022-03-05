import { selector } from "recoil";
import { countAtom } from "../Atoms/CountAtom";

export const fontSizeSelector = selector({
    key: 'font-size-selector',
    get: ({get}) => {
        const fontSize = get(countAtom);
        const newFontSize = fontSize * 4;
        return newFontSize;
    }
})