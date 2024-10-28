it('should see element exists when using browser.switchToFrame', async () => {
  await browser.url('https://chips-site-a.glitch.me/');
  await browser.switchToFrame(0); // maybe we can't use switchFrame, e.g. due to https://github.com/webdriverio/webdriverio/issues/13763
  const cookieSelector = $('#cookies');

  console.log(`getText(): ${await cookieSelector.getText()}`);
  await expect(cookieSelector).toHaveText(expect.stringContaining('unpartitioned-cookie'));

  console.log('So getText() works on that element... but what about isExisting()');

  console.log(`isExisting: ${await cookieSelector.isExisting()}`);
  await expect(cookieSelector).toBeExisting({ message: 'Bug' }); // this fails!
});
