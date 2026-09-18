def on_pin_pressed_p0():
    global _1
    record.play_audio(record.BlockingState.BLOCKING)
    _1 = 1
input.on_pin_pressed(TouchPin.P0, on_pin_pressed_p0)

def on_bluetooth_connected():
    basic.show_string("conectado")
    basic.show_leds("""
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        """)
    
    def on_pause_until():
        return _0 == 2
    pause_until(on_pause_until)
    
bluetooth.on_bluetooth_connected(on_bluetooth_connected)

def on_command_received():
    if myController.button_was_pressed("A"):
        TobbieII.forward()
    if myController.button_was_pressed("B"):
        TobbieII.stopwalk()
    if myController.button_was_pressed("C"):
        TobbieII.backward()
    if myController.button_was_pressed("D"):
        DFRobotMaqueenPlus.motot_run(Motors.ALL, Dir.CW, 10)
    if myController.button_was_pressed("E"):
        DFRobotMaqueenPlus.motot_run(Motors.ALL, Dir.CCW, 10)
    if myController.button_was_pressed("F"):
        DFRobotMaqueenPlus.motot_stop(Motors.ALL)
    if myController.button_was_pressed("G"):
        RobotCar_Keyestudio.Motors.move(20)
    if myController.button_was_pressed("H"):
        RobotCar_Keyestudio.Motors.stop()
    if myController.button_was_pressed("1"):
        RobotCar_Keyestudio.Motors.steer(10, 10)
        RobotCar_Keyestudio.Motors.stop()
    if myController.button_was_pressed("2"):
        RobotCar_Keyestudio.Motors.steer(10, -10)
        RobotCar_Keyestudio.Motors.stop()
    if myController.button_was_pressed("3"):
        TobbieII.leftward()
    if myController.button_was_pressed("4"):
        TobbieII.stopturn()
    if myController.button_was_pressed("5"):
        TobbieII.rightward()
myController.on_command_received(on_command_received)

def on_logo_pressed():
    record.start_recording(record.BlockingState.BLOCKING)
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

_1 = 0
_0 = 0
_0 = 0
_2 = 0
basic.pause(2000)
_2 = 1
basic.show_leds("""
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    """)
basic.show_string("Hello!")
basic.show_string("soy tu nuevo sirviente")
basic.show_leds("""
    . # . # .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    """)
basic.show_string("que quieres haser mi dueño")
basic.show_leds("""
    . # . # .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    """)
_1 = 0
basic.show_leds("""
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    """)

def on_pause_until2():
    return _0 == 1
pause_until(on_pause_until2)

def on_forever():
    pass
basic.forever(on_forever)

def on_forever2():
    global _1
    if _1 == 1:
        basic.show_leds("""
            . . . . .
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            """)
        _1 = 0
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            """)
        basic.show_leds("""
            . # . # .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            """)
basic.forever(on_forever2)

def on_forever3():
    if _2 == 1:
        DFRobotMaqueenPlus.PID(PID.OFF)
        myController.use_bluetooth()
        bluetooth.start_button_service()
        bluetooth.start_io_pin_service()
basic.forever(on_forever3)
