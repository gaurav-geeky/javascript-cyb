
const btn = document.getElementById("btn");  

btn.addEventListener("click", () => { 

    // get user input from 
    const word1 = document.getElementById("word1input").value.toLowerCase();
    const word2 = document.getElementById("word2input").value.toLowerCase(); 
    // console.log(word1, word2); 


    // remove space punctuation from both word 
    const cleanword1 = word1.replace(/[^\w]/g, ""); 
    const cleanword2 = word2.replace(/[^\w]/g, "");  

    //                                       check if lengths are same 
    if (cleanword1.length !== cleanword2.length) { 
        result.textContent = "Not anagram!"; 
        return; 
    } 

    //                                  count letter occurances in first word .. 
    const lettercount1 = {}; 
    for (const x of cleanword1) { 
        lettercount1[x] = (lettercount1[x] || 0) + 1; 
    }

    //                                  count letter occurances in second word .. 
    const lettercount2 = {}; 
    for (const x of cleanword2) { 
        lettercount2[x] = (lettercount2[x] || 0) + 1; 
    } 

    //                               compare letter counts  
    for (const x in lettercount1) { 
        if ( lettercount1[x] !== lettercount2[x])
        { 
            result.textContent = "not an anagram!"; 
            // result.classlist.remove("success"); 
            // result.classlist.add("error");  
            return; 
        }
    } 

    //                              if all letter count are same its anagram.  
    document.getElementById("result").textContent = "its Anagram 👌"; 
    // result.classlist.remove("error"); 
    // result.classlist.add("success");  
    
} );  





