import React from "react";
import { Container } from "../../../components/layouts/Container";
import { User } from "./User";
import { PersonalBoard } from "./PersonalBoard";
import { Row } from "../../../components/layouts/Row";

export const UserSection = () => {

  return (
    <section style={{ marginTop: 200 }} className="user-section">
      <Container>
        <Row>
          <User />
          <PersonalBoard />
        </Row>
      </Container>
    </section>
  );
};
