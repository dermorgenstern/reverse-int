module.exports = function reverse (n) {
    let returned = Math.abs(n);
    returned = returned.toString().split('').reverse().join('');
    return returned;
}
