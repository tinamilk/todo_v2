import React from "react";
import { useSelector } from "react-redux";
import { DeleteModal } from "./components/layout/delete-modal/DeleteModal";
import { EditModal } from "./components/layout/edit-modal/EditModal";
import { Tasks } from "./components/layout/tasks/Tasks";
import { MainPage } from "./components/pages/MainPage";
import { Modal } from "./components/ui/modal/Modal";
import { RootState } from "./redux/store";

function App() {
  const { isActive } = useSelector((state: RootState) => state.modal);

  return (
    <div className="App">
      <MainPage />
      {isActive === "delete" && (
        <Modal heading={"Delete task"} content={<DeleteModal />} />
      )}
      {isActive === "edit" && (
        <Modal heading={"Edit task"} content={<EditModal />} />
      )}
    </div>
  );
}

export default App;
