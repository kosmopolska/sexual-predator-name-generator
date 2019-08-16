function generate() {
  const input = document.getElementById("input").value.split(' ')
  console.log(input)
  const firstName = input[0]
  const lastName = input[1]

  const newFirst = (findFirstSyllable(firstName) + 'ey')
  const newLast = (findFirstSyllable(lastName) + 'stein')

  const output = document.getElementById("output")

  output.innerHTML = "Ditt sexuella övergreppsnamn är " + newFirst + " " + newLast


}


function findFirstSyllable(word) {
  const lowercase = word.toLowerCase()
  const vowels = ['a','e','i','o','u','y','å','ä','ö',]
  let count = 0
  let vowelIndex = 0
  for (const c of lowercase) {
    count++
    if (vowels.indexOf(c) > -1) {

      if (c == 'e' && lowercase.charAt(count) == 'i') {
        count +=1
      }

      vowelIndex = count
      break
    }
  }

  let syllable = lowercase.substring(0, vowelIndex)

  if (vowels.indexOf(lowercase.charAt(vowelIndex)) == -1){
    syllable += lowercase.charAt(vowelIndex)
  } else {
    return syllable.charAt(0).toUpperCase() + syllable.slice(1)
  }

  if (vowels.indexOf(lowercase.charAt(vowelIndex+1)) == -1 && lowercase.charAt(vowelIndex+1) != 's' ){
    syllable += lowercase.charAt(vowelIndex+1)
  }

  return syllable.charAt(0).toUpperCase() + syllable.slice(1)
}


function addListener() {
  const input = document.getElementById("input");

  input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById("button").click();
    }
  });
}