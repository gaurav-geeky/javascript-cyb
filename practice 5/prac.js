
let btn = document.querySelector('#btn');

btn.addEventListener("click", () => {   
    // here result store
    let result = document.querySelector('#show'); 

    // get word
    let word1 = document.querySelector('#inp1').value.toLowerCase();
    let word2 = document.querySelector('#inp2').value.toLowerCase();

    // remove extra space 
    let realword1 = word1.replace(/[^\w]/g, "");
    let realword2 = word2.replace(/[^\w]/g, ""); 

    // equal length check 
    if (realword1.length !== realword2.length) { 
        result.textContent = "🤥 length, not anagram !";  
        return; 
    } 

    // count letter now. 

    const letter1 = {}; 
    for (let x of realword1) { 
        letter1[x] = (letter1[x] || 0) + 1; 
    }

    const letter2 = {}; 
    for (let x of realword2) { 
        letter2[x] = (letter2[x] || 0) + 1; 
    }

    // comp letter 
    for (let x in letter1) { 
        if (letter1[x] !== letter2[x]) 
            { 
            result.textContent = " 👎 not anagram!"; 
            return; 
        }
    } 
    
    // if letter same : anagram 
    result.textContent = "👍 its anagram!";

});  

























