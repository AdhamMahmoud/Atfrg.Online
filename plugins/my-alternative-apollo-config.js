
export default function(context){
  return {
     httpEndpoint: 'https://atfrg.space/server/',
    // optional
    // override HTTP endpoint in browser only
    // browserHttpEndpoint: '/graphql',
    // optional
    // See https://www.apollographql.com/docs/link/links/http.html#options
    httpLinkOptions: {
      credentials: 'same-origin'
    },
    // You can use `wss` for secure connection (recommended in production)
    // Use `null` to disable subscriptions
    // wsEndpoint: 'ws://api2/', // optional
    // LocalStorage token
    tokenName: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InNlcnZpY2UiOiJkZWZhdWx0QGRlZmF1bHQiLCJyb2xlcyI6WyJhZG1pbiJdfSwiaWF0IjoxNTg2OTYwODgwLCJleHAiOjE2MTg3ODkyMjN9.2I4N-QE3I2-BgvZr0ilGmictto5q2vNkjnFRGIIKupU', // optional
    // Enable Automatic Query persisting with Apollo Engine
    persisting: false, // Optional
    // Use websockets for everything (no HTTP)
    // You need to pass a `wsEndpoint` for this to work
    // websocketsOnly: true, // Optional,
    getAuth: (tokenName) => 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InNlcnZpY2UiOiJkZWZhdWx0QGRlZmF1bHQiLCJyb2xlcyI6WyJhZG1pbiJdfSwiaWF0IjoxNTg2OTYwODgwLCJleHAiOjE2MTg3ODkyMjN9.2I4N-QE3I2-BgvZr0ilGmictto5q2vNkjnFRGIIKupU',
  }
}