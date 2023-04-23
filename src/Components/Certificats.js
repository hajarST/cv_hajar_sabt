import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pagination from 'react-bootstrap/Pagination';
import certifMooc from '../assets/CertifMOOC.PNG';
import certifBoots from '../assets/certifCloud.PNG';
import certifDataPy from '../assets/CertifDataPy.PNG';
import certifDevops from '../assets/certifDevops.PNG';
import certifPythonFunct from '../assets/CertifPythonFunct.PNG';
import certifReact from '../assets/CertifReact.PNG';
import certifScrum from '../assets/CertifScrum.PNG';

function CertificationCard(props) {
    const { title, issuer, date, image} = props;
    return (
        <Card className="h-100">
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    <span>{issuer}</span>
                    <br />
                    <span>Date de délivrance : {date}</span>
                    <br />
                    
                </Card.Text>
                
                   
            </Card.Body>
        </Card>
    );
}

function Certificats() {
    const certifications = [
        
        {
            
            title: 'Comptabilité des opérations courantes',
            issuer: 'Certificat MOOC',
            date: ' 2017',
            image : certifMooc
        },
        {
           
            title: 'Data Collection and Processing with Python',
            issuer: 'Certificat University of Mechigan',
            date: '2023',
            image : certifDataPy
        },
        {
            
            title: 'Devops , Cloud and Agile Foundations',
            issuer: 'Certificat IBM',
            date: '2023',
            image : certifDevops
        },
      
        {
            
            title: 'Python Functions , Files and Dictionnaries',
            issuer: 'Certificat University of Mechigan',
            date: '2022',
            image : certifPythonFunct
        },
        {
            
            title: 'Advanced React',
            issuer: 'Certificat Meta ',
            date: ' 2023',
            image: certifReact
        },
       
        {
            
            title: 'Front-End Web UI Frameworks and Tools: Bootstrap 4',
            issuer: 'Certificat IBM ',
            date: ' 2023',
            image : certifBoots
        }
    ];
    const PAGE_SIZE = 3;
    const [activePage, setActivePage] = React.useState(1);

    const totalPages = Math.ceil(certifications.length / PAGE_SIZE);

    const handleClick = (event) => {
        setActivePage(event.target.text);
    }

    const pages = [];

    for (let number = 1; number <= totalPages; number++) {
        pages.push(
            <Pagination.Item key={number} active={number === activePage} onClick={handleClick}>
                {number}
            </Pagination.Item>,
        );
    }

    const startIndex = (activePage - 1) * PAGE_SIZE;
    const endIndex = activePage * PAGE_SIZE;
    const currentCertifications = certifications.slice(startIndex, endIndex);

    return (
        <div>
            <Row className="my-3">
                {currentCertifications.map(certification => (
                    <Col key={certification.id} xs={12} sm={6} lg={4} className="d-flex">
                        <CertificationCard {...certification} />
                    </Col>
                ))}
            </Row>
            <Row className="my-3">
                <Col>
                    <Pagination>{pages}</Pagination>
                </Col>
            </Row>
        </div>
    );
}

export default Certificats;