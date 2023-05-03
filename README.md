# helpers-ts

![Latest Version](https://img.shields.io/github/v/tag/jornatf/helpers-ts?label=version&style=flat-square)
[![Licence](https://img.shields.io/github/license/jornatf/helpers-ts?label=license&style=flat-square)](LICENCE.md)
[![GitHub Tests Action Status](https://img.shields.io/github/actions/workflow/status/jornatf/helpers-ts/run-tests.yml?branch=main&label=tests&style=flat-square)](https://github.com/jornatf/helpers-ts/actions?query=workflow%3Arun-tests+branch%3Amain)
[![GitHub Prettier Action Status](https://img.shields.io/github/actions/workflow/status/jornatf/helpers-ts/fix-styling-code.yml?branch=main&label=code+style&style=flat-square)](https://github.com/jornatf/helpers-ts/actions?query=workflow%3Afix-styling-code+branch%3Amain)

[![Downloads](https://img.shields.io/npm/dt/helpers-ts?label=downloads&style=flat-square)](https://www.npmjs.com/package/helpers-ts)

**Some simple Helpers to manipulate strings and arrays for JavaScript and Typescript.**

> #### If you like this package you can [Buy me a Coffee](https://www.buymeacoffee.com/jornatf) ☕️

#### Table of contents

-   [Installation](#introduction)
-   [Usage](#usage)
    -   [Strings](#strings)
    -   [Arrays](#arrays)
-   [Changelog](#changelog)
-   [Contributing](#contributing)
-   [Credits](#credits)
-   [License](#license)

## Installation

```bash
# To install this package, run:
$ npm install helpers-ts
# or
$ npm i helpers-ts
```

## Usage

> This package is intended to help you manipulate strings and arrays, in JavaScript and Typescript. It is available from the **[NPM Registry](https://www.npmjs.com/package/helpers-ts)**.

```javascript
import { toCamel } from 'helpers-ts'

const str = 'Hello world'
console.log(toCamel(str))

// Output: 'helloWorld'
```

### Strings

#### `slugify()`

Converts a string into slug.

```javascript
slugify('Hello world') // 'hello_world'
slugify('Hello world', '-') // 'hello-world'
```

#### `toCamel()`

Converts a string into camelCase.

```javascript
toCamel('Hello world') // 'helloWorld'
```

#### `toPascal()`

Converts a string into PascalCase.

```javascript
slugify('Hello world') // 'HelloWorld'
```

#### `isUuid()`

Checks if a string is a valid uuid.

```javascript
isUuid('5c5a300f-20fb-416f-b026-6f53f8bdc7f5') // true
isUuid('not-uuid') // false
```

#### `uuid()`

Returns a random and unique Uuid.

```javascript
uuid() // '5c5a300f-20fb-416f-b026-6f53f8bdc7f5'
```

#### `limitStr()`

Limits a string to a specified number of characters.

```javascript
limitStr('This is a long string that needs to be limited.', 20)
// 'This is a long strin...'
```

#### `randomStr()`

Returns a random string with a specified number of characters.

```javascript
randomStr(6) // 'ab12c3'
```

#### `replaceStr()`

Replaces occurrences of a string by another.

```javascript
replaceStr('world', 'earth', 'Hello world') // 'Hello earth'
```

#### `squish()`

Trims and removes extra spaces between words with a specified number of space.

```javascript
squish(' Hello     world ', 5) // 'Hello world'
```

### Arrays

#### `crossJoin()`

Joins arrays and returns all possible combinations of input arrays.

> You can pass more than 2 arrays.

```javascript
crossJoin(['red', 'green'], ['small', 'medium'])
// [['red', 'small'], ['red','medium'], ['green', 'small'], ['green','medium']]
```

#### `keyExists()`

Checks if a key exists in an array.

```javascript
keyExists('foo', ['foo', 'bar', 'baz']) // true
keyExists('qux', ['foo', 'bar', 'baz']) // false

keyExists('foo', { foo: 'bar', baz: 'qux' }) // true
```

#### `firstKey()`, `lastKey()`

Returns first or last key.

```javascript
firstKey(['foo', 'bar', 'baz']) // 'foo'
lastKey(['foo', 'bar', 'baz']) // 'baz'
```

#### `implode()`

Converts an array into string.

```javascript
implode(['Foo', 'Bar']) // 'Foo Bar'
implode(['Foo', 'Bar'], ', ') // 'Foo, Bar'
```

#### `explode()`

Converts a string into array.

```javascript
explode('Foo,Bar') // ['Foo', 'Bar']
implode('Foo Bar', ' ') // ['Foo', 'Bar']
```

## Changelog

> Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Contributing

> If you are interested in this project and want to improve it, fix errors or bugs, **you're welcome to contribute**.
>
> [![Contributors](https://img.shields.io/github/contributors/jornatf/helpers-ts?style=flat-square)](../../contributors)

## Credits

-   [Jordan Nataf](https://github.com/jornatf)
-   [All Contributors](../../contributors)

## Licence

The MIT License (MIT).

> Please see [License File](LICENSE.md) for more information.
