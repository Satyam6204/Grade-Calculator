let R_box = document.getElementById("result");
let R_per = document.getElementById("per");
let R_pf = document.getElementById("pf");

let W_inp = document.getElementById('w_inp');






function Sub() {

    let m = document.getElementById("inp_Math").value;
    let e = document.getElementById("inp_Eng").value;
    let s = document.getElementById("inp_Sci").value;
    let ss = document.getElementById("inp_SS").value;
    let h = document.getElementById("inp_Hin").value;
    m = parseFloat(m);
    e = parseFloat(e);
    s = parseFloat(s);
    ss = parseFloat(ss);
    h = parseFloat(h);

    if ((m >= 0 && m <= 100) && (e >= 0 && e <= 100) && (s >= 0 && s <= 100) && (ss >= 0 && ss <= 100) && (h >= 0 && h <= 100)) {
        let sum = m + e + s + ss + h;
        R_box.textContent = `Total Score: ${sum}`;
        R_box.classList.add('animate__animated', 'animate__fadeInDown', 'animate__delay-0.7s');


        let per = (sum / 500) * 100;

        console.log(per);


        R_per.textContent = `Percentage: ${per.toFixed(2)}%`;
        R_per.classList.add('animate__animated', 'animate__fadeInDown', 'animate__delay-1s');

        let pass = (m >= 33) && (e >= 33) && (s >= 33) && (ss >= 33) && (h >= 33);

        let status = pass ? "Status: Pass🎉" : "Status not pass all Subjects : Fail😎 ";
        console.log(status);

        R_pf.textContent = status;

        R_pf.classList.add('animate__animated', 'animate__fadeInDown', 'animate__delay-2s');

    } else {

        alert(`Please enter valid scores (0-100) in all fields.`);

    }

    document.getElementById("inp_Math").value = '';
    document.getElementById("inp_Eng").value = '';
    document.getElementById("inp_Sci").value = '';
    document.getElementById("inp_SS").value = '';
    document.getElementById("inp_Hin").value = '';




}



