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

{% include research_map.liquid %}

<details class="publication-list">
  <summary>
    <span class="when-closed">Show all publications</span><span class="when-open">Hide publication list</span><span class="count">(listed by year)</span>
  </summary>

<div class="publications">

{% bibliography %}

</div>

</details>
