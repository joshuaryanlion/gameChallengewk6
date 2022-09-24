const readline = require("readline")
//create interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})



//Game Of Thrones who said this quote trivia
// you have 5 attempts to get all questions right
//if you get all questions wrong 5 times in a row, you get a message with no profile
//at end you are given a profile based on how many attepts it took you to get all questions right
//1)random quote generation
//2)enter your guess based off choices
//3)if you  get it wrong, you get output of you know nothing jon snow and same question is asked until you get it right
//4)if you get it right you go to next question
//5)get profile results after answering all questions right depening on how many attepts it took you to get all questions right
//6)

let quotes = {
    "You might be the most arrogant man I've ever met. I like that." : "A cercei lannister",
    "If you want a whore, buy one. If you want a Queen, earn her." : "A cercei lannister",
    "Its not easy being drunk all the time. Everyone would do it, if it were easy." : "B tyrion lannister",
    "Many underestimated you. Most of them are dead now." : "B tyrion lannister",
   "Poisons a womans weapon. Men kill with steel." : "C sandor clegane",
    "Theyre dragons, Khaleesi. They can never be tamed. Not even by their mother.": "D Jorah mormont",
   "All men must die, but we are not men." : "E daenerys targaryen",
   "They can live in my new world or they can die in their old one." : "E daenerys targaryen",
   "I did warn you not to trust me." : "F petyr baelish",
   "The storms come and go, the big fish eat the little fish and I keep on paddling." : "G lord varys"

}

let arr = Object.keys(quotes)

const numQuote = () => {
    let randomIndex = Math.floor(Math.random() * (arr.length))
    return arr[randomIndex]
}

let randomNumber = numQuote()

let numAttempts = 5;

const guessChecker = (ans) => {
    if(actualAnswer.includes(ans.toUpperCase()) && ans!== '') {
        return true
    }
}

