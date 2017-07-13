export const formatTelephoneNumber = number => {
    if (number.length < 4) {
        return number
    } else if (number.length < 7) {
        return number.replace(/(\d{3})(\d*)/, '$1-$2');
    } else {
        return number.replace(/(\d{3})(\d{3})(\d*)/, '$1-$2-$3');
    }
}