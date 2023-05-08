const { Builder, By , Key } = require('selenium-webdriver');
//Different asserts
const assert = require('assert');
const should = require('chai').should();
const expect =require('chai').expect;

//Mocha
describe('Add a todo to LambdaTest sample app', () => {
    it('Sucessfully adds a todo',async() => {
        let driver = await new Builder().forBrowser('firefox').build();
        await driver.get('https://lambdatest.github.io/sample-todo-app/');

        await driver.findElement(By.id('sampletodotext')).sendKeys('Learn Selenium');
       // await driver.findElement(By.id('sampletodotext')).sendKeys('Learn Selenium',Key.ENTER);
        await driver.findElement(By.css('#addbutton')).click();

        //Find what we just put into the list
        let todoText = await driver.findElement(By.css('li:last-child')).getText();
         //Get the third element of the list
        let items = await driver.findElements(By.css('li'));
        let thirdItemText = await items[2].getText();

        thirdItemText.should.equal('Third Item');

        //Assert
        assert.equal(todoText,'Learn Selenium');// Bulliten node 
        expect(todoText).to.equal('Learn Selenium');//chai expect
        todoText.should.equal('Learn Selenium');// chai should

        await driver.quit();



    });
    it('This test should be pending');
});