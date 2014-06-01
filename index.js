/*!
 * verb-tag-symbols <https://github.com/jonschlinkert/verb-tag-symbols>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */
'use strict';

var symbols = require('markdown-symbols');

module.exports = function (verb) {
  var tags = {};

  tags.symbols = function (content) {
    return symbols.process(content);
  };
  return tags;
};