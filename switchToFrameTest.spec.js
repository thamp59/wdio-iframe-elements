it('should see element exists when using browser.switchToFrame', async () => {
  await browser.url('https://chips-site-a.glitch.me/');
  await browser.switchFrame($('iframe'));
  await $('#cookies').isExisting()
  await browser.refresh()
  // await browser.url('https://chips-site-a.glitch.me/'); // also fails
  await $('#cookies').isExisting() // this fallsback to regular WebDriver Classic Command
  await browser.switchFrame($('iframe'))// this fails!
});
