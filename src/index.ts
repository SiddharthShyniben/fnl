import {readFileSync} from 'node:fs';
import {argv} from 'node:process';

const file = argv[2] ?? 'main.fnl';
const contents = readFileSync(file, 'utf8');

console.log(contents);
