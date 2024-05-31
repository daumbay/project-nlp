import { isValidUrl } from "../src/client/js/nameChecker";
test('Testing URL validity', () => {
    const text = 'https://www.example.com/test.html'
    expect(isValidUrl(text)).toBeTruthy();
});