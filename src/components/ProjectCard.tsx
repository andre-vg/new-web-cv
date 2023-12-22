import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Chip,
  Avatar,
} from '@nextui-org/react';
import { Projeto } from '../interfaces';
import { useTheme } from 'next-themes';

function ProjectCard({ project }: { project: Projeto }) {
  const logo = new URL(project.imagem, import.meta.url).href;
  const { theme } = useTheme();
  return (
    <Card className="h-max w-3/4 self-center bg-neutral-100 p-8 dark:bg-neutral-900 lg:w-4/5 xl:w-2/5">
      <CardHeader className="flex gap-8 text-3xl font-bold">
        <Avatar isBordered src={logo} size="lg" className='aspect-square' />
        {project.name}
      </CardHeader>
      <CardBody className="text-xl">{project.descricao}</CardBody>
      <CardFooter className="flex flex-wrap gap-4">
        {project.tags.map((language: string) => (
          <Chip
          variant='flat'
            key={language}
            color={theme == 'light' ? 'primary' : 'secondary'}
            size="lg"
          >
            {language}
          </Chip>
        ))}
      </CardFooter>
    </Card>
  );
}

export default ProjectCard;
