   const createTodoElement =(text)=>{
    const todoElementLi = document.createElement('li')
    const  todoElementA = document.createElement('a')
    todoElementA.href ="#";
    todoElementA.textContent=text;
    todoElementLi.append(todoElementA);
    return todoElementLi
   }

   const dataContainer = document.querySelector("#data_container")



const TodoElemnt = ()=>{

    const todoUrl = 'https://jsonplaceholder.typicode.com/todos';
const result = fetch(todoUrl,{
    method: 'GET',
})

result
     .then((respons)=>{
        console.log(respons)
        if(!respons.ok){
            throw new Error('Ощибка')
        }
        return respons.json()
     })
     .then((todos)=>{
        console.log('todos',todos)
        todos.forEach((todo) => {
             const todoHtml = createTodoElement(todo.title);
             dataContainer.append(todoHtml);
        });
     })
     .catch((erorr)=>{
        console.log("erorr",erorr)
     })
}
TodoElemnt()