import React, {useEffect} from 'react'
import Layout from "../../components/Layout"
import {Jumbotron, Row, Col, Container} from "react-bootstrap"
import "./style.css"
const Home = (props) => {

 
    return (
            <Layout>
                <Container fluid>
                <Row>
                    <Col md={2} className="sidebar">Sidebar</Col>
                    <Col md={10} style={{marginLeft: "auto"}}>Container</Col>
                </Row>
                </Container>
               
                {/* <Jumbotron style={{margin: "5rem", background: "#fff"}}className="text-center">
                    <h1>Welcome to Admin Dashboard</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe nisi vitae repudiandae praesentium quibusdam distinctio rerum, commodi aliquam nemo dolores placeat illo, sequi laborum ea quis eligendi doloribus nihil necessitatibus!
                    Sapiente fugit praesentium aliquid et deleniti eius aliquam reprehenderit commodi suscipit ut voluptas laudantium vero adipisci nemo repellendus, quas unde cupiditate sint dolorem repellat cum? Itaque vero laboriosam atque aperiam?</p>
                </Jumbotron> */}
            </Layout>
    )
}

export default Home