let actualAnswer = quotes[randomNumber]
// console.log(actualAnswer)
// console.log(randomNumber)
const askGuess = () => {
    // console.log(arr)
    // console.log(numAttempts)
    if(numAttempts === 0){
        const timeFail1 = () => {console.log("WOW you should maybe watch more game of thrones..... like alot more")}
        const timeFail2 = () => {

            console.log(`MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWWWWWWWWWWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
            MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNXK0OkkxxddoooooodddxkkO0KXNWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
            MMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWXKOxdlc::;;;;;;;;;;;;;;;;;;;;::cldxOKXWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
            MMMMMMMMMMMMMMMMMMMMMMMMMWWX0xoc:;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:cox0XWMMMMMMMMMMMMMMMMMMMMMMMMMM
            MMMMMMMMMMMMMMMMMMMMMMWNKkoc;;;;;;;;;;;;;;;::cccccccccc::;;;;;;;;;;;;;;;cokKNWMMMMMMMMMMMMMMMMMMMMMM
            MMMMMMMMMMMMMMMMMMMWNKxl:;;;;;;;;;;:cloxkO00KKXXNNXXXXXK00Okxolc:;;;;;;;;;;:oxKNWMMMMMMMMMMMMMMMMMMM
            MMMMMMMMMMMMMMMMMWXOo:;;;;;;;;;:ldk0XNWMMMMMMMMMMMMMMMMMMMMMWWNX0kdl:;;;;;;;;;:oOXWMMMMMMMMMMMMMMMMM
            MMMMMMMMMMMMMMMWKxl;;;;;;;;:ldOKNWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNKOdc:;;;;;;;:lxKWMMMMMMMMMMMMMMM
            MMMMMMMMMMMMMWXxc;;;;;;;;cdOXWMMMMMMMMMMMMMMMMMMMMMMMMWWNXKOkkKWMMMMMMWXOdc;;;;;;;;cxXWMMMMMMMMMMMMM
            MMMMMMMMMMMWNkl;;;;;;;:okXWMMMMMMMMMMMMMMMMMMWWWNKK0Okdolc:;;;dNMMMMMMMMMWXko:;;;;;;;lkXWMMMMMMMMMMM
            MMMMMMMMMMW0o:;;;;;;:d0NMMMMMMMMMMMMMMWWNXK0kxdol:::;;;;;;;;;;cOWMMMMMMMMMMMN0o:;;;;;;:o0WMMMMMMMMMM
            MMMMMMMMWNkc;;;;;;:o0NWMMMMMMMMWWNX0Okdolc:;;;;;;;;;;;;;;;;;;;;dXMMMMMMMMMMMMWN0o:;;;;;;ckNMMMMMMMMM
            MMMMMMMWXd:;;;;;;ckNWMMWWNXK0kxdol::;;;;;;;;;;;;;;;;;;;;;;;;;;;cOWMMMMMMMMMMMMMWNkl;;;;;;:dXWMMMMMMM
            MMMMMMWKo;;;;;;:oKWMMMWOolc:;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;oXMMMMMMMMMMMMMMMWKd:;;;;;;oKWMMMMMM
            MMMMMWKo;;;;;;:xXWMMMMWO:;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:l0WMMMMMMMMMMMMMMMWXx:;;;;;;oKWMMMMM
            MMMMMXo;;;;;;ckNMMMMMMMXo;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;::codxkOKXWMMMMMMMMMMMMMMMMMMNkc;;;;;;oXMMMMM
            MMMMNx:;;;;;:kNMMMMMMMMWOc;;;;;;;;;;;;;;;;;;;;;:cllodkO0KNWWMMMMMMMMMMMMMMMMMMMMMMMMMNk:;;;;;:xNMMMM
            MMMWOc;;;;;:xNMMMMMMMMMMXd;;;;;;;;;;;;;;:codxkOKXNWWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNx:;;;;;cOWMMM
            MMWKo;;;;;;oXMMMMMMMMMMMWOc;;;;;;;;;;;;;l0NWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWXo;;;;;;oKMMM
            MMWk:;;;;;cOWMMMMMMMMMMMMNd;;;;;;;;;;;;;cOWMMMMMMMMMMMMMMMWWNNWMMMMMMMMMMMMMMMMMMMMMMMMWOc;;;;;:kWMM
            MMXo;;;;;;dXMMMMMMMMMMMMMW0l;;;;;;;;;;;;;oXMMMMMMMMWWNXKOkxdlo0WMMMMMMMMMMMMMMMMMMMMMMMMXd;;;;;;oXMM
            MW0c;;;;;:kWMMMMMMMMMMMMMMNx:;;;;;;;;;;;;:kNNXK0Oxxdolc:;;;;;;dNMMMMMMMMMMMMMMMMMMMMMMMMWk:;;;;;c0WM
            MWk:;;;;;l0WMMMMMMMMMMMMMMW0l;;;;;;;;;;;;;colc:;;;;;;;;;;;;;;;cOWMMMMMMMMMMMMMMMMMMMMMMMW0l;;;;;:kWM
            MNx;;;;;;oXMMMMMMMMMMMMMMMMNx:;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;dXMMMMMMMMMMMMMMMMMMMMMMMMXo;;;;;:xNM
            MNd;;;;;;oXMMMMMMMMMMMMMMMMWKl;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;cOWMMMMMMMMMMMMMMMMMMMMMMMXo;;;;;;xNM
            MNx;;;;;;oXMMMMMMMMMMMMMMMMMWk:;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;oXMMMMMMMMMMMMMMMMMMMMMMMXo;;;;;;xNM
            MNx:;;;;;lKWMMMMMMMMMMMMMMMMMKo;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:clokXMMMMMMMMMMMMMMMMMMMMMMWKl;;;;;:xNM
            MWOc;;;;;cOWMMMMMMMMMMMMMMMMMWk:;;;;;;;;;;;;;;;;;;;;::lodxkOKXNWMMMMMMMMMMMMMMMMMMMMMMMMWOc;;;;;cOWM
            MWKl;;;;;:xNMMMMMMMMMMMMMMMMMWXo;;;;;;;;;;;;;;codkkO0KNWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNx:;;;;;lKWM
            MMNx;;;;;;lKWMMMMMMMMMMMMMMMMMWOc;;;;;;;;;;;;;oXWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWKl;;;;;;xNMM
            MMW0c;;;;;:xNMMMMMMMMMMMMMMMMMMXd;;;;;;;;;;;;;cOWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNx:;;;;;c0WMM
            MMMNx:;;;;;cOWMMMMMMMMMMMMMMMMMWOc;;;;;;;;;;;;;dXMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWOc;;;;;:xNMMM
            MMMWKl;;;;;;lKWMMMMMMMMMMMMMMMMMNd;;;;;;;;;;;;;cOWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWKl;;;;;;lKWMMM
            MMMMWOc;;;;;;oKWMMMMMMMMMMMMMMMMW0c;;;;;;;;;;;;;oXWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWKo;;;;;;cOWMMMM
            MMMMMNkc;;;;;;o0WMMMMMMMMMMMMMMMMNx:;;;;;;;;;;;;:ONWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMW0o;;;;;;ckNMMMMM
            MMMMMMNkc;;;;;;lONMMMMMMMMMMMMMMMW0l;;;;;;;;;;;;;oOKWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNOl;;;;;;ckNMMMMMM
            MMMMMMMNOc;;;;;;cxXWMMMMMMMMMMMMMMNx:;;;;;;;;;;;;:ckNMMMMMMMMMMMMMMMMMMMMMMMMMMMWXxc;;;;;;cONMMMMMMM
            MMMMMMMMW0l;;;;;;;lONWMMMMMMMMMMMMWKl;;;;;;;;;;;;;;lKWMMMMMMMMMMMMMMMMMMMMMMMMWNOl;;;;;;;l0WMMMMMMMM
            MMMMMMMMMWKd:;;;;;;:o0NMMMMMMMMMMMMNk:;;;;;;;;;;;;;:kWMMMMMMMMMMMMMMMMMMMMMMWN0o:;;;;;;:dKWMMMMMMMMM
            MMMMMMMMMMMNOl;;;;;;;:oONWMMMMMMMMMWKo;;;;;;;:cldxxkKWMMMMMMMMMMMMMMMMMMMMWNOo:;;;;;;;lONMMMMMMMMMMM
            MMMMMMMMMMMMWXkc;;;;;;;:lxKNWMMMMMMMWOllodxO0KXNWMMMMMMMMMMMMMMMMMMMMMMMNKxl:;;;;;;;ckXWMMMMMMMMMMMM
            MMMMMMMMMMMMMMWKxc;;;;;;;;:ok0NWMMMMMWXNWWMMMMMMMMMMMMMMMMMMMMMMMMMMWNKko:;;;;;;;;cxKWMMMMMMMMMMMMMM
            MMMMMMMMMMMMMMMMWXkl:;;;;;;;;:ldOKNWWMMMMMMMMMMMMMMMMMMMMMMMMMMWWNKOdl:;;;;;;;;:lkXWMMMMMMMMMMMMMMMM
            MMMMMMMMMMMMMMMMMMWN0dc;;;;;;;;;;:loxk0KXNWWWWMMMMMMMMMWWWNXK0kxol:;;;;;;;;;;cd0NWMMMMMMMMMMMMMMMMMM
            MMMMMMMMMMMMMMMMMMMMMWXOdl:;;;;;;;;;;;;:cloddxxkkkkkkxxddolc::;;;;;;;;;;;:cdOXWMMMMMMMMMMMMMMMMMMMMM
            MMMMMMMMMMMMMMMMMMMMMMMMWX0xoc;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:cox0XWMMMMMMMMMMMMMMMMMMMMMMMM
            MMMMMMMMMMMMMMMMMMMMMMMMMMMWWX0kdlc:;;;;;;;;;;;;;;;;;;;;;;;;;;;;:cldk0XWMMMMMMMMMMMMMMMMMMMMMMMMMMMM
            MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNX0Okxdolcc::::;;;;::::cclodxkO0XNWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
            MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWWNXXKK00000000KKXXNWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
            MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM`)

        }
        setTimeout(() => {timeFail1()}, 1000)
        setTimeout(() => {
            timeFail2()
           }, 3000,rl.close())




    } else {
    rl.question(`What character said this line: ${randomNumber}\?

    Was it A) Cersei Lannister ..

    Was it B) Tyrion Lannister..

    Was it C) Sandor Clegane..

    Was it D) Jorah Mormont..

    Was it E) Daenarys Targaryn..

    Was it F) Petyr Baelish..

    Was it G) Lord Varys..

    Your answer >`, answer => {
        if (guessChecker(answer)) {
            // arr.splice(arr.indexOf(randomNumber), 1)
            setTimeout(() => {ifRight(randomNumber)}, 1500)
        } else {
            numAttempts--
            // console.log(numAttempts)
            console.log("You know nothing Jon Snow\n\n")
            console.log(`You have ${numAttempts} attempts left!`)
            setTimeout(() => {
                askGuess()
              }, 1500)
        }
    })
}
}

