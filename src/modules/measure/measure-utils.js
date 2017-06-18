
const MeasureUtils = {
    calcImc(alt, peso){
        if (alt && peso) {
            return peso / Math.pow(alt / 100, 2);

        }
        return '';
    }
};

export default MeasureUtils;