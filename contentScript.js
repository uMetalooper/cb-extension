let rootURL = "https://app.cryptoblades.io/#/"
var currentUrl = window.location.href

var pageName = ""
console.log("abc")

let callback = function(mutationList, observer) {
    console.log("mutationList", mutationList)
    console.log(window.location.href)
    if (currentUrl == rootURL) {
        pageName = "plaza"
    }
    else {
        pageName = currentUrl.slice(rootURL.length, currentUrl.length)
    }
}

var observer = new MutationObserver(callback)
const observerConfig = { attributes: false, childList: true, subtree: true }
observer.observe(document.body, observerConfig)

var intID = setInterval(run, 1000)
function run() {
    console.log("run")
    if (pageName == "") {
        clearInterval(intID)
    }
}