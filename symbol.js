var WHITE=Symbol('white');
var BLACK=Symbol('black');

var white=1;
var black=0;

var cell=white; //symbol사용없이 white=1로 플래그 사용
console.log(cell==1); 
console.log(cell==white)

var cell=BLACK; //symbol사용하여 BLACK=Symbol('black') 사용
console.log(cell==0); // --> false, symbol사용 시 직관성이 떨어지는 플래그(0) 사용불가 
console.log(cell==BLACK); 
console.log(cell=='black'); // --> false, symbol의 인수는 설명일뿐 
console.log('');

var sym1=Symbol("space");
var sym2=Symbol("space");
var sym3=Symbol.for("space");
var sym4=Symbol.for("space");
console.log(sym1==sym2); //-->false
console.log(sym3==sym4); //--> true, symbol.for 사용시 전체 심볼 레지스트리에서 기존 심벌을 검색해서 찾음. 없을시 새로 생성
console.log('');

console.log(Symbol.keyFor(sym1)); //-->undefined
console.log(Symbol.keyFor(sym3)); //-->space