const ifRight = (numToSplice) => {

    // console.log(numAttempts)
    if(arr.length === 1){
        endGame()
    } else {

    arr.splice(arr.indexOf(numToSplice), 1)
    // console.log(arr)
    randomNumber = numQuote();
    actualAnswer = quotes[randomNumber]
    rl.question(`What character said this line: ${randomNumber}\?

    Was it A) Cersei Lannister ..

    Was it B) Tyrion Lannister..

    Was it C) Sandor Clegane..

    Was it D) Jorah Mormont..

    Was it E) Daenarys Targaryn..

    Was it F) Petyr Baelish..

    Was it G) Lord Varys..

    Your answer >`, balls => {
        if (guessChecker(balls)) {
            console.log("Correct!")
            setTimeout(() => {ifRight(randomNumber)}, 1100)
        }
         else {
            numAttempts--
            // console.log(numAttempts)
            console.log("You know nothing Jon Snow\n\n")
            console.log(`You have ${numAttempts} left`)
            setTimeout(() => {
             askGuess()
            }, 1100)
        }
})
}
}
const endGame = () => {
    console.log("Game of Thrones has bestowed upon you this profile, based off your results")
    if(numAttempts === 1){
        console.log("Theon Greyjoy")
        console.log(`WWWWWX0koc,..,;cldxO0KXNNWWWWWWWWWWWWWWWWWWWKxkXWWWWNkdKWWWWWWWWWWWWWWWWWWWNK00Okdoc,..  .':ldOXWWWW
        WWKxc,',;;.         ..,oKWWWWWWWWNXXNWWWWWWWXc.dNWWNd.:XWWWWWWWWNKXWWWWWWWWKo;..        .:lllc;;ckXW
        Xd'.;dOXWNKd;'...,;:ldOXWWWWWWWWW0l;:xXWWWWWWx.:XWWK;.dWWWWWWNOc;o0WWWWWWWNNXKOxdlccc::o0NWWWWXk:.;O
        :.,kNWWWWWWWNXKKXNNX0xolcclox0NWWWXd'.;ONWWWWk.:XWW0,.xWWWWW0:.,xXWWWN0dc:,,,:lx0XWWWWWWWWWWWWWWNl.'
         .kWWWWWWWWWWWWN0dc'.';:::,...,oKWWWK: .kNWWWx.:XWWK;.oNWWW0,.cKWWWXx;..;cclc;'..'ckXWWWWWWWWWWWWk.
         .kWWWWWWWWWWKx:..;oOXNWWXOOOl'.'xNWWK: ,0WWNl.cXWWNo.;KWWK:.:KWWNO,.,xKK0NWWWN0xc'.,lONWWWWWWWWWx.
        ' cKWWWWWWXOl'.,o0NWWWWWWXllXWKl..dNWWO' cXWK; oNWWWd..kWNo.'OWWNx..oXW0;:KWWWWWWWXkl,.;oOXWWWNXk' ;
        O;.'ldxdl:'.'ckXWWWWWWWWWWx'cKWNo..kWWNl .kW0,.dWWWWx..dNk. lNWWO'.lNW0;.dNWWWWWWWWWWXOo:;:ccc;'..c0
        WXkc;'.',;lkXWWWWWWWWWWWWWNd.;kN0, lNWW0, :X0'.dWWWWx. lKc .OWWNl '0Nk,.lXWWWWWWWWWWWWWWNXOxdoodkKNW
        WWWWNXXXNNWWWWWWWWWWWWWWWWWNx'.:o' ,KWWNo..xO' oNWWWx. lx. lNWW0, .c;..dXWWWWWWWWWWWWWWWWWWWWWWWWWWW
        WWWWWWWWWWWWWWWWWWWWWWWWWWWWWKo'   .o0XWK; ;d. lNWWWd..c; ,0WNKo.   .l0WWWWWWWWWWWWWWWWWWWWWWWWWWWWW
        WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWXx'   .,cxo..,. :XWWXc .. .oko;.   .oKWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
        WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW0, 'c;.  ..    'OWWO'    ... .:l' .kWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
        WWWWWWWWWWWWWWWWWWWWWNNNWWWWWWNKl. 'lc;.       .cxd:        .,::.  :OXNNNWNNKXNWWWWWWWWWWWWWWWWWWWWW
        WWWWWWWWWWWWWWWWWWWWWXdclllllc;.   .....         ...        .','..  ..',;;;:lONWWWWWWWWWWWWWWWWWWWWW
        WWWWWWWWWWWWWWWWWWWWWWXkoc:::c;. .oKKx:.                    .;d0Xx'  ;oolodOXWWWWWWWWWWWWWWWWWWWWWWW
        WWWWWWWWWWWWWWWWWWWWWWWWWWWWWXl .oX0:. .;::,.          .,::,.  ;0Nx. :KWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
        WWWWWWWWWWWWWWWWWWWWWWWWWWWWNo. :KXc  :0NWWN0o.      .dKNNWN0;  cNNl  lNWWWWWWWWWWWWWWWWWWWWWWWWWWWW
        WWWWWWWWWWWWWWWWWWWWWWWWWWWWk. 'OWK; .kNOdolox:      :o:;:lkXd. ;KWK; .xNWWWWWWWWWWWWWWWWWWWWWWWWWWW
        WWWWWWWWWWWWWWWWWWWWWWWWWWWK: .dNWXc .dX0Ok:. ..    .. .lOO0Kl  ;KWWx. ,0WWWWWWWWWWWWWWWWWWWWWWWWWWW
        WWWWWWWWWWWWWWWWWWWWWWWWWWWd. :KWWWk. 'OWWWK; .     .. :XWWW0'  oNWWXc  lXWWWWWWWWWWWWWWWWWWWWWWWWWW
        WWWWWWWWWWWWWWWWWWWWWWWWWWX: .xWWWWXl  :KWWX;          cNWWXc  ;KWWWWO. .OWWWWWWWWWWWWWWWWWWWWWWWWWW
        WWWWWWWWWWWWWWWWWWWWWWWWWWO. ;KWWWWW0;  lNWK;          :XWNd. 'OWWWWWX:  oNWWWWWWWWWWWWWWWWWWWWWWWWW
        WWWWWWWWWWWWWWWWWWWWWWWWWWx. lNWWWWWWk. .xW0,          ,KWO. .xNWWWWWNo  :XWWWWWWWWWWWWWWWWWWWWWWWWW
        WWWWWWWWWWWWWWWWWWWWWWWWWWd. oNWWWWWWX:  :X0'          'ONc  cXWWWWWWNl  cXWWWWWWWWWWWWWWWWWWWWWWWWW
        WWWWWWWWWWWWWWWWWWWWWWWWWWx. cXWWWWWWNl  '0O.          .kK, .xWWWWWWW0, .dNWWWWWWWWWWWWWWWWWWWWWWWWW
        WWWWWWWWWWWWWWWWWWWWWWWWWW0, .xNWWWWWK;  ;Kk.          .xXc  :0WWWWNO;  :KWWWWWWWWWWWWWWWWWWWWWWWWWW
        WWWWWWWWWWWWWWWWWWWWWWWWWWNk' .cdkOko,  'kWk.          .xW0:  .cddl:.  ;0WWWWWWWWWWWWWWWWWWWWWWWWWWW
        WWWWWWWWWWWWWWWWWWWWWWWWWWWW0l.       'l0WWk.          .xWWXx:.      'dXWWWWWWWWWWWWWWWWWWWWWWWWWWWW
        WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWKkdoloxOXWWWWk.          .kWWWWNKkdoodkXWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
        WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWO,            ,kNWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
        WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWNx,.          .,xXWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
        WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWXd.        .dNWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
        WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWNKO:         .cOXNWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
        WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWk,             .;OWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
        WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWx.              ,KWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
        WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWNk'                ;ONWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
        WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWNOl,              'ckNWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
        WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWNx.            'kWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
        WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWNKOkxl.    .lxkOKWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
        WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW0, .;0WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
        WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWkcckWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW`)
        rl.close()
    } else if(numAttempts === 2){
        console.log("Lansel Lannister")
        console.log(`WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
        WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
        WWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
        WMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
        WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWX0OkkxxxddoollllllodxxollllllooddxxkkkO0XWWWWWWWWWWWWWWWWWWWWWWWWWWWW
        WWWWWWWWWWWWWWWWWWWWWWWWWWNNNXX0dc,.              .''.             .,cd0XXNNNWWWWWWWWWWWWWWWWWWWWWWW
        NWWWWWWWWWWWWWWWWWWWWWWWNO:'''.....              ..,'               .....'''c0NWWWWWWWWWWWWWWWWWWWWN
        NNNNNNNNNNNNNNNNNNNNNNNNK:    .:dxl.             ..,'              ,oxo,    .oXWNNNNNNNNNNNNNNNNNNNN
        NNNNNNNNNNNNNNNNNNNNNNNXo.  .;dkkkxl.      .,c:. .',' .,c:'.     .;dkkkkl'   'ONNNNNNNNNNNNNNNNNNNNN
        XNNNNNNNNNNNNNNNNNNNNNKo.  'xd,.    .       .'ox;.',''od;..       .    .lk:   ;0NNNXNNNNNNNNNNNNNNNX
        XNNNNNNNNNNNNNNNNNNXX0c.   cXKo.  .        .:..:d:',;ol..:,        ..  :0Xd.   ,kXNXNNNNNNNNNNNNNNNX
        NNNNNNNNNNNNNNNNNX0x:.     c0d,. .,,,,,;;'  :d;.ld::oo',dc. ';;,,,,,.  'o0o.    .:d0KNNNNNNNNNNNNNNN
        NNNNNNNNNNNNNKOd:,.        ;x:   .,cloooxOo..;doodlldold;..oOxdoolc;.   ;x:        .,:dOKNNNNNNNNNNN
        NNNNNNNNNWNNNNKOxoc;'.     .,.    .,::;;,;ld:..ckxclkx:..:ol;;;;::,.    .,.     .':coxOKXNNWWNNNNNNN
        WWWWWWWWWWWWWWWWWWWNx.                 .   .:c. '::c:..'c;.  ..                 ,kNWWWWWWWWWWWWWWWWN
        WWWWWWWWWWWWWWWWWWWk'                        ... ';;. ...                        :KWWWWWWWWWWWWWWWWW
        WWWWWWWWWWWWWWWWWWO'                            .,::.                            .cXWWWWWWWWWWWWWWWW
        MMMMMMMMMMMMMMMMWO,              'll;..         .,::.          .,cl;.             .lXMMMMMMMMMMMMMMW
        MMMMMMMMMMMMMMMWO, ... ..        .:KWXko,.      .,::'      .'cxKNNx.        ..  .. .oNMMMMMMMMMMMMMW
        MMMMMMMMMMMMMMW0;..,..:o;.        .:OXWWNk:. .. .;c:.    .,dKWWNKo.         .ll..,'..dNMMMMMMMMMMMMM
        MMMMMMMMMMMMMM0;..:,,xXd. ..       ..,:ldkOdc:. .,c:'..,cokkxoc,..  ..  .   .:K0:':;..xWMMMMMMMMMMMM
        MMMMMMMMMMMMMK:.'c;;xXX:.    .         ....''.. .;c:'. .''..      .   .      'kNOc,c;.'xWMMMMMMMMMMM
        MMMMMMMMMMMWK:..l:.,':k:                    ..  .,::'  ..                    .do,,.,l;.'xWMMMMMMMMMM
        MMMMMMMMMMMNl..cl.   .cl.                   .;. .,::.  ',.                   ;o'   .;o' ,OMMMMMMMMMM
        MMMMMMMMMMMNl ,o, ..  'dc.                  co. .,::.  ;o.           .      .dc. .. .cl..kMMMMMMMMMM
        MMMMMMMMMMMWd.cc.':.  .dKl.     .'.  ..   'l0Kxc::::::lkKk:.   ..  .,.     'k0:  .,;.'o,,0MMMMMMMMMM
        MMMMMMMMMMMMOco:;l'    cKXk;.    'loo:.  'xXWMMMWkco0WMMMWKl.  .cooc.    .c0NO,   .;l,cllKMMMMMMMMMM
        MMMMMMMMMMMMKkdld;     'k0OKk:.   'kk.    .,oONMMOloKMWNOl'.    ,Ox.   .cOKO0x.     :dodOXMMMMMMMMMM
        WMMMMMMMMMMMWN0Oo.      ,dxkkkdc,. 'l'       .,oOklokOl,        'o' .,ldkkkkd,      .oO0NWMMMMMMMMMW
        WWWWWWWWWWWWWWWK;   .'    .;:::cc,. ''          .,;:,.          ', .,:c:::;.    ''   ,0WWWWWWWWWWWWW
        WWWWWWWWWWWWWWW0,   .c'        ...               '::,.              ...        .c,   .kWWWWWWWWWWWWW
        NWWWWWWWWWWWWWW0,   .xc                ..       :ddldl.      ..                'x;   .xWWWWWWWWWWWWN
        NNNNNNNNNNNNNNNK:   ,Ol             ';..:doc:clxK0xlxKOol::cdo' ':.            'ko.  .xNNNNNNNNNNNNN
        NNNNNNNNNNNNNNNXo.  lO;             lO: .dl...'';coclc,,'..,dc .oO,            .oO;  'ONNNNNNNNNNNNN
        XNNNNNNNNNNNNNNNO, ,xl.            .ok, .oc      'lc:.     .ll. :Oc             .od. :KNNNNNNNNNNNNN
        XNNNNNNNNXXXNNNNXo,ll.             .do.  .cc.    'c:c.    .cc.  .oo.             .ll,dXNNNNNNNNNNNNX
        NNNNNNNNNNNNNNNNNKOo.              .d:    .,:;,,,coclc,,,;:,     :d.              .oOKNNNNNNNNNNNNNN
        NNNNNNNNNNNNNNNNNNNx.       ....'  .d;          .,lcl;.          ,d'  '....       .dNNNNNNNNNNNNNNNN
        NNNNNNNNNNNNNNNNNNNXo.      ', 'c. 'o,           .ccl,           .o; .c, ,,       cKNNNNNNNNNNNNNNNN
        NWWWWWWWWWWWWWWWWWWWNk;.   .c, 'x: 'o'           .ccl,           .o; 'x: .c'    'dXWWWWWWWWWWWWWWWWW
        WWWWWWWWWWWWWWWWWWWWWWXkc'.cd. 'Ox..o,  .        .cco;           .l; l0c .lo..:xKWWWWWWWWWWWWWWWWWWW
        WWWWWWWWWWWWWWWWWWWWWWWWWXKXx. ,KK;.l; .,        'cco;        '' .l,.kNc .lKKXWWMWWWWWWWWWWWWWWWWWWW
        WMMMMMMMMMMMMMMWMMWWMMMMWWMMNk:cKNo.c; ,l.       'llo;       .c: 'c':XNo;dXWWMWWMMMMMMMMMMMMMMMMMWWW
        WMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNXNMO,;:.;Ol.      'lld:       ;Ol.,:'xWWXNMMMMMMMMMMMMMMMMMMMMMMMMMWW
        WMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMXl',.:K0;.     'lld:     .,kXl.',:KMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWW
        WMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMKd;.:XW0;.    ,ood:.   .,kWNl.,o0WMMMMMMMMMMMMMMMMMMMMMMMMMMMWWWW
        WMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWKdxXMWKc.   ,ood:. ..:0WMNxd0WMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWWWW
        MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWMMMXx,. ,ood; .,xXMMMMWWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWWWWW
        MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWKo';ooo;,dKWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWWWWM
        MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWK00000XWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWNWWMM
        MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWWNNNWWWW
        MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWWWWWWW
        WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
        WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
        WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW`)
        rl.close()
    } else if(numAttempts === 3){
        console.log("Sansa Stark")
        console.log(`WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWNWWWWWWWWW0lcokKXNWWWWWWWWWWWWWWWWWWWWWWWWNWWWWWWWWWW
        WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWNKXNWWWWWWWKc..;;;:codxxkkkxxxxxddxO0XWWWWWWWWWWWWWWWWWWWWWWWWWWWW
        WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWXk:;cddxxkkkx;'oxkkollc:lxOKXNXOdc;:coxkxdk0KXWWWWWWWWWWWWWWWWWWWW
        WWWWWWWWWWWWWWWWWWWWWWWWWNWWWWWWWWWWKd::clxOkkd:;::loddkxcckNWWWWWNNNXX0ko,..'.'ckNWWNWWNWWWWWWWWWWW
        WWWWWWWWWWWWWWWWWWWWWWWWWN0ooddkkkkkOOdcclxOkxc,;ldkKX0XWXkxxONWWWWWNK0OOO0KK0d';cckKXNWWWWWWWWWWWWW
        WWWWWWWWWWWWWWWWWWWWWWWWWWN0d;..;cdk0KkOxld00OOOko;:dd;cOOclOkKX0KXKkooxdllokx:.cOd::;;:cldx0NWWWWWW
        WWWWWWWWWWWWWWWNNX0O0KK0Okxddo:.'ldxl;oKNKOkxkX0dllccxOk0Oxxxxxolold0OdoxOkxxc.;oxOOkdddodolcc:oxkkk
        WWWWWWWWWWWWWWNWWN0xl;'':odxOOllKWNk,cKNNWWNOolokkxkkddkkxxkkOOO0Xd.cNW0xxdolloxxkOOOOkkkkkOKKd;;ol'
        WWWWWWWWWNNNWWWWWWWNKk:.'cdxd;cXWWXkoccdkkdcoKKdldOKWXkdxkxkO0KNWW0okXK0KOdod0XKOxxxdoxXWNXOO0XKl,;d
        WWWWWWWWWX0xolodxxxxxx:.lKNNk;cxxxxdccONNNOlkWWWXkdddooloddddkKNWWX0O00OdoddlldkOKNWN0ocdKWWWXKXx,dN
        WWWWWWWNWNWNkocclxO0XO;lNWWNkccoddxc,xWWWWKlkWWWWWNXK0000OxlxXXWXkk0XOl;cocdOkxxxdodkKWKddOKXN0lcxNW
        WWWWNXNNX0Okdoc;,';ol.;0NWNk;oXWWWWxl0WNNXd,:dxxxl;l0WWNXOxONWWXkON0c:dlcdc,cx:,cdoccccoxxddoocxNWWW
        WWWWNOoloxxkkOklokXXc.:odxo,lNWWWN0:,dxkOl'ck0KKKc cXWWWWWWWWWNOOKx,.:OOcoXKxdxOo;ld::o:.'l;;kXWWWWW
        WWWWWWXx;:oodo:oXWNx;xNWN0:'lkxdo:;o0XNWNllNWWWWWo.cXWWWWXOKWWNX0coOoolc:cxxKWWWX0XW0dkx;cxd0WWWWWWW
        0000OOOkkkl'..:ddxo;xWNWNo,:lodxd,oWWWWWXlxWWWWN0, ;xkkkd;:KWWWWXkKXxkXKdcc;c0OdONWWWWWOox0NWWWWWWWW
        d,,oOKNWKdx0KXK0Ol.cNWWNxcOWWWWMO:xWWWWXd,cxkkxl;ldk0KXNO:xWWWWWNNNN0kxxO00dccl;,odkKOolOWWWWWWWWWWW
        WKxdxxxdckWWWWWXd,;dOkxo'oWWWWWXc.lkxxd,.:x0KKKcoWWWWWNWk;kWWWWKk0WWWWN0xddxO0Ol,;,,oxclKWWWWWWWWWWW
        NWWWN0l'.;llllc,;kNNNNNKcdNKOxo;;lxkO0O:oNWWWWKcxWWWWNX0:,dkddxdOXOdodxkkkxxxxxkOOdolcdKWWWWWWWWWWWW
        NNWWWXKd,oOOkOOclNWWWWNd'cxddo';KWWWWWk:OWWWWKl'cddl:ldo,,o:,xXKxllx0XNNNKxdKWKOOXWOckWWWWWWWWWWWWWW
        NNWWWWWo;OXK00d',dxxxd:;dXWWWNllNWNNWNc'oxdxo;:dO00:;KWNXX0;lNO:c0NWWNWWWWK:,docoKklxNWWNWWWWWWWWWNW
        WWWWWWNd:odddc.'ldxxko'lNWWNWNcc000Oxc;cddxd,:XWWNX:,xkdooc.dk;dNWWWWWWWWWKxkx' ;od0NWNWWWWWWWWWWWWW
        WWWWWWWNNWWWWx;OWWWWWk;xWNXKOl';oddl.;KWWWWXldWWW0dc::.;k0o',,oNWWWWWWWWWWWWWKllOXWWWWWWWWWWWWWWWWWW
        WWWWWWWWWWWWWocXWWWN0;.lxxxl',kXWWW0;oWWWWWKldWNNKkkx;'OXocc.;KWWWWWWWWWWWWWWNXNWWWWWWWWWWWWWWWWWWWW
        WWWWWWWWWWWWX:'oxxxl.,kKNWWO;xWWWWWXloNWWNKl.:c;ldddk:;kddNNxxNWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
        WWWWWWWWWWWN0dx0KKXd'xWWWWWx,xWWWWWNl,oooolokO;,KWWXk;',cKWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
        WWWWWWWWWWWWNWWWWNWd,OWWWWNl.cxdoool..ckKNNWWK;cNKxlc0d.cNWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
        WWWWWWWWWNNWWWWWWWK;.cdxxdl..cxkkO0K:;XWWWWWKl.cKc.cXWNxxNWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
        WWWWWWWWWWWWWWWWWXxodxkkO0d'oNWWWWWK;:KK0Odlc:.;c:o0WWWNNWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
        WWWWWWWWWWWWWWWWWWWWWWWWWWd'kWWWWWNo.'oc.,dO0o;' cXNWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
        WWWWWWWWWWWWWWWWWWWWWWWWWWo.lkxxdl,,o0NK,:XKodXk'cKNWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
        WWWWWWWWWWWWWWWWWWWWWWWWWNxlxxxdd,.kWWWX;'kdoXWN0k0XWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
        WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWc;KWWKo,.;cOWWNWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
        WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWl,0Wk:o0x.:XWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
        WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWO,lk;oNWWOkNWWWWWNWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
        WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWk;.,0WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
        WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWO':XWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW
        WWWMWNWWNWWNWMWNWWNWWNWMWWMWNWWNWWNNkdXMWNWWNWMWWWMWNWWNWWWWMWNWWNWMWWMWNWWNWWNWMWNMWNWWNWWNWMWNWWNW`)
        rl.close()
    }else if(numAttempts === 4){
        console.log("Samwell Tarley")
        console.log(`',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
        .,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,.
        .,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'..,,,,,,,,,,,,,,,,,,,,,,,,.
        .,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,''...',,,,,,,,,,,,,,,,,,,,,,,,.
        .,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'...',,,,,,,,,,,,,,,,,,,,,,,,,,.
        .,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'''''''''',,,,,,,,,,,,'.'.',,,,,,,,,,,,,,,,,,,,,,,,,,,.
        .,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,''''''',,,,,,'.',,,,,,,,,'''..,,,,,,,,,,,,,,,,,,,,,,,,,,,,.
        .,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'.',,,,'''',,''...',,,,,,,'',.',,,,,,,,,,,,,,,,,,,,,,,,,,,,.
        .,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'.','........'''','..',,,,,'',.',,,,,,,,,,,,,,,,,,,,,,,,,,,,.
        .,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,..''..........''',,,..,,,,,'','',,,,,,,,,,,,,,,,,,,,,,,,,,,,.
        .,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'.',,,'..........';cc:'',,,,,'','.,,,,,,,,,,,,,,,,,,,,,,,,,,,,.
        .,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'..''.............,ccc;'',,,,,,'','.,,,,,,,,,,,,,,,,,,,,,,,,,,,.
        .,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'..''.............':ccc,',,,,,,,,'',..,,,,,,,,,,,,,,,,,,,,,,,,,,.
        .,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'''',,,,,'...........,ccc:'',,,,,,,,,'','',,,,,,,,,,,,,,,,,,,,,,,,,.
        .,,,,,,,,,,,,,,,,,,,,,,,,,,,,'.'..','''',,,'.........',;;,',,,,,,,,,,,.','',,,,,,,,,,,,,,,,,,,,,,,,.
        .,,,,,,,,,,,,,,,,,,,,,,,,,,'...''......'''..',,'.','...''',,,,,,,,,,,,..,'.',,,,,,',,,,,',,,,,,,,,,.
        .,,,,,,,,,,,,,,,,,,,,,,,'.''''',,,,,,''....'.'','...'''...'''',,''''''..,'.',,,,,,;;;,,,,,'.',,,,,,.
        .,,,,,,,,,,,,,,,,,,,,,,,'..''''''''',,,,,,..,,,,,'.'''..''''...''.......''''',,,,,,,,',,,,,,,,,,,,,.
        .,,,,,,,,,,,,,,,,,,,,,,,,'..'',,,,,,,,,,''.';ccc:,''..'',''''.',,''....''.'.',,,,,,,',,,,,,,,,,,,,,.
        .,,,,,,,,,,,,,,,,,,,,,,,,,,,'''''''''''''''',,,,'...','.'',,'.''''''''',,''',,,,,,,,,,,,,,,,,,,,,,,.
        .,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'.',,,,,,,,,,,'...',,.'''''''',,,,,,,.','',,,,,,,,,,,,,,,,,,,,,,,,.
        .,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'.,,,,,,,,,,,'',,,,'',,,,,,,,,,,,,,,'.,'.',,,,,,,,,,,,,,,,,,,,,,,.
        .,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'',,,,,,,,,,,'',,,'',,,,,,,,,,,,,,,,,'',..,,,,,,,,,,,,,,,,,,,,,,,.
        .,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'..',,,,,,,,,'',,''',,,,,,,,,,,,,,,,,,.',.',,,,,,,,,,,,,,,,,,,,,,,.
        .,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'.''''''''',,,'','.',,,,,,,,,,,,,,,,,,''''',,,,,,,,,,,,,,,,,,,,,,,,.
        .,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'.',,,,,,,,'''''.....',,,,,,,,,,,,,,,,,''''',,,,,,,,,,,,,,,,,,,,,,,,,.
        .,,,,,,,,,,,,,,,,,,,,,,,,,,,,'.',,,,,,,,,,,,,'.''..',,,,,,,,,,,,,,,,,''.',,,,,,,,,,,,,,,,,,,,,,,,,,.
        .,,,,,,,,,,,,,,,,,,,,,,,,,,,'.',,,,,,,,,,,,,,'.,,'.',,,,,,,,,,,,,,,,''.',,,,,,,,,,,,,,,,,,,,,,,,,,,.
        .,,,,,,,,,,,,,,,,,,,,,,,,,,,..,,,,,,,,,,,,,,,'','.',,,,,,,,,,,,,,,,''..,,,,,,,,,,,,,,,,,,,,,,,,,,,,.
        .,,,,,,,,,,,,,,,,,,,,,,,,,,'.,,,,,,,,,,,,,,,,'''.',,,,,,,,,,,,,,,,,''.',,,,,,,,,,,,,,,,,,,,,,,,,,,,.
        .,,,,,,,,,,,,,,,,,,,,,,,,,,.',,,,,,,,,,,,,,,,,'..',,,,,,,,,,,,,,,,,'..',,,,,,,,,,,,,,,,,,,,,,,,,,,,.
        .,,,,,,,,,,,,,,,,,,,,,,,,,'.',,,,,,,,,,,,,,,,,,..,,,,,,,,,,,,,,,,,,'..',,,,,,,,,,,,,,,,,,,,,,,,,,,,.
        .,,,,,,,,,,,,,,,,,,,,,,,,,'.,,,,''',,,,,,,,,,,,'.',,,,,,,,,,,,,,,,,'..',,,,,,,,,,,,,,,,,,,,,,,,,,,,.
        .,,,,,,,,,,,,,,,,,,,,,,,,,'.''''',,,,,,,,,,,,,,,.',,,,,,,,,,,,,,,,,,'..,,,,,,,,,,,,,,,,,,,,,,,,,,,,.
        .,,,,,,,,,,,,,,,,,,,,,,,,,....''.''''''..'',,'''..,,,,,,,,,,,,,,,,,,,,',,,,,,,,,,,,,,,,,,,,,,,,,,,,.
        .,,,,,,,,,,,,,,,,,,,,,,,,,,'''''.',,,,,...''''''''.',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,.
        '',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'.',,,,,'..,,,,,,,'.',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,',
        ;.,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'.',,,,,...',,,,,,'.',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,':
        o.,,,,,,,,,,,,,,,,,,,,,,,,,,,,'.',,,,,,..'..,,,,,,,'.,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'o
        0;.,,,,,,,,,,,,,,,,,,,,,,,,,,'.',,,,,'..',..,,,,,,,,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,';0
        Wd.',,,,,,,,,,,,,,,,,,,,,,,,'.',,,,,'.',,,'.',,,,,,,'.',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,''dW
        MXc.',,,,,,,,,,,,,,,,,,,,,,,..,,,,,'.,,,,,,''.',,,,,,..,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'cXM
        MMKc.',,,,,,,,,,,,,,,,,,,,,,..,,,,..,,,,,,,,,,..',,,,..,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'cKMM
        MMMXl.',,,,,,,,,,,,,,,,,,,,,..,,,'.,,,,,,,,,,,,'.',,,..',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,''lXMMM
        MMMMNx,.,,,,,,,,,,,,,,,,,,,,...'...,,,,,,,,,,,,,'.......,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,';xNMMMM
        MMMMMWKl,',,,,,,,,,,,,,,,,,,..','..,,,,,,,,,,,,,,...''..',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,',oKWMMMMM
        MMMMMMMW0o,'',,,,,,,,,,,,,,'.',,,'...,,,,,,,,,,,,'...,,..',,,,,,,,,,,,,,,,,,,,,,,,,,,,,'';o0WMMMMMMM
        MMMMMMMMMWKxc,'',,,,,,,,,,,.',,,,,,'...',,,,,,,,,,,'.',,....',,,,,,,,,,,,,,,,,,,,,,,'',cxXWMMMMMMMMM
        MMMMMMMMMMMMW0dc,'',,,,,,,,..''''..'''..',,,,,,,,,'..,,,,,'...',,,,,,,,,,,,,,,,,,'',cd0WMMMMMMMMMMMM
        MMMMMMMMMMMMMMMWKxl;'',,,,,,''',,,,'''''',,,,,,,,'.....'.''''..',,,,,,,,,,,,,,'';lxKWMMMMMMMMMMMMMMM
        MMMMMMMMMMMMMMMMMMWXOo:,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'',:oOXWMMMMMMMMMMMMMMMMMM
        MMMMMMMMMMMMMMMMMMMMMMN0dc,'',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'',cx0NMMMMMMMMMMMMMMMMMMMMMM
        MMMMMMMMMMMMMMMMMMMMMMMMMWKxl:''',,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,'',:lxKWMMMMMMMMMMMMMMMMMMMMMMMMM
        MMMMMMMMMMMMMMMMMMMMMMMMMMMMMN0xl;''',,,,,,,,,,,,,,,,,,,,,,,,,,'',:lx0NMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
        MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMN0xc;'',,,,,,,,,,,,,,,,,,,,'';lx0NMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
        MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWXkl;'',,,,,,,,,,,,,,'';lkXWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
        MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWXx:'',,,,,,,,,,'':xXWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
        MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNkc'',,,,,,,,ckNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
        MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNk:',,,,':kNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
        MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMXo,'',oXMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
        MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNd,,dNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM`)
        rl.close()
    } else if(numAttempts === 5){
        console.log("Daenarys Targaryn")
        console.log(`



                                          ....,:loll:::;,.
                                      . .dkO0NNXNWWMMW0dl,
                               .c:.   ;ccokKWWWWNXNK0XMMNo':oddo,.
                            .;xXWNKkoc...lXNK00kl;,'.oWMMKl,lOXWNOl.
                         'cxKNWWWWMMMNO:..:;....     :XMMNc .;kNWWWKxxo'.
                       .c0XNMWNOlcdkXMWKd'          .dNMWX:.lXMXxllxNWNKOx,
                     .:kNWMMWKl.   .oNMMK:      .clxXWMM0;.,0MXc   ;XWkdKWXd;.
                    .lOkxkXWKc.     .kWWWx.  .;oKWWMWWKl.   lWWO:,cOWNo.;kKNW0;.
                    ,c,.'lXO;.      .kMMWo.,o0NWWNNXxc.     .:kNWNNN0c.  .:ONWNO,
                ..   .   .,'        .OMWWOONWWX0x;,...';:cllllxXMXxc'      .oNMWKl.
               .l, . .c:;lc;;.      :XMMMWMWNO;..,cokKNWMMMMWWMMMMWXOxl;.   .,dXWWx.
               od;dOdOWNNMWWWKkxc. .xMMMMMW0:.  .oOKWMMWMMMMMMMMMMMMMMMWKxc.  .dKWXo.
              ,00KWWWWKxkOOXMMMMNOc,xWMMWWK;       'kWMMMMMMMMWMWXKWMMMMMMWXx;  :KMNc
             ,OWMMMWOc.    'lkXWWMNOKWMMWKl.        ,KWWMMN0O0XW0,.;xXMMMMMMMNk;.:0WXc
            .xNWMNKd.         .dNMMMMMMMMXl.        ;KMMMMk. ..;,....,kNXkkXMMWNx,:ON0l.
            .kWMMNl.           .;0MMMMMMMW0dc,',..':0WWNOxl'     ;0Kkc,:,  ;0MMMM0,;KMWl
            ;KKOKNd.     .'',cc. :KMMMMMMMMMWNXNKKNWMWWXd;;;,. .lXMMMWKo.   ;XMMMMKcoNMx.
           .dKl;oKK;    .;0NNWWx..oNWMMMMMMMMMMWMMWMMMMMWWWWXdd0WMMMMMWWKc. .dWMMMW0:oNk.
            ,cc:.';.   .l0WMMMMX;  cXMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNd. ;XMMMMMk,x0,
            'dk;        .'lkXWMWo   ,kWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWx..lxONWMN:,k;
            .kNl  ...:,..   .dXMX:   .oKWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNo    cXMWx.,'
            .dWd.:OOKWKO0d,. .kMWXc.   'cdKMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMX;   'OWWO.
             lXO:xXd:::lONXx',0NkONk;.    oWMMMMMMMMMMMMMMMMMMMMMMMMMNXNMMMMMx.  ,KMM0'
             ;0NXKl     .xWO;:ko..oKN0o:'.lNMMMMNXXNMMMMMMMMMMMMMWMMWO;:KMMMM0'  oWWMO.
              lXMk.      cNXd,.    .:kXNNKXMMMMXcckXMMMMMMMMMMMMMMMMXO; oMMMMN: '0MMMd.
              .lNXd,....:0Wx'         .;okXWMMX: ,xKMMMMMMMMWWMMMMMMNx. dMMMMN:  cXMN:
               ;KMMNKkkXKdo:      ';.     'dKO;  ..dWMMMMMMXxOWMMMMMO:.'OMMMMX:  .kMx.
               .:0Nk;,cl'       ,lkX0;     .'.     .dXWWMMK;.dWMMMMMX; .,kWMM0'  'O0'
                .lXKc.         .dNWWMXx,.           ;0MMMMx..OMMMMWKx,  'OWMWo  .d0;
                 .:kKx'        ;OXKKNWWN0dc:;;;:ldxkXWMMWMk.;XMMWMWO,  :0WWWk. .dk,
                   'xXKo.      .....':OWWOodddxkOO0OOOkddkc.kMMMMXKo.,kNMMWO' ,xd.
                    .cKW0c.           '0Wo               .,dNMWMWx..,0MMMNx'.ld;
                     .;lx00d:.        .xKc.             'dXWMMKxc.   dMWKc':l;.
                        .:kKXKxl;.     ..           .,lxXWMNXK:    .cKXd,.,'
                           .:OWMWKkoc;,'''''',:cldxkKNWNWNk;.,,;cox00o'
                             .;:l0WWMWWWNNNNNWMMNXKNWXo,;,. ,OWWWXx:.
                                 ';cc:lxOOxllkOkc..,,.  .,cxKXOo;.
                                            .,:::clllooodxoc;.
                                             ..'',,,''..
                                                                         `)
        rl.close()
    }
}

