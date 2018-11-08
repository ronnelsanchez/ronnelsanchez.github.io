<template>

<div class="work">

  <Welcome/>

  <b-row>

    <router-link to="/nals" class="col-12 col-md-6 portfolio-item" tag="div">
      <img src="../assets/projects/nals/nals-thumb.png" alt="">
      <h4>NALS - Trend Micro's leave system app</h4>
      <p>A mobile leave system app</p>
      <ul class="tags">
        <li>UI/UX</li>
        <li>Product Design</li>
        <li>App</li>
        <li>Illustration</li>
        <li>Information Architecture</li>
      </ul>
    </router-link>

    <router-link to="/timelog" class="col-12 col-md-6 portfolio-item" tag="div">
      <img src="../assets/projects/timelog/timelog.gif" alt="">
      <h4>Timelog - Trend Micro PH office</h4>
      <p>Redesigning the new Trend Micro Timelog</p>
      <ul class="tags">
        <li>UI/UX</li>
        <li>Front-End</li>
        <li>Illustration</li>
        <li>Web Design</li>
      </ul>
    </router-link>

    <router-link to="/reformat" class="col-12 col-md-6 portfolio-item" tag="div">
      <img src="../assets/projects/reformat/diy-tool-d.gif" alt="">
      <h4>DIY Reformat Tool - Trend Micro PH</h4>
      <p>Trend Micro's do it yourself reformating tool.</p>
      <ul class="tags">
        <li>UI/UX</li>
        <li>Product Design</li>
        <li>Illustration</li>
        <li>Information Architecture</li>
      </ul>
    </router-link>

    <b-col cols="12" md="6" class="portfolio-item">
      <a href="https://dribbble.com/ronnelsanchez">
        <img src="../assets/projects/icons/icon-thumb.png" alt="">
      </a>
      <h4>Icons, Logos and Illustrations</h4>
      <p>Sets of icon, logos and illustration from various projects.</p>
      <ul class="tags">
        <li>Graphic Design</li>
        <li>Illustration</li>
      </ul>
    </b-col>

  </b-row>

</div>

</template>

<script>
import Welcome from '@/components/Welcome'

export default {
  name: 'Work',
  components: {
    Welcome
  }
}
</script>
