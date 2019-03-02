const axios = require('axios')
const apexAPIURL = "https://public-api.tracker.gg/apex/v1/standard/profile/"

class apexjs {
    constructor(code) {
        this.apiKey = code
    }
    getPlayer(username, platform) {
        return new Promise((resolve, reject) => {
            let url = getURL(platform, username)
            const headers = {
                'Content-Type': 'application/json',
                'TRN-Api-Key': this.apiKey,
            };
            axios.get(url, { headers })
                .then((response) => {
                    let data = response.data.data;
                    let character = {};
                    character.level = data.metadata.level
                    character.legend_name = data.children[0].metadata.legend_name
                    resolve(character)
                })
                .catch((error) => {
                    reject("Player Not Found")
                })
        })
    }
    getDetailedPlayer(username, platform) {
        return new Promise((resolve, reject) => {
            let url = getURL(platform, username)
            const headers = {
                'Content-Type': 'application/json',
                'TRN-Api-Key': this.apiKey,
            };
            axios.get(url, { headers })
                .then((response) => {
                    let data = response.data;
                    resolve(data)
                })
                .catch((error) => {
                    reject("Player Not Found")
                })
        })
    }
}
function getURL(platform, username) {
    if (platform == "PC") {
        return apexAPIURL + "5/" + username
    }
    else if (platform == "XBOX") {
        return apexAPIURL + "1/" + username
    }
    else if (platform == "PSN") {
        return apexAPIURL + "2/" + username
    }
    else {
        //default to pc
        return apexAPIURL + "5/" + username
    }
}
module.exports = apexjs;