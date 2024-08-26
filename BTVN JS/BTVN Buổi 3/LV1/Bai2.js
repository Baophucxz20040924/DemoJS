function Dem(x, chu){
    let y = 0;
    for (let i = 0; i < x.length; i++){
        if (x[i] === chu){
            y++;
        }
    }
    return y;
}

console.log(Dem("programming", "m"));