//question2: displaying flag from the api URL:https://restcountries.com/v3.1/all
//q2 Solution:

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send()
request.onload = function(){
    var res =JSON.parse(request.response)
    for(var i = 0 ; i<res.length;i++){
        console.log("Flag"+":"+res[i].flags.png)
    }
}

//question3: Printing all countries names,regions,sub-regions and populations from the same url
//q3 Solution:

var request =new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send()
request.onload = function(){
    var res = JSON.parse(request.response)
    for(var i = 0;i<res.length;i++){
        console.log("Country Name"+":"+res[i].name.official)
        console.log("Region"+":"+res[i].region)
        console.log("Sub-regions"+":"+res[i].subregion)
        console.log("populations"+":"+res[i].population)
        console.log(" ")
    }
}