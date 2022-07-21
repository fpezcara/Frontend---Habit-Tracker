const renderDom = require('./helpers')

let dom;
let document;

describe('index.html', () => {
    beforeEach(async () => {
        dom = await renderDom('index.html');
        document = await dom.window.document;
    })

    test('it has a header title', () => {
        let nav = document.querySelector('nav');
        expect(nav).toBeTruthy();
    })

    test('it has a header title', () => {
        let nav = document.querySelector('nav');
        expect(nav).toBeTruthy();
    })

    test('it has a header title', () => {
        let nav = document.querySelector('nav');
        expect(nav).toBeTruthy();
    })
})
