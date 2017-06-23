module.exports = function main(email, suffixes) {
  // Write your code here
  var e=email.split('@')
  var s=suffixes
  var text
  text=email+'['+s+']';

  if(e[1]==s)
  {
  	return true
  	console.log(text+'true')
  }
  	
  else
  {
  	return false
  	console.log(text+'false')
  }
  	
};
