<template>
  <div class="portfolio">

    <section class="portfolio-head">
      <b-row>
        <b-col md="8" offset-md="2">
          <img src="../../assets/projects/timelog/icon.png" alt="" class="portfolio-icon">
          <h1>
            Timelog - Trend Micro PH
          </h1>
          <p>
            Redesign Trend Micro timelog with dynamic background that change depending on time.
          </p>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <img src="../../assets/projects/timelog/timelog.gif" alt="">
        </b-col>
      </b-row>
    </section>

    <section>
      <b-row>
        <b-col>
          <h3>About the project</h3>
          <p>I been task to redesign and change the overall user experience of Trend Micro PH timelog. I design it more simpler, easy to use and a portal that can be set as a browser home screen.</p>
          <p>The one with batman at the back is my cube.😁</p>
        </b-col>
      </b-row>
    </section>

    <section>
      <b-row>
        <b-col md="4">
          <span>Morning</span>
          <img src="../../assets/projects/timelog/morning.png" alt="">
        </b-col>
        <b-col md="4">
          <span>Afternoon</span>
          <img src="../../assets/projects/timelog/afternoon.png" alt="">
        </b-col>
        <b-col md="4">
          <span>Evening</span>
          <img src="../../assets/projects/timelog/evening.png" alt="">
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
                Dribbble <a href="https://dribbble.com/shots/3840460-Timelog-Trend-Micro-PH-office-time-log">https://dribbble.com/shots/3840460-Timelog-Trend-Micro-PH-office-time-log</a>
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
              <li>Front-End</li>
              <li>Illustration</li>
              <li>Web Design</li>
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
    name: 'Portfolio'
  }
</script>
