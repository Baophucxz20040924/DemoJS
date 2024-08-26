function loaibokhoangtrang(str) {
    return str.trim().replace(/\s+/g, ' ');
}


console.log(loaibokhoangtrang(" Hello     world    ")); 
