"use client";
import { Navbar, Nav, Container, Card, Button, Row, Col } from 'react-bootstrap';
import AnimatedSection from './components/AnimatedSection';
import { FaPaypal, FaRegCreditCard, FaPhone, FaEnvelope, FaMobileAlt, FaDollarSign, FaEthereum } from 'react-icons/fa';
import { QRCodeSVG } from 'qrcode.react';
import './globals.css';

export default function Home() {
  return (
    <>
      <Navbar id="main-navbar" bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand id="navbar-brand" href="#home">Hill Handyman Services</Navbar.Brand>
          <Navbar.Toggle id="navbar-toggle" aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="navbar-collapse">
            <Nav id="main-nav" className="me-auto">
              <Nav.Link id="nav-services" href="#services">Services</Nav.Link>
              <Nav.Link id="nav-about" href="#about">About</Nav.Link>
              <Nav.Link id="nav-service-areas" href="#service-areas">Service Areas</Nav.Link>
              <Nav.Link id="nav-payment" href="#payment">Payment</Nav.Link>
              <Nav.Link id="nav-contact" href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <section id="home" className="text-center" style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/sunriver-lodge-aerial.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed', color: 'white', minHeight: '50vh', display: 'flex', alignItems: 'center'}}>
        <Container id="hero-container" className="py-5">
          <h1 id="hero-title" className="display-4 fw-bold mb-3">Hill Handyman Services</h1>
          <p id="hero-subtitle" className="lead fs-4 mb-4" style={{color: 'white'}}>Your reliable local handyman who specializes in solar builds and Tiny Homes.</p>
          <Button id="hero-cta-button" href="#contact" variant="dark" size="lg" className="px-4 py-2">Schedule & Contact</Button>
        </Container>
      </section>

      <Container as="main" className="py-5">
        <AnimatedSection>
          <section id="services" className="mb-5">
            <h2 id="services-title" className="text-center mb-5 display-5 fw-bold">Our Services</h2>
            
            {/* Large Featured Service Cards */}
            <Row className="mb-5">
              <Col lg={6} className="mb-4">
                <Card id="solar-panel-builds-card" className="h-100 border-dark">
                  <Card.Img variant="top" src="/solar-panels.jpg" style={{height: '250px', objectFit: 'cover', objectPosition: 'bottom'}} />
                  <Card.Body id="solar-panel-builds-body">
                    <Card.Title id="solar-panel-builds-title" className="text-dark fs-3">Solar Panel Builds Services Near Me</Card.Title>
                    <Card.Text id="solar-panel-builds-description" className="mb-3">
                      Complete solar installation services for residential and off-grid applications.
                    </Card.Text>
                    <Card.Text id="solar-panel-builds-services-label" className="fw-bold text-uppercase text-dark mb-3">
                      <small>Services Include:</small>
                    </Card.Text>
                    <Row id="solar-panel-builds-services-list">
                      <Col xs={6}>
                        <ul className="list-unstyled">
                          <li className="mb-2"><i className="text-dark">✓</i> Solar panel mounting</li>
                          <li className="mb-2"><i className="text-dark">✓</i> Battery bank setup</li>
                          <li className="mb-2"><i className="text-dark">✓</i> Inverter installation</li>
                          <li className="mb-2"><i className="text-dark">✓</i> DC/AC wiring</li>
                          <li className="mb-2"><i className="text-dark">✓</i> Off-grid cabins</li>
                        </ul>
                      </Col>
                      <Col xs={6}>
                        <ul className="list-unstyled">
                          <li className="mb-2"><i className="text-dark">✓</i> RV solar systems</li>
                          <li className="mb-2"><i className="text-dark">✓</i> Solar workshops</li>
                          <li className="mb-2"><i className="text-dark">✓</i> Ground mount arrays</li>
                          <li className="mb-2"><i className="text-dark">✓</i> System monitoring</li>
                          <li className="mb-2"><i className="text-dark">✓</i> Backup power</li>
                        </ul>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={6} className="mb-4">
                <Card className="h-100 border-secondary">
                  <Card.Img variant="top" src="/tiny-house.jpg" style={{height: '250px', objectFit: 'cover'}} />
                  <Card.Body id="tiny-homes-body">
                    <Card.Title id="tiny-homes-title" className="text-dark fs-3">Tiny Homes Services Near Me</Card.Title>
                    <Card.Text id="tiny-homes-description" className="mb-3">
                      Custom tiny home construction from foundation to finish.
                    </Card.Text>
                    <Card.Text id="tiny-homes-services-label" className="fw-bold text-uppercase text-secondary mb-3">
                      <small>Services Include:</small>
                    </Card.Text>
                    <Row id="tiny-homes-services-list">
                      <Col xs={6}>
                        <ul className="list-unstyled">
                          <li className="mb-2"><i className="text-secondary">✓</i> Complete construction</li>
                          <li className="mb-2"><i className="text-secondary">✓</i> Trailer foundations</li>
                          <li className="mb-2"><i className="text-secondary">✓</i> Insulation & weatherproofing</li>
                          <li className="mb-2"><i className="text-secondary">✓</i> Electrical systems</li>
                          <li className="mb-2"><i className="text-secondary">✓</i> Plumbing & water</li>
                        </ul>
                      </Col>
                      <Col xs={6}>
                        <ul className="list-unstyled">
                          <li className="mb-2"><i className="text-secondary">✓</i> Interior finish work</li>
                          <li className="mb-2"><i className="text-secondary">✓</i> Loft construction</li>
                          <li className="mb-2"><i className="text-secondary">✓</i> Renovations</li>
                          <li className="mb-2"><i className="text-secondary">✓</i> Off-grid systems</li>
                          <li className="mb-2"><i className="text-secondary">✓</i> Custom design</li>
                        </ul>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            <h3 className="text-center mb-4 text-muted">Additional Services</h3>
            <Row id="regular-services-row">
              <Col id="yard-work-col" md={4} className="mb-4">
                <Card id="yard-work-card">
                  <Card.Img id="yard-work-image" variant="top" src="/yard-work.jpg" />
                  <Card.Body id="yard-work-body">
                    <Card.Title id="yard-work-title">Yard Work & Maintenance Services Near Me</Card.Title>
                    <Card.Text id="yard-work-description">
                      From mowing lawns to clearing brush, I&apos;ll keep your yard looking its best.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col id="custom-builds-col" md={4} className="mb-4">
                <Card id="custom-builds-card">
                  <Card.Img id="custom-builds-image" variant="top" src="/custom-builds.jpg" />
                  <Card.Body id="custom-builds-body">
                    <Card.Title id="custom-builds-title">Custom Builds Services Near Me</Card.Title>
                    <Card.Text id="custom-builds-description">
                      Chicken coops, man caves, sheds, tiny homes, and more. I can build your dream project.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col id="general-labor-col" md={4} className="mb-4">
                <Card id="general-labor-card">
                  <Card.Img id="general-labor-image" variant="top" src="/general-labor.jpg" />
                  <Card.Body id="general-labor-body">
                    <Card.Title id="general-labor-title">General Labor Services Near Me</Card.Title>
                    <Card.Text id="general-labor-description">
                      Building, framing, digging, hauling, trash-runs, supply runs, and more.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col id="animal-care-col" md={4} className="mb-4">
                <Card id="animal-care-card">
                  <Card.Img id="animal-care-image" variant="top" src="/animal-care.jpg" />
                  <Card.Body id="animal-care-body">
                    <Card.Title id="animal-care-title">Animal Care Services Near Me</Card.Title>
                    <Card.Text id="animal-care-description">
                      Shoveling & bagging manure, caring for horses, cattle, goats, chickens & pigs.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col id="plumbing-col" md={4} className="mb-4">
                <Card id="plumbing-card">
                  <Card.Img id="plumbing-image" variant="top" src="/plumbing.jpg" />
                  <Card.Body id="plumbing-body">
                    <Card.Title id="plumbing-title">Plumbing Services Near Me</Card.Title>
                    <Card.Text id="plumbing-description">
                      General plumbing services, including RV and tiny house plumbing.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col id="electrical-col" md={4} className="mb-4">
                <Card id="electrical-card">
                  <Card.Img id="electrical-image" variant="top" src="/electrical.jpg" />
                  <Card.Body id="electrical-body">
                    <Card.Title id="electrical-title">Electrical Services Near Me</Card.Title>
                    <Card.Text id="electrical-description">
                      Limited electrical services until I have completed my CCB license. Including building solar panel systems, work on Tiny Homes, and more.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section id="about" className="mb-5 bg-light-gray">
            <Container id="about-container">
              <Row id="about-row" className="align-items-center">
                <Col id="about-image-col" md={6}>
                  <div className="rounded-circle overflow-hidden" style={{width: '300px', height: '300px', margin: '0 auto', position: 'relative'}}>
                    <img id="about-profile-image" src="/profile-photo.jpg" alt="Hill Handyman Services" style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center'}}/>
                  </div>
                </Col>
                <Col id="about-text-col" md={6}>
                  <h2 id="about-title" className="mb-4 display-6 fw-bold">About Me</h2>
                  <p id="about-description">
                    I am a handyman with a wide range of skills, dedicated to providing quality work at an affordable price. Please note that I am not a licensed contractor and I am not bonded. I carry limited insurance. This is reflected in my low hourly rate of $35-50 per hour.
                  </p>
                </Col>
              </Row>
            </Container>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section id="service-areas" className="mb-5 text-center">
            <Container id="service-areas-container">
              <h2 id="service-areas-title" className="mb-4 display-5 fw-bold">Service Areas</h2>
              <Row className="justify-content-center">
                <Col lg={8}>
                  <p id="service-areas-description" className="lead mb-5 fs-5">
                    <em>Handyman services in the greater Bend, Oregon area.</em>
                  </p>
                  <Row>
                    <Col md={4} className="mb-3">
                      <div id="service-area-sunriver" className="service-area-item">
                        <h5>Sunriver</h5>
                      </div>
                    </Col>
                    <Col md={4} className="mb-3">
                      <div id="service-area-lapine" className="service-area-item">
                        <h5>LaPine</h5>
                      </div>
                    </Col>
                    <Col md={4} className="mb-3">
                      <div id="service-area-bend" className="service-area-item">
                        <h5>Bend</h5>
                      </div>
                    </Col>
                    <Col md={4} className="mb-3">
                      <div id="service-area-sisters" className="service-area-item">
                        <h5>Sisters</h5>
                      </div>
                    </Col>
                    <Col md={4} className="mb-3">
                      <div id="service-area-redmond" className="service-area-item">
                        <h5>Redmond</h5>
                      </div>
                    </Col>
                    <Col md={4} className="mb-3">
                      <div id="service-area-alfalfa" className="service-area-item">
                        <h5>Alfalfa</h5>
                      </div>
                    </Col>
                    <Col md={12} className="mb-3">
                      <div id="service-area-prineville" className="service-area-item">
                        <h5>Prineville</h5>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section id="payment" className="mb-5">
            <h2 className="text-center mb-5 display-5 fw-bold">Payment Options</h2>
            <Row className="justify-content-center">
              <Col lg={6} className="mb-4">
                <Card className="h-100">
                  <Card.Body>
                    <Row className="align-items-center">
                      <Col xs={8}>
                        <FaRegCreditCard size={40} className="mb-3" />
                        <Card.Title>Cash</Card.Title>
                        <Card.Text className="text-muted">Preferred payment method</Card.Text>
                      </Col>
                      <Col xs={4} className="text-center border-start">
                        <div className="text-muted pt-3">
                          <small>Cash Only</small>
                        </div>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={6} className="mb-4">
                <Card className="h-100">
                  <Card.Body>
                    <Row className="align-items-center">
                      <Col xs={8}>
                        <FaPaypal size={40} className="mb-3 text-secondary" />
                        <Card.Title>PayPal</Card.Title>
                        <Card.Text>thespencerhill@gmail.com</Card.Text>
                      </Col>
                      <Col xs={4} className="text-center border-start">
                        <QRCodeSVG value="https://paypal.me/thespencerhill" size={100} />
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={6} className="mb-4">
                <Card className="h-100">
                  <Card.Body>
                    <Row className="align-items-center">
                      <Col xs={8}>
                        <FaMobileAlt size={40} className="mb-3 text-secondary" />
                        <Card.Title>Venmo</Card.Title>
                        <Card.Text>@spencerdennishill</Card.Text>
                      </Col>
                      <Col xs={4} className="text-center border-start">
                        <QRCodeSVG value="venmo://paycharge?txn=pay&recipients=spencerdennishill" size={100} />
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={6} className="mb-4">
                <Card className="h-100">
                  <Card.Body>
                    <Row className="align-items-center">
                      <Col xs={8}>
                        <FaDollarSign size={40} className="mb-3 text-dark" />
                        <Card.Title>CashApp</Card.Title>
                        <Card.Text>$spencerdennishill</Card.Text>
                      </Col>
                      <Col xs={4} className="text-center border-start">
                        <QRCodeSVG value="https://cash.app/$spencerdennishill" size={100} />
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={6} className="mb-4">
                <Card className="h-100">
                  <Card.Body>
                    <Row className="align-items-center">
                      <Col xs={8}>
                        <FaRegCreditCard size={40} className="mb-3 text-secondary" />
                        <Card.Title>Zelle</Card.Title>
                        <Card.Text>503-610-8759</Card.Text>
                      </Col>
                      <Col xs={4} className="text-center border-start">
                        <QRCodeSVG value="tel:5036108759" size={100} />
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg={6} className="mb-4">
                <Card className="h-100">
                  <Card.Body>
                    <Row className="align-items-center">
                      <Col xs={8}>
                        <FaEthereum size={40} className="mb-3 text-dark" />
                        <Card.Title>MetaMask</Card.Title>
                        <Card.Text style={{fontSize: '0.85rem', wordBreak: 'break-all'}}>0xc882b4019011d6e34170485F54B3853Cdbd92f8A</Card.Text>
                      </Col>
                      <Col xs={4} className="text-center border-start">
                        <QRCodeSVG value="ethereum:0xc882b4019011d6e34170485F54B3853Cdbd92f8A" size={100} />
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section id="contact" className="mb-5 bg-light-gray">
            <h2 className="text-center mb-5 display-5 fw-bold">Contact Us</h2>
            <Row className="justify-content-center">
              <Col md={4} className="mb-4">
                <Card className="text-center h-100">
                  <Card.Body>
                    <FaEnvelope size={40} className="mb-3" />
                    <Card.Title>Email</Card.Title>
                    <Card.Text>spencerdhill@protonmail.com</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="mb-4">
                <Card className="text-center h-100">
                  <Card.Body>
                    <FaPhone size={40} className="mb-3" />
                    <Card.Title>Phone</Card.Title>
                    <Card.Text>503-610-8759</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section id="license-disclaimer" className="mb-5 text-center">
            <Container>
              <Card className="border-secondary">
                <Card.Body className="py-4">
                  <p className="mb-0 text-secondary">
                    <em>I am currently pursuing my CCB license. Until then there are some limitations on the work I can perform and total amounts I can receive per project.</em>
                  </p>
                </Card.Body>
              </Card>
            </Container>
          </section>
        </AnimatedSection>
      </Container>

      <footer className="bg-dark text-white text-center py-3">
        <Container>
          <p>&copy; 2025 Hill Handyman Services</p>
        </Container>
      </footer>
    </>
  );
}
