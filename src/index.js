module.exports = function check(str, bracketsConfig) {
  // your solution
  let len = str.length; 
  let brackets = 0;  
  for (let i = 0; i <= len; i++) { 
    for (let i = 0; i <= len; i++) { 
    if ( (str[i] == ')') && (str[i-1] == '(')) {
      brackets += 1; 
      str = str.slice(0, i-1) + str.slice(i+1, len);
    }
  }
  for (let i = 0; i <= len; i++) { 
  if ( (str[i] == '}') && (str[i-1] == '{')) {
    brackets += 1; 
    str = str.slice(0, i-1) + str.slice(i+1, len);
  }
}
  for (let i = 0; i <= len; i++) { 
  if ( (str[i] == ']') && (str[i-1] == '[')) {
    brackets += 1; 
    str = str.slice(0, i-1) + str.slice(i+1, len);
  }
}
}
  if (brackets == len/2 ){
    return true;
  } 
  else {
    return false;
  }
};
