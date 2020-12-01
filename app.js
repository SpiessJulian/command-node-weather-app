const { argv } = require('./config/yargs');
const { getPlaceLatLong } = require('./place/place');
const { getWeather } = require('./weather/weather');



const getInfo = async(addr) => {
    const coord = await getPlaceLatLong(addr);
    if (coord) {
        const temp = await getWeather(coord.lat, coord.lon);
        return temp;
    } else {
        throw new Error(`No se pudo determinar el clima de ${addr}`)
    }

}

getInfo(argv.address)
    .then(resp => {
        console.log(`El clima de  ${argv.address} es de ${resp}`)
    })
    .catch(err => {
        console.log(err)
    });