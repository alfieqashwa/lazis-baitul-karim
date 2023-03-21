import Typewriter from "typewriter-effect"

export const HelloTypewriter = () => (
  <Typewriter
    options={{
      strings: ["Hello", "World"],
      autoStart: true,
      loop: true,
    }}
  />
)
