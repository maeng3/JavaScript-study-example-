function f(){
    console.log(a); //--> undefined, 끌어올림(hoisting)으로 a의 선언이 된 상태 (초기화는 끌어올려지지않음)
    var a='local';
    console.log(a); //--> local
    return a;
}

console.log(f());

console.log(x); //-->referenceError, let문은 끌어올림 안됨
let x=10;