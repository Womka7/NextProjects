import React from 'react'
import Menu from '@/app/ui/molecules/Menu'
import { ProjectsServices } from '@/app/infraestructure/services/projects.service';
import { UserService } from '@/app/infraestructure/services/registeruser.service';
interface IProps {
  searchParams: IProjectsRequest;
}
const useProjectService = new ProjectsServices();
const UseUserService = new UserService();
export default async function ServicesPage({ searchParams }: IProps) {
  const page = searchParams.page ? parseInt(searchParams.page.toString()) : 1;
  const data = await useProjectService.getAllProjects({ page, size: 5 });
  const users = await UseUserService.getUsers();

  const totalProjects = data.metadata.totalItems;

  const activeProjects = data.data.filter(project => project.isActive).length;

  const organizers = users.data.filter(user => user.role === 'organizer').length;

  return (
    <>
      <Menu data={data} totalProjects={totalProjects} activeProjects={activeProjects} organizers={organizers} />
    </>
  )
}