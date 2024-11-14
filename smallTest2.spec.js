it('should be able to find present window when other window is closed', async () => {
    await browser.url("https://the-internet.herokuapp.com/iframe");
    const elementalSeleniumLink = await $("/html/body/div[3]/div/div/a")
    await elementalSeleniumLink.waitForDisplayed()
    await elementalSeleniumLink.click()
    await browser.waitUntil(async () => (await browser.getWindowHandles()).length === 2);
    await browser.switchWindow('https://elementalselenium.com/');
    await $('#__docusaurus_skipToContent_fallback').waitForDisplayed();
    await browser.closeWindow();
    await browser.waitUntil(async () => (await browser.getWindowHandles()).length === 1);
    await browser.switchWindow('https://the-internet.herokuapp.com/iframe'); // This fails even though the window is present
});