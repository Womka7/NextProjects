'use client'
import React from 'react';
import Button from '@/components/atoms/Button/Button';
import Icon from '@/components/atoms/Icons/Icon';
import Link from 'next/link';
import './sectionButtonHeaderStyle.scss';
import { icons } from '@/components/atoms/Icons/icons';

interface IProps {
    panelDetail: 'Vacantes' | 'Companias';
}

export default function SectionButtonHeader({ panelDetail }: IProps) {
    const buttonConfig = {
        Vacantes: {
            label: 'Vacantes',
            href: '/portal/jobs',
            buttonClass: 'btn-jobs-ok',
            iconName: 'iconbaggage' as keyof typeof icons
        },
        Companias: {
            label: 'Compañías',
            href: '/portal/companies',
            buttonClass: 'btn-company-ok',
            iconName: 'iconbuilding' as keyof typeof icons
        }
    } as const;

    return (
        <div className="header-section-button">
            {Object.entries(buttonConfig).map(([key, config]) => (
                <Link key={key} href={config.href} className="direction-portal">
                    <Button 
                        className={panelDetail === key ? config.buttonClass : ''} 
                        label={config.label}
                    >
                        <Icon name={config.iconName} />
                    </Button>
                </Link>
            ))}
        </div>
    );
}