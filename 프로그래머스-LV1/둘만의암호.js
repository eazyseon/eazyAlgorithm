function solution(s, skip, index) {
  let answer = '';
  let arr = s.split('');

  arr.map((item) => {
    let itemToAski = item.charCodeAt();
    for (let i = 0; i < index; i++) {
      itemToAski++;
      if (itemToAski > 122) {
        itemToAski = 97;
      }

      for (let j = 0; j < skip.length; j++) {
        if (skip.includes(String.fromCharCode(itemToAski))) {
          itemToAski++;
          if (itemToAski > 122) {
            itemToAski = 97;
          }
        }
      }
    }
    answer += String.fromCharCode(itemToAski);
  });

  return answer;
}