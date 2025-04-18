---
layout: base.njk
title: Curriculum Vitae
---

<link rel="stylesheet" href="{{ '/assets/css/cv.css' | url }}">

<div class="cv-container">
  <div class="cv-section">
    <h3>Personal Information</h3>
    <div class="personal-info-container">
      <div class="profile-photo-container">
        <img src="{{ '/assets/images/profile.jpg' | url }}" alt="Andrii Kuznietsov" class="profile-photo">
      </div>
      <div class="personal-info">
        <div class="personal-info-item">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          <span>Andrii Kuznietsov</span>
        </div>
        <div class="personal-info-item">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          <a href="mailto:tormozz48@gmail.com">tormozz48@gmail.com</a>
        </div>
        <div class="personal-info-item">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          <span>+48508527551</span>
        </div>
        <div class="personal-info-item">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          <span>Warsaw, 02-972, Poland</span>
        </div>
        <div class="personal-info-item">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>
          <span>Ukrainian</span>
        </div>
      </div>
    </div>
  </div>

  <div class="cv-section">
    <h3>Professional Summary</h3>
    <p>I am innovative Senior Software Engineer with 16 years of experience crafting high-impact solutions in backend and accounting systems. Adept at building robust modules and creating architectures from the ground up. Skilled in JavaScript, TypeScript, SQL, NodeJS, and React, with expertise in AWS, Docker, and Git. Eager to bring this expertise to a Senior Software Engineer role, driving impact innovation and exceeding expectations.</p>
  </div>

  <div class="cv-section">
    <h3>Work Experience</h3>

    <div class="job-item">
      <h4>Senior Software Engineer/Engineering Lead</h4>
      <h5>Osome</h5>
      <div class="job-date">September 2021 - Present</div>
      <ul>
        <li>Led platform team in accounting RnD department</li>
        <li>Significantly improved the performance of the Ledger accounting system, increasing Journal Entries generation speed by 60x</li>
        <li>Introduced an innovative auto-reconciliation algorithm based on heuristic matches</li>
        <li>Created a ticket-based flow system for accountants which significantly raised metric of on-time filling process up to 85%</li>
      </ul>
    </div>
    
    <div class="job-item">
      <h4>Senior Backend Engineer</h4>
      <h5>Admitad</h5>
      <div class="job-date">April 2021 - August 2021</div>
      <ul>
        <li>Created "bullet-proof" billing core module for advertising system based on NestJS framework</li>
      </ul>
    </div>
    
    <div class="job-item">
      <h4>Senior Backend Engineer</h4>
      <h5>Kaspersky Lab</h5>
      <div class="job-date">December 2017 - April 2021</div>
      <ul>
        <li>Designed architecture and setup from scratch "Kaspersky Automated Security Awareness Platform" (<a href="https://www.k-asap.com">k-asap.com</a>)</li>
        <li>Successfully built dynamic content update pipelines and content translation flow</li>
        <li>Implemented i18n including Arabic language support</li>
        <li>Developed algorithms for education plan creation</li>
      </ul>
    </div>
    
    <div class="job-item">
      <h4>UI Automation Engineer</h4>
      <h5>Yandex</h5>
      <div class="job-date">May 2013 - October 2017</div>
      <ul>
        <li>Created a platform for <a href="https://ru.bem.info">bem.info</a> website representing open-source BEM technology, tools, and libraries</li>
      </ul>
    </div>
  </div>

  <div class="cv-section">
    <h3>Education</h3>
    <h4>PhD in Physics</h4>
    <h5>Taurida National University</h5>
    <div class="job-date">September 2002 - May 2010</div>
  </div>

  <div class="cv-section">
    <h3>Technical Skills</h3>
    <div class="skills-list">
      <div class="skill-item">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">JavaScript</a>
      </div>
      <div class="skill-item">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
        <a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a>
      </div>
      <div class="skill-item">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>
        <a href="https://www.w3schools.com/sql/" target="_blank">SQL</a>
      </div>
      <div class="skill-item">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
        <a href="https://nodejs.org/" target="_blank">NodeJS</a>
      </div>
      <div class="skill-item">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
        <a href="https://www.postgresql.org/" target="_blank">PostgreSQL</a>
      </div>
      <div class="skill-item">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
        <a href="https://reactjs.org/" target="_blank">React</a>
      </div>
      <div class="skill-item">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>
        <a href="https://aws.amazon.com/" target="_blank">AWS</a>
      </div>
      <div class="skill-item">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 2l-3 16l-9 4l-9-4l3-16h18z"></path></svg>
        <a href="https://www.docker.com/" target="_blank">Docker</a>
      </div>
      <div class="skill-item">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18c-5 0-5-4-5-4V5h5l2 2h4l2-2h5v10s0 4-5 4s-8 0-8 0z"></path><path d="M9 11v4"></path><path d="M15 11v4"></path></svg>
        <a href="https://git-scm.com/" target="_blank">Git</a>
      </div>
      <div class="skill-item">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
        <a href="https://nestjs.com/" target="_blank">NestJS</a>
      </div>
      <div class="skill-item">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
        <a href="https://www.mongodb.com/" target="_blank">MongoDB</a>
      </div>
      <div class="skill-item">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v6.5l5-3v6l5-3v7l-5 3v-6l-5 3v-6l-5 3v-7l5-3z"></path></svg>
        <a href="https://www.java.com/" target="_blank">Java</a>
      </div>
      <div class="skill-item">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>
        <a href="https://golang.org/" target="_blank">Go</a>
      </div>
    </div>
  </div>

  <div class="cv-section">
    <h3>Languages</h3>
    <div class="languages-list">
      <div class="language-item">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.59 11.59a2 2 0 0 1 0 2.83l-8.49 8.49a2 2 0 0 1-2.83 0L2.1 14.76a2 2 0 0 1 0-2.83l8.49-8.49a2 2 0 0 1 2.83 0l8.17 8.15z"></path><circle cx="14.5" cy="9.5" r="1.5"></circle></svg>
        Russian
      </div>
      <div class="language-item">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.59 11.59a2 2 0 0 1 0 2.83l-8.49 8.49a2 2 0 0 1-2.83 0L2.1 14.76a2 2 0 0 1 0-2.83l8.49-8.49a2 2 0 0 1 2.83 0l8.17 8.15z"></path><circle cx="14.5" cy="9.5" r="1.5"></circle></svg>
        English
      </div>
      <div class="language-item">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.59 11.59a2 2 0 0 1 0 2.83l-8.49 8.49a2 2 0 0 1-2.83 0L2.1 14.76a2 2 0 0 1 0-2.83l8.49-8.49a2 2 0 0 1 2.83 0l8.17 8.15z"></path><circle cx="14.5" cy="9.5" r="1.5"></circle></svg>
        Ukrainian
      </div>
      <div class="language-item">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.59 11.59a2 2 0 0 1 0 2.83l-8.49 8.49a2 2 0 0 1-2.83 0L2.1 14.76a2 2 0 0 1 0-2.83l8.49-8.49a2 2 0 0 1 2.83 0l8.17 8.15z"></path><circle cx="14.5" cy="9.5" r="1.5"></circle></svg>
        Polish
      </div>
    </div>
  </div>

  <div class="cv-section">
    <h3>Personal Projects</h3>
    <div class="projects-list">
      <div class="project-item">
        <h4><a href="https://www.npmjs.com/package/@tormozz48/azure-pipelines-logger" target="_blank">@tormozz48/azure-pipelines-logger</a></h4>
        <p>Useful logger for scripts which run in azure pipelines</p>
      </div>
      <div class="project-item">
        <h4><a href="https://www.npmjs.com/package/@tormozz48/xlsx-template" target="_blank">@tormozz48/xlsx-template</a></h4>
        <p>Library for applying your data for given xlsx template with some advanced features</p>
      </div>
      <div class="project-item">
        <h4><a href="https://www.npmjs.com/package/license-discovery" target="_blank">license-discovery</a></h4>
        <p>License discovery tool</p>
      </div>
      <div class="project-item">
        <h4><a href="https://www.npmjs.com/package/algebraic-captcha" target="_blank">algebraic-captcha</a></h4>
        <p>NodeJS math captcha package with algebraic formulas</p>
      </div>
      <div class="project-item">
        <h4><a href="https://www.npmjs.com/package/node-lokalise-api" target="_blank">node-lokalise-api</a></h4>
        <p>Lokalise API</p>
      </div>
      <div class="project-item">
        <h4><a href="https://www.npmjs.com/package/events-extra" target="_blank">events-extra</a></h4>
        <p>NodeJS EventEmitter with some advanced features</p>
      </div>
    </div>
  </div>

  <div class="cv-section">
    <h3>Links</h3>
    <div class="links-list">
      <div class="link-item">
        <!-- GitHub Icon -->
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
        <a href="{{ site.social.github }}" target="_blank">GitHub</a>
      </div>
      <div class="link-item">
        <!-- LinkedIn Icon -->
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
        <a href="{{ site.social.linkedin }}" target="_blank">LinkedIn</a>
      </div>
      <div class="link-item">
        <!-- LeetCode Icon -->
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.111.744 1.715.744a2.314 2.314 0 0 0 1.715-.744c.467-.467.702-1.111.702-1.823s-.235-1.357-.702-1.824l-2.685-2.606c-.953-.915-2.257-1.439-3.638-1.439-1.392 0-2.696.524-3.649 1.439l-4.319 4.38c-.953.954-1.477 2.258-1.477 3.637s.524 2.684 1.477 3.637l4.332 4.332c.953.953 2.255 1.438 3.636 1.438s2.683-.485 3.636-1.438l2.685-2.606c.466-.467.701-1.111.701-1.823s-.235-1.356-.701-1.823c-.467-.467-1.112-.744-1.823-.744s-1.357.277-1.823.744z"></path>
        </svg>
        <a href="{{ site.social.leetcode }}" target="_blank">LeetCode</a>
      </div>
      <div class="link-item">
        <!-- HackerRank Icon -->
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 0L4 6v12l8 6 8-6V6z"></path>
          <path d="M9 8v8M15 8v8M9 12h6"></path>
        </svg>
        <a href="{{ site.social.hackerrank }}" target="_blank">HackerRank</a>
      </div>
      <div class="link-item">
        <!-- Stepik Icon -->
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15H7v-4h4v4zm0-6H7V7h4v4zm6 6h-4v-4h4v4zm0-6h-4V7h4v4z"></path>
        </svg>
        <a href="{{ site.social.stepik }}" target="_blank">Stepik</a>
      </div>
      <div class="link-item">
        <!-- Twitter/X Icon -->
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
        </svg>
        <a href="{{ site.social.twitter }}" target="_blank">X (Twitter)</a>
      </div>
    </div>
  </div>

  <div class="cv-section">
    <h3>Hobbies</h3>
    <div class="hobbies-list">
      <div class="hobby-item">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="5.5" cy="17.5" r="3.5"></circle><circle cx="18.5" cy="17.5" r="3.5"></circle><path d="M15 6a1 1 0 100-2 1 1 0 000 2zm-3 11.5V14l-3-3 4-3 2 3h2"></path></svg>
        Cycling
      </div>
      <div class="hobby-item">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2v4"></path><path d="M12 18v4"></path><path d="M4.93 4.93l2.83 2.83"></path><path d="M16.24 16.24l2.83 2.83"></path><path d="M2 12h4"></path><path d="M18 12h4"></path><path d="M4.93 19.07l2.83-2.83"></path><path d="M16.24 7.76l2.83-2.83"></path></svg>
        Football
      </div>
      <div class="hobby-item">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12c0 2.76-2.24 5-5 5s-5-2.24-5-5 2.24-5 5-5 5 2.24 5 5z"></path><path d="M21 12c0 1.65-1.35 3-3 3s-3-1.35-3-3 1.35-3 3-3 3 1.35 3 3z"></path></svg>
        Swimming
      </div>
    </div>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', () => {
    // Add hover effects to CV sections
    const cvSections = document.querySelectorAll('.cv-section');

    cvSections.forEach(section => {
      section.addEventListener('mouseenter', () => {
        section.style.transform = 'translateY(-5px)';
        section.style.boxShadow = '0 8px 15px rgba(0, 0, 0, 0.1)';
      });

      section.addEventListener('mouseleave', () => {
        section.style.transform = 'translateY(0)';
        section.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
      });
    });
  });
</script>
