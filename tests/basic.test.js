import {Selector, selector} from 'testcafe'

fixture `Getting started with TestCafe`
    .page `https://devexpress.github.io/testcafe/example/`
    .before (async t => {
        // runs once at the start of the test
    })
    .beforeEach(async t => {
    await t.setTestSpeed(1)
    await t.setPageLoadTimeout(0)
    })
    .after(async t => {
        // cleaning test data
        // logging and sending dat to monitoring system
    })
    .afterEach(async t => {
        // runs after each test
    })

test.only('My First TestCafe test', async t => {

    // await t.takeScreenshot({fullPage: true})
    await t.typeText('#developer-name','Kannan')
    // await t.wait(1000)
    await t.click('#submit-button')
    const error_message = Selector('#article-header')
    // await t.takeElementScreenshot(error_message)
    await t.expect(error_message.innerText).contains('Thank you, Kannan!')
})

test('My Second TestCafe test', async t => {

    // await t.takeScreenshot({fullPage: true})
    await t.typeText('#developer-name','Kannan')
    // await t.wait(1000)
    await t.click('#submit-button')
    const error_message = Selector('#article-header')
    // await t.takeElementScreenshot(error_message)
    await t.expect(error_message.innerText).contains('Thank you, Kannan!')
})

test('My Third TestCafe test', async t => {

    // await t.takeScreenshot({fullPage: true})
    await t.typeText('#developer-name','Kannan')
    // await t.wait(1000)
    await t.click('#submit-button')
    const error_message = Selector('#article-header')
    // await t.takeElementScreenshot(error_message)
    await t.expect(error_message.innerText).contains('Thank you, Kannan!')
})