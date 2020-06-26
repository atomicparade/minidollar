# minidollar

[![Unlicense](https://img.shields.io/badge/license-Unlicense-blue)](https://choosealicense.com/licenses/unlicense/) [![CC0](https://img.shields.io/badge/license-CC0-blue)](https://creativecommons.org/publicdomain/zero/1.0/)

`minidollar` provides a tiny `$` function.

- `$(element)` adds the functions `appendText`, `append`, and `clearChildren` to `element` ("$ifies" `element`).
- `$('#id')` $ifies and returns the element with the id `id`.
- `$('.className')` $ifies and returns all elements with the class `className`.
- `$('tagName')` creates, $ifies, and returns a new DOM element.

`minidollar.js` may be included as a script or copied and pasted into a script file.
