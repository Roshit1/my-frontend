import React, { useContext, useEffect, useRef, useState } from "react";
import '../css/loginAndsigin.css'
import { useNavigate } from "react-router-dom";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";

function Notes() {
  const context = useContext(noteContext);
  const { notes, getNotes, editNote } = context;
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token")
    console.log(token, "Token from notes")
    if (localStorage.getItem("token")) {
      getNotes();
    } else {
      navigate("/landingpage");
    }
    // eslint-disable-next-line
  }, []);

  const ref = useRef(null);
  const refClose = useRef(null);

  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
    eauthor: "",
  });

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
      eauthor: currentNote.author,
    });
  };

  const handleUpdateNote = (e) => {
    e.preventDefault();
    editNote(note.id, note.etitle, note.edescription, note.etag, note.eauthor);
    refClose.current.click();
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <AddNote />

      {/* Hidden button to trigger modal */}
      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>

      {/* Edit Note Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Note
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="etitle" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    onChange={onChange}
                    value={note.etitle}
                    maxLength={50}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="edescription" className="form-label">
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    id="edescription"
                    name="edescription"
                    onChange={onChange}
                    value={note.edescription}
                    maxLength={200}
                    required
                  ></textarea>
                </div>

                <div className="mb-3">
                  <label htmlFor="etag" className="form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etag"
                    name="etag"
                    onChange={onChange}
                    value={note.etag}
                    maxLength={30}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="eauthor" className="form-label">
                    Author
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="eauthor"
                    name="eauthor"
                    onChange={onChange}
                    value={note.eauthor}
                    maxLength={30}
                    required
                  />
                </div>
              </form>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                ref={refClose}
              >
                Close
              </button>
              <button
                type="button"
                className="btn" id="updatenote-btn"
                onClick={handleUpdateNote}
                disabled={
                  note.etitle.length < 5 || note.edescription.length < 5
                }
              >
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>

      {/*  Display Notes Safely */}
      <div className="row my-4">
        <h2>Your Notes</h2>
        {!Array.isArray(notes) || notes.length === 0 ? (
          <div>Empty notes container</div>
        ) : (
          notes.map((note) => (
            <NoteItem
              key={note._id}
              updateNote={updateNote}
              note={note}
            />
          ))
        )}
      </div>
    </>
  );
}

export default Notes;
