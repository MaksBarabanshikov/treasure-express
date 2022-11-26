import React from "react";
import { Container } from "../../../components/layouts/Container";
import { User } from "./User";
import { PersonalBoard } from "./PersonalBoard";
import { Row } from "../../../components/layouts/Row";

export const UserSection = () => {

  return (
    <section className="user-section mb-5">
      <Container>
        <Row>
          <User/>
          <PersonalBoard/>
        </Row>
      </Container>
    </section>
  );
};
