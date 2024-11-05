"use client"
import { Modal } from "@/components/atoms/Modal/Modal";
import { TitleH1 } from "@/components/atoms/TitleH1/TitleH1";
import './modalFormVacancyStyle.scss'
import { ContainInputLabel } from "@/components/molecules/ContainInputLabel/ContainInputLabel";
import { Input } from "@/components/atoms/Input/Input";
import { Service } from "@/services/portal.service";
import { Textarea } from "@/components/atoms/Textarea/Textarea";
import { ContainerSelect, Option } from "@/components/molecules/ContainSelect/ContainSelect";
import { Button } from "@/components/atoms/Button/Button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ContentVacant, ICreateVacant } from "@/models/vacant.model";
interface IProps {
  titlePrimary: string;
  onClose: () => void;
  editButtonLabel: string;
  idCard?: string;
}

const useServices = new Service();
export const ModalFormVacancy = ({ onClose, titlePrimary, editButtonLabel, idCard }: IProps) => {
  const router = useRouter();

  const [companyOptions, setCompanyOptions] = useState<Option[]>([]);
  const [vacantData, setVacantData] = useState<ContentVacant>();

  useEffect(() => {
    const loadData = async () => {
      const companyResponse = await useServices.findAllCompany();
      const options = companyResponse.map((company) => {
        return { value: company.id, label: company.name };
      });
      setCompanyOptions(options);
    };
    loadData();
  }, []);

  const SubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // const formData = Object.fromEntries(
    //   new FormData(event.target as HTMLFormElement).entries()
    // );
    console.log(formData);

    try {
      if (vacantData) {
        await useServices.updateVacant(
          vacantData.id.toString(),
          formData
        );
      } else {
        await useServices.createVacant(formData);
      }
      router.refresh();
      onClose()
    } catch (error) {
      console.error(error);
    }
  };
  const [formData, setFormData] = useState<ICreateVacant>({
    title: '',
    description: '',
    status: '',
    companyId: '',
  });
  useEffect(() => {
    const loadCompanyData = async () => {
      if (idCard) {
        try {
          const data = await useServices.findVacantById(idCard);
          setVacantData(data);
          setFormData({
            title: data.title,
            description: data.description,
            status: data.status,
            companyId: data.company.id.toString(),
          });
        } catch (error) {
          console.error(error);
        }
      }
    };
    loadCompanyData();
  }, [idCard]);



  return (
    <Modal onClose={onClose}>
      <TitleH1 label={titlePrimary} className="title-modal"></TitleH1>
      <form className="form-gnrl" onSubmit={SubmitForm}>
        <ContainInputLabel>
          <label htmlFor="titleFormVacancy">Título</label>
          <Input className="input-vacants" id="titleFormVacancy" name="title" required={true} value={formData.title} onChange={(e) =>
            setFormData((prevData) => ({ ...prevData, title: e.target.value }))
          }></Input>
        </ContainInputLabel>
        <ContainInputLabel>
          <label htmlFor="descriptionVacancy">Descripción</label>
          <Textarea className="text-area-vacants" id="descriptionVacancy" name="description" required={true} value={formData.description} onChange={(e) => setFormData((prevData) => ({ ...prevData, description: e.target.value }))}></Textarea>
        </ContainInputLabel>
        <ContainerSelect name="status" required={true} label="Estado" value={formData.status} onChange={(e) => setFormData((prevData) => ({ ...prevData, status: e.target.value, }))}
          options={[
            {
              value: "ACTIVE",
              label: "Activo",
            },
            {
              value: "close",
              label: "Inactivo",
            },
          ]}
        />
        <ContainerSelect name="companyId" required={true} label="Compañía" value={formData.companyId}  onChange={(e) => setFormData((prevData) => ({ ...prevData, companyId: e.target.value, }))} options={companyOptions} />
        <Button className="btn-jobs-ok">{editButtonLabel}</Button>
      </form>
    </Modal>
  );
}