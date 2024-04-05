import { Button, Input, Textarea } from '@nextui-org/react';
import { useTheme } from 'next-themes';
import React, { useState } from 'react';
import Translator from '../i18n/Translator';
import Footer from '../components/Footer';
import { FaCheckCircle } from 'react-icons/fa';

function Contact() {
  const { theme } = useTheme();

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
    _subject: 'Novo contato!!',
    _captcha: 'false',
  });

  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    setLoading(true);
    fetch('https://formsubmit.co/dd81f325ffc39e91ac747c3a7370dac7', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    })
      .then(() => {
        setLoading(false);
        setDone(true);
      })
      .catch(err => {
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <div id='contact' className="flex h-screen flex-col items-center justify-center gap-12 bg-[#dbdbdb] dark:bg-[#2c2d2d] md:gap-12 xl:gap-16 ">
      <div className="sm:flex-row md:px-40 lg:gap-40 lg:px-80">
        <h1 className="text-center text-7xl font-bold text-[#2c2d2d] dark:text-[#dbdbdb]">
          <Translator path="contact.title" />
        </h1>
        <p className="mt-4 text-center text-4xl text-[#2c2d2d] dark:text-[#dbdbdb]">
          <Translator path="contact.subtitle" />
        </p>
      </div>
      <form
        className="flex w-full flex-col items-center justify-center gap-8"
        action="https://formsubmit.co/dd81f325ffc39e91ac747c3a7370dac7"
        method="POST"
      >
        <div
          data-done={done}
          className="absolute z-10 hidden h-96 w-3/4 flex-col items-center gap-16 p-8 transition-all duration-500 data-[done=true]:flex lg:w-1/2 xl:w-1/3"
        >
          {/* Obrigado pelo envio! */}
          <FaCheckCircle className="text-9xl text-[#2c2d2d] dark:text-[#dbdbdb]" />
          <div>
            <h1 className="text-center text-4xl font-bold text-[#2c2d2d] dark:text-[#dbdbdb]">
              <Translator path="contact.done.title" />
            </h1>
            <h3 className="text-center text-xl font-bold text-[#2c2d2d] dark:text-[#dbdbdb]">
              <Translator path="contact.done.text" />
            </h3>
          </div>
        </div>
        <div
          className="flex h-96 w-3/4 flex-col gap-8 transition-all duration-500 data-[done=true]:blur-sm lg:w-1/2 xl:w-1/3"
          data-done={done}
        >
          <Input
            onChange={e => handleChange(e)}
            label="Nome"
            type="text"
            name="name"
            required
          />
          <Input
            label="Email"
            type="email"
            name="email"
            onChange={e => handleChange(e)}
            required
          />
          <input type="hidden" name="_subject" value="Novo contato!!" />
          <input type="hidden" name="_captcha" value="false" />
          <Textarea
            label="Mensagem"
            placeholder="Escreva sua mensagem..."
            name="message"
            onChange={e => handleChange(e)}
            required
          />
          <Button
            variant="solid"
            isLoading={loading}
            color={theme == 'light' ? 'primary' : 'secondary'}
            isDisabled={!!!form.name || !!!form.email || !!!form.message}
            onClick={handleClick}
          >
            Enviar
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
