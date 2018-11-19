<template>
  <div class="portfolio">

    <section class="portfolio-head">
      <b-row>
        <b-col md="8" offset-md="2">
          <img src="../../assets/projects/backoffice/icon.png" alt="" class="portfolio-icon">
          <h1>
            Backoffice - Ducatus Global
          </h1>
          <p>
            Redesign Ducatus Global Cryto platform from ground up. Improve user exprience from Login to Tranding.
          </p>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <img src="../../assets/projects/backoffice/banner.png" alt="" class="clickable" v-viewer>
        </b-col>
      </b-row>
    </section>

    <section>
      <b-row>
        <b-col>
          <h3>About the project</h3>
          <p>Ducatus has given me the privillage to take this challenge to redesign and improve the user experience of their crypto platform. Completely revamp from ground up. Ducatus Backoffice has micro-services like Crypt Trading, E-Wallet, KYC <i>Know Your Customer</i> and alot of third party payment gateway that i need to improve too.</p>
          <p>Apart form designing the new information architecture of the site, i also created the components of every modules needed using Vue.js.</p>
        </b-col>
      </b-row>
    </section>

    <section>
      <b-row>
        <b-col>
          <h3>About the project</h3>
          <p>Here are some of the micro-services inside Ducatus Backoffice</p>
        </b-col>
      </b-row>
      <b-row class="mb-5">
        <b-col md="6" offset-md="3">
          <span>Dashboard</span>
          <img  @click="open($event)" src="../../assets/projects/backoffice/Dashboard.png" alt="" class="img-thumbnail clickable" v-viewer>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6" class="mb-5">
          <span>Registration</span>
          <img src="../../assets/projects/backoffice/Registration-Step2.png" alt="" class="img-thumbnail clickable" v-viewer>
        </b-col>
        <b-col md="6" class="mb-5">
          <span>KYC</span>
          <img src="../../assets/projects/backoffice/KYC-Upload.png" alt="" class="img-thumbnail clickable" v-viewer>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6" class="mb-5">
          <span>Network Tree</span>
          <img src="../../assets/projects/backoffice/MyNetwork-Genealogy.png" alt="" class="img-thumbnail clickable" v-viewer>
        </b-col>
        <b-col md="6" class="mb-5">
          <span>Two Factor Authentication</span>
          <img src="../../assets/projects/backoffice/Security-2FA.png" alt="" class="img-thumbnail clickable" v-viewer>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6" class="mb-5">
          <span>Crypto Wallet</span>
          <img src="../../assets/projects/backoffice/EWallet.png" alt="" class="img-thumbnail clickable" v-viewer>
        </b-col>
        <b-col md="6" class="mb-5">
          <span>Payment Gateway</span>
          <img src="../../assets/projects/backoffice/EWallet-Funding.png" alt="" class="img-thumbnail clickable" v-viewer>
        </b-col>
      </b-row>
      <b-row>
        <b-col md="6" class="mb-5">
          <span>Checkout</span>
          <img src="../../assets/projects/backoffice/EWallet-BuyPackage.png" alt="" class="img-thumbnail clickable" v-viewer>
        </b-col>
        <b-col md="6" class="mb-5">
          <span>Cart</span>
          <img src="../../assets/projects/backoffice/BuyPackage-Cart.png" alt="" class="img-thumbnail clickable" v-viewer>
        </b-col>
      </b-row>
    </section>

    <section class="portfolio-referrence">
      <b-row>
        <b-col>
          <div>
            <span class="label">Links</span><br>
            <ul class="list-unstyled">
              <li>
                Live View <a href="https://network.ducatus.net">https://network.ducatus.net</a>
              </li>
            </ul>
          </div>
          <div>
            <span class="label">Tool Used</span>
            <ul class="tools">
              <li>
                <i class="devicon-photoshop-plain" v-b-tooltip title="Adobe Photoshop"></i>
              </li>
              <li>
                <i class="devicon-illustrator-plain" v-b-tooltip title="Adobe Illustrator"></i>
              </li>
              <li>
                <i class="devicon-vuejs-plain-wordmark" v-b-tooltip title="Vue.JS"></i>
              </li>
              <li>
                <i class="devicon-html5-plain-wordmark" v-b-tooltip title="HTML 5"></i>
              </li>
              <li>
                <i class="devicon-css3-plain-wordmark" v-b-tooltip title="CSS 3"></i>
              </li>
            </ul>
          </div>
          <div>
            <span class="label">Category</span>
            <ul class="tags">
              <li>UI/UX</li>
              <li>Product Design</li>
              <li>Web Design</li>
              <li>Information Architecture</li>
              <li>Front-End</li>
            </ul>
          </div>
        </b-col>
      </b-row>
    </section>
    <section class="portfolio-bottom">
      <b-row>
        <b-col>
          <b-link to="/">
            View more project
          </b-link>
        </b-col>
      </b-row>
    </section>
  </div>

</template>

<script>
  export default {
    name: 'Backoffice'
  }
</script>
