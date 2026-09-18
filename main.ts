input.onPinPressed(TouchPin.P0, function () {
    record.playAudio(record.BlockingState.Blocking)
    _1 = 1
})
bluetooth.onBluetoothConnected(function () {
    basic.showString("conectado")
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    pauseUntil(() => _0 == 2)
})
myController.onCommandReceived(function () {
    if (myController.buttonWasPressed("A")) {
        TobbieII.forward()
    }
    if (myController.buttonWasPressed("B")) {
        TobbieII.stopwalk()
    }
    if (myController.buttonWasPressed("C")) {
        TobbieII.backward()
    }
    if (myController.buttonWasPressed("D")) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 10)
    }
    if (myController.buttonWasPressed("E")) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CCW, 10)
    }
    if (myController.buttonWasPressed("F")) {
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
    }
    if (myController.buttonWasPressed("G")) {
        RobotCar_Keyestudio.Motors.move(20)
    }
    if (myController.buttonWasPressed("H")) {
        RobotCar_Keyestudio.Motors.stop()
    }
    if (myController.buttonWasPressed("I")) {
        plenbit_full.PlayWalkMotion(plenbit_full.WalkMotions.FStep)
    }
    if (myController.buttonWasPressed("J")) {
        plenbit_full.PlayWalkMotion(plenbit_full.WalkMotions.BStep)
    }
    if (myController.buttonWasPressed("1")) {
        RobotCar_Keyestudio.Motors.steer(30, 10)
        RobotCar_Keyestudio.Motors.stop()
    }
    if (myController.buttonWasPressed("2")) {
        RobotCar_Keyestudio.Motors.steer(30, -10)
        RobotCar_Keyestudio.Motors.stop()
    }
    if (myController.buttonWasPressed("3")) {
        TobbieII.leftward()
    }
    if (myController.buttonWasPressed("4")) {
        TobbieII.stopturn()
    }
    if (myController.buttonWasPressed("5")) {
        TobbieII.rightward()
    }
    if (myController.buttonWasPressed("6")) {
        DFRobotMaqueenPlus.mototStop(Motors.M1)
    }
    if (myController.buttonWasPressed("7")) {
        DFRobotMaqueenPlus.mototStop(Motors.M2)
    }
    if (myController.buttonWasPressed("8")) {
        plenbit_full.PlayWalkMotion(plenbit_full.WalkMotions.LStep)
    }
    if (myController.buttonWasPressed("9")) {
        plenbit_full.PlayWalkMotion(plenbit_full.WalkMotions.RStep)
    }
    if (myController.buttonWasPressed("L")) {
        plenbit_full.PlayStdMotion(plenbit_full.StdMotions.Clap)
    }
    if (myController.buttonWasPressed("M")) {
        plenbit_full.PlayStdMotion(plenbit_full.StdMotions.Hug)
    }
    if (myController.buttonWasPressed("N")) {
        plenbit_full.PlayStdMotion(plenbit_full.StdMotions.Propose)
    }
    if (myController.buttonWasPressed("Ñ")) {
        plenbit_full.PlayStdMotion(plenbit_full.StdMotions.Bow)
    }
    if (myController.buttonWasPressed("O")) {
        plenbit_full.PlayStdMotion(plenbit_full.StdMotions.AHem)
    }
    if (myController.buttonWasPressed("P")) {
        plenbit_full.PlayStdMotion(plenbit_full.StdMotions.ArmPataPata)
    }
    if (myController.buttonWasPressed("Q")) {
        TobbieII.shake_head(5)
    }
    if (myController.buttonWasPressed("R")) {
        TobbieII.vibrate(5)
    }
    if (myController.buttonWasPressed("S")) {
        TobbieII.dance(5)
    }
    if (myController.buttonWasPressed("U")) {
        record.startRecording(record.BlockingState.Blocking)
    }
    if (myController.buttonWasPressed("V")) {
        record.playAudio(record.BlockingState.Blocking)
    }
    if (myController.buttonWasPressed("W")) {
        music.setVolume(music.volume() + 5)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    record.startRecording(record.BlockingState.Blocking)
})
let _1 = 0
let _0 = 0
_0 = 0
let _2 = 0
basic.pause(2000)
music.setVolume(12)
_2 = 1
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.showString("Hello!")
basic.showString("soy tu nuevo sirviente")
basic.showLeds(`
    . # . # .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
basic.showString("que quieres haser mi dueño")
basic.showLeds(`
    . # . # .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
_1 = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
pauseUntil(() => _0 == 1)
basic.forever(function () {
	
})
basic.forever(function () {
    if (_1 == 1) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            `)
        _1 = 0
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . # . # .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
    }
})
basic.forever(function () {
    if (_2 == 1) {
        DFRobotMaqueenPlus.PID(PID.OFF)
        myController.useBluetooth()
        myController.useSerial()
        bluetooth.startButtonService()
        bluetooth.startIOPinService()
    }
})
