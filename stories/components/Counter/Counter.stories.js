 import Counter from "./Counter";

 export default {
    title: 'Counter',
    component: Counter,
    tags: ['autodocs'],
    argTypes: {
        initialValue: {
            description: 'Initial Value - Counter',
            default: 0,
            control: 0
        }
    }
 }

 export const CounterDetails  = {
 };