/**
 * @jest-environment jsdom
 */
import { updateView } from "../src/client/js/formHandler";
describe('Testing the view update functionality', () => {
    test('Testing the updateView() function', () => {
        const form = document.getElementById('urlForm');
        expect(form).toBeFalsy();
    })
});