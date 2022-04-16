import React from "react";

import { signUserOut } from "../../firebase/auth/auth";

export default function Home() {
  return (
    <div>
      <button type="button" onClick={() => signUserOut()}>
        SignOut
      </button>
    </div>
  );
}
