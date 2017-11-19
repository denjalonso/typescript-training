const expAddAge = (age: number) =>
    (targetClass: any) =>
        class {
            name = new targetClass().name;
            age = age;
        };

@expAddAge(1)
export class Person {
    name = 'Julia';
}

console.log(new Person());