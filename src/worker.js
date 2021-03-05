// jsQR is concatenated by gulp

self.addEventListener('message', function (e) {

    var decoded = jsQR(
        e.data.data,
        e.data.width,
        e.data.height
    )
    if (decoded) {
        postMessage(decoded.data)
    } else {
        postMessage(null)
    }

    try {
        var decoded = jsQR(
            e.data.data,
            e.data.width,
            e.data.height
        )
        if (decoded) {
            postMessage(decoded.data)
        } else {
            postMessage(null)
        }

    } catch (error) {
        if (!(error instanceof RangeError)) {
            throw error;
        }
        postMessage(null)
    }
})
