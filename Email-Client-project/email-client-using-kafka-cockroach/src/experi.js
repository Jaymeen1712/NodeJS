class build {
     fun1() {
        let a = 10;
        this.a = a;
     
    b = ()=> console.log(this.a);
    b()
    }
}

let obj = new build();
obj.fun1();