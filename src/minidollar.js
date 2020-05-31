function $(arg) {
    function $ify(el) {
        el.appendText = (function(el) {
            return function(text) {
                const lines = text.toString().split(/\r?\n/);

                for (let i = 0; i < lines.length; ++i) {
                    if (i > 0) {
                        el.appendChild($('br'));
                    }

                    el.appendChild(document.createTextNode(lines[i]));
                }

                return el;
            };
        })(el);

        // Append text/numbers or child elements
        el.append = (function(el) {
            return function() {
                for (let i = 0; i < arguments.length; ++i) {
                    if (
                        typeof(arguments[i]) === 'string' ||
                        typeof(arguments[i]) === 'number'
                    ) {
                        el.appendText(arguments[i]);
                    } else {
                        el.appendChild(arguments[i]);
                    }
                }

                return el;
            };
        })(el);

        el.clearChildren = (function(el) {
            return function() {
                while (el.firstChild) {
                    el.removeChild(el.firstChild);
                }

                return el;
            };
        })(el);

        return el;
    }

    // $ify this existing element
    if (arg instanceof Element) {
        return $ify(arg);
    }
    // Return the element with this ID
    else if (arg.slice(0, 1) === '#') {
        return $ify(document.getElementById(arg.slice(1)));
    }
    // Return elements matching the class name
    else if (arg.slice(0, 1) === '.') {
        let els = document.getElementsByClassName(arg.slice(1));

        // Convert to Array
        els = Array.prototype.slice.call(els);

        els = els.map(function(el) {
            return $ify(el);
        });

        return els;
    }

    // Create and return a new element
    const el = $ify(document.createElement(arg));

    for (let i = 1; i < arguments.length; ++i) {
        const obj = arguments[i];

        // Determine whether this object contains attributes to set on the
        // object or is something to be appended
        if ((typeof(obj) === 'object') && !(obj instanceof Element) && !obj.append) {
            Object.keys(obj).forEach(function(key) {
                el.setAttribute(key, obj[key]);
            });
        } else {
            el.append(obj);
        }
    }

    return el;
}
