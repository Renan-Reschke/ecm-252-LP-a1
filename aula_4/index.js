axios = require('axios')

require('dotenv').config()

const {PROTOCOL, BASE_URL, APPID, LANGUAGE, UNITS} = process.env

const url = `${PROTOCOL}://${BASE_URL}?appid=${APPID}&lang=${LANGUAGE}&units=${UNITS}&q=Itu`

axios.get(url)
.then(res => {
        console.log(res)
        return res.data
})
.then(res => {return res})
.then(res => {return res['list']})
// const privKey = '8b80404ecffb05b15db74ea1dd632240'
// const apiLink = `https//api.openweathermap.org/data/2.5/forecast?q=Itu&appid=${privKey}`

