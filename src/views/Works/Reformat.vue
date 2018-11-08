<template>
  <div class="portfolio">

    <section class="portfolio-head">
      <b-row>
        <b-col md="8" offset-md="2">
          <img src="../../assets/projects/reformat/icon.png" alt="" class="portfolio-icon">
          <h1>
            DIY Reformat Tool - Trend Micro PH
          </h1>
          <p>
            Trend Micro's <i>do it yourself</i> reformating tool.
          </p>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <img src="../../assets/projects/reformat/diy-tool-d.gif" alt="">
        </b-col>
      </b-row>
    </section>

    <section>
      <b-row>
        <b-col>
          <h3>About the project</h3>
          <p>This project I work on is to solve the problem for IT engineers and Employee of Trend Micro to fasten the reformating process but assuring the steps are simplified and easy to understand.</p>
          <p>I did the overall user and system research also information architecture, visual design and illustration.</p>
        </b-col>
      </b-row>
    </section>

    <section>
      <b-row>
        <b-col>
          <h3>Problems</h3>
          <p>Simplifing a critical task like Reformating a computer is really a challenge. I need to consider this things:</p>
          <b-row>
            <b-col md="4">
              <b>Not all user knows how to format</b>
              <p>Though we are a tech company, we still have different skill sets which not include troubleshooting computer problems</p>
            </b-col>
            <b-col md="4">
              <b>User available time</b>
              <p>As an agile company we need to make things fast. The solution should be easy and fast with no need to learn new things to accomplish the task.</p>
            </b-col>
            <b-col md="4">
              <b>System Requirements</b>
              <p>Reformating needs to follow certain steps one at a time. Skipping on steps will lead to permanent issue to a computer.</p>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </section>

    <section>
      <b-row>
        <b-col>
          <h3>Solutions</h3>
          <p>Considering the User and Technology is a must. Making sure that the user can easly follow the instruction and yet without the need to have a skill to do the task.</p>
          <b-row>
            <b-col md="4">
              <b>Make the instruction clear</b>
              <p>I added illustration to show the user what needed to be done. Also making the wordings less <i>system language</i>.</p>
            </b-col>
            <b-col md="4">
              <b>Lessen the steps</b>
              <p>Working with the IT team. We manage to lessen the steps from 15 to 6 making it more easy for the user to follow and less stressfull.</p>
            </b-col>
            <b-col md="4">
              <b>Progress and Status</b>
              <p>Apart form showing some illustration, Displaying the status and progress makes the user feel more engage lessen the rate missing some steps.</p>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </section>

    <section>
      <b-row>
        <b-col>
          <h3>Visual Design</h3>
          <b-row>
            <b-col>
              <img src="../../assets/projects/reformat/diy-d.png" alt="" class="mb">
            </b-col>
          </b-row>
          <b-row>
            <b-col md="4">
              <img src="../../assets/projects/reformat/diy-auto.png" alt="">
            </b-col>
            <b-col md="4">
              <img src="../../assets/projects/reformat/diy-backup.png" alt="">
            </b-col>
            <b-col md="4">
              <img src="../../assets/projects/reformat/diy-computer-name.png" alt="">
            </b-col>
            <b-col md="4">
              <img src="../../assets/projects/reformat/diy-lan.png" alt="">
            </b-col>
            <b-col md="4">
              <img src="../../assets/projects/reformat/diy-power.png" alt="">
            </b-col>
            <b-col md="4">
              <img src="../../assets/projects/reformat/diy-restart.png" alt="">
            </b-col>
            <b-col md="6">
              <img src="../../assets/projects/reformat/diy-system.png" alt="">
            </b-col>
            <b-col md="6">
              <img src="../../assets/projects/reformat/diy-done.png" alt="">
            </b-col>
          </b-row>
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
                Dribbble <a href="https://dribbble.com/shots/3954976-DIY-Reformat-Tool-Steps">https://dribbble.com/shots/3954976-DIY-Reformat-Tool-Steps</a>
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
            </ul>
          </div>
          <div>
            <span class="label">Category</span>
            <ul class="tags">
              <li>UI/UX</li>
              <li>Product Design</li>
              <li>Illustration</li>
              <li>Information Architecture</li>
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
