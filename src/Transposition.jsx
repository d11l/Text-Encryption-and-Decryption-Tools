import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import ktc from "js-ktc";

const TranspositionCipher = () => {
  const [inputText, setInputText] = useState('');
  const [key, setKey] = useState('');
  const [resultText, setResultText] = useState('');

  const handleEncrypt = () => {
    setResultText(new ktc(key).encrypt(inputText));
  };

  const handleDecrypt = () => {
    setResultText(new ktc(key).decrypt(inputText));
  };

  return (
    <div className="flex flex-col gap-3">
      <div className='flex gap-3'>
        <TextField 
        label="Text" 
        multiline 
        rows={4} 
        placeholder="Write your text here" 
        className="w-1/2"
        value={inputText}
        onChange={e => setInputText(e.target.value)}
        />
        <TextField 
        label="Key" 
        multiline 
        rows={4} 
        placeholder="Write your key here" 
        className="w-1/2"
        value={key}
        onChange={e => setKey(e.target.value)}
        />
        </div>
        <div className="flex gap-3 justify-center">
          <Button variant="contained" onClick={handleEncrypt}>Encrypt</Button>
          <Button variant="contained" onClick={handleDecrypt}>Decrypt</Button>
        </div>
          <h1 className='text-center mt-10 font-bold'>{resultText}</h1>
    </div>
  );
};

export default TranspositionCipher;
