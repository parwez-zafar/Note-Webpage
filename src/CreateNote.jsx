import React from 'react'

import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const CreateNote = (props) => {

    const [expand, setExpand] = React.useState(false)

    const [note, setNote] = React.useState({
        title: '',
        content: '',
    });


    const expandIt = () => {
        setExpand(true);
    }
    const backToNormal = () => {
        setExpand(false);
    }
    const InputEvent = (event) => {

        // const value = event.target.value;
        // const name = event.target.name;

        const { name, value } = event.target;


        setNote((oldData) => {
            return {
                ...oldData,
                [name]: value,

            }
        })
        console.log(note);
    }

    const addEvent = () => {
        props.passNote(note);
        setNote({
            title: '',
            content: ''
        })
    }

    return (
        <>
            <div className="main_note">
                <form className='note-form'>
                    {expand ?
                        <input type="text" name='title' value={note.title} onChange={InputEvent} placeholder='Title' autoComplete='off' /> : null}

                    <textarea name="content" id="" cols="" rows="" value={note.content} onChange={InputEvent} placeholder='Write a note...' onClick={expandIt} ></textarea>
                    {expand ?
                        <>
                            <div className="button-div">
                                <Button onClick={addEvent} >
                                    <AddIcon />
                                </Button>

                                <Button onClick={backToNormal}>
                                    close
                                </Button>
                            </div>
                        </>

                        : null}
                </form>
            </div>
        </>
    )
}

export default CreateNote;