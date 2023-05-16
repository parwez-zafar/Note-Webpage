import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';

const Note = (props) => {

    const deleteNode = () => {
        props.deleteItem(props.id);
    }

    return (
        <>
            <div className="note">
                <h1>{props.title}</h1>
                <br />
                <p> {props.content} </p>
                <Button onClick={deleteNode} >

                    <DeleteIcon className='deleteIcon' />
                </Button>
            </div>
        </>
    )
}

export default Note;