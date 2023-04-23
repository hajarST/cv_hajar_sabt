import React from "react";
import { Card } from "react-bootstrap";

function Formations() {
    const formations = [
        {
            diplome: "Technicien Spécialisé en Développement Informatique ",
            etablissement: "NTIC SYBA Marrakech",
            annees: "2017 - 2019",
        },
        {
            diplome: "Technicien Spécialisé en Gestion des Entreprises",
            etablissement: "ISGI Marrakech",
            annees: "2015 - 2017",
        },
        
        {
            diplome: "BAC - Sciences Physiques",
            etablissement: "Lycée Abdellah Ibrahim, Marrakech",
            annees: "2013 - 2014",
        },
    ];

    return (
        <section className="section">
            {formations.map((formation) => (
                <Card key={formation.diplome} className="mb-3">
                    <Card.Body>
                        <Card.Title>{formation.diplome}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                            {formation.etablissement}
                        </Card.Subtitle>
                        <Card.Text>{formation.annees}</Card.Text>
                         </Card.Body>
                </Card>
            ))}
        </section>
    );
}

export default Formations;