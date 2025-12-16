import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const [notes, setNotes] = useState([]);

  //  Get all Notes
  const getNotes = async () => {
    try {
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token'),
        },
      });

      const json = await response.json();
      console.log("Fetched notes: ", json);

      //  Always ensure notes is an array
      if (Array.isArray(json)) {
        setNotes(json);
      } else {
        console.error("Expected array, got:", json);
        setNotes([]);
      }
    } catch (err) {
      console.error("Error fetching notes:", err);
      setNotes([]); // fallback to empty array
    }
  };

  //  Add a new note
  const addNote = async (title, description, tag, author) => {
    try {
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token'),
        },
        body: JSON.stringify({ title, description, tag, author }),
      });

      const json = await response.json();
      console.log("Server response:", json);

      // Fallback note if backend doesn't return one
      const note = {
        _id: json._id || "temp-id-" + Date.now(),
        user: json.user || "unknown",
        title,
        description,
        tag,
        author,
        publishDate: new Date().toISOString(),
        __v: 0,
      };
      setNotes(notes.concat(note));
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };

  //  Delete note
  const deleteNote = async (id) => {
    try {
      await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: "DELETE",
        headers: {
          "auth-token": localStorage.getItem('token'),
        },
      });

      // Remove note locally
      const newNotes = notes.filter((note) => note._id !== id);
      setNotes(newNotes);
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  //  Update note
  const editNote = async (id, title, description, tag, author) => {
    try {
      await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token'),
        },
        body: JSON.stringify({ title, description, tag, author }),
      });

      // Update note locally
      const newNotes = JSON.parse(JSON.stringify(notes));
      for (let index = 0; index < newNotes.length; index++) {
        if (newNotes[index]._id === id) {
          newNotes[index].title = title;
          newNotes[index].description = description;
          newNotes[index].tag = tag;
          newNotes[index].author = author;
          break;
        }
      }
      setNotes(newNotes);
    } catch (error) {
      console.error("Error updating note:", error);
    }
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, editNote, deleteNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
