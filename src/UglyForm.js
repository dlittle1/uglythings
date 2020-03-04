import React from 'react'

export default function UglyForm(props){
   const {title, handleChange, imgUrl, description, handleSubmit} = props.context
   // console.log(props.context)
   const id = props.id
   let newHandleSubmit = handleSubmit
   if (id !== undefined){
      newHandleSubmit = (e) => handleSubmit(e, id)
   }
   return (
      <form>
         <input
            name="title"
            value={title}
            placeholder="Title"
            type="text"
            onChange={handleChange}
         />
         <input
            name="imgUrl"
            value={imgUrl}
            placeholder="Image URL"
            type="text"
            onChange={handleChange}
         />
         <input
            name="description"
            value={description}
            placeholder="Description"
            type="text"
            onChange={handleChange}
         />
         <br />
         <button onClick={newHandleSubmit}>Submit</button>
      </form>
   )
}
