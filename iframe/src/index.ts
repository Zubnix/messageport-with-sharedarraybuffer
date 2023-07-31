function main() {
    const messageChannel = new MessageChannel()
    window.parent.postMessage(messageChannel.port2, '*', [messageChannel.port2])

    const sharedArrayBuffer = new SharedArrayBuffer(10)
    messageChannel.port1.postMessage(sharedArrayBuffer)
}

window.onload = main
