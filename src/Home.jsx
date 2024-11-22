import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex gap-5">
    <div className="p-3 bg-[#4dacf566] rounded">
        <h1 className="font-bold text-center">Morse Code</h1>
        <div className="my-3">
        <p>Morse code is a method used in telecommunication to encode text characters as sequences of two different signal durations, called dots and dashes.</p>
        <p>Characteristics:</p>
            <ul>
                <li>Uses combinations of dots and dashes to represent characters.</li>
                <li>Originally developed for telegraphy.</li>
                <li>Simple and efficient encoding scheme.</li>
            </ul>
        </div>
 
        <Button variant="contained"> 
            <Link to="/morse">Apply</Link>
        </Button>
    </div>


    <div className="p-3 bg-[#4dacf566] rounded">
        <h1 className="font-bold text-center">Transposition Cipher</h1>
        <div className="my-3">
        <p>A transposition cipher is a method of encryption where the positions of the characters in the plaintext are shifted according to a regular system to form the ciphertext.</p>
        <p>Characteristics:</p>
            <ul>
                <li>Rearranges the characters in the plaintext.</li>
                <li>Does not replace characters like substitution ciphers.</li>
                <li>Simple implementation but less secure compared to modern ciphers.</li>
            </ul>
        </div>    
        <Button variant="contained" > 
              <Link to="/transposition">Apply</Link>
        </Button>
    </div>

    </div>
  )
}
