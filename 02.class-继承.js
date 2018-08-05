class Person{
       constructor(name,age){
        this.name = name;
        this.age = age;
    } 
}
class American extends Person{

}

const a1 = new American('Jack',20)
console.log(a1)

class Chinese extends Person{
   
}
const c1 = new Chinese('张三',19)
console.log(c1)