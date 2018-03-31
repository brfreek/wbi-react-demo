const parseDate = {
    addDays: (date, days) =>{
        let dat = new Date(date.valueOf());
        return dat.setDate(date.getDate() + days);
    }
}

export default parseDate;