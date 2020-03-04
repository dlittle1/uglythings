import React from 'react'
import {UglyContextConsumer} from "./uglyContext"
import UglyForm from "./UglyForm"
export default function Header(){
   let uglyEdits;
   return (
      <UglyContextConsumer>
         {context => (

            <div>

            {context.edit ? context.uglyThings[0].title : <UglyForm context={context} key="header-key" />}

            </div>
         )}
      </UglyContextConsumer>
   )
}
