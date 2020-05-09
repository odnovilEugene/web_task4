function NumberSequance(form){
    let x = form.x.value;
    let sum = Number(x);
    let b = 1;
    if (x < 1 && x > -1){
        for (let i = 1; Math.abs(b) >= 0.005; i++){
            b = Math.pow(x, i) / i;
            sum += b;
            i++
        }
        alert(`Сумма равна = ${sum}`);
    }
    else{
        alert("x должен быть меньше 1");
    }
}