import {requestsResolver} from "./utilities/server.utils";
import * as http from "http";

const port = process.env.PORT || 8080;

http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
    const method = req.method ?? '';
    const postUrl = req.url ?? '';
    if (requestsResolver[method][postUrl]) {
        requestsResolver[method][postUrl](res);
    } else {
        res.writeHead(404);
        res.end();
    }
}).listen(port, () => console.log("Server listening on port 8080"));
