module.exports = function main(email, suffixes) {
  // Write your code here
  var e=email.split('@')
  var s=suffixes
  
  if(e[1]==s)
  	console.log('true')
  else
  	console.log('false')
};
