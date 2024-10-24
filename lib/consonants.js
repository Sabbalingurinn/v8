import { isString } from './helpers.js';
export const CONSONANTS = 'bcdfghjklmnpqrstvwxz'.split('');

export function consonants(str) {
    if (isString(str)) {
      let counter = 0;
      for (let letter of str.toLowerCase()){
        if (CONSONANTS.includes(letter)){
          counter += 1;
        }
      }
      return counter;
    }
    return 0;
}