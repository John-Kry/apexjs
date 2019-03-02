# apexjs
```
const apex = new Apex("API_KEY_HERE")
apex.getPlayer("theJibbster","PC") //or XBOX or PSN
.then((response)=>{
    console.log(response)
})
.catch((err)=>{
    console.log(err)
})
```
