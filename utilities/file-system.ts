import * as fs from "fs";
import {PathLike, Stats} from "fs";
import {resolve} from "path";

const contentPath = resolve(__dirname, '../package.json');

export async function statSync(path: PathLike = contentPath): Promise<Stats> {
    return fs.statSync(path);
}
