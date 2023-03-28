import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Like from "./components/Like/Like";
import Form from './components/Form/Form'

function App() {
   let items = ["New York", "San Franciscio", "Paris"];
   const handleSelectItem = (item: string) => {
      console.log(item);
   };

   return (
      <>
         {/* <div className="App">
            <ListGroup
               items={items}
               heading="Cities"
               onSelectItem={handleSelectItem}
            />
         </div> */}
         {/* <Alert>
        <h2>Hi</h2>
      </Alert> */}

        {/* <Like onClick={() => console.log("Clicked")}></Like> */}

        {/* Form component */}

      <Form></Form>
      </>
      
   );
}

export default App;
