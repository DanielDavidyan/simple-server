import {requestsResolver} from "./utilities/server.utils";
import {IncomingMessage, ServerResponse} from "http";

const http = require('http');
const PORT = process.env.PORT || 8080;

http.createServer(function (req: IncomingMessage, res: ServerResponse) {
    res.writeHead(200);
    let postUrl = req.url;
    if (requestsResolver[<string>postUrl] && req.method === 'GET') {
        requestsResolver[<string>postUrl](res);
    }

}).listen(PORT, () => console.log("Server listening on port 8080"));
