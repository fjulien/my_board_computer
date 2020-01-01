const puppeteer = require('puppeteer');

let browser, page, Terminatest;
beforeAll(async () => {
  browser = await puppeteer.launch({executablePath: './chrome-win/chrome.exe'});
  page = await browser.newPage();
  await page.goto('http://localhost:3000/terminatest');
  Terminatest = await page.$eval(".Terminatest", (element) => element.innerHTML);
});

afterAll(async () =>{
  await browser.close();
});

describe('Terminatest', () => {

  test('TestMaker', async () => {
    expect(Terminatest).toMatch('class="TestMaker"');
  },3000);
  test('class TestThread', async () => {
    expect(Terminatest).toMatch('class="TestThread"');
  },3000);
  test('class ViewTests', async () => {
    expect(Terminatest).toMatch('class="ViewTests"');
  },3000);

});