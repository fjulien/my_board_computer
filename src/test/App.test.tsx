<<<<<<< HEAD
import React from 'react';
import { render, cleanup } from '@testing-library/react'
import App from '../App';
import { unmountComponentAtNode } from "react-dom";

afterEach(cleanup)

describe('This will test MyComponent', () => {
  test('renders message', () => {
    const { getByText } = render(<App />);

    expect(getByText('Hello World!'));
  });
=======
const puppeteer = require('puppeteer');

let browser, page;
beforeAll(async () => {
  browser = await puppeteer.launch({executablePath: './chrome-win/chrome.exe'});
>>>>>>> a3f7bdce7c653b4f9c241f739ca3515986e2f3de
});

afterAll(async () =>{
  await browser.close();
});

describe('App', () => {
  it('Test running', () =>{
    expect(true).toBe(true);
  });

  test('Home page with navbar and footer', async () => {
    page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    const app = await page.$eval(".App", (element) => element.innerHTML);
    expect(app).toMatch('class="FooterBar"');
    expect(app).toMatch('class="navbar');
  },3000);
  
});
/*
describe('Module access', () => {



  test('Login user', async () => {
    expect(page.url()).toBe( URL_HOST + URL_HOME);
    await page.on('response', async (response) => {   
      if (response.url() === URL_HOST + URL_HOME){
        expect(response.status()).toBe(200);
      }
    });
  },TIME_OUT);

  it('Page Welcome', async () => {
    await page.goto(URL_HOST + ULR_WELCOME);
  },TIME_OUT);

  it('Page RBS', async () => {
    await page.waitForSelector('div > nav > div > div > div > a');   
    const stories = await page.evaluate(() => {
      return Array.from(document.querySelectorAll('div > nav > div > div > div > a')).map(link => link.href);
    });    
    const urlFound = stories.find( url => url.endsWith(URL_RBS));
    await page.goto(urlFound);
    expect(page.url()).toMatch(urlFound);
  },TIME_OUT);


});

*/