window.$OneSignal = window.OneSignal = window.OneSignal || [];

OneSignal.push(['init', {
  "appId": "a3e9bedc-f343-47e5-b28f-fa8ef039b8ad",
  "allowLocalhostAsSecureOrigin": true,
  "autoResubscribe": true,
  "autoRegister": true,
  "welcomeNotification": {
    "disable": false,
    "message": "اتفرج اون لاين مشاهدة مجاناً"
  },
  "notifyButton": {
    "enable": true
  }
}]);

export default function (ctx, inject) {
  inject('OneSignal', OneSignal)
}
