var a=[1, "array", true, {x:1, y:2}, [2, 4, 6, 8]];
console.log(a);
console.log(a.length);
a.length=3;
console.log(a); //배열의 length를 초기화하면 length를 넘는 요소들을 삭제됨 

var b=new Array(3, "array", false); //내장 생성자 Array를 활용해서 배열을 만들수도 있음
console.log(b);

var c=new Array(4);//생성자 Array에 양의 정수만을 인수로 입력하면 길이가 설정된 배열 생성
console.log(c);

console.log(a[0])
console.log(a['0']) //javaScript에서 배열은 객체이다. 따라서 배열 요소 번호로 문자열을 사용할 수 있음

c[0]="a"; //없는 배열 요소에 값을 대입해 요소 추가
c.push("b"); //push메서드를 이용해 요소를 배열끝에 추가 (length 프로퍼티 값이 늘어남 c.length=5)
console.log(c); 

delete c[4]; //delete메서드를 이용해 특정 배열 요소를 삭제 (length 프로퍼티는 바뀌지 않음)
console.log(c); // c= ['a', ..., ..., ..., ...], c.length=5  희소배열에는 배열 요소의 길이가 배열의 요소 개수보다 크다.
                // 즉, length 프로퍼티가 항상 배열 요소의 개수와 같지는 않다.
console.log(c.length); // --> 5, c.length는 변함이 없다
