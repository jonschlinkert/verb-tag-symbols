# verb-tag-symbols [![NPM version](https://badge.fury.io/js/verb-tag-symbols.png)](http://badge.fury.io/js/verb-tag-symbols)

> Tag for Verb. Parse custom symbols in markdown documents.

## Install
Install with [npm](npmjs.org):

```bash
npm i verb-tag-symbols --save-dev
```

## Usage

If you're using [verb-cli][verb-cli], you will need to define `['verb-tag-symbols']` in the `tags` property in the front matter of your project's `.verbrc.md` (or `docs/README.tmpl.md`). This registers the tag with [verb][verb]:

```yaml
---
tags: ['verb-tag-symbols']
---
```

In your templates, you can now use the tag like this:

```js
{%= symbols(docs("foo")) %}
```

Front-matter is just one way to register verb tags, filters, and plugins. See the [verb documentation][docs] for more info.

## Author

**Jon Schlinkert**
 
+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert) 

## License
Copyright (c) 2014 Jon Schlinkert, contributors.  
Released under the MIT license

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on June 01, 2014._


[verb]: https://github.com/assemble/verb
[docs]: https://github.com/assemble/verb/blob/master/DOCS.md#tags
[verb-cli]: https://github.com/assemble/verb-cli