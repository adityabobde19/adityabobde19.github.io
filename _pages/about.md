---
layout: default
title: About
permalink: /
---

<div class="clearfix">
<img src="{{ site.profile_pic | relative_url }}" alt="{{ site.profile_pic_alt }}" class="profile-float-img" />

<h2>About Me</h2>

<p>I am a first-year PhD student in <a href="https://carlsonschool.umn.edu/">Carlson School of Management</a> at the <a href="https://twin-cities.umn.edu/">University of Minnesota</a>. I am fortunate to be advised by <a href="https://carlsonschool.umn.edu/faculty/ravi-bapna">Dr. Ravi Bapna</a>. Prior to joining UMN, I spent two years as a Pre-Doc at the <a href="https://www.isb.edu/">Indian School of Business</a>.</p>

<p>My current research focuses on developing empirical methods to measure and benchmark the AI and technology orientation of corporate boards in US public companies. Another research focuses on evaluating leading large language models (LLMs) for triaging pandemic help requests from social media, with a focus on urgency scoring and bias analysis.</p>

<p>At the Indian School of Business, my research explored the social impact of memes at times of significant events, particularly studying public reactions to the overturning of Roe vs. Wade. I examined how memes influence digital political discourse and social media engagement across different platforms and demographics.</p>
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
