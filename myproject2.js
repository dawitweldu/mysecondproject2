

import { toFormData } from 'axios';
import { useState } from 'react';
import './Each.css'
function Each2() {
  const [FormData,setFormData]=useState({
    fristname:'',
    lastname:'',
    email:'',
    comment:'',
    favData:true,
    employ:'',
    favcolor:''
  })
  console.log(FormData)
const handclick=(event)=>{
 setFormData(prevformadata=>{
  const {name,value,type,checked}=event.target
  return {
    ...prevformadata,[name]:type==='checkbox'?checked:value
  }
 })
}
const handclick2=(event)=>{
  event.preventDefault()
  console.log(FormData)
}
  return(
    <div  >
      <form onSubmit={handclick2} className='formdata'>
<input type='text' placeholder='Fristname'  onChange={handclick} name='fristname' value={FormData.fristname}/><br/>
<input type='text' placeholder='lastname' onChange={handclick} name='lastname' value={FormData.lastname}/><br/>
<input type='email' placeholder='email' onChange={handclick} name='email' value={FormData.email}/><br/>
<textarea  placeholder='comment' onChange={handclick} name='comment' value={FormData.comment}/><br/>

 
    <input type="checkbox"  id="favData" name='favData' checked={FormData.favData} onChange={handclick}  />
    <label>
  are yuo student
  </label><br/>
  <input type="radio" id='unemploy' name='employ' onChange={handclick} value='unemploy' checked={FormData.employ==='unemploy'}/>
<label>unemploy</label><br/>
<input type="radio" id='halftime' name='employ' onChange={handclick} value='halftime' checked={FormData.employ==='halftime'}/>
<label>halftime</label><br/>
<input type="radio" id='fulltime' name='employ' onChange={handclick} value='fulltime' checked={FormData.employ==='fulltime'}/>
<label>fulltime</label><br/>
<select 
id='favcolor'
name='favcolor'
onChange={handclick}
value={toFormData.favcolor}
>
  <option value=',,,choiche,,,,'>choiche</option>
  <option value=',,,red,,,,'>red</option>
  <option value=',,,black,,,,'>black</option>
</select><br/>
<button type="submit" >Submit</button>
</form>
    </div>
  )
}
export default Each2;