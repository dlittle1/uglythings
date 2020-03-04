import React from 'react'
import {UglyContextConsumer} from './uglyContext'
import UglyForm from "./UglyForm"
export default function UglyList(){
   return (
      <div>
         <h1>UglyList</h1>
         <hr/>
         <UglyContextConsumer>
               {context => (
                  <ul style={{textAlign: "center", listStyle: "none"}}>
                     {context.uglyThings.map((uglyThing, i) => {
                        return (
                           <div key={uglyThing.title + i}>
                              {uglyThing.edit ? <UglyForm context={{uglyThing, handleChange: context.handleChange, handleSubmit: context.handleSubmit}} id={i} key={uglyThing.title+i}/> :
                                 <li >
                                    <h1>{uglyThing.title}</h1>
                                    <p>{uglyThing.description}</p>
                                    <img style={{width: 300, maxHeight: 300}} src={uglyThing.imgUrl} />
                                    <button onClick={(e) => context.handleDelete(i, e)}>Delete</button>
                                    <button onClick={(e) => context.handleEditButton(i, e)}>Edit</button>
                                 </li>
                              }
                           </div>
                        )
                     })}
                  </ul>
               )}
         </UglyContextConsumer>
      </div>
   )
}
