import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import Datatable from './Datatable';

export default function DataList() {
    const [data, setData] = useState([]);
    const [filtervalue, setFiltervalue] = useState("");
    const [order,setOrder] = useState(false);

    useEffect(() => {
      Axios.get('data/data.json').then((res)=> console.log(setData(res.data)))
    },[])

  function  sortByDate(e){
      e.preventDefault();
      console.log("clicked")
      let newData =data ;
      if(order){
          newData= newData.sort((a, b) =>  {
            var dateA = new Date(a.date).getTime(); 
            var dateB = new Date(b.date).getTime(); 
            return dateB > dateA ? 1 : -1;  
          } )
  }else{
   newData=  newData= newData.sort((a, b) =>  {
    var dateA = new Date(a.date).getTime(); 
    var dateB = new Date(b.date).getTime(); 
    return dateA > dateB ? 1 : -1;  
  } )
  }
  console.log(newData);
  setData(newData);
  setOrder(!order);
}


console.log(data)
      
function search(rows) {
    console.log(rows)
return rows.filter((row)=> row.todo.toLowerCase().indexOf(filtervalue) > -1)
}


    return (
        <div className="container">
            <br/>
        <input className="inpouttodo"  value={filtervalue} size="40" onChange={(e)=>{setFiltervalue(e.target.value)}}/> 
        <button className="btn btn-primary" onClick={sortByDate}>sort Date</button>
        <br/>
            <Datatable data = {search(data)}/>
            
        </div>
    )
}
