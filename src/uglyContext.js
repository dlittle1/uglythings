import React, {Component} from "react"
import ReactDOM from 'react-dom'



const {Provider, Consumer} = React.createContext()

class UglyContextProvider extends Component {
   state = {
      title: "",
      imgUrl: "",
      description: "",
      edit: false,
      uglyThings: []
   }

   handleChange = (event) => {
      const {name, value} = event.target
      this.setState(() => ({[name]: value}))
   }

   handleSubmit = (event, id) => {
      event.preventDefault()
      const {title, imgUrl, description} = this.state
      this.setState(prevState => {
         let newArr = prevState.uglyThings

         if (id !== undefined){
            let uglyThing = this.state
            uglyThing.edit = false
            newArr[id] = uglyThing
            return {
               uglyThings: newArr,
               edit: false
            }
         }
         else{
            newArr.push(this.state)
            return {
               uglyThings: newArr,
               title: "",
               imgUrl: "",
               description: ""
            }
         }
      })
   }

   handleDelete = (id, event) => {
      event.preventDefault()
      this.setState(prevState => {
         let newArr = prevState.uglyThings.filter((thing, i) => i !== id)
         return {
            uglyThings: newArr
         }
      })
   }

   handleEditButton = (id, event) => {
      event.preventDefault()
      let uglyThings = this.state.uglyThings
      let uglyThing = {...uglyThings[id], edit: true}
      uglyThings[id] = uglyThing
      this.setState(()=> ({uglyThings, title: uglyThing.title, edit: true}))
   }

   render(){
      const {title, imgUrl, description, uglyThings, edit} = this.state
      return (
         <Provider value={{title: title, imgUrl: imgUrl, description: description, edit: edit, handleEditButton: this.handleEditButton, handleChange: this.handleChange, handleDelete: this.handleDelete, handleSubmit: this.handleSubmit, uglyThings: uglyThings}}>
            {this.props.children}
         </Provider>
      )
   }
}

export {UglyContextProvider, Consumer as UglyContextConsumer}
