import { dirname } from 'path';
import { fileURLToPath } from 'url';

const dir = dirname(fileURLToPath(import.meta.url));
import path from 'path';

export const PATH_DB = path.join(dir, '..', 'db', 'db.json');
