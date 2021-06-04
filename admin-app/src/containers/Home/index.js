import React from 'react'
import Layout from "../../components/Layout"
import {Jumbotron} from "react-bootstrap"
const Home = (props) => {
    return (
        <div>
            <Layout>
                <Jumbotron style={{margin: "5rem", background: "#fff"}}className="text-center">
                    <h1>Welcome to Admin Dashboard</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe nisi vitae repudiandae praesentium quibusdam distinctio rerum, commodi aliquam nemo dolores placeat illo, sequi laborum ea quis eligendi doloribus nihil necessitatibus!
                    Sapiente fugit praesentium aliquid et deleniti eius aliquam reprehenderit commodi suscipit ut voluptas laudantium vero adipisci nemo repellendus, quas unde cupiditate sint dolorem repellat cum? Itaque vero laboriosam atque aperiam?</p>
                </Jumbotron>
            </Layout>
        </div>
    )
}

export default Home
