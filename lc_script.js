


function moveup(x) {
    document.getElementById(x).focus()
}


function calculatelove() {
    var boy = document.getElementById('boyname').value

    var girl = document.getElementById('girlname').value

    var fullname = boy + girl
    fullname = fullname.toLowerCase()
    fullname = fullname.replace(/ /g, '')
    var mid = Math.floor(fullname.length / 2)
    var charfreqarray = []

    for (var i = 0; i < fullname.length; i++) {
        if (i == mid) {
            charfreqarray.push(2)
        }
        else {
            charfreqarray.push(1)
        }
    }
    var dup = []
    var temp = 0
    var res = ''
    while (charfreqarray.length > 0) {
        if (charfreqarray.length == 1) {
            dup.push(charfreqarray.pop())
            if (dup.length == 2) {
                break
            }
            else {
                charfreqarray = dup
                dup = []
            }
        }
        else {
            temp = charfreqarray.shift() + charfreqarray.pop()
            dup.push(temp)
        }
    }
    res = dup.toString()
    res = res.replace(',', '')
    if (parseInt(res) < 50) {
        document.body.style.backgroundColor = "#ff8080"
        document.getElementById('percent').style.backgroundColor = "#ff8080"
        document.getElementById('percent').style.color = "black"
    }
    else {
        document.body.style.backgroundColor = "#80ffaa"
        document.getElementById('percent').style.color = "darkgray"
        document.getElementById('percent').style.backgroundColor = "#b3ffb3"
    }
    if (parseInt(res) > 100) {
        res = 100
    }
    var pbar = document.getElementById('pbar')
    pbar.style.display = "block"

    var e = document.getElementById('percent')

    var width = 0

    var setintervalid = setInterval(incereasewidth, 10);

    function incereasewidth() {
        if (width >= parseInt(res)) {
            clearInterval(setintervalid)
        }
        else {
            width++;
            e.style.width = width + "%"
            e.innerHTML = width + "%"
        }
    }
}