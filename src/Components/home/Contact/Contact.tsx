import React, { useRef, useState } from 'react';
import { isStringValid, typingEffect } from '../../../const/utils';
import "./Contact.scss";
import emailjs from "emailjs-com";

const TIMING_BETWEEN_WORDS = 1500;

function Contact() {

  const inputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const subtitleRef = useRef<HTMLSpanElement>(null);

  const [hasMessage, setHasMessage] = useState<boolean>(false);

  const activateThankYou = () => {
    if (!subtitleRef.current) return;
    typingEffect(['Contact', 'Thank you.'], 50, TIMING_BETWEEN_WORDS, false, subtitleRef.current)

    if (inputRef.current && inputRef.current.parentElement)
      inputRef.current.parentElement.style.opacity = "0";

    setTimeout(() => {
      if (inputRef.current && inputRef.current.parentElement) {
        inputRef.current.parentElement.style.opacity = "1";
        (inputRef.current.parentElement as HTMLFormElement).reset();
        setHasMessage(false);
      }
    }, TIMING_BETWEEN_WORDS * 2)
  }

  const sendMessage = (from: string, text: string) => {
    const date = new Date();

    console.log(emailjs.send(
      "service_c0zrve8",
      "template_c6iu695",
      {
        from: from,
        text: text,
        date: date.toString(),
      },
      "Mpm1e_o9P8YhwFyNt"
    ))
    
    console.log('sent')

  };

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const from = inputRef.current?.value || 'none';
    const message = inputRef.current?.value || 'none (error)';

    sendMessage(from, message);
    activateThankYou();
  }

  return <div className='contactContainer'>
    <span id="subtitle" ref={subtitleRef}>Contact</span>

    <form onSubmit={handleSubmit}>
      <input placeholder="from" ref={inputRef}></input>
      <textarea placeholder="message" ref={textareaRef}
        onChange={(e) => setHasMessage(isStringValid(e.target.value))}>
      </textarea>
      <button type='submit'
        style={{
          'opacity': hasMessage ? '1' : '.2',
          'cursor': hasMessage ? 'pointer' : 'default',
          'pointerEvents': hasMessage ? 'initial' : 'none'
        }}>
        Submit
      </button>
    </form>
  </div>
}


export default Contact;
