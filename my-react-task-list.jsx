function TaskList (){
const tareas = [
    { id:20, name:'Pendientes',completed:false },
    { id:20, name:'Ordenar',completed:true },
    { id:20, name:'Lavar losa ',completed:false },
    { id:20, name:'Pedir cita ',completed:true },
    { id:20, name:'salir a comprar',completed:true },
    { id:20, name:'lavar ropa',completed:true },

    
]
return (
    <div>
      <h1>Lista de Tareas</h1>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addTask}>Agregar</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => removeTask(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
    

