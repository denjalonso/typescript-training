import { person, addAge } from './classicDecoreator';
import './experimentalDecorator';

const personWithAge = addAge(1)(person);
console.log(personWithAge);

// console.log(new Person());
