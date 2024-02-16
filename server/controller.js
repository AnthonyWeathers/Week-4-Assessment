const fortune = ["A friend asks only for your time not your money.", "A new outlook brightens your image and brings new friends.", "A faithful friend is a strong defense.", "A fresh start will put you on your way.", "A good friendship is often more important than a passionate romance.", "Keep your face to the sunshine and you will never see shadows."]

let tomorrowQuote = 'Tomorrow is another day, so always keep going forward'

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
      
        // choose random fortune
        if(fortune.length > 0) {
        let randomIndex = Math.floor(Math.random() * fortune.length)
        let randomFortune = fortune[randomIndex]
      
        res.status(200).send(randomFortune)
        } else {
            res.status(400).send('No fortunes available')
        }
    },

    encouragment: (req, res) => {
        // adds what the user inputted into the text box to the response
        let {username} = req.body

        res.status(200).send(`${username}, you can do whatever you put your mind to.`)
    },

    deleteRandomFortune: (req, res) => {
        // deletes a fortune as long as one remains
        if(fortune.length > 0) {
            let randomIndex = Math.floor(Math.random() * fortune.length);

            const deletedFortune = fortune[randomIndex]

            fortune.splice(randomIndex, 1)
            res.status(200).send(deletedFortune)
        } else {
            res.status(400).send('No more fortunes to be deleted')
        }
    },

    changeQuote: (req, res) => {
        // updates the quote to the word selected from the drop down menu
        const {selectedWord} = req.body
        if(!(selectedWord === 'none')){
            tomorrowQuote = `Tomorrow is another ${selectedWord}, so always keep going forward`
            res.status(200).send(`Updated quote to be ${tomorrowQuote}`)
        }
    },

    getQuote: (req, res) => {
        res.status(200).send(`${tomorrowQuote}`)
    }

}