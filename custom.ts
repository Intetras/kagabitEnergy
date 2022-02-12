
// 電圧の求め方
// P1で測定した値 p1Val
// ADコンバータ1ステップあたりの変化量 0.00322 stepVal
// 発電圧 bolt = p1Val * stepVal

// 電流の求め方
// P2で測定した値　p2Val
// この電圧はアンプで増幅された値である
// ゲイン gainVal = 85
// 抵抗値 resistanceVal = 1
// 発電流 amp = p2Val * stepVal / gainVal / resistanceVal

// 電力の求め方
// 電圧 * 電流
// power = bolt * amp

const stepVal = 0.00322;
const gainVal = 85;
const resistanceVal = 1;

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * Custom blocks
 */
//% weight=50 icon="\uf0e7" color=#008000 block="kagabit-Energy"
namespace kagabitenergy {
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block
    export function foo(n: number, s: string, e: MyEnum): void {
        // Add code here
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block
    export function fib(value: number): number {
        return value <= 1 ? value : fib(value -1) + fib(value - 2);
    }
}
