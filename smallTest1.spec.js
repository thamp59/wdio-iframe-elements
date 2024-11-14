it('should see that content is no longer displayed when window is closed', async () => {
    await browser.url("https://the-internet.herokuapp.com/iframe");
    const elementalSeleniumLink = await $("/html/body/div[3]/div/div/a")
    await elementalSeleniumLink.waitForDisplayed()
    await elementalSeleniumLink.click()
    await browser.waitUntil(async () => (await browser.getWindowHandles()).length === 2);
    await browser.switchWindow('https://elementalselenium.com/');
    await $('#__docusaurus_skipToContent_fallback').waitForDisplayed();
    await browser.closeWindow()
    await $('#__docusaurus_skipToContent_fallback').waitForDisplayed({ reverse: true }); // Currently fails, should pass if the window is closed (because the element is no longer displayed)
    await browser.waitUntil(async () => (await browser.getWindowHandles()).length === 1);
    await browser.switchWindow('https://the-internet.herokuapp.com/iframe');
})

