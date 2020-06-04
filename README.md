# apexlegendsjs

![npm](https://img.shields.io/npm/dt/apexlegendsjs)

0 Dependency package that connects to an Apex Legends API

Go here to sign up for an API Key: https://apex.tracker.gg/site-api

Then paste your key into API_KEY_HERE

After that, use apex.player() to get core player information.
The data this returns is listed in the documentation here:https://tracker.gg/developers/docs/titles/apex

Recently Updated to V2 of apex tracker API!

```js
const apex = require('apexlegendsjs')(API_KEY_HERE)
apexjs.profile("playerName", "PLATFORM")
apexjs.playerSegments("playerName", "PLATFORM", "legend")
apexjs.search("PLATFORM", "query")
apexjs.playerSessions("playerName", "PLATFORM")

```

