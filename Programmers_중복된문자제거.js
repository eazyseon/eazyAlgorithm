const solution = (my_string) => {
  let arr = new Set(my_string.split(''))
  let arr2 = [...arr]
  return arr2.join('');
}

solution("people")