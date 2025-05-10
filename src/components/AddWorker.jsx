import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function AddWorker({ addWorkers, updateActive }) {
  const [ishchiIsm, setIshchiIsm] = useState("supper");
  const [ishchiKasbi, setIshchiKasbi] = useState("");
  console.log(ishchiKasbi);

  useEffect(() => {
    setIshchiIsm(updateActive.workerName || "");
    setIshchiKasbi(updateActive.jobName || "");
  }, [updateActive]);
  console.log(updateActive);
  return (
    <form className="addWorker">
      <input
        value={ishchiIsm}
        onChange={(e) => setIshchiIsm(e.target.value)}
        type="text"
        placeholder="Enter your name"
      />
      <select
        onChange={(e) => setIshchiKasbi(e.target.value)}
        name={ishchiKasbi}
        id=""
      >
        <option value="coder">Coder</option>
        <option value="painter">painter</option>
        <option value="driver">driver</option>
      </select>
      <button
        onClick={(e) =>
          addWorkers(e, {
            workerName: ishchiIsm,
            jobName: ishchiKasbi,
            id: updateActive.activeUpdate ? updateActive.id : uuidv4(),
          })
        }
      >
        {updateActive.activeUpdate ? "Update workers" : "Add Worker"}
      </button>
    </form>
  );
}
