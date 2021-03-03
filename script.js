
    let xhr = new XMLHttpRequest;
    xhr.open('GET','https://thatsthespir.it/api',true);

    xhr.onload = () => {

        if(xhr.status === 200){
            console.log(JSON.parse(xhr.response));
        };

        let result = JSON.parse(xhr.response);

        document.querySelector('#quote').innerHTML = result.quote;
        document.querySelector('#photo').src = result.photo;
        document.querySelector('#name').innerHTML = result.author;
    };

    xhr.send();