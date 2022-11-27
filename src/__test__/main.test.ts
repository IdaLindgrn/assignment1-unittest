/**
 * @jest-environment jsdom
 */

import * as functions from "../ts/main";
import * as fnfunctions from "../ts/functions";
import { Todo} from "../ts/models/Todo";

describe("createHtml", () => {
    test("Should setItem to localStorage", () => {
        //Arrange
        let todos: Todo[] = [new Todo("Städa", false)];
        //Act
        functions.createHtml(todos);
        //Assert
        expect(todos.length).toBeGreaterThan(0);
    });

    test("Test for loop", () => {
        //Arrange
        let todos: Todo[] = [new Todo("Laga mat", false)]
        document.body.innerHTML = `<ul id="todos" class="todo"></ul>`;
        let ul = document.getElementById("todos");
        //Act
        functions.createHtml(todos);
        //Assert
        expect(ul?.innerHTML).toBe(`<li class="todo__text">${todos[0].text}</li>`);
    });
});



describe("displayError", () => {
    test("Should add HTML to div", () => {
      //Arrange
      document.body.innerHTML = `<div id="error" class="error"></div>`;
      let error: string = "Error Message";
      let show: boolean = true;
  
      //Act
      functions.displayError(error, show);
  
      //Assert
      expect((document.getElementById("error") as HTMLDivElement).innerHTML).toBe(
        "Error Message"
      );
    });

    test("Should add class to div", () => {
        //Arrange
        document.body.innerHTML = `<div id="error" class="error"></div>`;
        let error: string = "Error Message";
        let show: boolean = true;
    
        //Act
        functions.displayError(error, show);
    
        //Assert
        expect(
          (document.getElementById("error") as HTMLDivElement).classList.length
        ).toBe(2);
      });

      test("Should not add class to div", () => {
        //Arrange
        document.body.innerHTML = `<div id="error" class="error"></div>`;
        let error: string = "Error Message";
        let show: boolean = false;
    
        //Act
        functions.displayError(error, show);
    
        //Assert
        expect(
          (document.getElementById("error") as HTMLDivElement).classList.length
        ).toBe(1);
      });
    });

    describe("createNewTodo", () => {
        test("Should call createHtml for Todo", () => {
          // arrange
          let spy = jest.spyOn(functions, "createHtml").mockReturnValue();
          let todoText: string = "inlämning";
          let todos: Todo[] = [new Todo("Inlämning", false)];
          // act
          functions.createNewTodo(todoText, todos);
          // assert
          expect(spy).toBeCalled();
        });
      
        test("Should not call createHtml for Todo", () => {
          // arrange
          let spy = jest.spyOn(functions, "displayError").mockReturnValue();
          let todoText: string = "l";
          let todos: Todo[] = [new Todo("Inlämning", false)];
      
          // act
          functions.createNewTodo(todoText, todos);
      
          // assert
          expect(spy).toBeCalled();
        });
      });

      describe("toggleTodo", () => {
        test("should call changeTodo", () => {
          let spy = jest.spyOn(fnfunctions, "changeTodo").mockReturnValue();
          let todo: Todo = new Todo("inlämning", false);
          functions.toggleTodo(todo);
      
          expect(spy).toHaveBeenCalled();
        });
        test("should call createHtml", () => {
          let spy = jest.spyOn(functions, "createHtml").mockReturnValue();
          let todo: Todo = new Todo("inlämning", false);
      
          functions.toggleTodo(todo);
      
          expect(spy).toHaveBeenCalled();
        });
      });

      describe("clearTodos", () => {
        test("should call removeAllTodos", () => {
          let spy = jest.spyOn(fnfunctions, "removeAllTodos").mockReturnValue();
          let todos: Todo[] = [new Todo("inlämning", false)];
          functions.clearTodos(todos);
      
          expect(spy).toHaveBeenCalled();
        });
        test("should call createHtml", () => {
          let spy = jest.spyOn(functions, "createHtml").mockReturnValue();
          let todos: Todo[] = [new Todo("inlämning", false)];
      
          functions.clearTodos(todos);
      
          expect(spy).toHaveBeenCalled();
        });
      });
      
    
      