import React from "react";
import Layout from "./components/layout";

const App = () => {
  return (
    <main>
      <Layout>
        <div>
          <img source="https://avatars.githubusercontent.com/u/77506662?v=4" alt="Avatar of user"/>
          <h1>Helson Matos</h1>
          <h3>Uername:</h3>
          <span>helsonmatos</span>
          <div>
            <div>
              <h4>Followers</h4>
              <span>10</span>
            </div>
            <div>
              <h4>Starreds</h4>
              <span>10</span>
            </div>
            <div>
              <h4>Followings</h4>
              <span>5</span>
            </div>
          </div>          
        </div>
        <div>Repositories</div>
        <div>Starreds</div>
      </Layout>
    </main>
  )
}
export default App;