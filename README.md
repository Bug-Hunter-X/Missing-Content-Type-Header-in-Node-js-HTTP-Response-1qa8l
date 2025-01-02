# Missing Content-Type Header in Node.js HTTP Response

This repository demonstrates a common error in Node.js HTTP servers: omitting the `Content-Type` header in the response.  This can lead to unexpected behavior on the client-side, as the browser or other client might misinterpret the response content.

## Bug

The `bug.js` file shows a simple HTTP server that doesn't set the `Content-Type` header.  This means the client receives the response body but doesn't know what type of content it is.  This can cause issues with parsing, rendering, and overall functionality.

## Solution

The `bugSolution.js` file corrects this by adding the `Content-Type` header to the response.  This ensures that the client correctly identifies the response type (e.g., `text/html`, `application/json`).

## How to Reproduce

1. Clone this repository.
2. Navigate to the repository's directory in your terminal.
3. Run `node bug.js`. You can test the response by making an HTTP request to http://localhost:3000 using tools like curl or your browser's developer tools.
4. Run `node bugSolution.js`. Note that the response behavior will now be more predictable and aligned with expectations.
