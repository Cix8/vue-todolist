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
            mainData: objArray,
            newTodoText: '',
            newTodoDone: false
        },
        methods: {
            removeTodo: function(i) {
                this.mainData.splice(i, 1);
                console.log(this.mainData);
            },
            addTodo: function() {
                if (this.notOnlyWhitespaces(this.newTodoText)) {
                    this.mainData.push(new Todo(this.newTodoText, this.newTodoDone));
                    console.log(this.mainData);
                }
                this.newTodoText = '';
            },
            thisIsDone: function(i) {
                this.mainData[i].done = !this.mainData[i].done;
            },
            notOnlyWhitespaces: function(string) {
                let result = true;
                if (string.trim() === '') {
                    result = false;
                }
                return result
            }
        }
    }
)