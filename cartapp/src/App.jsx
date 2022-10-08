import Cart from "./Cart";
import contacts from "./content";

function crtCard(contact){
     return (<Cart key={contact.id} itm={contact.itm} count={contact.count} price={contact.price}/>);
}

function App() {
  return (
    <div className="App">
      <h1>Cart</h1>
      {contacts.map(crtCard)}     
    </div>
  );
}

export default App;
