import Button from '@/components/atoms/Button/Button';
import Icon from '@/components/atoms/Icons/Icon';
import Link from 'next/link';
import React from 'react';
import './sectionButtonHeaderStyle.scss';
import '../../atoms/Button/buttonStyle.scss';

interface IProps {
    panelDetail: string;
    iconColor?: 'icon-grey';
}
export default function SectionButtonHeader({ panelDetail, iconColor = 'icon-grey' }: IProps) {
    return (
        <div className="header-section-button">
            <Link href='/portal/jobs' className='direction-portal'>
                <Button className={panelDetail === 'Vacantes' ? 'btn-jobs-ok' : ''}>
                    <Icon name='iconbuilding' colorChange={iconColor} /> Vacantes
                </Button>
            </Link>
            <Link href='/portal/companies' className='direction-portal'>
                <Button className={panelDetail === 'Compañías' ? 'btn-company-ok' : ''}>
                    <Icon name='iconbaggage' colorChange={iconColor} /> Compañias
                </Button>
            </Link>
        </div>
    )
}