const intro = () => {
    const introMsg1 = () => {console.log("Welcome\n")}
    const introMsg2 = () => {console.log("To Game of Thrones trivia!!\n")}
    const introMsg3 = () => {console.log(`The rules are simple...\n`)}
    const introMsg4 = () => {console.log(`Guess who said what...

If you fail 5 times`)}
    const introMsg5 = () => {console.log(`

    ██╗░░░██╗░█████╗░██╗░░░██╗  ██╗░░░░░░█████╗░░██████╗███████╗██╗██╗██╗██╗██╗██╗██╗
    ╚██╗░██╔╝██╔══██╗██║░░░██║  ██║░░░░░██╔══██╗██╔════╝██╔════╝██║██║██║██║██║██║██║
    ░╚████╔╝░██║░░██║██║░░░██║  ██║░░░░░██║░░██║╚█████╗░█████╗░░██║██║██║██║██║██║██║
    ░░╚██╔╝░░██║░░██║██║░░░██║  ██║░░░░░██║░░██║░╚═══██╗██╔══╝░░╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝
    ░░░██║░░░╚█████╔╝╚██████╔╝  ███████╗╚█████╔╝██████╔╝███████╗██╗██╗██╗██╗██╗██╗██╗
    ░░░╚═╝░░░░╚════╝░░╚═════╝░  ╚══════╝░╚════╝░╚═════╝░╚══════╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝╚═╝\n`)}
    const introMsg6 = () => {console.log("Lets begin\n")}
    setTimeout(() => {introMsg1()}, 500)
    setTimeout(() => {introMsg2()}, 1000)
    setTimeout(() => {introMsg3()}, 3000)
    setTimeout(() => {introMsg4()}, 5000)
    setTimeout(() => {introMsg5()}, 7000)
    setTimeout(() => {introMsg6()}, 9000)
    setTimeout(() => {askGuess()}, 11000)
}


intro()
