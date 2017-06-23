module.exports = function main(email, suffixes) {
  // Write your code here
  var e=email
  var s=suffixes
  var i
  for(i=0;i<e.length;i++)
  {
  	if(e[i]=='@')
  		break;
  }
  for(var j=0;j<s.length;j++,i++)
  {
  	if(e[i+1]！=s[j])
  		return false
  }
  else
  	return true
};
