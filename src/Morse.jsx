import { TextField } from "@mui/material";
import { useState } from "react";

const codes = {
  'A': '.-',    'B': '-...',  'C': '-.-.',  'D': '-..',
  'E': '.',     'F': '..-.',  'G': '--.',   'H': '....',
  'I': '..',    'J': '.---',  'K': '-.-',   'L': '.-..',
  'M': '--',    'N': '-.',    'O': '---',   'P': '.--.',
  'Q': '--.-',  'R': '.-.',   'S': '...',   'T': '-',
  'U': '..-',   'V': '...-',  'W': '.--',   'X': '-..-',
  'Y': '-.--',  'Z': '--..',  '1': '.----', '2': '..---',
  '3': '...--', '4': '....-', '5': '.....', '6': '-....',
  '7': '--...', '8': '---..', '9': '----.', '0': '-----',
  ' ': '/',
};

export default function Morse() {

  const [text, setText] = useState("");
  const [morse, setMorse] = useState("");

  const onChangeText = (e) => {
    const textInput = e.target.value;
    setText(textInput);
    setMorse(textInput.toUpperCase().split('').map(char => codes[char] ? codes[char] : char).join(' '));
  }

  const onChangeMorse = (e) => {
    const textInput = e.target.value;
    setMorse(textInput);
    setText(textInput.split(' ').map(char => Object.keys(codes).find(key => codes[key] === char) || ' ').join(''));
  }

  return (
    <div className="flex gap-3">
        <TextField 
        label="Text" 
        multiline 
        rows={4} 
        placeholder="Write your text here" 
        className="w-1/2"
        value={text}
        onChange={onChangeText}
        />
        <TextField 
        label="Morse" 
        multiline 
        rows={4} 
        placeholder="Write your Morse code here" 
        className="w-1/2"
        value={morse}
        onChange={onChangeMorse}
        />
    </div>
  )
}
