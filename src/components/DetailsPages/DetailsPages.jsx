import React, { useState } from "react";
import DetailsImg from "../../assets/images/proj-details.png";
import { Container, Row, Col } from "react-bootstrap";

const DetailsPages = ({ data }) => {
  return (
    <>
      <section className="Details">
        <Container>
          <Row>
            <Col md={5}>
              <img src={DetailsImg} className="img-fluid" alt="" />
            </Col>
            <Col md={7}>
              <div className="DetailseContent">
                <h4>{data?.service_title}</h4>
                {data?.service_details}
              </div>
            </Col>

            <h4 className="mt-5 mb-5 text-color">BUSINESS SEGMENT</h4>
            {data?.InboundServicesData.map((item, index) => (
              <Col md={6} key={index}>
                <div className="BusinessSegment">
                  <img src={item.src} alt="" />
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </Col>
            ))}

            <h4 className="mt-5 mb-5 text-color">WHY US!</h4>

            <Col md={6}>
              <div className="BusinessSegment">
                <img src={data?.infrastructure?.icon} alt="" />
                <h4>{data?.infrastructure?.title}</h4>
                <ul>
                  {data?.infrastructure?.data_list.length > 0 &&
                    data?.infrastructure?.data_list.map((item) => (
                      <li>{item}</li>
                    ))}
                </ul>
              </div>
            </Col>
            <Col md={6}>
              <div className="BusinessSegment">
                <img src={data?.value_edition?.icon} alt="" />
                <h4>{data?.value_edition?.title}</h4>
                <ul>
                  {data?.value_edition?.data_list.length > 0 &&
                    data?.value_edition?.data_list.map((item) => (
                      <li>{item}</li>
                    ))}
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default DetailsPages;
