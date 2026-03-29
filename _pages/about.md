---
layout: default
title: About
permalink: /
---

<div class="clearfix">
<img src="{{ site.profile_pic | relative_url }}" alt="{{ site.profile_pic_alt }}" class="profile-float-img" />

<h2>About Me</h2>

<p>I am a second-year PhD student in Information Systems at the <a href="https://carlsonschool.umn.edu/">Carlson School of Management</a>, <a href="https://twin-cities.umn.edu/">University of Minnesota</a>, where I am advised by <a href="https://carlsonschool.umn.edu/faculty/ravi-bapna">Ravi Bapna</a>. Prior to joining UMN, I worked as a Pre-Doctoral Researcher at the <a href="https://www.isb.edu/">Indian School of Business</a> under the guidance of <a href="https://www.isb.edu/faculty-and-research/faculty-directory/sumeet-kumar">Sumeet Kumar</a>.</p>

<p>My research examines how advances in artificial intelligence influence firm behavior, governance, and decision-making. One stream studies how exposure to leading technology firms through board interlocks shapes how other firms respond to major technological shocks, such as the release of ChatGPT. I focus on identifying causal effects of information and knowledge diffusion at the board level.</p>

<p>A second stream focuses on multi-agent AI systems, particularly how multiple AI agents communicate, coordinate, and collaborate to solve complex tasks. I study how different interaction structures, such as debate, refinement, and role specialization, affect collective performance and decision quality.</p>

<p>At the Indian School of Business, my research explored the social impact of memes during major societal events, including public reactions to the overturning of Roe v. Wade, with a focus on how digital content shapes political discourse and engagement.</p>
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
