import React from "react";
import WorkerItem from "./WorkerItem";

export default function WorkerList({
  workerDb,
  updateActive,
  updateBg,
  deleteWorker,
  deleteAll,
  updateWorkers,
}) {
  return (
    <div className="workerList">
      <div className="btnContent">
        {" "}
        <button onClick={() => deleteAll()}>Delete All</button>
      </div>
      {workerDb.map(({ id, workerName, jobName, activeBg }) => {
        return (
          <WorkerItem
            updateActive={updateActive}
            updateWorkers={updateWorkers}
            deleteWorker={() => deleteWorker(id)}
            activeBg={activeBg}
            id={id}
            updateBg={updateBg}
            key={id}
            workerIsm={workerName}
            jobIsm={jobName}
          />
        );
      })}
    </div>
  );
}
