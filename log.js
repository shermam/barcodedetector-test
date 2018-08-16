let count = 1;

export function log(msg) {

    if (msg && msg.message) {
        msg = msg.message;
    }

    document.querySelector('#message')
        .innerHTML = count++ + ' - ' + JSON.stringify(msg) + '<br>';
}

window.onerror = log;