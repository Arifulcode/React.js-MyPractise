import React from 'react'
import {fontAwesome} from '@fortawesome/react-fontawesome'
import {faUser} from '../../node_modules/@fortawesome/free-solid-svg-icons'

export default function UseFontAwesome() {
    return (
        <div>
            <p>lorem ipsum dolor.lorem ipsum</p>
            <button> <fontAwesomeIcon icon={faUser}/> User</button>
        </div>
    )
}
