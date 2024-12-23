import dayjs from "dayjs";
import React from "react";

export default function SidebarNoteItemHeader(props) {
  const { title, updateTime } = props;
  return (
    <header className="sidebar-note-header">
      <strong>{title}</strong>
      <small>{dayjs(updateTime).format("YYYY-MM-DD hh:mm:ss")}</small>
    </header>
  );
}
