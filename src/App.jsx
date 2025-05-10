import React, { useState } from "react";
import AddWorker from "./components/AddWorker";
import SearchWorker from "./components/SearchWorker";
import WorkerList from "./components/WorkerList";
import FilterWorker from "./components/FilterWorker";
import { workerList } from "./constants/data";

export default function App() {
  const [workerDb, setWokerDb] = useState(workerList);
  const [updateActive, setUpdateActive] = useState({
    workerName: "",
    jobName: "",
    id: "",
    activeUpdate: false,
  });

  // add-workers

  const handleAddWorker = (event, workersData) => {
    event.preventDefault();
    console.log(workersData);
    if (updateActive.activeUpdate) {
      const updateWorker = workerDb.map((element) => {
        // console.log(element)
        return element.id === updateActive.id
          ? { ...element, ...workersData }
          : element;
      });
      setWokerDb(updateWorker);

      setUpdateActive({
        workerName: "",
        jobName: "",
        id: "",
        activeUpdate: false,
      });
    } else {
      setWokerDb([...workerDb, workersData]); /// add workers
    }
  };

  // toggle-active-bg

  const handleToggleActive = (workerId) => {
    console.log(workerId);
    const newDbWorker = workerDb.map((element) => {
      if (element.id === workerId) {
        return { ...element, activeBg: !element.activeBg };
      }
      return element;
    });
    setWokerDb(newDbWorker);
  };

  // search-workers

  const handleSearchWorkers = (e, workerName) => {
    e.preventDefault();
    // console.log(workerName)
    if (workerName.length == 0) {
      return setWokerDb(workerList);
    }
    const newDbWorkers = workerDb.filter(
      (element) =>
        element.workerName
          .toLocaleLowerCase()
          .indexOf(workerName.toLocaleLowerCase()) > -1
    );
    setWokerDb(newDbWorkers);
  };

  // filterWorkers

  const handleFilterWorkers = (jobName) => {
    if (jobName === "All") {
      return setWokerDb(workerList);
    }
    const newDbWorkers = workerDb.filter(
      (element) => element.jobName === jobName
    );
    setWokerDb(newDbWorkers);
  };

  // deleteWorkers
  const handleDeleteWorkers = (workerId) => {
    console.log(workerId);
    const newDbWorker = workerDb.filter((element) => element.id !== workerId);
    setWokerDb(newDbWorker);
  };

  /// deleteAll

  const handleDeleteAllWorkers = () => {
    setWokerDb([]);
  };

  // update-workers

  const handleUpdateWorkers = (workerId) => {
    if (workerId === null) {
      setUpdateActive({
        workerName: "",
        jobName: "",
        id: "",
        activeUpdate: false,
      });
    } else {
      const workerToUpdate = workerDb.find(
        (element) => element.id === workerId
      );
      setUpdateActive({
        ...workerToUpdate,
        activeUpdate: true,
      });
    }
  };

  return (
    <div className="app">
      <h2>ToDo-Worker-List</h2>
      <AddWorker updateActive={updateActive} addWorkers={handleAddWorker} />
      <SearchWorker searchWorkers={handleSearchWorkers} />
      <WorkerList
        updateActive={updateActive}
        updateWorkers={handleUpdateWorkers}
        deleteAll={handleDeleteAllWorkers}
        deleteWorker={handleDeleteWorkers}
        workerDb={workerDb}
        updateBg={handleToggleActive}
      />
      <FilterWorker filterWorkers={handleFilterWorkers} />
    </div>
  );
}

// State -

// function res(ozgaruvchi) {
//   console.log(ozgaruvchi)
// }

// res("dkalsdnasd")
