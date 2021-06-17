const fs = require('fs')
const puppeteer = require('puppeteer');

function createDirectoryIfNeeded(path) {
  if (!fs.existsSync(path)) {
    fs.mkdirSync(path, 0766, function(error) {
      if (error) {
        console.error(error);
        process.exit(1);
      }
    })
  }
}

function createTemplate(component, index, content) {
  return "export default {\n\
    title: 'Components/" + component + "'\n\
  }\n\
  \n\
  export const " + component + "_" + index + " = () => {\n\
    return `" + content + "`\n\
  }";
}

// TODO: build this list automatically from docs
const files = [
  ['Accordion', '../_site/docs/5.0/components/accordion/index.html'],
  ['Alerts', '../_site/docs/5.0/components/alerts/index.html'],
  ['BackToTop', '../_site/docs/5.0/components/back-to-top/index.html'],
  ['Badge', '../_site/docs/5.0/components/badge/index.html'],
  ['Breadcrumb', '../_site/docs/5.0/components/breadcrumb/index.html'],
  ['ButtonGroup', '../_site/docs/5.0/components/button-group/index.html'],
  ['Buttons', '../_site/docs/5.0/components/buttons/index.html'],
  ['Card', '../_site/docs/5.0/components/card/index.html'],
  ['Carousel', '../_site/docs/5.0/components/carousel/index.html'],
  ['CloseButton', '../_site/docs/5.0/components/close-button/index.html'],
  ['Collapse', '../_site/docs/5.0/components/collapse/index.html'],
  ['Dropdowns', '../_site/docs/5.0/components/dropdowns/index.html'],
  ['ListGroup', '../_site/docs/5.0/components/list-group/index.html'],
  ['Modal', '../_site/docs/5.0/components/modal/index.html'],
  ['Navbar', '../_site/docs/5.0/components/navbar/index.html'],
  ['Navs', '../_site/docs/5.0/components/navs/index.html'],
  ['NavsTabs', '../_site/docs/5.0/components/navs-tabs/index.html'],
  ['OffCanvas', '../_site/docs/5.0/components/offcanvas/index.html'],
  ['Pagination', '../_site/docs/5.0/components/pagination/index.html'],
  ['Popovers', '../_site/docs/5.0/components/popovers/index.html'],
  ['Progress', '../_site/docs/5.0/components/progress/index.html'],
  ['Scrollspy', '../_site/docs/5.0/components/scrollspy/index.html'],
  ['Spinners', '../_site/docs/5.0/components/spinners/index.html'],
  ['SteppedProcess', '../_site/docs/5.0/components/stepped-process/index.html'],
  ['Toasts', '../_site/docs/5.0/components/toasts/index.html'],
  [
    'Tooltips',
    '../_site/docs/5.0/components/tooltips/index.html',
    'var tooltipTriggerList = [].slice.call(document.querySelectorAll(\'[data-bs-toggle="tooltip"]\'));\
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {\
      return new boosted.Tooltip(tooltipTriggerEl);\
    })\
  '],
];

const outputDirectory = __dirname + '/auto';
createDirectoryIfNeeded(outputDirectory);

(async() => {    
  const browser = await puppeteer.launch();

  for (const file of files) {
    try {
      const page = await browser.newPage();

      // Some timeouts and `page.waitForNavigation` have been added to avoid
      // 'Error: Execution context was destroyed, most likely because of a navigation.':
      await Promise.all([
        page.waitForNavigation(),
        page.goto('file://' + __dirname + '/' + file[1]),
        page.waitForNavigation()
      ]);

      const e = await page.evaluate(() => 
        Array.from(document.querySelectorAll('.bd-example'), 
      e => e.innerHTML));

      let index = 0;
      e.forEach(example => {
        const outputFileDirectory = outputDirectory + '/' + file[0];
        const outputFile = outputFileDirectory + '/' + file[0] + '_' + index + '.stories.js';

        console.log('creating ' + outputFile + '...');

        // Automatically remove HTML comments that would break the story
        example = example.replace(/<!--[\s\S]*?-->/gm, '');

        // Insert some specific JavaScript
        example += '<script src="https://cdn.jsdelivr.net/npm/boosted@5/dist/js/boosted.bundle.min.js" crossorigin="anonymous"></script>';
        if (file[2]) {
          example += '<script type="text/javascript">' + file[2] + '</script>'
        }

        createDirectoryIfNeeded(outputFileDirectory)

        try {
          fs.writeFileSync(outputFile, createTemplate(file[0], index, example))
        } catch (err) {
          console.error(err);
          process.exit(1);
        }
        index++;
      })
      await page.close();
    }
    catch (err) {
      console.error(err);
      process.exit(1);
    }
  };

  await browser.close();
})();