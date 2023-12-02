let start = document.querySelector('#start')
let stop = document.querySelector('#stop')
let reset = document.querySelector('#reset')
let hour = document.querySelector('.hour')
let min = document.querySelector('.min')
let sec = document.querySelector('.sec')
let hund = document.querySelector('.hundred')
let h = 0;
let m = 0;
let s = 0;
let part = 0;
let go = true;

function stopWatch() {
    if (go == true) {
        part += 1;
        if (part == 100) {
            part = 0
            s += 1
        }
    }
}
start.onclick = () => {
    go = true;
    if (go == true) {
        setInterval(() => {
            if (go == true) {
                part += 1;
                if (part == 100) {
                    part = 0
                    s += 1
                }
            }
            if (part <= 9) {
                partstr = '0' + part;
            } else {
                partstr = part;
            }
            if (s <= 9) {
                sstr = '0' + s;
            } else {
                sstr = s;
            }
            if (m <= 9) {
                mstr = '0' + m;
            } else {
                mstr = m;
            }
            if (h <= 9) {
                hstr = '0' + h;
            } else {
                hstr = h;
            }
            if (s == 60) {
                s = 0
                m += 1
            }
            if (m == 100) {
                m = 0
                h += 1
            }

            hund.innerHTML = partstr;
            sec.innerHTML = sstr;
            min.innerHTML = mstr;
            hour.innerHTML = hstr;
        }, 10)
    }
}
stop.onclick = () => {
    go = false;
}
reset.onclick = () => {
    // go = false;
    // hund.innerHTML = '00';
    // sec.innerHTML = '00';
    // min.innerHTML = '00';
    // hour.innerHTML = '00';
    // h = 0;
    // m = 0;
    // s = 0;
    // part = 0;
    window.location.reload()
}