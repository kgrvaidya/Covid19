import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url);

        const modifiedData = {
            confirmed: confirmed, //jUST KEEPING confirmed will also work instead of cofirmed: confirmed
            recovered: recovered,
            deaths: deaths,
            lastUpdate: lastUpdate,
        }

        return modifiedData;
    }
    catch (error) {
        console.log("Error : ", error);
    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);
        const formattedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date : dailyData.reportDate,
        }))

        return formattedData;
    }

    catch (error) {

    }
}