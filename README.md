# remark-lint-no-empty-image-alt-text

This remark-lint rule is created to check if all images have alt text or not. This will help to get standard accessibility for images.

```
<!-- Invalid -->

![](<image-path>)

<!-- Valid -->

![alt text](<image-path>)
```

## Using the rule

### With `remark` 

Let’s say `example.js` looks as follows:

```
var report = require('vfile-reporter')
var remark = require('remark')
var remarkLint = require('remark-lint');
var imageAltText = require('remark-lint-no-empty-image-alt-text')

var file = remark()
            .use(remarkLint)
            .use(imageAltText)
            .processSync('![](./media/example.png)')

console.log(report(file))

```

Now, running `node example.js` yields:

```txt
  1:1-1:25  warning  Missing alt text for image!  no-empty-image-alt-text  remark-lint

⚠ 1 warning
```

### Via `.remarkrc`

```bash
npm install -g remark-cli
npm install remark-lint remark-lint-no-empty-image-alt-text
```

Then, set up your `.remarkrc`:

```JSON
{
  "plugins": [
    "lint",
    "lint-no-empty-image-alt-text"
  ]
}
```

Now you can use the following command to run the lint:

```bash
remark xxx.md
```

### Via CLI

```bash
npm install -g remark-cli
npm install remark-lint remark-lint-no-empty-image-alt-text
remark -u lint -u lint-no-empty-image-alt-text xxx.md
```