---
layout: default
title: About
permalink: /
---

# About Me

I am a first-year PhD student in [Carlson School of Management](https://carlsonschool.umn.edu/) at the [University of Minnesota](https://twin-cities.umn.edu/). I am fortunate to be advised by [Dr. Ravi Bapna](https://carlsonschool.umn.edu/faculty/ravi-bapna). Prior to joining UMN, I spent two years as a Pre-Doc at the [Indian School of Business](https://www.isb.edu/).

My current research focuses on developing empirical methods to measure and benchmark the AI and technology orientation of corporate boards in US public companies. Another research focuses on evaluating leading large language models (LLMs) for triaging pandemic help requests from social media, with a focus on urgency scoring and bias analysis.

At the Indian School of Business, my research explored the social impact of memes at times of significant events, particularly studying public reactions to the overturning of Roe vs. Wade. I examined how memes influence digital political discourse and social media engagement across different platforms and demographics.

## Contact

**Email**: [bobde005@umn.edu](mailto:bobde005@umn.edu) / 
**LinkedIn**: [linkedin.com/in/aditya-bobde](https://linkedin.com/in/aditya-bobde/) / 
**Google Scholar**: [Google Scholar](https://scholar.google.com/citations?user=qc6CJjYAAAAJ) / 
**CV**: [Download CV]({{ "assets/pdf/CV.pdf" | relative_url }})

## News

{% for news in site.news limit:7 %}
- **{{ news.date | date: "%b %d, %Y" }}**: {{ news.content | strip_html | strip }}
{% endfor %}