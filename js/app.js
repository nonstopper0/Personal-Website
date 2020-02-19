function callServers()  {
    const request = new window.XMLHttpRequest("https://fixify-react-app.herokuapp.com/")
    const flaskrequest =  new window.XMLHttpRequest("https://fixify-flask-app.herokuapp.com/")
    const instantgramrequest = new window.XMLHttpRequest("https://instantgrammer.herokuapp.com/home")
    const nomirequest = new window.XMLHttpRequest("https://nomistock.herokuapp.com/")
    console.log(request, flaskrequest, instantgramrequest, nomirequest)
}
callServers()
setInterval(() => {callServers()}, 100000)