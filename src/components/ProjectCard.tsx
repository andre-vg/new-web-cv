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

function ProjectCard({ project }: { project: Projeto }) {
  const { theme } = useTheme();
  return (
    <Card className="h-full auto-rows-auto self-center bg-neutral-100 p-4 dark:bg-neutral-900 lg:p-8">
      <CardHeader className="flex gap-8 text-3xl font-bold">
        <Avatar
          isBordered
          src={project.owner.avatar_url}
          size="lg"
          classNames={{
            base: 'w-14 h-14 min-w-fit',
          }}
        />
        <p className="break-all">{project.name}</p>
      </CardHeader>
      <CardBody className="text-xl">{project.description}</CardBody>
      <CardFooter className='flex-col justify-start items-start gap-4'>
        <div className="flex flex-wrap gap-4">
          {project.topics.map((language: string) => (
            <Chip
              variant="flat"
              key={language}
              color={'primary'}
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
