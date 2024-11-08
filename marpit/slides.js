const { Marpit } = require('@marp-team/marpit')
const fs = require('fs');

// Create Marpit instance
const marpit = new Marpit()


const theme = fs.readFileSync('theme.css', 'utf8')
marpit.themeSet.default = marpit.themeSet.add(theme)

const markdown = fs.readFileSync('README.md', 'utf8')
const { html, css } = marpit.render(markdown)

// 4. Use output in your HTML
const htmlFile = `
<!DOCTYPE html>
<html><body>
  <style>${css}</style>
  ${html}
</body></html>
`
fs.writeFileSync('slides.html', htmlFile.trim())