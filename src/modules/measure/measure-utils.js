
export const calcImc = (alt, peso) => {
    if (alt && peso) {
        return (peso / Math.pow(alt / 100, 2)).toFixed(2);

    }
    return '';
}
