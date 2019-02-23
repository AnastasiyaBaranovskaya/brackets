module.exports = function check(str, bracketsConfig) {
  // your solution
  let stack = 0;
  for (let i = 0; i < bracketsConfig.length; i++){
    if (i == '[' || i == '(' || i == '{') {
      stack += 1;
    };
    if (i == ']' || i == ')' || i == '}'){ 
      stack -= 1;
    };
  };
  if (stack == 0 ){
    return check == true;
  }
  else {
    return check == false;
  }
};
