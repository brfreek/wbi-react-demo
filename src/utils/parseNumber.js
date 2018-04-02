const parseNumber = {
    isPositive: function(number){
        if(number >= 0){
            return true;
        } else{
            return false
        }
    },
    formatCurrency: function(number){
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
}
export default parseNumber;