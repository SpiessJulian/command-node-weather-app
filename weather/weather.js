const axios = require('axios');

const getWeather = async(lat, lon) => {
    try {
        const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=f9cc5f253965f5aa742952c031458c9b`);

        const data = resp.data;
        //const addr = data.name;

        return data.main.temp;

    } catch (error) {

        if (error.response.status === 404) {
            console.log('No se ha encontrado la direccion con esas coordenadas')
        } else {
            //console.log('Se ha producido un error: \n', error)
        }
        return (null);
    }
}

module.exports = {
    getWeather
}