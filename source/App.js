import React,{useState} from 'react';
import Header from './components/header';
import Page1 from './components/page1';
import Page2 from './components/page2';
const peopleJSON = require('./people3.json')
function App() {
  // console.log(peopleJSON.length)
  const [pageValue,setPageValue] = useState("page1");
  function handlePageChange(val){
    setPageValue(val);
  }
  return (
   <>
   <Header handlePageChange = {handlePageChange} />
   <div style={{marginTop:"70px"}} ></div>
   {pageValue == "page1" ? <Page1 peopleJSON = {peopleJSON} /> :<Page2 peopleJSON = {peopleJSON}/>}
   </>
  );
}

export default App;
