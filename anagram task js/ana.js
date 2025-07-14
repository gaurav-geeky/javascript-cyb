let btn = document.querySelector('#btn');

btn.addEventListener('click', () => {

    let word1 = document.querySelector('#inp1').value.trim();
    let word2 = document.querySelector('#inp2').value.trim();

    let result = document.querySelector('#show'); 

    //      if words are  EMPTY 
    if ((word1.length == 0 && word2.length == 0)) {
            result.innerHTML = " no word here, please enter something";
            return;
        }   

    //               word without spaces 
    let cleanword1 = word1.replace(/[\^w]/g, "");
    let cleanword2 = word2.replace(/[\^w]/g, "");

     //               length check 
    if (cleanword1.length != cleanword2.length) {
        result.innerHTML = "unequal length, not Anagram!";
        return;
    }
    //                      check letter count in word 1 
    let word1letter = {};
    for (let x of cleanword1) {
        word1letter[x] = (word1letter[x] || 0) + 1;
    }

    //                      check letter count in word 2
    let word2letter = {};
    for (let x of cleanword2) {
        word2letter[x] = (word2letter[x] || 0) + 1;
    }

    //              check if letter in both matches or  NOT
    for (let x in word1letter) {

        if (word1letter[x] != word2letter[x]) {
            result.innerHTML = "👎 it is not an Anagram!";
            return;
        }    
        
    } 
    result.innerHTML = " it's an Anagram!";

    return; 
})





