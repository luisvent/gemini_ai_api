# Node.js API for Google Gemini AI API Communication

This Node.js API provides a seamless interface for interacting with Google's Gemini AI API, enabling developers to leverage powerful artificial intelligence capabilities in their applications.

It uses specific information context to chat about.

[LIVE DEMO](https://luisvent.github.io/gemini_ai_api/)

**Example Request**

```sh
POST /
```

```json
{
  "prompt" : 'question about topic'
}
```

**Example Response**

```json
{
  "status": "Success OK",
  "message": "AI Response",
  "data": {
    "prompt": "question asked",
    "response": "response from gemini"
  }
}
```


## Installation

1. Clone this repository:

```bash
git clone https://github.com/luisvent/gemini_ai_api.git
```

2. Install dependencies:

```bash
npm install
```

3. Config Project:

```javascript
// set your configurations

// ./config/development.json

{
    "gemini_private_key": "<YOUR-GEMINI-API-KEY>",
    "server": {
    "host": "localhost",
        "port": 3930
},
    "environment": "development",
    "url": "http://localhost:3930/",
    "context": "<YOUR-CHAT-CONTEXT-INFORMATION>"
}


```

4. Run project:

```bash
npm start
```

## License
This project is licensed under the MIT License - see the LICENSE file for details.
