import React from 'react';
import { Breadcrumb, BreadcrumbItem, Tabs, Tab } from 'carbon-components-react';
import BouncingBall from '../BouncingBall';

const props = {
  tabs: {
    selected: 1,
    triggerHref: '#',
    role: 'navigation',
  },
  tab: {
    href: '#',
    role: 'presentation',
    tabIndex: 0,
  },
};

const LandingPage = () => {
  return (
    <div className="bx--grid bx--grid--full-width landing-page">
      <div className="bx--row landing-page__banner">
        <div className="bx--col-md-2 bx--col-lg-2">
          <BouncingBall />
        </div>
        <div className="bx--col-md-6 bx--offset-lg-1 bx--col-lg-13">
          <h4 className="landing-page__heading">
            Bill Huang (Looking for job @frontend/backend/fullstack)
            <br />
            <p className="landing-page__subheading1">
              &nbsp;&nbsp;coding in Los Angeles, California{' '}
            </p>
          </h4>
          <br />
          <p className="landing-page__subheading1">
            &nbsp;&nbsp;Front-end: | Javascript | react | jQuery | CSS3 | HTML5
            | Carbon
            <br />
            &nbsp;&nbsp;Back--end: | Python | Flask | MySql | sqlite | graphql |
            nodejs
            <br />
            &nbsp;&nbsp;Sys-admin: | C | Linux | Bash-shell | Docker | Virtual
            Box
            <br />
          </p>
          <Breadcrumb noTrailingSlash>
            <BreadcrumbItem>
              <a href="mailto:bill.burton6981@gmail.com">
                &nbsp;&nbsp;email: bill.burton6981@gmail.com
              </a>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
      </div>
      <div className="bx--row landing-page__r2">
        <div className="bx--col bx--no-gutter">
          <Tabs {...props.tabs} aria-label="Tab navigation">
            <Tab {...props.tab} label="About Me">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className="bx--row landing-page__tab-content">
                  <div className="bx--col-md-4 bx--offset-lg-1 bx--col-lg-7">
                    <h4 className="landing-page__subheading">About Me</h4>
                    <p>
                      Hi! I am Bill Huang, I finished 4 years of college and got
                      a Bachelor's degree in Electrical Engineering (double E)
                      in China, I had worked in Agriculture Bank of China as
                      networking administrator for 3 years. After moving to US,
                      I worked in a newspaper company as a graphic designer for
                      20 years in Los Angeles.
                    </p>
                  </div>
                  <div className="bx--col-md-4 bx--offset-lg-1 bx--col-lg-7">
                    <p>
                      I have engineering background, so I have strong insight
                      vision about the things, it is very important for the
                      software engineer. I never stop for learning the new
                      skill, always try to understanding how it works under the
                      hood. I familiar with C, Python, Javascript, Linux Shell,
                      MySql. My full-stack webapp: Many-to-Many is about the
                      relational database Many-to-Many.
                    </p>
                  </div>
                </div>
              </div>
            </Tab>

            <Tab {...props.tab} label="Work">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className="bx--row landing-page__tab-content">
                  <div className="bx--offset-md-1 bx--col-md-7 bx--offset-lg-2 bx--col-lg-14">
                    <p className="workHeading">
                      Give me a try, I can delivery the code for you.
                    </p>
                  </div>
                </div>
              </div>
            </Tab>

            <Tab {...props.tab} label="Education">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className="bx--row landing-page__tab-content">
                  <div className="bx--col-md-4 bx--offset-lg-1 bx--col-lg-7">
                    <h4 className="landing-page__subheading">Education</h4>
                    <p>
                      "startDate": "2019-01-01"
                      <br />
                      "endDate": "2019-10-01"
                      <br />
                      "institution": "Holberton School, San Francisco, CA"
                      <br />
                      "studyType": "Foundation of Computer Science"
                      <br />
                      "description": "Holberton School is a project-based coding
                      school, students were training by hand on the project
                      about Shell Script, C programming, Python, Javascript,
                      Web-stack to be a full stack developer."
                    </p>
                  </div>
                  <div className="bx--col-md-4 bx--offset-lg-1 bx--col-lg-7">
                    <h4 className="landing-page__subheading">Education</h4>
                    <p>
                      "startDate": "1987-09-01"
                      <br />
                      "endDate": "1991-06-01"
                      <br />
                      "institution": "Hua Qiao University"
                      <br />
                      "area": "Electrical Engineering"
                      <br />
                      "studyType": "Bachelor's of Engineer"
                      <br />
                      "description": "4 years of studying in Electrical
                      Engineering make me have a stronger logic judgement and
                      thinking."
                    </p>
                  </div>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
      <div className="bx--row landing-page__r3">
        <div className="bx--col-md-2 bx--col-lg-4">
          <Breadcrumb noTrailingSlash>
            <BreadcrumbItem>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/billhong6981">
                | GitHub |
              </a>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className="bx--col-md-2 bx--col-lg-4">
          <Breadcrumb noTrailingSlash>
            <BreadcrumbItem>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/BillH35534014">
                | Twitter |
              </a>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className="bx--col-md-2 bx--col-lg-4">
          <Breadcrumb noTrailingSlash>
            <BreadcrumbItem>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/in/bill-huang-bb680217a">
                | LinkedIn |
              </a>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className="bx--col-md-2 bx--col-lg-4">
          <Breadcrumb noTrailingSlash>
            <BreadcrumbItem>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://medium.com/@bill.burton6981">
                | Medium |
              </a>
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
