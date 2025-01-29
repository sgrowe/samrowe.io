+++
title = "Sam Rowe — CV"
template = "cv.html"
+++

# [Sam Rowe — Senior Full Stack Developer](https://samrowe.io/)

<div class="pt-2 space-y-3">

[samrowe.io](https://samrowe.io/)

[github.com/sgrowe](https://github.com/sgrowe/)

[sam@samrowe.io](mailto:sam@samrowe.io)

London, UK

</div>

## Professional Summary

I’m an experienced Full Stack developer specialising in [React](https://react.dev/), [TypeScript](https://www.typescriptlang.org) and [Rust](https://www.rust-lang.org/), with a particular affinity for statically typed languages. I love working in highly collaborative teams with a strong focus on the user’s needs.

## Key Technical Skills

- React <span class="opacity-80 font-light">(Advanced)</span>
- TypeScript/JavaScript <span class="opacity-80 font-light">(Advanced)</span>
- GraphQL <span class="opacity-80 font-light">(Advanced)</span>
- Node.js <span class="opacity-80 font-light">(Advanced)</span>
- Rust <span class="opacity-80 font-light">(Advanced)</span>
- Swift <span class="opacity-80 font-light">(Intermediate)</span>
- Python <span class="opacity-80 font-light">(Intermediate)</span>

## Professional Experience

### Senior Software Engineer | [Slice Mobile](https://slicemobile.com/)

Nov 2023 – present

- Created [React Native](https://reactnative.dev/) iOS and Android mobile apps ([rated <span class="lining-nums">4.9 out of 5</span> stars](https://apps.apple.com/gb/app/slice-mobile/id6470301393)) for [Slice](https://slicemobile.com), the UK's first eSIM-only mobile network
- Rapidly built and shipped new app features (such as a refer-a-friend competition) to grow the customer base over 300% in just four months
- Served as Acting Tech Lead for four weeks during the Tech Lead's absence, managing production deployments and triaging and resolving complex production issues
- Developed a scalable [GraphQL](https://graphql.org/) API server using [TypeScript](https://www.typescriptlang.org/) and [Node.js](https://nodejs.org), providing a secure and scalable interface to multiple backend microservices
- Ensured high quality through over 80% unit test coverage using [Jest](https://jestjs.io/), and end-to-end tests using [Detox](https://github.com/wix/Detox)
- Dramatically sped up our end-to-end tests in [CI](https://martinfowler.com/articles/continuousIntegration.html), from roughly an hour to 20 minutes, by using [sccache](https://github.com/mozilla/sccache#readme) for distributed build caching
- Built a marketing website using [React](https://react.dev/) and [Next.js](https://nextjs.org/), integrating Dato CMS for dynamic content management

### Tech Lead | [Multivitamin Studio](https://multivitamin.studio/)

Oct 2022 – July 2023

- Grew the capabilities of the development team by analysing and identifying skills gaps in the current team, mentoring existing engineers, and leading the interviewing and hiring of two additional engineers
- Built a sophisticated drone video streaming platform for [Skybound Rescuer](https://skyboundrescuerproject.com/) which allowed non-technical users to create a flight path for a drone in their web browser, and then view the real-time video stream from the drone as it then carried out this flight plan
  - Used [MQTT](https://mqtt.org/), [Redis](https://redis.io/) and microservices hosted on [AWS](https://aws.amazon.com/) to allow users to control DJI drones remotely from the Skybound Rescuer web app
  - These services were deployed as [Docker](https://www.docker.com/) containers onto a [Kubernetes](https://kubernetes.io/) cluster, with [Terraform](https://www.terraform.io/) code used to provision the cluster
  - Collaborated with the client extensively to achieve the right balance of cost and performance for the video streaming servers, which were [nginx](https://nginx.org/) servers using [RTMP](https://github.com/arut/nginx-rtmp-module)
- Led development of [Troopr.co.uk](https://www.troopr.co.uk/), a comprehensive careers and events platform for military veterans, built using [React](https://react.dev/), [Next.js](https://nextjs.org/), [PostgreSQL](https://www.postgresql.org/)
- Resolved [GraphQL](https://graphql.org/) API performance issues for [The Racing Manager](https://theracingmanager.com/), reducing page load times for their biggest customers from over a minute to less than 5 seconds
- Led technical migration for [SilverRail](https://silverrailtech.com/), transitioning their existing WordPress site seamlessly to Sanity CMS and React, reducing maintenance costs and greatly increasing site performance

### Software Engineer (Mid II), Senior Software Engineer | [Red Badger](https://red-badger.com/)

March 2019 – Sept 2022

<br />

- Achieved promotion from Software Engineer (Mid II) to Senior Software Engineer
- Levi’s Assortify:
  - Built a [React](https://react.dev/) app which used [Relay](https://relay.dev/) to query a Node.js [GraphQL](https://graphql.org/) server
  - The backend was deployed to [AWS ECS Fargate](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html) as a [Docker](https://www.docker.com/) container, and used [Prisma](https://www.prisma.io/) to query an [Aurora Serverless PostgreSQL](https://aws.amazon.com/rds/aurora/serverless/) database.
  - Led the team developing the “briefing” feature, used for a critical phase of Levi’s product development lifecycle
  - Participated in user engagement sessions to refine product requirements
- Nando’s ID:
  - Carried out a major migration of all Nando’s user accounts from one identity provider to another to improve the uptime and security of all of Nando’s apps and web services
  - Developed high-performance REST and [GraphQL](https://graphql.org/) APIs in [Rust](https://www.rust-lang.org/) to act as an interface in front of the existing identity provider, enabling us to switch identity provider without changing the interface exposed to other teams at Nando’s
  - Collaborated closely with teams across the organisation to that this transition was as low-risk and seamless as possible
  - Deployed using [Kubernetes](https://kubernetes.io/) and [Istio](https://istio.io/) service mesh
- MHRA microservices platform:
  - Created [a microservices platform](https://github.com/MHRA/products) built upon [Kubernetes](https://kubernetes.io/), [Istio](https://istio.io/) service mesh, and [Terraform](https://www.terraform.io/)
  - Implemented monitoring using [Prometheus](https://prometheus.io/) and [Azure Monitor](https://learn.microsoft.com/en-us/azure/azure-monitor/overview)

{% cv_concise_job_summary() %}

### Full Stack Engineer | [Entale](https://www.dmgventures.co.uk/portfolio/dmgt-acquires-podcast-innovator-entale/)

March 2019 – Sept 2022

- As the first engineering hire at an early stage startup, I worked across the entire stack to help rapidly build our innovative podcast app and backend services
- Created a fast and highly interactive [React Native](https://reactnative.dev/) mobile app which was eventually [acquired](https://www.dmgventures.co.uk/portfolio/dmgt-acquires-podcast-innovator-entale/)
- Created a podcast web player using [React](https://react.dev/)
- Provisioned infrastructure on AWS using [Terraform](https://www.terraform.io/)
- Developed REST APIs in Node.js, and deployed them using [Docker](https://www.docker.com/)
- Built an distributed podcast feed scraping service in [Python](https://www.python.org/) (using [Scrapy](https://scrapy.org/) and [Redis](https://redis.io/)) which fed data into an [Elasticsearch](https://www.elastic.co/elasticsearch) search service

{% end %}

{% cv_concise_job_summary() %}

### JavaScript Engineer | [Qubit](https://www.coveo.com/en/company/news-releases/2021/coveo-acquires-qubit)

Nov 2016 – Oct 2017

{% end %}

{% cv_concise_job_summary() %}

### Software Developer | [CGI Group](https://www.cgi.com/)

Aug 2015 — Oct 2016

{% end %}

## Education

BSc Physics (2:1)

**University of Bath**

2011 – 2015

## Professional Development & Speaking

- Delivered conference talk [“Complex Animations Done Well”](https://youtu.be/DBVHxkMBfF4) at [elm-conf](https://2018.elm-conf.us/schedule)
- Proactive mentor and technical leader, consistently identifying and addressing team skill gaps

## Personal Interests

- Football
- Running
- Travel
- Music
- Scuba Diving (PADI Qualified)
