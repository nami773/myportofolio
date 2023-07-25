import Container from "react-bootstrap/Container";

export const Section = (props) => {
  return (
    <section
      id={props.section_id}
      className="d-flex flex-column justify-content-center"
    >
      <Container data-aos="fade-up">
        <div className="section-title">
          <h2>{props.title}</h2>
        </div>
        {props.content}
      </Container>
    </section>
  );
};

export default Section;
