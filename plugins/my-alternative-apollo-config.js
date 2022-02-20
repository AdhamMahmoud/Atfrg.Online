export default function(context) {
  return {
    httpEndpoint: "http://164.92.223.193:4466/",
    // httpEndpoint: "https://atfrg.space/database/",
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
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InNlcnZpY2UiOiJkZWZhdWx0QGRlZmF1bHQiLCJyb2xlcyI6WyJhZG1pbiJdfSwiaWF0IjoxNjQ1MzU2NTE5LCJleHAiOjE3NDU5NjEzMTl9.8SQLlSZvtpJdQaKQ-8_RHNE0o1YK9GBjt0KYfcxJ55U"
  };
}
