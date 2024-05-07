import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return (
        <Typewriter
          options={{
            strings: [
                "Front-End Developer",
                "Freelancer",
                "Virginia Tech Student",
                "Open source contributor",
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
    );
}

export default Type;