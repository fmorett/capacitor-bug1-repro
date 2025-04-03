const div = document.getElementById('debug-div');

const isNative = window.Capacitor?.isNativePlatform();
const platform = window.Capacitor?.getPlatform()


div.innerText = `
typeof window.Capacitor ${typeof window.Capacitor}
Is Native: ${isNative}
Platform: ${platform}
typeof window.Capacitor.triggerEvent ${typeof window.Capacitor?.triggerEvent}
`