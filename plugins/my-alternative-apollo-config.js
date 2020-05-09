export default function(context) {
  return {
    httpEndpoint: "https://api.atfrg.online/",
    // ssr: true,
    // optional
    // override HTTP endpoint in browser only
    // browserHttpEndpoint: '/graphql',
    // optional
    // See https://www.apollographql.com/docs/link/links/http.html#options
    // httpLinkOptions: {
    //   credentials: 'same-origin'
    // },
    // You can use `wss` for secure connection (recommended in production)
    // Use `null` to disable subscriptions
    //  wsEndpoint: 'wss://atfrg.space/database/',
    //  wssEndpoint: 'wss://atfrg.space/database/', // optional
    // LocalStorage token
    // tokenName: "token", // optional
    // Enable Automatic Query persisting with Apollo Engine
    // persisting: false, // Optional
    // Use websockets for everything (no HTTP)
    // You need to pass a `wsEndpoint` for this to work
    // websocketsOnly: false, // Optional,
    getAuth: tokenName =>
      ""
  };
}
