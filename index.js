/**
 * @author Subrat Thakur
 * @license BSD-3
 * @module no-empty-image-alt-text
 * @fileoverview
 *   Warn when image add without alt text
 *
 *   You add images to your markdown file and
 *   sometime avoid or miss adding alt text for it.
 *   This might cause accessibility issue.
 *
 * @example {"name": "ok.md"}
 *
 *   ![foo](http://foo.bar/baz.png)
 *
 *
 * @example {"name": "not-ok.md"}
 *
 *   ![](http://foo.bar/baz.png)
 *
 *
 * @example {"name": "not-ok.md", "label": "output"}
 *
 *   1:1-1:7: Missing alt Text for image
 */

'use strict'

var rule = require('unified-lint-rule')
var visit = require('unist-util-visit')
var generated = require('unist-util-generated')

module.exports = rule(
    'remark-lint:no-empty-image-alt-text',
    noEmptyImageTitle
)

var reason = 'Missing alt text for image!';

function noEmptyImageTitle(tree, file) {
    visit(tree, 'image', visitor)

    function visitor(node) {
        if (!generated(node) && !node.alt) {
            file.message(reason, node)
        }
    }
}