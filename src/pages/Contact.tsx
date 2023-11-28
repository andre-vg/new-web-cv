import { Button, Input, Textarea } from '@nextui-org/react';
import { useTheme } from 'next-themes';
import React, { useState } from 'react';
import Translator from '../i18n/Translator';

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
        className="flex w-3/4 flex-col gap-8 "
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
      </form>
    </div>
  );
}

export default Contact;
