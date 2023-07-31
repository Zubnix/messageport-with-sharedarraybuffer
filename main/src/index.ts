function main() {
    window.addEventListener('message', (ev) => {
            const messagePort = ev.data as MessagePort
            messagePort.onmessage = (message) => {
                const sharedArrayBuffer = message.data as SharedArrayBuffer
                window.alert(`Got shared array buffer from message port with size ${sharedArrayBuffer.byteLength}!`)
            }
            messagePort.onmessageerror = () => {
                window.alert('Got message error from message port!')
            }
    })
    window.addEventListener('messageerror' , ()=> {
        window.alert('Got message error from iframe!')
    })

    const htmliFrameElement = document.createElement('iframe')
    htmliFrameElement.hidden = true
    htmliFrameElement.sandbox.add('allow-scripts')
    htmliFrameElement.sandbox.add('allow-same-origin')
    htmliFrameElement.allow = 'cross-origin-isolated'
    htmliFrameElement.src = 'http://localhost:8080/iframe'

    document.body.appendChild(htmliFrameElement)
}

window.onload = main
