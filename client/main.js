const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const deleteFortuneBtn = document.getElementById("deleteFortuneButton")
const form = document.getElementById("name")
const quote = document.getElementById("quote")
const quoteBtn = document.getElementById("quoteButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data)
    })
}

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data)
    })
}

const encourage = body => {

    axios.post("http://localhost:4000/api/encourage/", body)
        .then(res => {
            const data = res.data
            alert(data)
        })
}

const getUsername = evt => {
    evt.preventDefault()

    let username = document.getElementById("username")

    let bodyObj = {
        username: username.value
    }

    encourage(bodyObj)
}

const deleteRandomFortune = () => {
    axios.delete("http://localhost:4000/api/deleteRandomFortune/")
        .then(res => {
            const data = res.data
            alert(`Deleted fortune: ${data}`)
        })
}

const changeQuote = () => {
    const selectedWord = quote.value
    console.log(selectedWord)
    axios.put("http://localhost:4000/api/quote/", {selectedWord})
        .then(res => {
            const data = res.data
            alert(data);
    })
}

const getQuote = () => {
    axios.get("http://localhost:4000/api/getQuote/")
        .then(res => {
            const data = res.data;
            alert(data)
    })
}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
deleteFortuneBtn.addEventListener('click', deleteRandomFortune)
quote.addEventListener('change', changeQuote)
form.addEventListener('submit', getUsername)

quoteBtn.addEventListener('click', getQuote)