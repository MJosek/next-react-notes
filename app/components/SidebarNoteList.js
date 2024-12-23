import React from "react";
import SidebarNoteItem from "./SidebarNoteItem";
import { getAllNotes } from "@/lib/redis";
export default async function SidebarNoteList() {
  const notes = await getAllNotes();
  const arr = Object.entries(notes);
  console.log(arr, "arr");

  if (arr.length === 0) {
    return <div>没有笔记内容！</div>;
  }
  return (
    <ul className="notes-list">
      {arr.map(([noteId, note]) => {
        const { title, updateTime } = JSON.parse(note);
        return (
          <li key={noteId}>
            <SidebarNoteItem
              noteId={noteId}
              note={JSON.parse(note)}
            ></SidebarNoteItem>
          </li>
        );
      })}
    </ul>
  );
}
