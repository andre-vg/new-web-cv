import { Button, Divider, Input, Textarea } from '@nextui-org/react';
import { useTheme } from 'next-themes';
import React, { useState } from 'react';
import Translator from '../i18n/Translator';
import { FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

function Contact() {
  const { theme } = useTheme();

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-40 bg-[#dbdbdb] dark:bg-[#2c2d2d]">
      <div className="sm:flex-row md:px-40 lg:gap-40 lg:px-80">
        <h1 className="text-center text-7xl font-bold text-[#2c2d2d] dark:text-[#dbdbdb]">
          <Translator path="contact.title" />
        </h1>
        <p className="mt-4 text-center text-4xl text-[#2c2d2d] dark:text-[#dbdbdb]">
          <Translator path="contact.subtitle" />
        </p>
      </div>
      <form
        className="flex w-3/4 flex-col gap-8 lg:w-1/2 xl:w-1/3 "
        action="https://formsubmit.co/dd81f325ffc39e91ac747c3a7370dac7"
        method="POST"
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
          variant="shadow"
          color={theme == 'light' ? 'primary' : 'secondary'}
          isDisabled={!!!form.name || !!!form.email || !!!form.message}
          type="submit"
        >
          Enviar
        </Button>
        <div className="flex flex-col items-center justify-center gap-2">
          <Divider />
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/andr%C3%A9-gon%C3%A7alves-a74535163/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="cursor-pointer text-4xl text-[#2c2d2d] transition-colors duration-300 hover:text-[#0a66c2] dark:text-[#dbdbdb] dark:hover:text-[#0a66c2]" />
            </a>
            <a
              href="https://twitter.com/dedez00"
              target="_blank"
              rel="noreferrer"
            >
              <FaXTwitter className="cursor-pointer text-4xl text-[#2c2d2d] transition-colors duration-300 hover:text-black dark:text-[#dbdbdb] dark:hover:text-white" />
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
