import { JSDOM } from 'jsdom';
import { performance } from 'perf_hooks';
const dom = new JSDOM(`<body><div><canvas id="canvas"></canvas></div></body>`, { url: 'https://localhost' });
global.document = dom.window.document;
global.window = dom.window;
global.HTMLElement = global.window.HTMLElement;
global.customElements = global.window.customElements;
global.Image = global.window.Image;
global.performance = performance;
