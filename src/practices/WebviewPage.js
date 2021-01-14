import React from 'react'
import { Alert } from 'react-native'
import { WebView } from 'react-native-webview'

const INJECTED_JAVASCRIPT = (window, document) => {
    let topFilmsDom
    function waitDomRendered() {
        topFilmsDom = document.querySelector('.top-rated-list') 
        if (!topFilmsDom) {
            setTimeout(waitDomRendered, 2000)
        } else {
            const topFilmsData = []
            topFilmsDom.querySelectorAll('h5')
                .forEach(node => topFilmsData.push(node.textContent))
            window.ReactNativeWebView.postMessage(topFilmsData.join(','))
        }
    }
    waitDomRendered()
}

function WebviewPage() {
    return (
        <WebView
            source={{ uri: 'https://m.maoyan.com/' }}
            injectedJavaScript={`(${INJECTED_JAVASCRIPT.toString()})(window, document)`}
            onMessage={(e) => {
                Alert.alert('最受好评电影', e.nativeEvent.data)
            }}
        />
    )
}

export default WebviewPage
