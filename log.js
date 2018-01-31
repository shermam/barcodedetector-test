let count = 1;

export function log(msg) {
    document.querySelector('#message')
        .innerHTML = count++ + ' - ' + JSON.stringify(msg) + '<br>';
}

window.onerror = log;