export default function (context) {
  return {
    httpEndpoint: '',
    // You can use `wss` for secure connection (recommended in production)
    // Use `null` to disable subscriptions
    wsEndpoint: null,
    // LocalStorage token
    tokenName: 'apollo-token',
    // Enable Automatic Query persisting with Apollo Engine
    persisting: true,
    // Use websockets for everything (no HTTP)
    // You need to pass a `wsEndpoint` for this to work
    websocketsOnly: true,
    // Is being rendered on the server?
    ssr: true,
  
    // Override the way the Authorization header is set
     getAuth: (tokenName) => 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InNlcnZpY2UiOiJkZWZhdWx0QGRlZmF1bHQiLCJyb2xlcyI6WyJhZG1pbiJdfSwiaWF0IjoxNTg2OTYwODgwLCJleHAiOjE2MTg3ODkyMjN9.2I4N-QE3I2-BgvZr0ilGmictto5q2vNkjnFRGIIKupU',
  }
}
