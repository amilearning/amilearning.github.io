---
layout: page
permalink: /publications/
title: Publications
description:
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->
<!--
{% include bib_search.liquid %} -->

<details class="publication-list research-map-fold">
  <summary>
    <span class="when-closed">Show research map</span><span class="when-open">Hide research map</span><span class="count">(publications by topic)</span>
  </summary>

{% include research_map.liquid %}

</details>

<div class="publications">

{% bibliography %}

</div>
