let name_var = process.env.NAME

function speak(name_var) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            if(!name_var) {name_var = ''}
            console.log('Bla bla bla! Hello ' + name_var);
            resolve(name_var);
            //reject('An error occured');
        })
    }, 1000)
}

speak(name_var);