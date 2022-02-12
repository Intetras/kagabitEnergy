
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
        
        // 電圧の求め方
        // P0で測定した値 p0Val
        // ADコンバータ1ステップあたりの変化量 0.00322 stepVal
        // 発電圧 bolt = p0Val * stepVal
        
        let p0Val = pins.analogReadPin(AnalogPin.P0);
        let bolt = p0Val * stepVal;

        // 電流の求め方
        // P1で測定した値　p1Val
        // この電圧はアンプで増幅された値である
        // ゲイン gainVal = 85
        // 抵抗値 resistanceVal = 1
        // 発電流 amp = p1Val * stepVal / gainVal / resistanceVal
        
        let p1Val = pins.analogReadPin(AnalogPin.P1);
        let amp = p1Val * stepVal / gainVal / resistanceVal;

        // 電力の求め方
        // 電圧 * 電流
        // power = bolt * amp
        let power = bolt * amp;
        return power;
    }

}
