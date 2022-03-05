import { atom } from "recoil";

export const countAtom = atom( {
    key: 'counter',
    default: 0,
} );
