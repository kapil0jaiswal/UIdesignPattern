import React from 'react'
export default function Datatable({data}) {
   const keyss = data[0] && Object.keys(data[0]);
    console.log("..................")
   console.log(data)
   console.log(keyss)
   return (
      <div className="container">
      <div className="tablexx"><table  classname="tbl" cellPadding="10" border="2" >
         <thead className="table-head">
            <tr>
         {data[0]&&keyss.map((d)=><td ><p className="tabledata">{d}</p></td>)}
         </tr>
         </thead>
         <tbody>
   {data.map((d)=><tr  className="table-data">{keyss.map((k)=><td ><p className="tabledata">{d[k]}</p></td>)}</tr>)}
            
         </tbody>
         </table>
      </div>
      </div>
   )
}
