export function lengthOfLongestSubstring(s: string): number {
  //   return splitStrMethoed(s)
  return substringMethoed(s);
}

const splitStrMethoed = (s: string): number => {
  /*
  Algorithm

  1. split string into array.
  2. itrate those things again and again until length reach
  3. first one you save it in s1, second one save it in s2
  4. check the s1 length and s2 length which is big change swap to small value
  5. return number of that big value

   */

  //  1. split string into array.
  const splitedString = s.split("");
  //   console.log(splitedString);

  const s1: string[] = [];
  const s2: string[] = [];
  // 2. itrate those things again and again until length reach
  for (let i = 0; i < splitedString.length; i++) {
    if (s1.includes(splitedString[i])) {
      if (s2.includes(splitedString[i])) {
        s2.length = 0;
      }
      s2.push(splitedString[i]);
    } else {
      s1.push(splitedString[i]);
    }
  }
  // not worked in all case
  return s1.length;
};

const substringMethoed = (s: string): number => {
  const isUnique = (s: string): boolean => {
    const arr: string[] = [];
    for (let i = 0; i < s.length; i++) {
      if (arr.includes(s[i])) {
        return false;
      }
      arr.push(s[i]);
    }
    return true;
  };

  let max = 0;
  for (let begin = 0; begin < s.length; begin++) {
    for (let end = begin; end < s.length; end++) {
      const substr = s.substring(begin, end);
      if (isUnique(substr)) {
        max = Math.max(max, substr.length);
      }
    }
  }
  return max;
};
