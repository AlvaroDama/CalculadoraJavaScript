var botones = document.querySelectorAll(".buttOperador");

for (var i = 0; i < botones.length; i++)
    botones[i].onclick = operar;

function boton(e) {
    var tipo = e.currentTarget.id;
    var resul = 0;
    var oper1 = parseInt(document.getElementById("txtNum1").value);
    var oper2 = parseInt(document.getElementById("txtNum2").value);
    var inner = "<p>" + e.currentTarget.value + "</p>";

    switch (tipo) {
        case "buttPlus":
            resul = oper1 + oper2;
            break;
        case "buttLess":
            resul = oper1 - oper2;
            break;
        case "buttMult":
            resul = oper1 * oper2;
            break;
        case "buttDiv":
            resul = (oper1 / oper2).toFixed(2);
            break;
    }

    document.getElementById("txtResul").value = resul;
    document.getElementById("operador").innerHTML = inner;
    document.getElementById("igual").innerHTML = "<p>=</p>";
}   