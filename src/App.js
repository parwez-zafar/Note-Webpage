import React from 'react'
import Header from './Header'
import Footer from './Footer'
import CreateNote from './CreateNote'
import Note from './Note'
import './App.css'

const App = () => {

    const [addItem, setAddItem] = React.useState([]);



    const addNote = (note) => {
        setAddItem((prevDate) => {
            return [...prevDate, note];
        })
        // console.log(note);
    }

    const onDelete = (id) => {
        setAddItem((oldDate) =>
            oldDate.filter((currDate, index) => {
                return index !== id;
            })
        )
    }

    return (
        <>

            <Header />
            <CreateNote passNote={addNote} />

            <div className=" ">
                {addItem.map((val, index) => {
                    return <Note
                        key={index}
                        id={index}
                        title={val.title}
                        content={val.content}
                        deleteItem={onDelete}
                    />
                })}
            </div>

            <Footer />

        </>
    )
}

export default App;