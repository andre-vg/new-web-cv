import { Divider } from '@nextui-org/react';
import Translator from '../i18n/Translator';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <>
      <footer className="flex h-32 w-full flex-col items-center justify-evenly px-16 bg-[#dbdbdb] dark:bg-[#2c2d2d]">
        <Divider className="hidden lg:block" />
        <div className="flex flex-col-reverse items-center gap-4 md:flex-row">
          <p>
            &copy;
            <Translator path="footer.title" /> André Gonçalves
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/andr%C3%A9-gon%C3%A7alves-a74535163/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="cursor-pointer text-4xl text-[#2c2d2d] transition-colors duration-300 hover:text-primary-500 dark:text-[#dbdbdb] dark:hover:text-secondary-500" />
            </a>
            <a
              href="https://github.com/andre-vg"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="cursor-pointer text-4xl text-[#2c2d2d] transition-colors duration-300 hover:text-primary-500 dark:text-[#dbdbdb] dark:hover:text-secondary-500" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
