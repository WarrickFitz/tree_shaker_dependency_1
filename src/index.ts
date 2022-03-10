export { Buffer } from "buffer"

export {add3} from "./add3"

let x = (num1: number, num2: number) => {
    return num1 + num2
}

export function add2(num1: number, num2: number) : number {
    
    return x(num1, num2)
}
