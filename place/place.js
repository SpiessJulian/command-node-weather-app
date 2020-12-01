const axios = require('axios');

const getPlaceLatLong = async(address) => {
    const endodedUrl = encodeURI(address);
    try {
        const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${endodedUrl}&appid=f9cc5f253965f5aa742952c031458c9b`);

        const data = resp.data;
        const addr = data.name;
        const lat = data.coord.lat;
        const lon = data.coord.lon;

        return {
            addr,
            lat,
            lon
        };
    } catch (error) {

        if (error.response.status === 404) {
            console.log('No se ha encontrado la direccion', address)
        } else {
            //console.log('Se ha producido un error: \n', error)
        }
        return (null);
    }
}

module.exports = {
    getPlaceLatLong
}