import { Module } from './greet'
import "../styles/index.scss"
import "../index.html"



let add = (x, y) => { return x + y }

console.log("Bismillahir Rahmanir Rahim")
console.log(Module)
console.log(add(3, 4))

class X {
    a = 10
    Module() {
        console.log(a)
    }
}
let a = new X()

a.Module()