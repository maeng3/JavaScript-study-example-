function Card(suit, rank){
    this.suit=suit;
    this.rank=rank;
}

var card=new Card("spade", "A"); //new:생성자를 통해 객체를 생성해줌
console.log(card);

function Circle(center, radius){
    this.center=center;
    this.radius=radius;
    this.area=function(){
        return Math.PI*(this.radius^2); //생성자의 객체안에 메서드를 포함하는 경우
    }
}

var c=new Circle({x:1.0, y:2.5}, 5);
console.log(c+c.area());

var square=new Function("x", "return x*x"); //내장 생성자 Function
console.log(square(7));