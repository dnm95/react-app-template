import React, { useEffect } from "react";
import { arrayOf, shape, func } from "prop-types";
import { connect } from "react-redux";
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, CardImg, Button } from "reactstrap";
import actions from "../actions/test";
import selectors from "../selectors/test";

function Home(props) {
  const { repos, onRequestRepos } = props;

  useEffect(() => {
    onRequestRepos();
  }, []);

  return (
    <div className="App">
      <Container className="mt-5 mb-5">        
        <Row>
          {repos && repos.map((repo) => (
            <Col sm="4" className="mb-4" key={repo.id}>
              <Card>
                <CardBody>
                  <CardImg top src={repo.owner.avatar_url} />
                  <CardTitle className="mt-2">{repo.name}</CardTitle>
                  <CardText>{repo.language}</CardText>
                  <Button>Ver repositorio</Button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => ({
  repos: selectors(state).test.repos,
});

const mapDispatchToProps = (dispatch) => ({
  onRequestRepos() {
    dispatch({
      type: actions.REQUEST_REPOS,
      payload: {
        username: "dnm95",
      },
    });
  },
});

Home.defaultProps = {
  repos: [],
};

Home.propTypes = {
  repos: arrayOf(shape()),
  onRequestRepos: func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
