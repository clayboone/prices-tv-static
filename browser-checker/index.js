/**
 * Super simple web server for gathering info about browser.
 */

const http = require('http');
const url = require('url');

/**
 * config
 */
const port = 3001;

/**
 * server
 */
const server = http.createServer((request, response) => {

    const path = url.parse(request.url, true).pathname.replace(/^\/+|\/+$/g,'');
    const agent = request.headers["user-agent"];
    const referer = request.headers["referer"];

    response.end("<html><body style='margin: 150px; background-color: red;'><div style='font-family: sans-serif; border: 1px solid black; background-color:white; margin: 50px; padding: 50px;padding-bottom: 200px; box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.4);'>Hello The Broken Phone Shop! I'm checking the headers of this browser!\n</div></body></html>");

    console.groupCollapsed("Request:");
    console.log("Request received on path:", path,
                "\nwith user-agent: ", agent ? agent : "No user-agent",
                "\nwith referer: ", referer ? referer : "No referer");
    console.groupEnd();
});

server.listen(port, () => {
    console.log(`Listening on ${port}`);
});