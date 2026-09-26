"use client";

import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");

  return (
    <div>
      <h1 className="text-3xl font-bold">
  Hello!
</h1>

      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        style={{ border: "1px solid black", padding: "5px" }}
      />

      <p>Your name is: {name}</p>
    </div>
  );
}
