// 1ステップの値
const stepVal = 0.00322;
// ゲイン 85
const gainVal = 85;
// 抵抗値 1
const resistanceVal = 1;

/**
 * Custom blocks
 */
//% weight=50 icon="\uf0e7" color=#008000 block="kagabit-Energy"
namespace kagabitenergy {

    //% group="基本"
    //% blockId="outputBolt"
    //% block="電圧"
    export function outputBolt():number{
        // P0で測定した値　p0Val
        let p0Val = pins.analogReadPin(AnalogPin.P0);
        // 3.3Vを1023で割った値が1ステップの値
        return p0Val * stepVal;
    }

    //% group="基本"
    //% blockId="outputAmp"
    //% block="電流"
    export function outputAmp():number{
        // P1で測定した値　p1Val
        // この電圧はアンプで増幅された値である
        // ゲイン gainVal = 85
        // 抵抗値 resistanceVal = 1
        // 発電流 amp = p1Val * stepVal / gainVal / resistanceVal
        let p1Val = pins.analogReadPin(AnalogPin.P1);
        return p1Val * stepVal / gainVal / resistanceVal;

    }

    //% group="基本"
    //% blockId="outputPower"
    //% block="電力"
    export function outputPower():number{
        
        let bolt = outputBolt();
        let amp = outputAmp();

        // 電力の求め方
        // 電圧 * 電流
        // power = bolt * amp
        let power = bolt * amp;
        return power;
    }
}
