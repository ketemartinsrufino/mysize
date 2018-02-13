export const calcImc = (alt, peso) => {
    if (alt && peso) {
        return (peso / Math.pow(alt / 100, 2)).toFixed(2);

    }
    return '';
}

export const getImcClassification = (imc) => {
    const classification = {};

    if (imc < 18.5) {
        classification.color = 'blue';
        classification.description = 'Abaixo do recomendado';
    } else if (imc > 18.5 && imc < 25) {
        classification.color = 'green';
        classification.description = 'Saudável';
    } else {
        classification.color = 'red';
        classification.description = 'Obesidade';
    }

    return classification;
}