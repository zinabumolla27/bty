import React, { useState } from "react";
import { Card, Rate, Pagination, Row, Col } from "antd";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    photo: "https://randomuser.me/api/portraits/men/1.jpg",
    feedback: "Amazing service, highly recommended!",
    rating: 5,
  },
  {
    id: 2,
    name: "Jane Smith",
    photo: "https://randomuser.me/api/portraits/women/2.jpg",
    feedback: "Great experience, very professional!",
    rating: 4,
  },
  {
    id: 3,
    name: "Michael Johnson",
    photo: "https://randomuser.me/api/portraits/men/3.jpg",
    feedback: "Good quality, would use again.",
    rating: 4,
  },
  {
    id: 4,
    name: "Emily Davis",
    photo: "https://randomuser.me/api/portraits/women/4.jpg",
    feedback: "The service exceeded my expectations.",
    rating: 5,
  },
  {
    id: 5,
    name: "Chris Lee",
    photo: "https://randomuser.me/api/portraits/men/5.jpg",
    feedback: "Absolutely wonderful!, the team really helpfull.",
    rating: 5,
  },
  {
    id: 6,
    name: "Sarah Williams",
    photo: "https://randomuser.me/api/portraits/women/6.jpg",
    feedback: "The team was really helpful and professional.",
    rating: 4,
  },
  {
    id: 7,
    name: "David Brown",
    photo: "https://randomuser.me/api/portraits/men/7.jpg",
    feedback: "I am very satisfied with the service provided.",
    rating: 5,
  },
  {
    id: 8,
    name: "Olivia Johnson",
    photo: "https://randomuser.me/api/portraits/women/8.jpg",
    feedback: "The process was smooth and easy. Would definitely recommend!",
    rating: 5,
  },
  {
    id: 9,
    name: "Daniel White",
    photo: "https://randomuser.me/api/portraits/men/9.jpg",
    feedback: "Great customer support and fast response times.",
    rating: 4,
  },
  {
    id: 10,
    name: "Sophia Martinez",
    photo: "https://randomuser.me/api/portraits/women/10.jpg",
    feedback: "I love the service, very reliable and fast!",
    rating: 5,
  },
];

const TestimonialCard = ({ testimonial }) => (
  <Card style={{ width: "100%", textAlign: "center" }}>
    <img
      src={testimonial.photo}
      alt={testimonial.name}
      style={{
        width: "80px",
        borderRadius: "50%",
        marginBottom: "10px",
      }}
    />
    <h3>{testimonial.name}</h3>
    <Rate disabled defaultValue={testimonial.rating} />
    <p>{testimonial.feedback}</p>
  </Card>
);

const TestimonialCarousel = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const testimonialsPerPage = 4; // Display 4 testimonials per page

  const indexOfLastTestimonial = currentPage * testimonialsPerPage;
  const indexOfFirstTestimonial = indexOfLastTestimonial - testimonialsPerPage;
  const currentTestimonials = testimonials.slice(
    indexOfFirstTestimonial,
    indexOfLastTestimonial
  );

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Row gutter={[16, 16]} justify="center">
        {currentTestimonials.map((testimonial) => (
          <Col
            key={testimonial.id}
            xs={24}
            sm={12}
            md={8}
            lg={6} // Adjust based on screen size
            xl={6}
          >
            <TestimonialCard testimonial={testimonial} />
          </Col>
        ))}
      </Row>
      <Pagination
        current={currentPage}
        total={testimonials.length}
        pageSize={testimonialsPerPage}
        onChange={onPageChange}
        style={{
          textAlign: "center",
          marginTop: "20px",
        }}
      />
    </div>
  );
};

export default TestimonialCarousel;
