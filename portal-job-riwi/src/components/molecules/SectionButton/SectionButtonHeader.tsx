'use client'
import React from 'react';
import Button from '@/components/atoms/Button/Button';
import Icon from '@/components/atoms/Icons/Icon';
import Link from 'next/link';
import './sectionButtonHeaderStyle.scss';

interface IProps {
    panelDetail: 'Vacantes' | 'Companias';
}

export default function SectionButtonHeader({ panelDetail }: IProps) {
    const isVacantesActive = panelDetail === 'Vacantes';
    const isCompaniasActive = panelDetail === 'Companias';

    return (
        <div className="header-section-button">
            <Link href="/portal/jobs" className="direction-portal">
                <Button className={isVacantesActive ? 'btn-jobs-ok' : ''} label='Vacantes' >
                    <Icon name="iconbaggage" colorChange={isVacantesActive ? 'different-color-icon' : 'icon-grey'} />
                </Button>
            </Link>
            <Link href="/portal/companies" className="direction-portal">
                <Button className={isCompaniasActive ? 'btn-company-ok' : ''} label='Compañias' >
                    <Icon name="iconbuilding" colorChange={isCompaniasActive ? 'different-color-icon' : 'icon-grey'} />
                </Button>
            </Link>
        </div>
    );
}
