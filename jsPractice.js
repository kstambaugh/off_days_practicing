function numberOf(animal){
    if(animal == 'dog' || animal == 'dogs'){
        return 3
    }
    else if(animal == 'cat' || animal == 'cats'){
        return 2
    }
    else if(animal == 'pig' || animal == 'pigs'){
        return 4
    }
}

function makeNoise(animal){
    if(animal == 'dog' || animal == 'dogs'){
        return 'bark'
    }
    else if(animal == 'cat' || animal == 'cats'){
        return 'meow'
    }
    else if(animal == 'pig' || animal == 'pigs'){
        return 'oink' 
    }
}

let animalHouse = ["dog","cat","pig"]

for(let i = 0; i < animalHouse.length; i++){
        let x = animalHouse[i]
        let number = numberOf(x)
        let sound = makeNoise(x)
        console.log("My friend has " +number+" "+x+"(s)"+" and they say "+sound)
        
}

