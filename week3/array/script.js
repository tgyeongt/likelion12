function sumInput() {

    let numbers = [];
  
    while (true) {
  
      let value = prompt("숫자를 입력해 주세요.", 0);
  
      // 입력받는 것을 정지해야 하는 경우
      if (value === "" || value === null || !isFinite(value)) break;
  
      numbers.push(+value);
    }
  
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum;
  }
  
  alert( sumInput() );