"use client";

import { useState } from "react";

function ToggleText() {
    const [show, setShow] = useState<boolean>(false);

    const hdlToggle = () => {
        setShow(!show);
    }

  return (
    <div>
        <button className="border-2 p-2 bg-green-100 rounded-lg hover:bg-amber-200" onClick={hdlToggle}>Toggle</button>
        { show &&
            <p>These users are awesome, congratulations</p>
        }
    </div>
  )
}

export default ToggleText