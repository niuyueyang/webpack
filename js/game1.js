import game from './game2.js'
var obj=function(name){
	this.name=name;
	this.game1=function(){
		return this.name;
	}
	this.game2=function(){
		return this.name;
	}
}
obj.prototype.arr=function(){
	var arrs=[];
	arrs.push(1,2,3,4,5,this.name);
	return arrs;
}
var newObj=new obj('Lily');
var result1=newObj.game1();
var result2=newObj.arr();
var result3=newObj.game2();
console.log(result1,result2,result3);
console.log('hi');
console.log(game.add(5,6));
