import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Bread = ({ itemsBreads }) => {
  return (
    <Row>
      <Col>
      <Breadcrumb>
        {
          itemsBreads.map((item, key) => {
            return (
              <Breadcrumb.Item key={ key } href="#">
                { item }
              </Breadcrumb.Item>
            )
          })
        }
      </Breadcrumb>
      </Col>
    </Row>
  );
}

export default Bread;