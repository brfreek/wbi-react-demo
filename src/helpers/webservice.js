const axios = require('axios');

const hostPath = "https://finances.worldbank.org/resource/8iaw-pcc6.json";
const appToken = "5O4-ozgZakjTis_8-HPj8haMouRhS4GTrlgl";

const webService = {

    getLoansForCountry: function(countryCode){
        
        return new Promise((resolve, reject) => {
            try{
                const webserviceURL = hostPath + '?country_code=' + countryCode; 
                axios.get(webserviceURL).then((result) => {
                    resolve(mapLoans(result));
                }).catch((error) => {
                    console.log('Error: ' + error);
                    reject(error);
                });
            } catch(error){
                console.log('Error: ' + error);
                reject(error);
            } 
        });
        return false;
    },

    getLoansForPeriod: function(startDate, endDate){
        
    },

    getLoansForCountryForPeriod: function(startDate, endDate){

    }

}

const mapLoans = (response) =>{
    const data = response.data;
    const loans = [];

    data.forEach((iteration) => {
        const loan = {
            startDate: iteration.agreement_signing_date,
            firstPayDate: iteration.first_repayment_date,
            disbursedAmout: iteration.disbursed_amount,
            canceledAmount: iteration.cancelled_amount,
            repaidSelf: iteration.repaid_to_ibrd,
            repaidThirdParty: iteration.repaid_3rd_party
        }
        loans.push(loan);
    })

    return loans;
}

export default webService;