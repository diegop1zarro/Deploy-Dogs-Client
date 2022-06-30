import {React ,useState} from 'react'
import {useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import { getByName} from '../../Redux/Actions/actions.js'
import '../../Style/Search.css'

function validacion(name){
    let error = ''
    if(!/^[A-Za-z0-9-ñ\s]+$/g.test(name)){
        error = 'special characters cannot be placed'
    }else if(name.length > 30){
        error = 'you can not place more than 30 letters'
    }
    return error
}
// /[$%&|<>#]/

export default function Search (){
const [name, setName]= useState('')
const [error, setError] = useState('')
const dispatch = useDispatch()
// const navegar = useNavigate()

function handleInputChange (e){
    e.preventDefault()
    setName(e.target.value)
    setError(validacion(e.target.value))
    if(name.length === 0){
        setError('')
    }
}
function handleSubmit(e){
    e.preventDefault();
    const errorSave = validacion(name)
    if(Object.values(errorSave).length !== 0){
        alert('you must not have errors to be able to search')
        setError('')
    }
    else{
    e.preventDefault()
    dispatch(getByName(name))
    setName('')
    setError('')
    // navegar('/home')
    }
}
return(
    <div className='search'>
    <input
    className='input'
    type='text'
    value={name}
    placeholder=' search by name'
    onChange={(e)=> handleInputChange(e)}
    />
   <button className='btn' type='submit' onClick={(e)=> handleSubmit(e)}>search</button>
     {error && (<div className='error'>{error}</div>)}
   

   </div>
   )
}

    
    
       
      
        





