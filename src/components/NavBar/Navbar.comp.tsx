import styles from "./Navbar.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

const Navbar = () => {
  return (
    <Container className={styles.container} fluid>
      <Row>
        <Col as={"h2"} className={styles.name}>
          <Link href="/home">Aphonso Miguel.</Link>
        </Col>
      </Row>

      <Row className={styles.header}>
        <Col className={styles.categorySelector}>
          <Link href="/music">Discografia.</Link>
        </Col>
        <Col className={styles.categorySelector}>
          <Link href="/photo">Fotografia.</Link>
        </Col>
        <Col className={styles.categorySelector}>
          <Link href="/video">Vídeografia.</Link>
        </Col>
        <Col className={styles.categorySelector}>
          <Link href="/dev">Desenvolvimento.</Link>
        </Col>
      </Row>

      <Row className={styles.about}></Row>
    </Container>
  );
};

export default Navbar;
