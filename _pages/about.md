---
layout: default
title: About
permalink: /
---

<div class="profile-container">
  <div class="profile-content">
    <div class="profile-text">


# About Me

I am a first-year PhD student in [Carlson School of Management](https://carlsonschool.umn.edu/) at the [University of Minnesota](https://twin-cities.umn.edu/). I am fortunate to be advised by [Dr. Ravi Bapna](https://carlsonschool.umn.edu/faculty/ravi-bapna). Prior to joining UMN, I spent two years as a Pre-Doc at the [Indian School of Business](https://www.isb.edu/).

My current research focuses on developing empirical methods to measure and benchmark the AI and technology orientation of corporate boards in US public companies. Another research focuses on evaluating leading large language models (LLMs) for triaging pandemic help requests from social media, with a focus on urgency scoring and bias analysis.

At the Indian School of Business, my research explored the social impact of memes at times of significant events, particularly studying public reactions to the overturning of Roe vs. Wade. I examined how memes influence digital political discourse and social media engagement across different platforms and demographics.

    </div>
    <div class="profile-image">
      <img src="{{ site.profile_pic | relative_url }}" alt="{{ site.profile_pic_alt }}" />
    </div>
  </div>
</div>

## Contact

<p>
<a href="mailto:{{ site.social.email }}"><i class="fas fa-envelope"></i> Email</a> / 
<a href="{{ site.social.linkedin }}"><i class="fab fa-linkedin"></i> LinkedIn</a> / 
<a href="{{ site.social.google_scholar }}"><i class="ai ai-google-scholar"></i> Google Scholar</a> / 
<a href="{{ site.social.twitter }}"><i class="fab fa-twitter"></i> Twitter</a> / 
<a href="/assets/pdf/CV.pdf"><i class="fas fa-file-pdf"></i> CV</a>
</p>



## News
<div class="news-scroll">
{% for news in site.news limit:7 %}
- **{{ news.date | date: "%b %d, %Y" }}**: {{ news.content | strip_html | strip }}
{% endfor %}
</div>
