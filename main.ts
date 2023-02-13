basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Happy)
        basic.showString("gano el año")
    } else {
        if (input.buttonIsPressed(Button.B)) {
            basic.showIcon(IconNames.Sad)
            basic.showString("perdio el año")
        }
    }
})
