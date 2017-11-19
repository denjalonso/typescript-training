export const person = { name: 'Julia' };

export const addAge = (age: number) =>
    (person: any) => ({
       age,
        ...person,
    });
