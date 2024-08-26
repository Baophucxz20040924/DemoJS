function Chuyenhoaten(name) {
    return name.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}


console.log(Chuyenhoaten("ngUYỄN VăN a"));
