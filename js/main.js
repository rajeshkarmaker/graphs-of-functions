var graph1 = document.getElementById('graph1');
for (let x = -350; x < 350; x++) {
    function addPnt() {
        let y1 = x;

        var pnt = document.createElement("div");
        pnt.style = "margin-left:" + x + "px; margin-bottom:" + y1 + "px;";
        return pnt;
    }
    graph1.appendChild(addPnt());
}


var graph2 = document.getElementById('graph2');
for (let x = -350; x < 350; x++) {
    function addPnt() {
        let y2 = 1/x;

        var pnt = document.createElement("div");
        pnt.style = "margin-left:" + x + "px; margin-bottom:" + y2*10001 + "px;";
        return pnt;
    }
    graph2.appendChild(addPnt());
}



var graph3 = document.getElementById('graph3');
for (let x = -350; x < 350; x++) {
    function addPnt() {
        let y3 = x**2;

        var pnt = document.createElement("div");
        pnt.style = "margin-left:" + x + "px; margin-bottom:" + y3/100 + "px;";
        return pnt;
    }
    graph3.appendChild(addPnt());
}



var graph4 = document.getElementById('graph4');
for (let x = -350; x < 350; x++) {
    function addPnt() {
        let y4 = x**3;

        var pnt = document.createElement("div");
        pnt.style = "margin-left:" + x/2 + "px; margin-bottom:" + y4/100000 + "px;";
        return pnt;
    }
    graph4.appendChild(addPnt());
}



var graph5 = document.getElementById('graph5');
for (let x = -350; x < 350; x++) {
    function addPnt() {
        let y5 = Math.sin(x);

        var pnt = document.createElement("div");
        pnt.style = "margin-left:" + x*15 + "px; margin-bottom:" + y5*15 + "px;";
        return pnt;
    }
    graph5.appendChild(addPnt());
}



var graph6 = document.getElementById('graph6');
for (let x = -350; x < 350; x++) {
    function addPnt() {
        let y6 = Math.tan(x);

        var pnt = document.createElement("div");
        pnt.style = "margin-left:" + x + "px; margin-bottom:" + y6*50 + "px;";
        return pnt;
    }
    graph6.appendChild(addPnt());
}



var graph7 = document.getElementById('graph7');
for (let x = -350; x < 350; x++) {
    function addPnt() {
        let y7 = -0.33*(x**2) + 7.668*x + 2000;

        var pnt = document.createElement("div");
        pnt.style = "margin-left:" + x + "px; margin-bottom:" + y7/10 + "px;";
        return pnt;
    }
    graph7.appendChild(addPnt());
}



var graph8 = document.getElementById('graph8');
for (let x = -350; x < 350; x++) {
    function addPnt() {
        let y8 = -50*(x**3) + -40*(x**2) + 80*x + 9000000*1.5;
        var pnt = document.createElement("div");
        pnt.style = "margin-left:" + x*2 + "px; margin-bottom:" + y8/100000 + "px;";
        return pnt;
    }
    graph8.appendChild(addPnt());
}



var graph9 = document.getElementById('graph9');
for (let x = -350; x < 350; x++) {
    function addPnt() {
        let y9 = 2.5 * x + 150;
        var pnt = document.createElement("div");
        pnt.style = "margin-left:" + x + "px; margin-bottom:" + y9+ "px;";
        return pnt;
    }
    graph9.appendChild(addPnt());
}



var graph10 = document.getElementById('graph10');
for (let x = -350; x < 350; x++) {
    function addPnt() {
        let y10 = x % 50;
        var pnt = document.createElement("div");
        pnt.style = "margin-left:" + x + "px; margin-bottom:" + y10*4+ "px;";
        return pnt;
    }
    graph10.appendChild(addPnt());
}