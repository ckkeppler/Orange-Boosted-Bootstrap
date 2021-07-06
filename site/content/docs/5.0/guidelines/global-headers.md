---
layout: guidelines
title: Global headers
description: This design kit contains the essential UI elements for designing, prototyping and building Orange products and services on the web.
group: guidelines
subgroup: Modules
toc: true
---

<main>
  <div class="container">
    <h2 id="suprabar">Supra bar</h2>
    <p>
      <strong>Supra bars are hidden on tablet and mobile devices.</strong>
      Based on viewport size, supra bar is hidden under <var>768px</var>.
    </p>
  </div>
  <div class="container">
    <h2 id="navbar" class="mt-5">Headers (Navbar)</h2>
    <h3 class="mt-5 h5">Global header standard — <a id="web-glh-stn-001" class="ui-kit-id">web-glh-stn-001</a></h3>
  </div>
  <nav class="navbar navbar-dark bg-dark navbar-expand-md" role="navigation">
    <div class="container-lg">
      <a class="navbar-brand" href="#">
        <img src="/docs/5.0/assets/brand/orange-logo.svg" width="50" height="50" role="img" alt="Boosted" loading="lazy">
      </a>
      <ul class="navbar-nav d-md-none flex-row ml-auto">
        <li class="nav-item">
          <a href="#" class="nav-link nav-icon">
            <img src="/docs/5.0/assets/img/boosted-search.svg" width="30" height="50" role="img" alt="Search" loading="lazy">
            <span class="visually-hidden">Search</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link nav-icon">
            <img src="/docs/5.0/assets/img/boosted-buy.svg" width="30" height="50" role="img" alt="Basket" loading="lazy">
            <span class="visually-hidden">Basket</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link nav-icon svg-avatar">
          <span class="visually-hidden">My account</span>
          </a>
        </li>
      </ul>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#global-header-standard" aria-controls="global-header-standard" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="navbar-collapse collapse" id="global-header-standard" style="height: auto;">
        <ul class="navbar-nav">
          <li class="nav-item"><a class="nav-link active" href="#">Discover</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Shop</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Services</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Entertainment</a></li>
          <li class="nav-item"><a class="nav-link" href="#">News</a></li>
          <li class="nav-item"><a class="nav-link" href="#">Support</a></li>
        </ul>
      </div>
      <ul class="navbar-nav d-none d-md-flex">
        <li class="nav-item">
          <a href="#" class="nav-link nav-icon">
            <img src="/docs/5.0/assets/img/boosted-search.svg" width="30" height="50" role="img" alt="Search" loading="lazy">
            <span class="visually-hidden">Search</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link nav-icon">
            <img src="/docs/5.0/assets/img/boosted-buy.svg" width="30" height="50" role="img" alt="Basket" loading="lazy">
            <span class="visually-hidden">Basket</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link nav-icon svg-avatar">
          <span class="visually-hidden">My account</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</main>