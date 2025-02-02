// To support types
// https://github.com/microsoft/TypeScript/issues/14877
declare const self: ServiceWorkerGlobalScope;

import { Hono } from 'hono';
import { handle } from 'hono/service-worker';

const app = new Hono().basePath('/stash');
app.get('/', (c) => c.text('Hello World'));

self.addEventListener('fetch', handle(app));
