---
layout: default
title: About
permalink: /
---

<div class="clearfix">
<img src="{{ site.profile_pic | relative_url }}" alt="{{ site.profile_pic_alt }}" class="profile-float-img" />

<h2>About Me</h2>

<p>I am a third-year PhD student in Information Systems at the <a href="https://carlsonschool.umn.edu/">Carlson School of Management</a>, <a href="https://twin-cities.umn.edu/">University of Minnesota</a>, where I am advised by <a href="https://carlsonschool.umn.edu/faculty/kartik-ganju">Kartik Ganju</a>.</p>

<p>My research examines how digital technologies shape organizational decision-making and performance. I study Drone as First Responder (DFR) programs to understand how emerging technologies reshape public service delivery, with a focus on public safety and the effective use of public resources. My other work examines corporate board networks and firms’ responses to advances in artificial intelligence.</p>

<p>Prior to joining UMN, I worked as a Pre-Doctoral Researcher at the <a href="https://www.isb.edu/">Indian School of Business</a> under the guidance of <a href="https://www.isb.edu/faculty-and-research/faculty-directory/sumeet-kumar">Sumeet Kumar</a>. My research there examined social media memes, online engagement, and public discourse surrounding major societal events.</p>
</div>

## Contact

<p class="contact-links">
  <a href="mailto:{{ site.social.email }}"><i class="fas fa-envelope"></i> Email</a>
  <a href="{{ site.social.linkedin }}"><i class="fab fa-linkedin"></i> LinkedIn</a>
  <a href="{{ site.social.google_scholar }}"><i class="ai ai-google-scholar"></i> Google Scholar</a>
  <a href="{{ site.social.github }}"><i class="fab fa-github"></i> GitHub</a>
  <a href="{{ '/assets/pdf/CV.pdf' | relative_url }}"><i class="fas fa-file-pdf"></i> CV</a>
</p>

## News

<ul class="news-scroll">
{% for news in site.news limit:7 %}
  <li><strong>{{ news.date | date: "%b %d, %Y" }}</strong>: {{ news.content | strip_html | strip }}</li>
{% endfor %}
</ul>
