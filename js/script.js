const exampleTextArray = ['Fare la spesa', 'Pulire casa', 'Terminare gli esercizi'];
class Todo {
    constructor(text, done) {
        this.text = text,
        this.done = done
    }
}

const objArray = [];

for (let i = 0; i < exampleTextArray.length; i++) {
    if (i === 1) {
        objArray.push(new Todo(exampleTextArray[i], true));    
    } else {
        objArray.push(new Todo(exampleTextArray[i], false));    
    }
}

console.log(objArray);

const app = new Vue(
    {
        el: '#root',
        data: {
            mainData: objArray
        },
        methods: {
            removeTodo: function(i) {
                this.mainData.splice(i, 1);
            }
        }
    }
)