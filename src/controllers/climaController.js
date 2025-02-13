const axios = require('axios');

const getClimaController = async (req, res) => {
    try {
        const ciudad = req.params.ciudad;
        const apiKey = process.env.OPENWEATHER_API_KEY;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric&lang=es`;

        const respuesta = await axios.get(url);
        const datos = respuesta.data;

        // Extraer solo lo necesario
        const climaLimpio = {
            ciudad: datos.name,
            temperatura: datos.main.temp,
            humedad: datos.main.humidity,
            descripcion: datos.weather[0].description
        };

        res.json(climaLimpio);
    } catch (error) {
        res.status(500).json({ error: 'No se pudo obtener el clima' });
    }
};

module.exports = { getClimaController };
