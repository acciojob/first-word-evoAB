function firstWord(s) {
  // your code here
	s = s.split(" ")
	return s[0]
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
