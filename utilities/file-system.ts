import {PathLike, promises} from "fs";
import {resolve} from "path";

const contentPath = resolve(__dirname, '../package.json');

export async function statAsync(path: PathLike = contentPath): Promise<any> {
    return (await promises.stat(path)).mtime.toString();
}
