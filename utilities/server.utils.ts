import {statSync} from "./file-system";
import * as fs from "fs";
import {resolve} from "path";
import {ServerResponse} from "http";

const contentPath = resolve(__dirname, '../content.txt');

export const requestsResolver: Record<string, Record<string, (res: ServerResponse) => void>> = {
    'GET': {
        '/content': (res) => getContent(res),
        '/updateTime': (res) => getUpdateTime(res)
    }
}

async function getContent(res: ServerResponse) {
    const stream = await fs.createReadStream(contentPath);
    stream.on('open', () => stream.pipe(res));
}

async function getUpdateTime(res: ServerResponse) {
    const updateTime = (await statSync());
    res.write(updateTime.mtime.toString());
    res.end();
}
