import React from 'react';
import Card from 'react-bootstrap/Card';

const projects = [
    {
        name: " Application mobile Money Convert Application (Java)",
        school: "Ecole Marocaine de Sciences de l'Ingénieur Marrakech",
        
        link: "https://github.com/hajarST/MoneyConvertApplication"
    },
    {
        name: "Application mobile des Apis de Pokemon (Java)",
        school: "Ecole Marocaine de Sciences de l'Ingénieur Marrakech",
        link: "https://github.com/hajarST/PokemonApiApp"
    },
    {
        name: "Application web de jeu de morpion tic-tac-toe (React)",
        school: "Ecole Marocaine de Sciences de l'Ingénieur Marrakech",
        link: "https://github.com/hajarST/tictactoe_sabthajar"
    },
    {
        name: "Application web portfolio (React)",
        school: "Ecole Marocaine de Sciences de l'Ingénieur Marrakech",
        link: "https://portfolio-hajar-sabt.vercel.app/"
    },
    {
        name: "Application mobile design T-shirt (App)",
        school: "NTIC SYBA ",
        
    },
    {
        name: "Application bureau gestion stock (C#)",
        school: "NTIC SYBA ",
        
    },
    {
        name: "Application web d'agence de voyage touristique (Php)",
        school: "NTIC SYBA ",
        
    },
    {
        name: "Application web de location de voiture (Wordpress)",
        school: "Ecole Marocaine de Sciences de l'Ingénieur Marrakech",
        
    }
];

const ProjectCard = () => {
    return (
        <div className="project-container">
            {projects.map((project, index) => (
                <Card key={index} className="project-card">
                    
                    <Card.Body>
                        <Card.Title className="project-title">{project.name}</Card.Title>
                        {project.school && <Card.Subtitle className="project-school">{project.school}</Card.Subtitle>}
                        {project.competition && <Card.Text className="project-competition">{project.competition}</Card.Text>}
                        <Card.Link href={project.link} className="project-link">Voir le projet</Card.Link>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
};

export default ProjectCard;
