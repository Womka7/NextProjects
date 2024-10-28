'use client'
import React from 'react';
import Button from '@/components/atoms/Button/Button';
import Icon from '@/components/atoms/Icons/Icon';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './sectionButtonHeaderStyle.scss';


// import '../../atoms/Button/buttonStyle.scss';

interface IProps {
    panelDetail: 'Vacantes' | 'Compañías';
}

export default function SectionButtonHeader({ panelDetail }: IProps) {
    const pathname = usePathname();

    const isVacantesActive = pathname.includes('/portal/jobs');
    const isCompaniasActive = pathname.includes('/portal/companies');

    return (
        <div className="header-section-button">
            <Link href="/portal/jobs" className="direction-portal">
                <Button className={isVacantesActive ? 'btn-jobs-ok' : ''}                >
                    <Icon name="iconbuilding" colorChange={isVacantesActive ? 'different-color-icon' : 'icon-grey'} />
                    Vacantes
                </Button>
            </Link>
            <Link href="/portal/companies" className="direction-portal">
                <Button className={isCompaniasActive ? 'btn-company-ok' : ''}                >
                    <Icon name="iconbaggage" colorChange={isCompaniasActive ? 'different-color-icon' : 'icon-grey'} />
                    Compañías
                </Button>
            </Link>
        </div>
    );
}
