
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

/**
 * Custom blocks
 */
//% weight=50 icon="\uf0e7" color=#008000 block="kagabit-Energy"
namespace kagabitenergy {
    //% group="基本"
    //% blockId="outputPower"
    //% block="電力"
    export function outputPower():number{
        return 0;
    }

    
}
