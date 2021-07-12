// 출력시 순서 확인
console.log('A');

setTimeout(function(){
  console.log('B');
},3000);

console.log('C');

setTimeout(function(){
  console.log('D');
},1500);