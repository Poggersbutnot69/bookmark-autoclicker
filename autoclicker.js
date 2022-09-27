// AutoClicker (haha now ur fork is outdated!)

const CLICK_THREADS = 500

window.autoClicker = {
    enabled: false,
    element: document.body,
    keybind: "[",
    sendAlert: (content, color) => {
        if (!color) {color = "#f5a097"}
        let alert = document.createElement("div")
        alert.style = `position: fixed;top: 5px;left: 5px;padding: 6px;padding-left: 7px;border-left: ` + color + ` solid 3px;border-radius: 5px;font-size: 12pt;color: white;background-color: #423934;z-index: 9999;font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;`
        alert.innerHTML = content
        document.body.appendChild(alert)

        setTimeout(() => {
            alert.remove()
        }, 5000)
    }
}

function clickIntervalFunc() {
    if (window.autoClicker.enabled) {
        window.autoClicker.element.click()
    }
}

document.addEventListener('mouseover', function (e) {
    window.autoClicker.element = e.target;
});

window.addEventListener('keydown', function (e) {
    if (e.key == window.autoClicker.keybind) {
        window.autoClicker.enabled = !window.autoClicker.enabled
        window.autoClicker.sendAlert(window.autoClicker.enabled ? "AutoClicker enabled" : "AutoClicker disabled")
    } else if (e.key == "\\") {
        window.autoClicker.keybind = prompt("Switch keybind:")[0].toLowerCase()
    }
})

for (let index = 0; index < CLICK_THREADS; index++) {
    setInterval(clickIntervalFunc)
}
