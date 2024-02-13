import { type } from '@testing-library/user-event/dist/type'
import React from 'react'

export default function Alert(props) {
    const capitalize =(word)=>{
        let newword = word.toLowerCase();
        return newword.charAt(0).toUpperCase()  + newword.slice(1);
        
    }

  return (
    props.message && <div class={`alert alert-${props.message.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.message.type)}</strong>: {props.message.msg}
</div>

  )
}
