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
<<<<<<< HEAD
    test('it has a ul', () => {
        let ul = document.querySelector('.links');
        expect(ul).toBeTruthy();
    })
    test('it has a logo', () => {
        let logo = document.querySelector('.logo');
        expect(logo).toBeTruthy();
=======

    test('it has a header title', () => {
        let nav = document.querySelector('nav');
        expect(nav).toBeTruthy();
    })

    test('it has a header title', () => {
        let nav = document.querySelector('nav');
        expect(nav).toBeTruthy();
>>>>>>> 7b128550012457212722075a03129ea0caad251c
    })
})
