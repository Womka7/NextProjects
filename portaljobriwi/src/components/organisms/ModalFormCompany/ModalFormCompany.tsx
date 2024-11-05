"use client"
import { Modal } from "@/components/atoms/Modal/Modal";
import { TitleH1 } from "@/components/atoms/TitleH1/TitleH1";
import './modalFormCompanyStyle.scss'
import { ContainInputLabel } from "@/components/molecules/ContainInputLabel/ContainInputLabel";
import { Input } from "@/components/atoms/Input/Input";
import { Service } from "@/services/portal.service";
import { Button } from "@/components/atoms/Button/Button";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ContentCompany, ICreateCompany } from "@/models/company.model";
interface IProps {
    titlePrimary: string;
    onClose: () => void;
    editButtonLabel: string;
    idCard?: string;
}

const useServices = new Service();
export const ModalFormCompany= ({ onClose, titlePrimary, editButtonLabel, idCard }: IProps) => {
    const router = useRouter();

    const [companyData, setCompanyData] = useState<ContentCompany>();

    useEffect(() => {
        const loadData = async () => {
            if(idCard) {
              try {
                const data = await useServices.findCompanyById(idCard);
                setCompanyData(data);
              } catch (error) {
                console.error(error);
              }
            }
        };
        loadData();
    }, [idCard]);

    const SubmitForm = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // const formData = Object.fromEntries(
        //   new FormData(event.target as HTMLFormElement).entries()
        // );
        // console.log(formData);
    
        try {
          if (companyData) {
            await useServices.updateCompany(
              companyData.id,
              formData
            );
          } else {
            await useServices.createCompany(formData);
          }
          router.refresh();
          onClose()
        } catch (error) {
          console.error(error);
        }
      };
      const [formData, setFormData] = useState<ICreateCompany>({
        name: '',
        location: '',
        contact: '',
      });
      useEffect(() => {
        const loadCompanyData = async () => {
          if (idCard) {
            try {
              const data = await useServices.findCompanyById(idCard);
              setCompanyData(data);
              setFormData({
                name: data.name,
                location: data.location,
                contact: data.contact,
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
            <form className="form-gnrl" onSubmit={SubmitForm }>
                <ContainInputLabel>
                    <label htmlFor="nameFormCompany">Nombre</label>
                    <Input className="input-company" id="nameFormCompany" name="name" required={true} value={formData.name}onChange={(e)=>setFormData((prevData)=>({...prevData, name: e.target.value}))}></Input>
                </ContainInputLabel>
                <ContainInputLabel>
                    <label htmlFor="addressFormCompany">Ubicación</label>
                    <Input className="input-company" id="addressFormCompany" name="location" required={true} value={formData.location}onChange={(e)=>setFormData((prevData)=>({...prevData, location: e.target.value}))}></Input>
                </ContainInputLabel>
                <ContainInputLabel>
                    <label htmlFor="contacFormCompany">Contacto</label>
                    <Input className="input-company" id="contacFormCompany" name="contact" required={true} value={formData.contact}onChange={(e)=>setFormData((prevData)=>({...prevData, contact: e.target.value}))}></Input>
                </ContainInputLabel>
                
                <Button className="btn-company-ok">{editButtonLabel}</Button>
            </form>
        </Modal>
    );
}