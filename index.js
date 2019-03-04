const axios = require('axios')
const apexAPIURL = "https://public-api.tracker.gg/apex/v1/standard/profile/"

class apexjs {
    constructor(code) {
        this.apiKey = code
    }
    getPlayer(username, platform) {
        checkInput(username,platform)
        return new Promise((resolve, reject) => {
            let url = getURL(username, platform)
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
                    character.platformUserHandle = data.metadata.platformUserHandle
                    resolve(character)
                })
                .catch((error) => {
                    reject("Player Not Found")
                })
        })
    }
    getDetailedPlayer(username, platform) {
        checkInput(username,platform)
        return new Promise((resolve, reject) => {
            let url = getURL(username, platform)
            const headers = {
                'Content-Type': 'application/json',
                'TRN-Api-Key': this.apiKey,
            };
            axios.get(url, { headers })
                .then((response) => {
                    let data = response.data.data;
                    resolve(data)
                })
                .catch((error) => {
                    reject("Player Not Found")
                })
        })
    }
}
function getURL(username, platform) {
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
        throw Error("Platform must be PC, XBOX, or PSN")
    }
}
function checkInput(username, platform){
    if(typeof username!= "string") throw TypeError("Username must be a string")
    if(typeof platform!= "string") throw TypeError("Platform must be a string")
}
module.exports = apexjs;