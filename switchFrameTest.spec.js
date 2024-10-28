it('should see element text when using browser.switchFrame', async () => {
  await browser.url('https://chips-site-a.glitch.me/');
  await browser.switchFrame(() => true);
  const cookieSelector = $('#cookies');

  console.log(`isExisting: ${await cookieSelector.isExisting()}`);
  await expect(cookieSelector).toBeExisting(); 

  console.log('So isExisting() works on that element... but what about getText()');

  console.log(`getText(): ${JSON.stringify(await cookieSelector.getText())}`);
  await expect(cookieSelector).toHaveText(expect.stringContaining('unpartitioned-cookie'), {message: 'Bug'}); // this fails!
});
