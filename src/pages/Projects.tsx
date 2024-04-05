import ProjectCard from '../components/ProjectCard';
import { t } from 'i18next';
import { Projeto } from '../interfaces';
import { useState } from 'react';
import i18n from 'i18next';
import Translator from '../i18n/Translator';
import { useQuery } from '@tanstack/react-query';

function Projects() {
  const { data, isLoading } = useQuery({
    queryKey: ['projects'],
    queryFn: getProjects,
  });

  async function getProjects():Promise<Projeto[]> {
    const res = await fetch('https://api.github.com/users/andre-vg/repos?&sort=pushed&per_page=100&page=1');
    const data = await res.json();
    return data;
  }
  const [projetos, setProjetos] = useState<Projeto[]>(
    t('projetos', { returnObjects: true }),
  );

  i18n.on('languageChanged', () => {
    setProjetos(t('projetos', { returnObjects: true }));
  });

  return (
    <div
      id="projects"
      className="flex h-full flex-col justify-around gap-40 bg-[#dbdbdb] dark:bg-[#2c2d2d]"
    >
      <div className="sm:flex-row md:px-40 lg:gap-40 lg:px-80">
        <h1 className="text-center text-7xl font-bold text-[#2c2d2d] dark:text-[#dbdbdb]">
          <Translator path="projetosPage.title" />
        </h1>
        <p className="mt-4 text-center text-4xl text-[#2c2d2d] dark:text-[#dbdbdb]">
          <Translator path="projetosPage.subtitle" />
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 items-center justify-center px-12 xl:px-32 2xl:px-80 gap-8">
        {data?.map((project: Projeto) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
