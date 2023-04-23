import React from 'react';
import { Card } from 'primereact/card';

const ExperienceCard = ({  title,  duration, courses }) => {
    return (
        <Card title={title}  footer={duration}>
            <div>
                <h5>Tâches:</h5>
                <ul>
                    {courses.map((course, index) => (
                        <li key={index}>{course}</li>
                    ))}
                </ul>
            </div>
        </Card>
    );
};

const Expériences = () => {
    // Données pour chaque expérience
    const experienceData = [
        {
            
            title: 'Stage fin d\'année Développeuse informatique chez SEOCOM :',
            duration: '01/08/2022 au 31/08/2022',
            location: 'Marrakech, Maroc',
            courses: [
                'Création application Web sous Wordpress pour location des voitures.',
                'Création  application Web sous Php pour e-commerce.'
            ]
        },
        {
            
            title: 'Stage de  Développeuse informatique chez KAINET Communication :',
            
            duration: '01/02/2021 au 01/03/2021',
            location: 'Marrakech, Maroc',
            courses: [
                'Création application Web  sous Wordpress pour bureau d’architecture.',
                'Création deux applications Web  sous Php pour agence de voyage touristique.'
            ]
        },
        {
            
            title: 'Stage fin de formation de Développeuse informatique chez NovaPrint :',
           
            duration: '20/01/2020 au 28/02/2020 ',
            location: 'Marrakech, Maroc',
            courses: ['Création application mobile de design t-shirt (Android Java).',
                'Création application bureau de gestion de stock (Linq to SQL).']
        },
        {
            
            title: 'Stage Assistante RH chez BEST RH :',
            duration: '15/01/2018 au 28/02/2018 ',
            location: 'Marrakech, Maroc',
            courses: ['gestion de rendez-vous avec clients.']
        },
        {
            
            title: 'Stage fin de formation d\'Employé de bureau chez Fiduciaire ALBOUSTANE :',
            duration: '03/04/2017 au 02/05/2017',
            location: 'Marrakech, Maroc',
            courses: ['Gestion d’accueil et des dossiers.', 'Saisie des bulletins de paie et des opérations courantes en logiciel TOPAZE.', 'Déclaration du TVA et télé déclaration.']
        }
    ];

    return (
        <section className="section">
            <div className="experience-grid">
                {experienceData.map((experience, index) => (
                    <div key={index} className="card" style={{ backgroundColor: "#f2f2f2", marginBottom: "20px" }}>
                        <ExperienceCard
                            title={experience.title}
                            position={experience.position}
                            duration={experience.duration}
                            courses={experience.courses}
                        />
                    </div>
                ))}
            </div>
        </section>

    );
};

export default Expériences;
