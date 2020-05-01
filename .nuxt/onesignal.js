window.$OneSignal = window.OneSignal = window.OneSignal || [];

OneSignal.push(['init', {
  "appId": "a3e9bedc-f343-47e5-b28f-fa8ef039b8ad",
  "allowLocalhostAsSecureOrigin": true,
  "welcomeNotification": {
    "disable": false
  }
}]);

export default function (ctx, inject) {
  inject('OneSignal', OneSignal)
}
