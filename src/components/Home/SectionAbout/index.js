import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import '../../../styles/main.scss';
import { Link } from 'react-router-dom';
import { ButtonGroup, Button } from '@chakra-ui/core';
import Hero from './Hero';
import GitHubButton from 'react-github-btn';

const SectionAbout = () => {
  return (
    <section className="section__hero" id="About">
      <Hero />
      <div className="hero__stargazers">
        <GitHubButton
          href="https://github.com/uc3m-aerospace/molto-it"
          data-size="large"
          data-show-count="true"
          aria-label="Star uc3m-aerospace/molto-it on GitHub"
        >
          Star
        </GitHubButton>
      </div>
      <div className="hero__buttons">
        <ButtonGroup spacing={4} className="hero__buttoncontainer">
          <Button variantColor="blue" rightIcon="arrow-forward" variant="solid">
            <Link className="link" to="moltoit/new">
              Get Started
            </Link>
          </Button>

          <Button variantColor="white" variant="outline" borderColor="white">
            <a
              className="link"
              href="https://github.com/uc3m-aerospace/MOLTO-IT"
            >
              <span style={{ color: 'white', marginRight: '10px' }}>
                Github
              </span>
              <svg
                stroke="white"
                fill="white"
                strokeWidth="0"
                version="1.1"
                viewBox="0 0 32 32"
                className="css-1djmjnl"
                height="1.5em"
                width="1.5em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16 5.343c-6.196 0-11.219 5.023-11.219 11.219 0 4.957 3.214 9.162 7.673 10.645 0.561 0.103 0.766-0.244 0.766-0.54 0-0.267-0.010-1.152-0.016-2.088-3.12 0.678-3.779-1.323-3.779-1.323-0.511-1.296-1.246-1.641-1.246-1.641-1.020-0.696 0.077-0.682 0.077-0.682 1.126 0.078 1.72 1.156 1.72 1.156 1.001 1.715 2.627 1.219 3.265 0.931 0.102-0.723 0.392-1.219 0.712-1.498-2.49-0.283-5.11-1.246-5.11-5.545 0-1.226 0.438-2.225 1.154-3.011-0.114-0.285-0.501-1.426 0.111-2.97 0 0 0.941-0.301 3.085 1.15 0.894-0.25 1.854-0.373 2.807-0.377 0.953 0.004 1.913 0.129 2.809 0.379 2.14-1.453 3.083-1.15 3.083-1.15 0.613 1.545 0.227 2.685 0.112 2.969 0.719 0.785 1.153 1.785 1.153 3.011 0 4.31-2.624 5.259-5.123 5.537 0.404 0.348 0.761 1.030 0.761 2.076 0 1.5-0.015 2.709-0.015 3.079 0 0.299 0.204 0.648 0.772 0.538 4.455-1.486 7.666-5.69 7.666-10.645 0-6.195-5.023-11.219-11.219-11.219z"></path>
              </svg>
            </a>
          </Button>
        </ButtonGroup>
      </div>
    </section>
  );
};

export default withRouter(SectionAbout);
