const typeCheck = {

    isString: function(string){
        return typeof string ==="string" || string instanceof String;
    },
    isNumber: function(number){
        return typeof number ==="number" && isFinit(number);
    },
    isArray: function(array){

    }

}