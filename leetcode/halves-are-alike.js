/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
    s = s.toLowerCase().split('');
    const mid = s.length / 2;
    const a = s.slice(0, mid);
    const b = s.slice(mid);
    let aCount = 0;
    let bCount = 0;
    a.forEach(char => {
        if (/[aeiou]/.test(char)) { aCount++ }
    })
    b.forEach(char => {
        if (/[aeiou]/.test(char)) { bCount++ }
    })
    return aCount === bCount;
};
