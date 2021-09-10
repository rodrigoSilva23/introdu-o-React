import listCustomer from "./listCustomer";
function App() {
  const renderCustomer = (customer, index) => {
    return(
      <div key={`customer-${customer.id}`}>
        <li >{customer.name}</li>
        <div style={{marginLeft:"10px"}}>
          {customer.skills === undefined ? "Habilidade não encontrada" : customer.skills.map(renderSkills)}
        </div>
      </div>
      )
  };
  const renderSkills = (skill, index) => {
    return(
      <li key={`skills-${index}`}>{skill}</li>
      
      )
  }



  return (
    <div className="App">
      <ul>{listCustomer.map(renderCustomer)}</ul>
    </div>
  );
}

export default App;
