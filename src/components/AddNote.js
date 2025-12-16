import React, { useState, useContext } from 'react'

import noteContext from '../context/notes/noteContext'

function AddNote() {

    const context = useContext(noteContext)
    const { addNote } = context

    const [note, setNote] = useState({ title: "", description: "", tag: "default", author: "" })

    const handleAddNoteClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag, note.author);
        setNote({ title: "", description: "", tag: "", author: "" })
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }
    return (
        <div className="container my-5">
            <div
                className="card mx-auto shadow-lg border-0 p-4"
                style={{ maxWidth: "600px", borderRadius: "15px", backgroundColor: "#ffffff" }}
            >
                <h2 className="text-center mb-4 fw-bold ">Add a Note</h2>

                <form>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label fw-semibold text-dark">Title</label>
                        <input
                            type="text"
                            className="form-control border border-secondary-subtle"
                            id="title"
                            name="title"
                            value={note.title}
                            onChange={onChange}
                            minLength={5}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputDescription" className="form-label fw-semibold text-dark">Description</label>
                        <textarea
                            className="form-control border border-secondary-subtle"
                            id="exampleInputDescription"
                            name="description"
                            value={note.description}
                            onChange={onChange}
                            minLength={5}
                            required
                            rows="3"
                        ></textarea>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputTag" className="form-label fw-semibold text-dark">Tag</label>
                        <input
                            type="text"
                            className="form-control border border-secondary-subtle"
                            id="exampleInputTag"
                            name="tag"
                            value={note.tag}
                            onChange={onChange}
                            minLength={5}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputAuthor" className="form-label fw-semibold text-dark">Author</label>
                        <input
                            type="text"
                            className="form-control border border-secondary-subtle"
                            id="exampleInputAuthor"
                            name="author"
                            value={note.author}
                            onChange={onChange}
                            minLength={5}
                            required
                        />
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="btn btn-primary fw-bold px-5 py-2 glow-btn"
                            id="addnote-btn"
                            onClick={handleAddNoteClick}
                            disabled={note.title.length < 5 || note.description.length < 5}
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>


    )
}

export default AddNote
