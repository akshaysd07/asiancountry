var request= new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload = function(){
    var data= JSON.parse(this.response);
    console.log(data);
var ans= data.filter((item)=>{
    return item.region='asia';
})
console.log(ans);
}   