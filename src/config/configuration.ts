import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import {join} from 'path';

const FILE_NAME = 'config.yaml';

export default () => {
    return yaml.load(
        readFileSync(join(__dirname, FILE_NAME), 'utf-8')
    ) as Record<string, any>
}