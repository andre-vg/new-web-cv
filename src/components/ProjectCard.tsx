import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Chip,
  Avatar,
  Snippet,
} from '@nextui-org/react';
import { Projeto } from '../interfaces';
import { useTheme } from 'next-themes';
import { CiShare1 } from 'react-icons/ci';
import Translator from '../i18n/Translator';

function ProjectCard({ project }: { project: Projeto }) {
  const { theme } = useTheme();
  return (
    <Card className="h-full auto-rows-auto self-center bg-neutral-100 p-4 dark:bg-neutral-900 lg:p-8">
      <CardHeader className="flex justify-between text-3xl font-bold">
        <div className="flex items-center gap-8">
          <Avatar
            isBordered
            src={project.owner.avatar_url}
            size="lg"
            classNames={{
              base: 'w-14 h-14 min-w-fit',
            }}
          />
          <p className="break-all">{project.name}</p>
        </div>
        <a href={project.html_url} target="_blank">
          <CiShare1 className="cursor-pointer text-default transition-colors hover:text-primary-500" />
        </a>
      </CardHeader>
      <CardBody className="text-xl ">{project.description}</CardBody>
      <CardFooter className="flex-col items-start justify-start gap-4">
        <p className="text-lg">
          <Translator path="projetosPage.topics" />
        </p>
        <div className="flex flex-wrap gap-4">
          {project.topics.map((language: string) => (
            <Chip
              variant="flat"
              key={language}
              color={theme == 'light' ? 'primary' : 'secondary'}
              size="lg"
            >
              {language}
            </Chip>
          ))}
        </div>
        <Snippet color={theme == 'light' ? 'primary' : 'secondary'}>
          {project.clone_url}
        </Snippet>
      </CardFooter>
    </Card>
  );
}

export default ProjectCard;
