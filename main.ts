radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 2) {
        basic.showString("Backward")
        serial.writeLine("Received 'The car is driving Backwards'")
        basic.pause(1000)
    }
    if (receivedNumber == 1) {
        basic.showString("Forward")
        serial.writeLine("Received 'The car is driving Forward'")
        basic.pause(1000)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(2)
    serial.writeLine("Pressed button A")
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
    serial.writeLine("Pressed button B")
})
basic.forever(function () {
    radio.setGroup(20)
})
