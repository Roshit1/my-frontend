import React, { useContext } from 'react';
import '../css/loginAndsigin.css'
import noteContext from '../context/notes/noteContext';
// import AddNote from './AddNote';


function NoteItem(props) {
    const context = useContext(noteContext)
    const { deleteNote } =  context;
    const { note, updateNote } = props;

    return (
        <div className="col-md-3 col-sm-6 mb-4">
            <div
                className="card border-0 shadow-sm h-100 card-hover"
                style={{
                    borderRadius: '12px',
                    transition: 'all 0.3s ease',
                    backgroundColor: '#f2f7f9ff',
                }}
            >
                <div className="card-body">
                    <h5 className="card-title  fw-semibold mb-2" id='noteTitle'>
                        {note.title}
                    </h5>

                    <p className="card-text text-muted mb-2">
                        {note.description}
                    </p>

                    <div className="text-secondary small mb-1 d-flex align-items-center gap-1">
                        <i className="bi bi-person-circle text-primary"></i>
                        <span>{note.author || 'Unknown Author'}</span>
                    </div>

                    <div className="text-secondary small mb-1 d-flex align-items-center gap-1">
                        <i className="bi bi-tag-fill text-success"></i>
                        <span>{note.tag || 'General'}</span>
                    </div>

                    <div className="text-secondary small mb-3 d-flex align-items-center gap-1">
                        <i className="bi bi-calendar-date text-danger"></i>
                        <span>{note.publishDate || 'N/A'}</span>
                    </div>

                    {/* Action Buttons */}
                    <div className="">
                        <i className="fa-solid fa-pen-to-square mx-2" onClick={() => { updateNote(note) }}  ></i>
                        <i className="fa-solid fa-trash mx-2" onClick={() => { deleteNote(note._id) }}></i>
                    </div>

                </div>
            </div>

            {/* Hover effect */}
            <style>
                {`
          .card-hover:hover {
            transform: translateY(-6px);
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
          }
        `}
            </style>
        </div>
    );
}

export default NoteItem;
