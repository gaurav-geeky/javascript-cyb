

//  lesson 39  API API API API API .  



//  XMLHttpRequest() M  method to send request


const requstUrl = 'https://api.github.com/users/hiteshchoudhary'

const xhr = new XMLHttpRequest();

xhr.open('GET', requstUrl);
console.log('here');
xhr.onreadystatechange = function () {
    console.log(xhr.readyState);

    if (xhr.readyState === 4) {
        const data = JSON.parse(this.responseText);

        console.log(data);
        console.log(typeof data);
        console.log(data.followers, data.id, data.repos_url );

    }
}
xhr.send();







