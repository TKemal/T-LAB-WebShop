import React from 'react'
import { Row, Col } from 'react-bootstrap'
import product from '../products'

const HomeScreen = () => {
  return (
    <>
      <h1>Latest Products</h1>

      <Row>
        {product.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <h3>{product.name}</h3>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default HomeScreen
