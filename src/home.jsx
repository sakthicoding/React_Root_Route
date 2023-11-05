import "./styles.css";
import EmojiPicker from "emoji-picker-react";

function emoji({ name }) {
  switch (name) {
    case "heart":
      return "&#9829;";
  }
}

export default function Home() {
  return (
    <>
      <h1 id="modifiedHeader1">Welcome Home!</h1>
      <p id="modP1">I &#9829; my family!</p>
      {/*{emoji("heart")}
        <EmojiPicker />*/}
    </>
  );
}
