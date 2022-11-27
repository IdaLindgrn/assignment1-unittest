import { addTodo, changeTodo, removeAllTodos } from "../ts/functions";
import { Todo } from "../ts/models/Todo";
import { IAddResponse } from "../ts/models/IAddResult";

test("Should not add to Todo", () => {
    //Arrange
    let myText: string = "å"
    let myTodos: Todo[] = [];
    //Act
    let response: IAddResponse = addTodo(myText, myTodos);
    //Assert
    expect(myTodos.length).toBe(0)
    expect(response.success).toBe(false)
    
});

test("Should add to Todo", () => {
    //Arrange
    let myText: string = "äta"
    let myTodos: Todo[] = [];
    //Act
    let response: IAddResponse = addTodo(myText, myTodos);
    //Assert
    expect(myTodos.length).toBe(1)
    expect(response.success).toBe(true)
   

});

test("Should change Todos boolean value", () => {
    //Arrange
    let todo: Todo = new Todo("Handla", false)
    //Act
    changeTodo(todo);
    //Assert
    expect(todo.done).toBe(true);
});


test("Should remove Todos", () => {
    //Arrange
    let theList: Todo[] = [new Todo("Handla", true), new Todo("Laga mat", true)]
    //Act
    removeAllTodos(theList);
    //Assert
    expect(theList.length).toBe(0);
});

