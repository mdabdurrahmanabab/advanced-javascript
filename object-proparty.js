const students =[
      {id: 21, name:"Omar Sanny"},
      {id: 31, name:"Mannaaaaaa"},
      {id: 41, name:"Moiuriiiii"},
      {id: 71, name:"Deepjollll"}
];
const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id>40);
const biggerOne = students.find(s => s.id>40);

console.log(biggerOne);