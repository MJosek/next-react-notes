import React from "react";
import dayjs from 'dayjs'
export default function SidebarNoteList({ notes }) {
  const arr = Object.entries(notes);
  console.log(arr,'arr');
  
  if (arr.length === 0) {
    return <div>没有笔记内容！</div>;
  }
  return (
    <ul className="notes-list">
      {arr.map(([noteId, note]) => {
        const { title, updateTime } = JSON.parse(note);
        return (
          <li key={noteId}>
            <header className="sidebar-note-header">
              <strong>{title}</strong>
              <small>{dayjs(updateTime).format('YYYY-MM-DD hh:mm:ss')}</small>
            </header>
          </li>
        );
      })}
    </ul>
  );
}
