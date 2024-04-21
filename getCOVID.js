get("v1/us/daily.json")

fn(state => {
    const covidData = state.data
    let startDate = 20210114;
    let endDate = 20210116;
    
    const covidDataFiltered = covidData.filter(item => {
        let date = item.date;
        return date >= startDate && date <= endDate
    });
    var result = 0;
    covidDataFiltered.forEach(element => {
        if (element.death) {
            result += element.death
        }
    });
    console.log('There are ' + result + ' total deaths between ' + startDate + ' and ' + endDate)
    return covidData;
})