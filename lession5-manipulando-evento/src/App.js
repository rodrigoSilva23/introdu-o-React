import listCustomer from "./listCustomer";


const App = () => {
  const handleDelete = (id)=> {
   
      
       alert("o id do cliente é:"+id)
    
   
  }

  
  const renderCustomer = (customer, index) => {
    return(
      <div>
        {customer.id &&
          <div key={`customer-${customer.id}`}>
            <li >
              {customer.name}
              <button key={customer.id} onClick={()=>handleDelete(customer.id)}>Delete</button>
              </li>
            <div style={{marginLeft:"10px"}}>
              {customer.skills === undefined ? "Habilidade não encontrada" : customer.skills.map(renderSkills)}
            </div>
          </div>

        }
      </div>

    )
  };

  const renderSkills = (skill, index) => {
    return(
      <li key={`skills-${index}`}>{skill}</li>

    )
  }
  
  const handleChange = (event) => {
    const {value} = event.target;
    console.log(value);
    
  }
  return (
    <div className="App">
      <p>digital innovation One</p>
      <p>Seja bem vindo a nossa Aula =D</p>
      
      <input onChange={handleChange}/>

      <ul>{listCustomer.map(renderCustomer)}</ul>
    </div>
  );
}

export default App;
