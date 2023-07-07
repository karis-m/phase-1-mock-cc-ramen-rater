// write your code here
async function ramenMenu(){
    const baseUrl = 'http://localhost:3000/ramens'
    const response = await fetch(baseUrl, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }})
        .then(response => (console.log(response)))
       // .then(ramens => (console.log(ramens)));

}
