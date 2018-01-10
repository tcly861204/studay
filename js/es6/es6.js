    // const arr = [1, 2, 3];
    // for (let v of arr) {
    //   console.log(v);
    //   console.log(key);
    // }


    // class Parson {
    //   constructor(age) {
    //     this.age = age;
    //   }
    //   tell() {
    //     return `my age ${this.age}`;
    //   }
    // }
    // class Man extends Parson {
    //   constructor(age) {
    //     super(age);
    //   }
    // }


    // // var ps = new Parson('30');
    // // console.log(ps.test());
    // var msn = new Man('40');
    // console.log(msn);

    // function* foo() {
    //   yield 1;
    //   yield 2;
    //   yield 3;
    // };

    // for (let O of foo()) {
    //   console.log(O);
    // }


    // console.log();


    // class Parson {
    //   constructor(age) {
    //     this.age = age;
    //   }
    //   tell() {
    //     return `my age ${this.age}`;
    //   }
    // }
    // class Man extends Parson {
    //   constructor(age) {
    //     super(age);
    //   }
    //   tell() {
    //     return 'my age is ${this.age}';
    //   }
    // }


    // let arr = new Set('abc');
    // arr.add('d');
    // arr.add('d');
    // arr.delete('a');
    // console.log(arr.has('b'));


    // const arr = [12, 34, 45, 423, 23, 2, 31, 12, 12, 23];
    // const result = [...new Set(arr)];
    // console.log(result);

    class Functor {
      constructor(val) {
        this.val = val;
      }
      map(f) {
        return new Functor(f(this.val));
      }
    }

    Functor.of = function(val) {
      return new Functor(val);
    }




    console.log((new Functor(2)).map(function(val) {
      return val + 2;
    }));