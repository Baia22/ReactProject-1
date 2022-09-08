import React, {useContext, useState} from 'react'
import { Context } from '../../Context'
import { useNavigate } from 'react-router-dom'
import "./Dish.scss"


export default function Dish (props) {
  const {canDelete = false} = props;
  let navigate= useNavigate()
  const {state , setState} = useContext(Context)


  const changeStatus= (e, el)=>{
    e.preventDefault();
    el.count =1;
    setState({cart:[...state.cart, el]});
  }

    const el = props.el
    const isAdded = state.cart.some(item => item.id===el.id)

    let plus= () => {
      const i = state.cart.findIndex(item=> item.id === el.id);
      setState({
        cart: [...state.cart.slice(0, i), {...el,count: (el.count || 0 ) +1}, ...state.cart.slice (i +1)]
      })
    }

    let minus= () => {
      if (el.count===1 || !el.count){
        setState({cart:state.cart.filter(item => el.id !==item.id)})
        return;
      }
      const i = state.cart.findIndex(item=>item.id === el.id)
      setState({
        cart:[...state.cart.slice (0,i), {...el, count: el.count -1}, ...state.cart.slice(i + 1)]
      })
    }

    let multiply = (a , b)=> {
      return(
        parseInt(a) * parseInt(b)
      )
    }
    let equation= multiply(el.count, el.price)

  const remove =()=>{
    setState({cart:state.cart.filter(item => el.id !==item.id)})
  }

    return(
        <div className='cardsWrapper'>
          <div key={el.id} text={el.category} 
          className="eachCardDesign">
            <div className="cardN">
              <img className="imgCss" src={el.image} alt="" />
              <div className='buttons'>
              {canDelete && <button onClick={minus}>-</button>}
              {canDelete && <p>Quantity : {el.count} </p>}
              {canDelete && <button onClick={plus}>+</button>}
              </div>
              

              <button value={el.id} className="addCart" onClick={(e)=>{changeStatus(e, el)}} disabled={isAdded} >{isAdded? "Added to cart" : "Add to cart"} </button>

              <h2>{el.name}</h2>

              <div className="descriptionParagraph">
                <p>price : {el.price}$</p>
              
                <button  onClick={()=>{navigate(`/details/${el.id}`)   }} 
                className="detailsButton">Details</button>
              </div>
              {canDelete && <h3 className='total'>Total Price: {el.count} x {el.price}$ = {equation} </h3>}

              {canDelete && <button className='removeCard' onClick={remove}>Remove cart</button>}

            </div>
          </div>
        </div>
    )
}
