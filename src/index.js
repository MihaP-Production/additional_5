module.exports = function check(str, bracketsConfig) {

let array = str.split(''),
    length = array.length,
    s = [];

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {

      if (array[i] == bracketsConfig[j][0]) {
        if (array[i] == bracketsConfig[j][1]&&array[i] == s[s.length-1]) {
          s.pop();
          continue;
        }
        s.push(array[i]);
      } else if (array[i] == bracketsConfig[j][1]) {
        if (s[s.length-1] == bracketsConfig[j][0]) {
          s.pop();
        } else {
          return false;
        }
      }
    }
  }

  if (s.length == 0) {
    return true;
  } else {
    return false;
  }

}