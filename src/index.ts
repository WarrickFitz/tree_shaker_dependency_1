// Two seperate export statements like this. Buffer will not get shaken from the final output
// export { Buffer } from "buffer"
// export { add3 } from "./add3"

// But if I export add and Buffer together. Now webpack is able to shake Buffer
export { add3, Buffer } from "./add3"

export function add2(num1: number, num2: number) : number {
    return num1 + num2
}
