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
  </div>
  <div class="container">
    <h3 class="mt-5 h5">Global header with title on two lines — <a id="web-glh-tni-002" class="ui-kit-id">web-glh-tni-002</a></h3>
  </div>
  <header>
    <nav class="navbar navbar-dark bg-dark navbar-expand-md" role="navigation">
      <div class="container-lg flex-sm-wrap flex-md-nowrap">
        <a class="navbar-brand" href="#">
          <img src="/docs/5.0/assets/brand/orange-logo.svg" width="50" height="50" role="img" alt="Boosted" loading="lazy">
          <h2 class="h4" id="two-line-title">
            <span class="align-self-end">Title Line 1<br>Title Line 2</span>
          </h2>
        </a>
        <ul class="navbar-nav d-md-none flex-row ml-auto">
          <li class="nav-item">
            <button type="button" class="nav-link btn btn-icon nav-icon svg-search collapsed" data-toggle="collapse" data-target="#search-8" aria-expanded="false" aria-controls="search-8">
            <span class="visually-hidden">Search bar</span>
            </button>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link nav-icon svg-buy">
            <span class="visually-hidden">Basket</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link nav-icon svg-avatar">
            <span class="visually-hidden">My account</span>
            </a>
          </li>
        </ul>
        <button class="navbar-toggler d-md-none collapsed" type="button" data-toggle="collapse" data-target="#collapsing-navbar8" aria-controls="collapsing-navbar8" aria-expanded="false" aria-label="Toggle navigation">
        <span aria-hidden="true" class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse" id="collapsing-navbar8">
          <ul class="navbar-nav">
            <li class="nav-item"><a class="nav-link active" href="#">Label</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
          </ul>
        </div>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
          <img src="/docs/5.0/assets/img/boosted-search.svg" width="50" height="50" role="img" alt="Search" loading="lazy">
            <a href="#" class="nav-link nav-icon svg-mail pb-1">
              <span class="visually-hidden">Search</span>
            </a>
          </li>
          <li class="nav-item">
            <img src="/docs/5.0/assets/img/boosted-buy.svg" width="50" height="50" role="img" alt="Basket" loading="lazy">
            <a href="#" class="nav-link nav-icon svg-buy pb-1">
            <span class="visually-hidden">Basket</span>
            <sup class="badge badge-lg badge-info rounded-pill">3</sup>
            </a>
          </li>
          <li class="nav-item">
            <svg width="2em" height="2em" aria-hidden="true" focusable="false"><use xlink:href="/docs/5.0/assets/img/boosted-search.svg"/></svg>
            <a href="#" class="nav-link nav-icon svg-avatar pb-1">
            <span class="visually-hidden">My account</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="collapse bg-dark" id="search-8">
      <form class="container-lg d-flex py-3" role="search">
        <input type="search" class="form-control form-control-lg bg-dark" placeholder="Search" aria-label="Search">
        <button class="btn btn-inverse btn-secondary btn-lg" type="submit">Search</button>
      </form>
    </div>
  </header>
</main>