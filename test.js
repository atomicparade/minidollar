function init() {
    const logUl = $('#log');

    function log(text) {
        logUl.append($('li', text));
    }

    log('Test 1: Adding a border to the wrapper');
    const wrapper = $('#wrapper');
    wrapper.style.border = '1px solid #000';

    log('Test 2: Appending two paragraph elements to the wrapper; one should have a blue background');
    wrapper.append(
        $('p', { style: 'background-color: #cdf'}, 'Test 2: First paragraph element (with blue background)'),
        $('p', "Test 2: Second paragraph element")
    );

    log('Test 3: Adding another .someClass to the wrapper');
    wrapper.append($('section', { class: 'someClass' }, 'Test 3: Section created'));

    log('Test 4: Enumerating the sections that have the class someClass');
    let i = 1;
    $('.someClass').forEach(function(el) {
        el.append($('p', 'Test 4: Section ' + i));
        ++i;
    });

    log('Test 5: Creating an element without using $ and appending it to the wrapper');
    let newElement = document.createElement('p');
    newElement.appendChild(document.createTextNode('Test 5: New element'));
    wrapper.append(newElement);

    log('Test 6: Verifying that the new element doesn\'t have the method appendText');
    log('Test 6 result: ' + (newElement.appendText === undefined ? 'Pass' : 'Fail'));

    log('Test 7: $ifying the new element and then verifying that it has appendText');
    newElement = $(newElement);
    log('Test 7 result: ' + (newElement.appendText !== undefined ? 'Pass' : 'Fail'));
}

window.onload = init;
