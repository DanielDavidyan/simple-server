import {statAsync} from "./file-system";
import * as fs from "fs";
import {resolve} from "path";
import {ServerResponse} from "http";

const contentPath = resolve(__dirname, '../content.txt');

export const requestsResolver: Record<string, (res: ServerResponse) => void> = {
    '/content': (res) => getContent(res),
    '/updateTime': (res) => getUpdateTime(res)
}

async function getContent(res: any) {
    const stream = await fs.createReadStream(contentPath);
    stream.on('open', function () {
        stream.pipe(res);
    });

}

async function getUpdateTime(res: any) {
    const updateTime = await statAsync();
    res.write(updateTime);
    res.end();
}
