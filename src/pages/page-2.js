import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from 'components/Layout';
import Container from 'components/Container';

const SecondPage = () => {
  return (
    <Layout pageName="two">
      <Helmet>
        <title>About</title>
      </Helmet>
      <div class="bg-light">
      <div class="container py-5">
        <div class="row h-100 align-items-center py-5">
          <div class="col-lg-6">
            <h1 class="display-4 font-weight-light">About us</h1>
            <p class="lead text-muted mb-0">We're four passionate individauls interested in learning more about React. We hope you enjoy visiting our site.</p>
          </div>
          <div class="col-lg-6 d-none d-lg-block"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834136/illus_kftyh4.png" alt="" class="img-fluid" ></img> </div>
        </div>
      </div>
    </div>

    <div class="bg-light py-5">
    <div class="container py-5">
      <div class="row mb-4">
        <div class="col-lg-5">
          <h2 class="display-4 font-weight-light">Our team</h2>
        </div>
      </div>

      <div class="row text-center">

        <div class="col-xl-3 col-sm-6 mb-5">
          <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://static.wikia.nocookie.net/xbox/images/f/f2/Panda-gamerpic.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"></img>
            <h5 class="mb-0">Joel Allan Gelotin</h5><span class="small text-uppercase text-muted"></span>
          </div>
        </div>


        <div class="col-xl-3 col-sm-6 mb-5">
          <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://static.wikia.nocookie.net/xbox/images/b/ba/Dragon-gamerpic.jpg" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"></img>
            <h5 class="mb-0">Sean Mitchell </h5><span class="small text-uppercase text-muted"></span>
          </div>
        </div>

        <div class="col-xl-3 col-sm-6 mb-5">
          <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://static.wikia.nocookie.net/xbox/images/c/ca/Dog-gamerpic.jpg" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"></img>
            <h5 class="mb-0">Marco Botello</h5><span class="small text-uppercase text-muted"></span>
          </div>
        </div>

        <div class="col-xl-3 col-sm-6 mb-5">
          <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://static.wikia.nocookie.net/xbox/images/a/ae/Bubble-gum-gamerpic.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"></img>
            <h5 class="mb-0">Ernesto Hooghkirk</h5><span class="small text-uppercase text-muted"></span>
          </div>
        </div>

      </div>
    </div>
  </div>

    </Layout>
  );
};

export default SecondPage;
