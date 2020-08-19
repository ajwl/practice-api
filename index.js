
// Animal apis: https://github.com/public-apis/public-apis#animals
const ukCovidUrl = "https://gdn-cdn.s3.amazonaws.com/2020/coronavirus-uk-local-data/v5/uk-overview.json"
const randomFoxUrl = "https://randomfox.ca/floof/"


const getData = async (url) => {
    const result = await fetch(url);
    const json = await result.json();
    doSomething(json);
}


const doSomething = (data) => {
    console.log("hello!")
    console.log(data)
}


getData(ukCovidUrl)