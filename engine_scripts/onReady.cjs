module.exports = async (page, scenario, vp) => {
  console.log('SCENARIO > ' + scenario.label);

  await page.waitForFunction(() => {
    return document.fonts.ready.then(() => {
      console.log('Fonts loaded');
      return true;
    });
  });

  if (scenario.showSelectors) {
    await Promise.all(
      scenario.showSelectors.map(async (selector) => {
        await page
          .evaluate((sel) => {
            document.querySelectorAll(sel).forEach(s => {
              s.style.visibility = 'visible';
            });
          }, selector);
      })
    );
  }
};
