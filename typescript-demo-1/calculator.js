{
    function createButton(text, container, className) {
        var button = document.createElement('button');
        button.textContent = text;
        if (className)
            button.className = className;
        container.appendChild(button);
        // return button
    }
    var container_1 = document.createElement('div');
    container_1.classList.add('calculator');
    var output = document.createElement('div');
    output.classList.add('output');
    var span = document.createElement('span');
    span.textContent = '0';
    output.appendChild(span);
    container_1.appendChild(output);
    document.body.append(container_1);
    var n1_1, n2_1, operator_1;
    container_1.addEventListener('click', function (event) {
        if (event.target instanceof HTMLButtonElement) {
            var button = event.target;
            var text = button.textContent;
            if ('0123456789'.indexOf(text) >= 0) {
                if (operator_1) {
                    if (n2_1) {
                        n2_1 = parseInt(n2_1.toString() + text);
                    }
                    else {
                        n2_1 = parseInt(text);
                    }
                }
                else {
                    if (n1_1) {
                        n1_1 = parseInt(n1_1.toString() + text);
                    }
                    else {
                        n1_1 = parseInt(text);
                    }
                }
            }
            else if ('+-x÷'.indexOf(text) >= 0) {
                operator_1 = text;
            }
            else {
                console.log('不知道');
            }
            console.log(n1_1, n2_1, operator_1);
        }
        else {
            console.log('不是button');
        }
    });
    var keys = [
        ['Clear', '÷'],
        ['7', '8', '9', 'x'],
        ['4', '5', '6', '-'],
        ['1', '2', '3', '+'],
        ['0', '.', '=']
    ];
    keys.forEach(function (textList) {
        var div = document.createElement('div');
        div.classList.add('row');
        textList.forEach(function (text) {
            createButton(text, div, "button text-" + text);
        });
        container_1.appendChild(div);
    });
}
