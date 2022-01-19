;var rudyTimer = (function () {
    timer = null;
    return function () {
        if (timer === null) {
            timer = setInterval(write, 1000);
        } else {
            clearInterval(timer);
            timer = null;
        }
    }
})();

function write() {
    document.getElementById('rudy').innerHTML += " Rudy";
}


var account = (function() {
    var privateAccName = "";
    var privateAccNumber = 0;

    function setName(name) {
        privateAccName = name;
    }

    function setNumber(number) {
        privateAccNumber = number;
    }

    function getName() {
        return privateAccName;
    }

    function getNumber() {
        return privateAccNumber;
    }

    return {
        createAccount: function () {
            setName(document.getElementById('accName').value);
            setNumber(document.getElementById('accNum').value);
            
        }
    }
})();

