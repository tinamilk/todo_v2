import React from "react";
import { useSelector } from "react-redux";
import { AddModal } from "./components/layout/add-modal/AddModal";
import { DeleteModal } from "./components/layout/delete-modal/DeleteModal";
import { EditModal } from "./components/layout/edit-modal/EditModal";
import { MainPage } from "./components/pages/MainPage";
import { Modal } from "./components/ui/modal/Modal";
import { RootState } from "./redux/store";
import { Routes, Route } from "react-router-dom";
import { Settings } from "./components/pages/Settings";
import { Auth } from "./components/pages/Auth";

function App() {
  const { isActive } = useSelector((state: RootState) => state.modal);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
      {isActive === "delete" && (
        <Modal heading={"Delete task"} content={<DeleteModal />} />
      )}
      {isActive === "edit" && (
        <Modal heading={"Edit task"} content={<EditModal />} />
      )}
      {isActive === "add" && (
        <Modal heading={"Create task"} content={<AddModal />} />
      )}
    </div>
  );
}

export default App;
