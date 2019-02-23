module.exports = function check(str, bracketsConfig) {
  // your solution
  var len = str.length; 
  var open = 0; 
  var close = 0; 
 
  for (var i = 0; i < len; i++) { 
    if ( str[i] == '(' || '{' || '[') {
    open += 1; 
    }
  }
  for (var i = len-1; i >= 0; i--) 
  { 
    if (str[i] == ')' || ']' || '}' ){
      close += 1; 
    }
  } 
  return open === close;
};
