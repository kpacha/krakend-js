





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  <link rel="dns-prefetch" href="https://assets-cdn.github.com">
  <link rel="dns-prefetch" href="https://avatars0.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars1.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars2.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars3.githubusercontent.com">
  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">



  <link crossorigin="anonymous" media="all" integrity="sha512-pO33jvcHJW+Is841g3EjvCxCYy5felC5kerQ4UrmoxEtKiPefXZ/Cqmo+guuBClWRTs0c0/rjDWAV5oELOxJtg==" rel="stylesheet" href="https://assets-cdn.github.com/assets/frameworks-595acde653bb1d1cb9b98b07b1be666b.css" />
  <link crossorigin="anonymous" media="all" integrity="sha512-yeyyWAlJQ+T3eT2XjAKl7ne6QzqtxCRuh4VnMx118rE6uaXwzKoPms/r0vKQcxgqkD48UhABVIH9kgErMRen5A==" rel="stylesheet" href="https://assets-cdn.github.com/assets/github-f4cc8e1d8c78ce5b091a28f81f91daf2.css" />
  
  
  <link crossorigin="anonymous" media="all" integrity="sha512-XMnl1lEs+KqOPID0g7WiPfNtDSz0I5TCCutE2rWgZE0TWUWFyLq6MUBGUzYelJNK7P8U9ghBTkH1U1x7WYP8Ew==" rel="stylesheet" href="https://assets-cdn.github.com/assets/site-7cf2bca82360cdd8fa99b17b8ffa052d.css" />
  
  

  <meta name="viewport" content="width=device-width">
  
  <title>go/wasm_exec.js at master · golang/go · GitHub</title>
    <meta name="description" content="The Go programming language. Contribute to golang/go development by creating an account on GitHub.">
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    
    <meta property="og:image" content="https://avatars3.githubusercontent.com/u/4314092?s=400&amp;v=4" /><meta property="og:site_name" content="GitHub" /><meta property="og:type" content="object" /><meta property="og:title" content="golang/go" /><meta property="og:url" content="https://github.com/golang/go" /><meta property="og:description" content="The Go programming language. Contribute to golang/go development by creating an account on GitHub." />

  <link rel="assets" href="https://assets-cdn.github.com/">
  
  <meta name="pjax-timeout" content="1000">
  
  <meta name="request-id" content="F3FA:6A25:113ECA8:20AF384:5BDEE7DB" data-pjax-transient>


  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

      <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
    <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">

  <meta name="octolytics-host" content="collector.githubapp.com" /><meta name="octolytics-app-id" content="github" /><meta name="octolytics-event-url" content="https://collector.githubapp.com/github-external/browser_event" /><meta name="octolytics-dimension-request_id" content="F3FA:6A25:113ECA8:20AF384:5BDEE7DB" /><meta name="octolytics-dimension-region_edge" content="iad" /><meta name="octolytics-dimension-region_render" content="iad" />
<meta name="analytics-location" content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" />



    <meta name="google-analytics" content="UA-3769691-2">


<meta class="js-ga-set" name="dimension1" content="Logged Out">



  

      <meta name="hostname" content="github.com">
    <meta name="user-login" content="">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="OTFhNGRlMWI1Yzg2ZGU1MTE4NzNhMWI2MjY2MDJlZmYzMDM1ZjY4NmMyZGQ4OTlhN2ZmNGRlNjhlODRlZDQ5OXx7InJlbW90ZV9hZGRyZXNzIjoiMi4xMzcuMTYxLjIzMiIsInJlcXVlc3RfaWQiOiJGM0ZBOjZBMjU6MTEzRUNBODoyMEFGMzg0OjVCREVFN0RCIiwidGltZXN0YW1wIjoxNTQxMzM1MDA0LCJob3N0IjoiZ2l0aHViLmNvbSJ9">

    <meta name="enabled-features" content="DASHBOARD_V2_LAYOUT_OPT_IN,EXPLORE_DISCOVER_REPOSITORIES,UNIVERSE_BANNER,MARKETPLACE_PLAN_RESTRICTION_EDITOR">

  <meta name="html-safe-nonce" content="0c6615196e563ebc148e3e0aed26be2652f16aa7">

  <meta http-equiv="x-pjax-version" content="4ea7852c1fa586d5e7629f80c9293c9a">
  

      <link href="https://github.com/golang/go/commits/master.atom" rel="alternate" title="Recent Commits to go:master" type="application/atom+xml">

  <meta name="go-import" content="github.com/golang/go git https://github.com/golang/go.git">

  <meta name="octolytics-dimension-user_id" content="4314092" /><meta name="octolytics-dimension-user_login" content="golang" /><meta name="octolytics-dimension-repository_id" content="23096959" /><meta name="octolytics-dimension-repository_nwo" content="golang/go" /><meta name="octolytics-dimension-repository_public" content="true" /><meta name="octolytics-dimension-repository_is_fork" content="false" /><meta name="octolytics-dimension-repository_network_root_id" content="23096959" /><meta name="octolytics-dimension-repository_network_root_nwo" content="golang/go" /><meta name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" content="false" />


    <link rel="canonical" href="https://github.com/golang/go/blob/master/misc/wasm/wasm_exec.js" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" class="js-site-favicon" href="https://assets-cdn.github.com/favicon.ico">

<meta name="theme-color" content="#1e2327">



  <link rel="manifest" href="/manifest.json" crossOrigin="use-credentials">

  </head>

  <body class="logged-out env-production page-blob">
    

  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="px-2 py-4 bg-blue text-white show-on-focus js-skip-to-content">Skip to content</a>
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>

    
    
    



        
<header class="Header header-logged-out  position-relative f4 py-3" role="banner">
  <div class="container-lg d-flex px-3">
    <div class="d-flex flex-justify-between flex-items-center">
      <a class="header-logo-invertocat my-0" href="https://github.com/" aria-label="Homepage" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
        <svg height="32" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
      </a>

    </div>

    <div class="HeaderMenu d-flex flex-justify-between flex-auto">
        <nav class="mt-0">
          <ul class="d-flex list-style-none">
              <li class="ml-2">
                <a class="js-selected-navigation-item HeaderNavlink px-0 py-2 m-0" data-ga-click="Header, click, Nav menu - item:features" data-selected-links="/features /features/project-management /features/code-review /features/project-management /features/integrations /features" href="/features">
                  Features
</a>              </li>
              <li class="ml-4">
                <a class="js-selected-navigation-item HeaderNavlink px-0 py-2 m-0" data-ga-click="Header, click, Nav menu - item:business" data-selected-links="/business /business/security /business/customers /business" href="/business">
                  Business
</a>              </li>

              <li class="ml-4">
                <a class="js-selected-navigation-item HeaderNavlink px-0 py-2 m-0" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship showcases showcases_search showcases_landing /explore" href="/explore">
                  Explore
</a>              </li>

              <li class="ml-4">
                    <a class="js-selected-navigation-item HeaderNavlink px-0 py-2 m-0" data-ga-click="Header, click, Nav menu - item:marketplace" data-selected-links=" /marketplace" href="/marketplace">
                      Marketplace
</a>              </li>
              <li class="ml-4">
                <a class="js-selected-navigation-item HeaderNavlink px-0 py-2 m-0" data-ga-click="Header, click, Nav menu - item:pricing" data-selected-links="/pricing /pricing/developer /pricing/team /pricing/business-hosted /pricing/business-enterprise /pricing" href="/pricing">
                  Pricing
</a>              </li>
          </ul>
        </nav>

      <div class="d-flex">
          <div class="d-lg-flex flex-items-center mr-3">
            <div class="header-search scoped-search site-scoped-search js-site-search position-relative js-jump-to"
  role="combobox"
  aria-owns="jump-to-results"
  aria-label="Search or jump to"
  aria-haspopup="listbox"
  aria-expanded="false"
>
  <div class="position-relative">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-site-search-form" data-scope-type="Repository" data-scope-id="23096959" data-scoped-search-url="/golang/go/search" data-unscoped-search-url="/search" action="/golang/go/search" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
      <label class="form-control header-search-wrapper header-search-wrapper-jump-to position-relative d-flex flex-justify-between flex-items-center js-chromeless-input-container">
        <input type="text"
          class="form-control header-search-input jump-to-field js-jump-to-field js-site-search-focus js-site-search-field is-clearable"
          data-hotkey="s,/"
          name="q"
          value=""
          placeholder="Search"
          data-unscoped-placeholder="Search GitHub"
          data-scoped-placeholder="Search"
          autocapitalize="off"
          aria-autocomplete="list"
          aria-controls="jump-to-results"
          data-jump-to-suggestions-path="/_graphql/GetSuggestedNavigationDestinations#csrf-token=t16YVmMM/OwoH6OEAsG5INcmrK2PHnMVE4qETe2NEc7hrq1bOfemCTPnpfsRRsBf27PAtAF+uQ3OcpQduvSE4g=="
          spellcheck="false"
          autocomplete="off"
          >
          <input type="hidden" class="js-site-search-type-field" name="type" >
            <img src="https://assets-cdn.github.com/images/search-shortcut-hint.svg" alt="" class="mr-2 header-search-key-slash">

            <div class="Box position-absolute overflow-hidden d-none jump-to-suggestions js-jump-to-suggestions-container">
              <ul class="d-none js-jump-to-suggestions-template-container">
                <li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item" role="option">
                  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center p-2 jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open" href="">
                    <div class="jump-to-octicon js-jump-to-octicon flex-shrink-0 mr-2 text-center d-none">
                      <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-octicon-repo d-none" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
                      <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-octicon-project d-none" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
                      <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-octicon-search d-none" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
                    </div>

                    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar d-none" alt="" aria-label="Team" src="" width="28" height="28">

                    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden text-left no-wrap css-truncate css-truncate-target">
                    </div>

                    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
                      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
                        In this repository
                      </span>
                      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
                        All GitHub
                      </span>
                      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
                    </div>

                    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
                      Jump to
                      <span class="d-inline-block ml-1 v-align-middle">↵</span>
                    </div>
                  </a>
                </li>
              </ul>
              <ul class="d-none js-jump-to-no-results-template-container">
                <li class="d-flex flex-justify-center flex-items-center p-3 f5 d-none">
                  <span class="text-gray">No suggested jump to results</span>
                </li>
              </ul>

              <ul id="jump-to-results" role="listbox" class="js-navigation-container jump-to-suggestions-results-container js-jump-to-suggestions-results-container" >
                <li class="d-flex flex-justify-center flex-items-center p-0 f5">
                  <img src="https://assets-cdn.github.com/images/spinners/octocat-spinner-128.gif" alt="Octocat Spinner Icon" class="m-2" width="28">
                </li>
              </ul>
            </div>
      </label>
</form>  </div>
</div>

          </div>

        <span class="d-inline-block">
            <div class="HeaderNavlink px-0 py-2 m-0">
              <a class="text-bold text-white no-underline" href="/login?return_to=%2Fgolang%2Fgo%2Fblob%2Fmaster%2Fmisc%2Fwasm%2Fwasm_exec.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
                <span class="text-gray">or</span>
                <a class="text-bold text-white no-underline" href="/join?source=header-repo" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
            </div>
        </span>
      </div>
    </div>
  </div>
</header>

  </div>

  <div id="start-of-content" class="show-on-focus"></div>

    <div id="js-flash-container">


</div>



  <div role="main" class="application-main ">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode" class="">
    <div id="js-repo-pjax-container" data-pjax-container >
      





  



  <div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav  ">
    <div class="repohead-details-container clearfix container">

      <ul class="pagehead-actions">
  <li>
      <a href="/login?return_to=%2Fgolang%2Fgo"
    class="btn btn-sm btn-with-count tooltipped tooltipped-s"
    aria-label="You must be signed in to watch a repository" rel="nofollow">
    <svg class="octicon octicon-eye v-align-text-bottom" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
    Watch
  </a>
  <a class="social-count" href="/golang/go/watchers"
     aria-label="3235 users are watching this repository">
    3,235
  </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fgolang%2Fgo"
    class="btn btn-sm btn-with-count tooltipped tooltipped-s"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <svg class="octicon octicon-star v-align-text-bottom" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"/></svg>
    Star
  </a>

    <a class="social-count js-social-count" href="/golang/go/stargazers"
      aria-label="48734 users starred this repository">
      48,734
    </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fgolang%2Fgo"
        class="btn btn-sm btn-with-count tooltipped tooltipped-s"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <svg class="octicon octicon-repo-forked v-align-text-bottom" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
        Fork
      </a>

    <a href="/golang/go/network/members" class="social-count"
       aria-label="6717 users forked this repository">
      6,717
    </a>
  </li>
</ul>

      <h1 class="public ">
  <svg class="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a class="url fn" rel="author" href="/golang">golang</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a data-pjax="#js-repo-pjax-container" href="/golang/go">go</a></strong>

</h1>

    </div>
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax container"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a class="js-selected-navigation-item selected reponav-item" itemprop="url" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /golang/go" href="/golang/go">
      <svg class="octicon octicon-code" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a itemprop="url" data-hotkey="g i" class="js-selected-navigation-item reponav-item" data-selected-links="repo_issues repo_labels repo_milestones /golang/go/issues" href="/golang/go/issues">
        <svg class="octicon octicon-issue-opened" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="Counter">3,921</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a data-hotkey="g p" itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_pulls checks /golang/go/pulls" href="/golang/go/pulls">
      <svg class="octicon octicon-git-pull-request" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">65</span>
      <meta itemprop="position" content="3">
</a>  </span>




    <a class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /golang/go/wiki" href="/golang/go/wiki">
      <svg class="octicon octicon-book" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"/></svg>
      Wiki
</a>
  <a class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors dependency_graph pulse alerts /golang/go/pulse" href="/golang/go/pulse">
    <svg class="octicon octicon-graph" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
    Insights
</a>

</nav>


  </div>

<div class="container new-discussion-timeline experiment-repo-nav  ">
  <div class="repository-content ">

    

  
    <a class="d-none js-permalink-shortcut" data-hotkey="y" href="/golang/go/blob/6fe8ee78e9b4870ebc1de2b5cfd6170a78a56c00/misc/wasm/wasm_exec.js">Permalink</a>

    <!-- blob contrib key: blob_contributors:v21:f205969df994cd4d6a8b2d46184aa748 -->

        <div class="signup-prompt-bg rounded-1">
      <div class="signup-prompt p-4 text-center mb-4 rounded-1">
        <div class="position-relative">
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form action="/site/dismiss_signup_prompt" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="Ihz1zrwx2g23PiBVvWvojyy9mBGw0aVqlZczvfKkXiIQKmT+BYdXCVCagKZMWDCJ5bwLhADuB3WBo8uoETjaFw==" />
            <button type="submit" class="position-absolute top-0 right-0 btn-link link-gray" data-ga-click="(Logged out) Sign up prompt, clicked Dismiss, text:dismiss">
              Dismiss
            </button>
</form>          <h3 class="pt-2">Join GitHub today</h3>
          <p class="col-6 mx-auto">GitHub is home to over 28 million developers working together to host and review code, manage projects, and build software together.</p>
          <a class="btn btn-primary" href="/join?source=prompt-blob-show" data-ga-click="(Logged out) Sign up prompt, clicked Sign up, text:sign-up">Sign up</a>
        </div>
      </div>
    </div>


    <div class="file-navigation">
      
<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
  <button class=" btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    
    type="button" aria-label="Switch branches or tags" aria-expanded="false" aria-haspopup="true">
      <i>Branch:</i>
      <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg class="octicon octicon-x js-menu-close" role="img" aria-label="Close" viewBox="0 0 12 16" version="1.1" width="12" height="16"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/golang/go/blob/dev.boringcrypto.go1.8/misc/wasm/wasm_exec.js"
               data-name="dev.boringcrypto.go1.8"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                dev.boringcrypto.go1.8
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/golang/go/blob/dev.boringcrypto.go1.9/misc/wasm/wasm_exec.js"
               data-name="dev.boringcrypto.go1.9"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                dev.boringcrypto.go1.9
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/golang/go/blob/dev.boringcrypto.go1.10/misc/wasm/wasm_exec.js"
               data-name="dev.boringcrypto.go1.10"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                dev.boringcrypto.go1.10
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/golang/go/blob/dev.boringcrypto.go1.11/misc/wasm/wasm_exec.js"
               data-name="dev.boringcrypto.go1.11"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                dev.boringcrypto.go1.11
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/golang/go/blob/dev.boringcrypto/misc/wasm/wasm_exec.js"
               data-name="dev.boringcrypto"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                dev.boringcrypto
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/golang/go/blob/dev.cc/misc/wasm/wasm_exec.js"
               data-name="dev.cc"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                dev.cc
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/golang/go/blob/dev.debug/misc/wasm/wasm_exec.js"
               data-name="dev.debug"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                dev.debug
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/golang/go/blob/dev.garbage/misc/wasm/wasm_exec.js"
               data-name="dev.garbage"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                dev.garbage
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/golang/go/blob/dev.gcfe/misc/wasm/wasm_exec.js"
               data-name="dev.gcfe"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                dev.gcfe
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/golang/go/blob/dev.inline/misc/wasm/wasm_exec.js"
               data-name="dev.inline"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                dev.inline
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/golang/go/blob/dev.power64/misc/wasm/wasm_exec.js"
               data-name="dev.power64"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                dev.power64
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/golang/go/blob/dev.ssa/misc/wasm/wasm_exec.js"
               data-name="dev.ssa"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                dev.ssa
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/golang/go/blob/dev.tls/misc/wasm/wasm_exec.js"
               data-name="dev.tls"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                dev.tls
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/golang/go/blob/dev.typealias/misc/wasm/wasm_exec.js"
               data-name="dev.typealias"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                dev.typealias
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/golang/go/blob/master/misc/wasm/wasm_exec.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/golang/go/blob/release-branch.go1/misc/wasm/wasm_exec.js"
               data-name="release-branch.go1"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                release-branch.go1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/golang/go/blob/release-branch.go1.1/misc/wasm/wasm_exec.js"
               data-name="release-branch.go1.1"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                release-branch.go1.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/golang/go/blob/release-branch.go1.2/misc/wasm/wasm_exec.js"
               data-name="release-branch.go1.2"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                release-branch.go1.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/golang/go/blob/release-branch.go1.3/misc/wasm/wasm_exec.js"
               data-name="release-branch.go1.3"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                release-branch.go1.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/golang/go/blob/release-branch.go1.4/misc/wasm/wasm_exec.js"
               data-name="release-branch.go1.4"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                release-branch.go1.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/golang/go/blob/release-branch.go1.5/misc/wasm/wasm_exec.js"
               data-name="release-branch.go1.5"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                release-branch.go1.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/golang/go/blob/release-branch.go1.6/misc/wasm/wasm_exec.js"
               data-name="release-branch.go1.6"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                release-branch.go1.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/golang/go/blob/release-branch.go1.7/misc/wasm/wasm_exec.js"
               data-name="release-branch.go1.7"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                release-branch.go1.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/golang/go/blob/release-branch.go1.8/misc/wasm/wasm_exec.js"
               data-name="release-branch.go1.8"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                release-branch.go1.8
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/golang/go/blob/release-branch.go1.9/misc/wasm/wasm_exec.js"
               data-name="release-branch.go1.9"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                release-branch.go1.9
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/golang/go/blob/release-branch.go1.10/misc/wasm/wasm_exec.js"
               data-name="release-branch.go1.10"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                release-branch.go1.10
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/golang/go/blob/release-branch.go1.11/misc/wasm/wasm_exec.js"
               data-name="release-branch.go1.11"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                release-branch.go1.11
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/golang/go/blob/release-branch.r57/misc/wasm/wasm_exec.js"
               data-name="release-branch.r57"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                release-branch.r57
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/golang/go/blob/release-branch.r58/misc/wasm/wasm_exec.js"
               data-name="release-branch.r58"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                release-branch.r58
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/golang/go/blob/release-branch.r59/misc/wasm/wasm_exec.js"
               data-name="release-branch.r59"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                release-branch.r59
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/golang/go/blob/release-branch.r60/misc/wasm/wasm_exec.js"
               data-name="release-branch.r60"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                release-branch.r60
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2012-03-27/misc/wasm/wasm_exec.js"
              data-name="weekly.2012-03-27"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2012-03-27">
                weekly.2012-03-27
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2012-03-22/misc/wasm/wasm_exec.js"
              data-name="weekly.2012-03-22"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2012-03-22">
                weekly.2012-03-22
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2012-03-13/misc/wasm/wasm_exec.js"
              data-name="weekly.2012-03-13"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2012-03-13">
                weekly.2012-03-13
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2012-03-04/misc/wasm/wasm_exec.js"
              data-name="weekly.2012-03-04"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2012-03-04">
                weekly.2012-03-04
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2012-02-22/misc/wasm/wasm_exec.js"
              data-name="weekly.2012-02-22"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2012-02-22">
                weekly.2012-02-22
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2012-02-14/misc/wasm/wasm_exec.js"
              data-name="weekly.2012-02-14"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2012-02-14">
                weekly.2012-02-14
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2012-02-07/misc/wasm/wasm_exec.js"
              data-name="weekly.2012-02-07"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2012-02-07">
                weekly.2012-02-07
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2012-01-27/misc/wasm/wasm_exec.js"
              data-name="weekly.2012-01-27"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2012-01-27">
                weekly.2012-01-27
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2012-01-20/misc/wasm/wasm_exec.js"
              data-name="weekly.2012-01-20"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2012-01-20">
                weekly.2012-01-20
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2012-01-15/misc/wasm/wasm_exec.js"
              data-name="weekly.2012-01-15"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2012-01-15">
                weekly.2012-01-15
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2011-12-22/misc/wasm/wasm_exec.js"
              data-name="weekly.2011-12-22"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2011-12-22">
                weekly.2011-12-22
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2011-12-14/misc/wasm/wasm_exec.js"
              data-name="weekly.2011-12-14"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2011-12-14">
                weekly.2011-12-14
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2011-12-06/misc/wasm/wasm_exec.js"
              data-name="weekly.2011-12-06"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2011-12-06">
                weekly.2011-12-06
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2011-12-02/misc/wasm/wasm_exec.js"
              data-name="weekly.2011-12-02"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2011-12-02">
                weekly.2011-12-02
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2011-12-01/misc/wasm/wasm_exec.js"
              data-name="weekly.2011-12-01"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2011-12-01">
                weekly.2011-12-01
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2011-11-18/misc/wasm/wasm_exec.js"
              data-name="weekly.2011-11-18"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2011-11-18">
                weekly.2011-11-18
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2011-11-09/misc/wasm/wasm_exec.js"
              data-name="weekly.2011-11-09"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2011-11-09">
                weekly.2011-11-09
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2011-11-08/misc/wasm/wasm_exec.js"
              data-name="weekly.2011-11-08"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2011-11-08">
                weekly.2011-11-08
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2011-11-02/misc/wasm/wasm_exec.js"
              data-name="weekly.2011-11-02"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2011-11-02">
                weekly.2011-11-02
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2011-11-01/misc/wasm/wasm_exec.js"
              data-name="weekly.2011-11-01"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2011-11-01">
                weekly.2011-11-01
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2011-10-26/misc/wasm/wasm_exec.js"
              data-name="weekly.2011-10-26"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2011-10-26">
                weekly.2011-10-26
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2011-10-25/misc/wasm/wasm_exec.js"
              data-name="weekly.2011-10-25"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2011-10-25">
                weekly.2011-10-25
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2011-10-18/misc/wasm/wasm_exec.js"
              data-name="weekly.2011-10-18"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2011-10-18">
                weekly.2011-10-18
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2011-10-06/misc/wasm/wasm_exec.js"
              data-name="weekly.2011-10-06"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2011-10-06">
                weekly.2011-10-06
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2011-09-21/misc/wasm/wasm_exec.js"
              data-name="weekly.2011-09-21"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2011-09-21">
                weekly.2011-09-21
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2011-09-16/misc/wasm/wasm_exec.js"
              data-name="weekly.2011-09-16"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2011-09-16">
                weekly.2011-09-16
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2011-09-07/misc/wasm/wasm_exec.js"
              data-name="weekly.2011-09-07"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2011-09-07">
                weekly.2011-09-07
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2011-09-01/misc/wasm/wasm_exec.js"
              data-name="weekly.2011-09-01"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2011-09-01">
                weekly.2011-09-01
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2011-08-17/misc/wasm/wasm_exec.js"
              data-name="weekly.2011-08-17"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2011-08-17">
                weekly.2011-08-17
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2011-08-10/misc/wasm/wasm_exec.js"
              data-name="weekly.2011-08-10"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2011-08-10">
                weekly.2011-08-10
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2011-07-29/misc/wasm/wasm_exec.js"
              data-name="weekly.2011-07-29"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2011-07-29">
                weekly.2011-07-29
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2011-07-19/misc/wasm/wasm_exec.js"
              data-name="weekly.2011-07-19"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2011-07-19">
                weekly.2011-07-19
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2011-07-07/misc/wasm/wasm_exec.js"
              data-name="weekly.2011-07-07"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2011-07-07">
                weekly.2011-07-07
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2011-06-23/misc/wasm/wasm_exec.js"
              data-name="weekly.2011-06-23"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2011-06-23">
                weekly.2011-06-23
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2011-06-16/misc/wasm/wasm_exec.js"
              data-name="weekly.2011-06-16"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2011-06-16">
                weekly.2011-06-16
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2011-06-09/misc/wasm/wasm_exec.js"
              data-name="weekly.2011-06-09"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2011-06-09">
                weekly.2011-06-09
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2011-06-02/misc/wasm/wasm_exec.js"
              data-name="weekly.2011-06-02"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2011-06-02">
                weekly.2011-06-02
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2011-05-22/misc/wasm/wasm_exec.js"
              data-name="weekly.2011-05-22"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2011-05-22">
                weekly.2011-05-22
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2011-04-27/misc/wasm/wasm_exec.js"
              data-name="weekly.2011-04-27"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2011-04-27">
                weekly.2011-04-27
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2011-04-13/misc/wasm/wasm_exec.js"
              data-name="weekly.2011-04-13"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2011-04-13">
                weekly.2011-04-13
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2011-04-04/misc/wasm/wasm_exec.js"
              data-name="weekly.2011-04-04"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2011-04-04">
                weekly.2011-04-04
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2011-03-28/misc/wasm/wasm_exec.js"
              data-name="weekly.2011-03-28"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2011-03-28">
                weekly.2011-03-28
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2011-03-15/misc/wasm/wasm_exec.js"
              data-name="weekly.2011-03-15"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2011-03-15">
                weekly.2011-03-15
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2011-03-07.1/misc/wasm/wasm_exec.js"
              data-name="weekly.2011-03-07.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2011-03-07.1">
                weekly.2011-03-07.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2011-03-07/misc/wasm/wasm_exec.js"
              data-name="weekly.2011-03-07"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2011-03-07">
                weekly.2011-03-07
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2011-02-24/misc/wasm/wasm_exec.js"
              data-name="weekly.2011-02-24"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2011-02-24">
                weekly.2011-02-24
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2011-02-15/misc/wasm/wasm_exec.js"
              data-name="weekly.2011-02-15"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2011-02-15">
                weekly.2011-02-15
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2011-02-01.1/misc/wasm/wasm_exec.js"
              data-name="weekly.2011-02-01.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2011-02-01.1">
                weekly.2011-02-01.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2011-02-01/misc/wasm/wasm_exec.js"
              data-name="weekly.2011-02-01"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2011-02-01">
                weekly.2011-02-01
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2011-01-20/misc/wasm/wasm_exec.js"
              data-name="weekly.2011-01-20"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2011-01-20">
                weekly.2011-01-20
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2011-01-19/misc/wasm/wasm_exec.js"
              data-name="weekly.2011-01-19"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2011-01-19">
                weekly.2011-01-19
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2011-01-12/misc/wasm/wasm_exec.js"
              data-name="weekly.2011-01-12"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2011-01-12">
                weekly.2011-01-12
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2011-01-06/misc/wasm/wasm_exec.js"
              data-name="weekly.2011-01-06"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2011-01-06">
                weekly.2011-01-06
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2010-12-22/misc/wasm/wasm_exec.js"
              data-name="weekly.2010-12-22"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2010-12-22">
                weekly.2010-12-22
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2010-12-15.1/misc/wasm/wasm_exec.js"
              data-name="weekly.2010-12-15.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2010-12-15.1">
                weekly.2010-12-15.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2010-12-15/misc/wasm/wasm_exec.js"
              data-name="weekly.2010-12-15"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2010-12-15">
                weekly.2010-12-15
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2010-12-08/misc/wasm/wasm_exec.js"
              data-name="weekly.2010-12-08"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2010-12-08">
                weekly.2010-12-08
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2010-12-02/misc/wasm/wasm_exec.js"
              data-name="weekly.2010-12-02"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2010-12-02">
                weekly.2010-12-02
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2010-11-23/misc/wasm/wasm_exec.js"
              data-name="weekly.2010-11-23"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2010-11-23">
                weekly.2010-11-23
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2010-11-10/misc/wasm/wasm_exec.js"
              data-name="weekly.2010-11-10"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2010-11-10">
                weekly.2010-11-10
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2010-11-02/misc/wasm/wasm_exec.js"
              data-name="weekly.2010-11-02"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2010-11-02">
                weekly.2010-11-02
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2010-10-27/misc/wasm/wasm_exec.js"
              data-name="weekly.2010-10-27"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2010-10-27">
                weekly.2010-10-27
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2010-10-20/misc/wasm/wasm_exec.js"
              data-name="weekly.2010-10-20"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2010-10-20">
                weekly.2010-10-20
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2010-10-13.1/misc/wasm/wasm_exec.js"
              data-name="weekly.2010-10-13.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2010-10-13.1">
                weekly.2010-10-13.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2010-10-13/misc/wasm/wasm_exec.js"
              data-name="weekly.2010-10-13"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2010-10-13">
                weekly.2010-10-13
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2010-09-29/misc/wasm/wasm_exec.js"
              data-name="weekly.2010-09-29"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2010-09-29">
                weekly.2010-09-29
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2010-09-22/misc/wasm/wasm_exec.js"
              data-name="weekly.2010-09-22"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2010-09-22">
                weekly.2010-09-22
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2010-09-15/misc/wasm/wasm_exec.js"
              data-name="weekly.2010-09-15"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2010-09-15">
                weekly.2010-09-15
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2010-09-06/misc/wasm/wasm_exec.js"
              data-name="weekly.2010-09-06"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2010-09-06">
                weekly.2010-09-06
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2010-08-25/misc/wasm/wasm_exec.js"
              data-name="weekly.2010-08-25"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2010-08-25">
                weekly.2010-08-25
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2010-08-11/misc/wasm/wasm_exec.js"
              data-name="weekly.2010-08-11"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2010-08-11">
                weekly.2010-08-11
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2010-08-04/misc/wasm/wasm_exec.js"
              data-name="weekly.2010-08-04"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2010-08-04">
                weekly.2010-08-04
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2010-07-29/misc/wasm/wasm_exec.js"
              data-name="weekly.2010-07-29"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2010-07-29">
                weekly.2010-07-29
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2010-07-14/misc/wasm/wasm_exec.js"
              data-name="weekly.2010-07-14"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2010-07-14">
                weekly.2010-07-14
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2010-07-01/misc/wasm/wasm_exec.js"
              data-name="weekly.2010-07-01"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2010-07-01">
                weekly.2010-07-01
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2010-06-21/misc/wasm/wasm_exec.js"
              data-name="weekly.2010-06-21"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2010-06-21">
                weekly.2010-06-21
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2010-06-09/misc/wasm/wasm_exec.js"
              data-name="weekly.2010-06-09"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2010-06-09">
                weekly.2010-06-09
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2010-05-27/misc/wasm/wasm_exec.js"
              data-name="weekly.2010-05-27"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2010-05-27">
                weekly.2010-05-27
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2010-05-04/misc/wasm/wasm_exec.js"
              data-name="weekly.2010-05-04"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2010-05-04">
                weekly.2010-05-04
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2010-04-27/misc/wasm/wasm_exec.js"
              data-name="weekly.2010-04-27"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2010-04-27">
                weekly.2010-04-27
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2010-04-13/misc/wasm/wasm_exec.js"
              data-name="weekly.2010-04-13"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2010-04-13">
                weekly.2010-04-13
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2010-03-30/misc/wasm/wasm_exec.js"
              data-name="weekly.2010-03-30"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2010-03-30">
                weekly.2010-03-30
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2010-03-22/misc/wasm/wasm_exec.js"
              data-name="weekly.2010-03-22"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2010-03-22">
                weekly.2010-03-22
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2010-03-15/misc/wasm/wasm_exec.js"
              data-name="weekly.2010-03-15"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2010-03-15">
                weekly.2010-03-15
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2010-03-04/misc/wasm/wasm_exec.js"
              data-name="weekly.2010-03-04"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2010-03-04">
                weekly.2010-03-04
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2010-02-23/misc/wasm/wasm_exec.js"
              data-name="weekly.2010-02-23"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2010-02-23">
                weekly.2010-02-23
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2010-02-17/misc/wasm/wasm_exec.js"
              data-name="weekly.2010-02-17"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2010-02-17">
                weekly.2010-02-17
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2010-02-04/misc/wasm/wasm_exec.js"
              data-name="weekly.2010-02-04"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2010-02-04">
                weekly.2010-02-04
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2010-01-27/misc/wasm/wasm_exec.js"
              data-name="weekly.2010-01-27"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2010-01-27">
                weekly.2010-01-27
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2010-01-13/misc/wasm/wasm_exec.js"
              data-name="weekly.2010-01-13"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2010-01-13">
                weekly.2010-01-13
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2010-01-05/misc/wasm/wasm_exec.js"
              data-name="weekly.2010-01-05"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2010-01-05">
                weekly.2010-01-05
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2009-12-22/misc/wasm/wasm_exec.js"
              data-name="weekly.2009-12-22"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2009-12-22">
                weekly.2009-12-22
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2009-12-09/misc/wasm/wasm_exec.js"
              data-name="weekly.2009-12-09"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2009-12-09">
                weekly.2009-12-09
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2009-12-07/misc/wasm/wasm_exec.js"
              data-name="weekly.2009-12-07"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2009-12-07">
                weekly.2009-12-07
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2009-11-17/misc/wasm/wasm_exec.js"
              data-name="weekly.2009-11-17"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2009-11-17">
                weekly.2009-11-17
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2009-11-12/misc/wasm/wasm_exec.js"
              data-name="weekly.2009-11-12"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2009-11-12">
                weekly.2009-11-12
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2009-11-10.1/misc/wasm/wasm_exec.js"
              data-name="weekly.2009-11-10.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2009-11-10.1">
                weekly.2009-11-10.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2009-11-10/misc/wasm/wasm_exec.js"
              data-name="weekly.2009-11-10"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2009-11-10">
                weekly.2009-11-10
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly.2009-11-06/misc/wasm/wasm_exec.js"
              data-name="weekly.2009-11-06"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly.2009-11-06">
                weekly.2009-11-06
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/golang/go/tree/weekly/misc/wasm/wasm_exec.js"
              data-name="weekly"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="weekly">
                weekly
              </span>
            </a>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

      <div class="BtnGroup float-right">
        <a href="/golang/go/find/master"
              class="js-pjax-capture-input btn btn-sm BtnGroup-item"
              data-pjax
              data-hotkey="t">
          Find file
        </a>
        <clipboard-copy for="blob-path" class="btn btn-sm BtnGroup-item">
          Copy path
        </clipboard-copy>
      </div>
      <div id="blob-path" class="breadcrumb">
        <span class="repo-root js-repo-root"><span class="js-path-segment"><a data-pjax="true" href="/golang/go"><span>go</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a data-pjax="true" href="/golang/go/tree/master/misc"><span>misc</span></a></span><span class="separator">/</span><span class="js-path-segment"><a data-pjax="true" href="/golang/go/tree/master/misc/wasm"><span>wasm</span></a></span><span class="separator">/</span><strong class="final-path">wasm_exec.js</strong>
      </div>
    </div>


    
  <div class="commit-tease">
      <span class="float-right">
        <a class="commit-tease-sha" href="/golang/go/commit/9627180f0f1f016307f4987cec6594baf90d64ae" data-pjax>
          9627180
        </a>
        <relative-time datetime="2018-10-25T22:13:48Z">Oct 26, 2018</relative-time>
      </span>
      <div>
        <a rel="contributor" data-skip-pjax="true" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=16184" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/neelance"><img class="avatar" src="https://avatars2.githubusercontent.com/u/16184?s=40&amp;v=4" width="20" height="20" alt="@neelance" /></a>
        <a class="user-mention" rel="contributor" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=16184" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/neelance">neelance</a>
          <a data-pjax="true" title="misc/wasm: improve detection of Node.js

This commit adds a check of &quot;process.title&quot; to detect Node.js.

The web app bundler Parcel sets &quot;process&quot; to an empty object. This
incorrectly got detected as Node.js, even though the script was
running in a browser.

Fixes #28364.

Change-Id: Iecac7f8fc3cc4ac7ddb42dd43c5385681a3282de
Reviewed-on: https://go-review.googlesource.com/c/144658
Reviewed-by: Brad Fitzpatrick &lt;bradfitz@golang.org&gt;" class="message" href="/golang/go/commit/9627180f0f1f016307f4987cec6594baf90d64ae">misc/wasm: improve detection of Node.js</a>
      </div>

    <div class="commit-tease-contributors">
      
<details class="details-reset details-overlay details-overlay-dark lh-default text-gray-dark float-left mr-2" id="blob_contributors_box">
  <summary class="btn-link" aria-haspopup="dialog"  >
    
    <span><strong>5</strong> contributors</span>
  </summary>
  <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast " aria-label="Users who have contributed to this file">
    <div class="Box-header">
      <button class="Box-btn-octicon btn-octicon float-right" type="button" aria-label="Close dialog" data-close-dialog>
        <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
      </button>
      <h3 class="Box-title">Users who have contributed to this file</h3>
    </div>
    
        <ul class="list-style-none overflow-auto">
            <li class="Box-row">
              <a class="link-gray-dark no-underline" href="/neelance">
                <img class="avatar mr-2" alt="" src="https://avatars2.githubusercontent.com/u/16184?s=40&amp;v=4" width="20" height="20" />
                neelance
</a>            </li>
            <li class="Box-row">
              <a class="link-gray-dark no-underline" href="/myitcv">
                <img class="avatar mr-2" alt="" src="https://avatars0.githubusercontent.com/u/3374574?s=40&amp;v=4" width="20" height="20" />
                myitcv
</a>            </li>
            <li class="Box-row">
              <a class="link-gray-dark no-underline" href="/ncw">
                <img class="avatar mr-2" alt="" src="https://avatars3.githubusercontent.com/u/536803?s=40&amp;v=4" width="20" height="20" />
                ncw
</a>            </li>
            <li class="Box-row">
              <a class="link-gray-dark no-underline" href="/cherrymui">
                <img class="avatar mr-2" alt="" src="https://avatars1.githubusercontent.com/u/14119929?s=40&amp;v=4" width="20" height="20" />
                cherrymui
</a>            </li>
            <li class="Box-row">
              <a class="link-gray-dark no-underline" href="/xudongzheng">
                <img class="avatar mr-2" alt="" src="https://avatars3.githubusercontent.com/u/4230040?s=40&amp;v=4" width="20" height="20" />
                xudongzheng
</a>            </li>
        </ul>

  </details-dialog>
</details>
          <a class="avatar-link" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=16184" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/golang/go/commits/master/misc/wasm/wasm_exec.js?author=neelance">
      <img class="avatar" src="https://avatars2.githubusercontent.com/u/16184?s=40&amp;v=4" width="20" height="20" alt="@neelance" /> 
</a>    <a class="avatar-link" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=3374574" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/golang/go/commits/master/misc/wasm/wasm_exec.js?author=myitcv">
      <img class="avatar" src="https://avatars0.githubusercontent.com/u/3374574?s=40&amp;v=4" width="20" height="20" alt="@myitcv" /> 
</a>    <a class="avatar-link" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=536803" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/golang/go/commits/master/misc/wasm/wasm_exec.js?author=ncw">
      <img class="avatar" src="https://avatars3.githubusercontent.com/u/536803?s=40&amp;v=4" width="20" height="20" alt="@ncw" /> 
</a>    <a class="avatar-link" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=14119929" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/golang/go/commits/master/misc/wasm/wasm_exec.js?author=cherrymui">
      <img class="avatar" src="https://avatars1.githubusercontent.com/u/14119929?s=40&amp;v=4" width="20" height="20" alt="@cherrymui" /> 
</a>    <a class="avatar-link" data-hovercard-type="user" data-hovercard-url="/hovercards?user_id=4230040" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="/golang/go/commits/master/misc/wasm/wasm_exec.js?author=xudongzheng">
      <img class="avatar" src="https://avatars3.githubusercontent.com/u/4230040?s=40&amp;v=4" width="20" height="20" alt="@xudongzheng" /> 
</a>

    </div>
  </div>



    <div class="file ">
      <div class="file-header">
  <div class="file-actions">

    <div class="BtnGroup">
      <a id="raw-url" class="btn btn-sm BtnGroup-item" href="/golang/go/raw/master/misc/wasm/wasm_exec.js">Raw</a>
        <a class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b" href="/golang/go/blame/master/misc/wasm/wasm_exec.js">Blame</a>
      <a rel="nofollow" class="btn btn-sm BtnGroup-item" href="/golang/go/commits/master/misc/wasm/wasm_exec.js">History</a>
    </div>


        <button type="button" class="btn-octicon disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <svg class="octicon octicon-pencil" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
        </button>
        <button type="button" class="btn-octicon btn-octicon-danger disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <svg class="octicon octicon-trashcan" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
        </button>
  </div>

  <div class="file-info">
      457 lines (404 sloc)
      <span class="file-info-divider"></span>
    12.1 KB
  </div>
</div>

      

  <div itemprop="text" class="blob-wrapper data type-javascript ">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> Copyright 2018 The Go Authors. All rights reserved.</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> Use of this source code is governed by a BSD-style</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> license that can be found in the LICENSE file.</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line">(() <span class="pl-k">=&gt;</span> {</td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">if</span> (<span class="pl-k">typeof</span> <span class="pl-c1">global</span> <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line">		<span class="pl-c"><span class="pl-c">//</span> global already exists</span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line">	} <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-k">typeof</span> <span class="pl-c1">window</span> <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">window</span>.<span class="pl-smi">global</span> <span class="pl-k">=</span> <span class="pl-c1">window</span>;</td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line">	} <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-k">typeof</span> self <span class="pl-k">!==</span> <span class="pl-s"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">self</span>.<span class="pl-smi">global</span> <span class="pl-k">=</span> self;</td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line">	} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>cannot export Go (neither global, window nor self is defined)<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line">	<span class="pl-c"><span class="pl-c">//</span> Map web browser API and Node.js API to a single common API (preferring web standards over Node.js API).</span></td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">const</span> <span class="pl-c1">isNodeJS</span> <span class="pl-k">=</span> <span class="pl-c1">global</span>.<span class="pl-smi">process</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-c1">global</span>.<span class="pl-smi">process</span>.<span class="pl-c1">title</span> <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>node<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">if</span> (isNodeJS) {</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">global</span>.<span class="pl-smi">require</span> <span class="pl-k">=</span> require;</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">global</span>.<span class="pl-smi">fs</span> <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>fs<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">const</span> <span class="pl-c1">nodeCrypto</span> <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>crypto<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">global</span>.<span class="pl-c1">crypto</span> <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">getRandomValues</span>(<span class="pl-smi">b</span>) {</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">nodeCrypto</span>.<span class="pl-en">randomFillSync</span>(b);</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line">		};</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">global</span>.<span class="pl-smi">performance</span> <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">now</span>() {</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">const</span> [<span class="pl-c1">sec</span>, <span class="pl-c1">nsec</span>] <span class="pl-k">=</span> <span class="pl-c1">process</span>.<span class="pl-en">hrtime</span>();</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> sec <span class="pl-k">*</span> <span class="pl-c1">1000</span> <span class="pl-k">+</span> nsec <span class="pl-k">/</span> <span class="pl-c1">1000000</span>;</td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line">		};</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">const</span> <span class="pl-c1">util</span> <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>util<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">global</span>.<span class="pl-smi">TextEncoder</span> <span class="pl-k">=</span> <span class="pl-smi">util</span>.<span class="pl-smi">TextEncoder</span>;</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">global</span>.<span class="pl-smi">TextDecoder</span> <span class="pl-k">=</span> <span class="pl-smi">util</span>.<span class="pl-smi">TextDecoder</span>;</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line">	} <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">let</span> outputBuf <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line">		<span class="pl-c1">global</span>.<span class="pl-smi">fs</span> <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line">			constants<span class="pl-k">:</span> { <span class="pl-c1">O_WRONLY</span><span class="pl-k">:</span> <span class="pl-k">-</span><span class="pl-c1">1</span>, <span class="pl-c1">O_RDWR</span><span class="pl-k">:</span> <span class="pl-k">-</span><span class="pl-c1">1</span>, <span class="pl-c1">O_CREAT</span><span class="pl-k">:</span> <span class="pl-k">-</span><span class="pl-c1">1</span>, <span class="pl-c1">O_TRUNC</span><span class="pl-k">:</span> <span class="pl-k">-</span><span class="pl-c1">1</span>, <span class="pl-c1">O_APPEND</span><span class="pl-k">:</span> <span class="pl-k">-</span><span class="pl-c1">1</span>, <span class="pl-c1">O_EXCL</span><span class="pl-k">:</span> <span class="pl-k">-</span><span class="pl-c1">1</span> }, <span class="pl-c"><span class="pl-c">//</span> unused</span></td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">writeSync</span>(<span class="pl-smi">fd</span>, <span class="pl-smi">buf</span>) {</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line">				outputBuf <span class="pl-k">+=</span> <span class="pl-smi">decoder</span>.<span class="pl-en">decode</span>(buf);</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">const</span> <span class="pl-c1">nl</span> <span class="pl-k">=</span> <span class="pl-smi">outputBuf</span>.<span class="pl-c1">lastIndexOf</span>(<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\n</span><span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (nl <span class="pl-k">!=</span> <span class="pl-k">-</span><span class="pl-c1">1</span>) {</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line">					<span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-smi">outputBuf</span>.<span class="pl-c1">substr</span>(<span class="pl-c1">0</span>, nl));</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line">					outputBuf <span class="pl-k">=</span> <span class="pl-smi">outputBuf</span>.<span class="pl-c1">substr</span>(nl <span class="pl-k">+</span> <span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-smi">buf</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">write</span>(<span class="pl-smi">fd</span>, <span class="pl-smi">buf</span>, <span class="pl-smi">offset</span>, <span class="pl-smi">length</span>, <span class="pl-smi">position</span>, <span class="pl-smi">callback</span>) {</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (offset <span class="pl-k">!==</span> <span class="pl-c1">0</span> <span class="pl-k">||</span> length <span class="pl-k">!==</span> <span class="pl-smi">buf</span>.<span class="pl-c1">length</span> <span class="pl-k">||</span> position <span class="pl-k">!==</span> <span class="pl-c1">null</span>) {</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>not implemented<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">const</span> <span class="pl-c1">n</span> <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-en">writeSync</span>(fd, buf);</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line">				<span class="pl-en">callback</span>(<span class="pl-c1">null</span>, n);</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">open</span>(<span class="pl-smi">path</span>, <span class="pl-smi">flags</span>, <span class="pl-smi">mode</span>, <span class="pl-smi">callback</span>) {</td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">const</span> <span class="pl-c1">err</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>not implemented<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">err</span>.<span class="pl-c1">code</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>ENOSYS<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line">				<span class="pl-en">callback</span>(err);</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line">			<span class="pl-en">fsync</span>(<span class="pl-smi">fd</span>, <span class="pl-smi">callback</span>) {</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line">				<span class="pl-en">callback</span>(<span class="pl-c1">null</span>);</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line">			},</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line">		};</td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">const</span> <span class="pl-c1">encoder</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">TextEncoder</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>utf-8<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">const</span> <span class="pl-c1">decoder</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">TextDecoder</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>utf-8<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line">	<span class="pl-c1">global</span>.<span class="pl-smi">Go</span> <span class="pl-k">=</span> <span class="pl-k">class</span> {</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line">		<span class="pl-en">constructor</span>() {</td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-smi">argv</span> <span class="pl-k">=</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>js<span class="pl-pds">&quot;</span></span>];</td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-smi">env</span> <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-en">exit</span> <span class="pl-k">=</span> (<span class="pl-smi">code</span>) <span class="pl-k">=&gt;</span> {</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (code <span class="pl-k">!==</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line">					<span class="pl-en">console</span>.<span class="pl-c1">warn</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>exit code:<span class="pl-pds">&quot;</span></span>, code);</td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code blob-code-inner js-file-line">			};</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-smi">_callbackTimeouts</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Map</span>();</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-smi">_nextCallbackTimeoutID</span> <span class="pl-k">=</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">const</span> <span class="pl-c1">mem</span> <span class="pl-k">=</span> () <span class="pl-k">=&gt;</span> {</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code blob-code-inner js-file-line">				<span class="pl-c"><span class="pl-c">//</span> The buffer may change when requesting more memory.</span></td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-k">new</span> <span class="pl-en">DataView</span>(<span class="pl-c1">this</span>.<span class="pl-smi">_inst</span>.<span class="pl-smi">exports</span>.<span class="pl-smi">mem</span>.<span class="pl-smi">buffer</span>);</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">const</span> <span class="pl-c1">setInt64</span> <span class="pl-k">=</span> (<span class="pl-smi">addr</span>, <span class="pl-smi">v</span>) <span class="pl-k">=&gt;</span> {</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code blob-code-inner js-file-line">				<span class="pl-en">mem</span>().<span class="pl-en">setUint32</span>(addr <span class="pl-k">+</span> <span class="pl-c1">0</span>, v, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code blob-code-inner js-file-line">				<span class="pl-en">mem</span>().<span class="pl-en">setUint32</span>(addr <span class="pl-k">+</span> <span class="pl-c1">4</span>, <span class="pl-c1">Math</span>.<span class="pl-c1">floor</span>(v <span class="pl-k">/</span> <span class="pl-c1">4294967296</span>), <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">const</span> <span class="pl-c1">getInt64</span> <span class="pl-k">=</span> (<span class="pl-smi">addr</span>) <span class="pl-k">=&gt;</span> {</td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">const</span> <span class="pl-c1">low</span> <span class="pl-k">=</span> <span class="pl-en">mem</span>().<span class="pl-en">getUint32</span>(addr <span class="pl-k">+</span> <span class="pl-c1">0</span>, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">const</span> <span class="pl-c1">high</span> <span class="pl-k">=</span> <span class="pl-en">mem</span>().<span class="pl-en">getInt32</span>(addr <span class="pl-k">+</span> <span class="pl-c1">4</span>, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> low <span class="pl-k">+</span> high <span class="pl-k">*</span> <span class="pl-c1">4294967296</span>;</td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">const</span> <span class="pl-c1">loadValue</span> <span class="pl-k">=</span> (<span class="pl-smi">addr</span>) <span class="pl-k">=&gt;</span> {</td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">const</span> <span class="pl-c1">f</span> <span class="pl-k">=</span> <span class="pl-en">mem</span>().<span class="pl-en">getFloat64</span>(addr, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (f <span class="pl-k">===</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span> <span class="pl-c1">undefined</span>;</td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-k">!</span><span class="pl-c1">isNaN</span>(f)) {</td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span> f;</td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">const</span> <span class="pl-c1">id</span> <span class="pl-k">=</span> <span class="pl-en">mem</span>().<span class="pl-en">getUint32</span>(addr, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-c1">this</span>.<span class="pl-smi">_values</span>[id];</td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">const</span> <span class="pl-c1">storeValue</span> <span class="pl-k">=</span> (<span class="pl-smi">addr</span>, <span class="pl-smi">v</span>) <span class="pl-k">=&gt;</span> {</td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">const</span> <span class="pl-c1">nanHead</span> <span class="pl-k">=</span> <span class="pl-c1">0x7FF80000</span>;</td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-k">typeof</span> v <span class="pl-k">===</span> <span class="pl-s"><span class="pl-pds">&quot;</span>number<span class="pl-pds">&quot;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (<span class="pl-c1">isNaN</span>(v)) {</td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">mem</span>().<span class="pl-en">setUint32</span>(addr <span class="pl-k">+</span> <span class="pl-c1">4</span>, nanHead, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">mem</span>().<span class="pl-en">setUint32</span>(addr, <span class="pl-c1">0</span>, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">if</span> (v <span class="pl-k">===</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">mem</span>().<span class="pl-en">setUint32</span>(addr <span class="pl-k">+</span> <span class="pl-c1">4</span>, nanHead, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">mem</span>().<span class="pl-en">setUint32</span>(addr, <span class="pl-c1">1</span>, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code blob-code-inner js-file-line">					}</td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code blob-code-inner js-file-line">					<span class="pl-en">mem</span>().<span class="pl-en">setFloat64</span>(addr, v, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">switch</span> (v) {</td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">case</span> <span class="pl-c1">undefined</span>:</td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">mem</span>().<span class="pl-en">setFloat64</span>(addr, <span class="pl-c1">0</span>, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">case</span> <span class="pl-c1">null</span>:</td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">mem</span>().<span class="pl-en">setUint32</span>(addr <span class="pl-k">+</span> <span class="pl-c1">4</span>, nanHead, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">mem</span>().<span class="pl-en">setUint32</span>(addr, <span class="pl-c1">2</span>, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">case</span> <span class="pl-c1">true</span>:</td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">mem</span>().<span class="pl-en">setUint32</span>(addr <span class="pl-k">+</span> <span class="pl-c1">4</span>, nanHead, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">mem</span>().<span class="pl-en">setUint32</span>(addr, <span class="pl-c1">3</span>, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">case</span> <span class="pl-c1">false</span>:</td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">mem</span>().<span class="pl-en">setUint32</span>(addr <span class="pl-k">+</span> <span class="pl-c1">4</span>, nanHead, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">mem</span>().<span class="pl-en">setUint32</span>(addr, <span class="pl-c1">4</span>, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">return</span>;</td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">let</span> ref <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">_refs</span>.<span class="pl-c1">get</span>(v);</td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (ref <span class="pl-k">===</span> <span class="pl-c1">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code blob-code-inner js-file-line">					ref <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">_values</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code blob-code-inner js-file-line">					<span class="pl-c1">this</span>.<span class="pl-smi">_values</span>.<span class="pl-c1">push</span>(v);</td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code blob-code-inner js-file-line">					<span class="pl-c1">this</span>.<span class="pl-smi">_refs</span>.<span class="pl-c1">set</span>(v, ref);</td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">let</span> typeFlag <span class="pl-k">=</span> <span class="pl-c1">0</span>;</td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">switch</span> (<span class="pl-k">typeof</span> v) {</td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>string<span class="pl-pds">&quot;</span></span>:</td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code blob-code-inner js-file-line">						typeFlag <span class="pl-k">=</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>symbol<span class="pl-pds">&quot;</span></span>:</td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code blob-code-inner js-file-line">						typeFlag <span class="pl-k">=</span> <span class="pl-c1">2</span>;</td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">case</span> <span class="pl-s"><span class="pl-pds">&quot;</span>function<span class="pl-pds">&quot;</span></span>:</td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code blob-code-inner js-file-line">						typeFlag <span class="pl-k">=</span> <span class="pl-c1">3</span>;</td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code blob-code-inner js-file-line">				<span class="pl-en">mem</span>().<span class="pl-en">setUint32</span>(addr <span class="pl-k">+</span> <span class="pl-c1">4</span>, nanHead <span class="pl-k">|</span> typeFlag, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code blob-code-inner js-file-line">				<span class="pl-en">mem</span>().<span class="pl-en">setUint32</span>(addr, ref, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">const</span> <span class="pl-c1">loadSlice</span> <span class="pl-k">=</span> (<span class="pl-smi">addr</span>) <span class="pl-k">=&gt;</span> {</td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">const</span> <span class="pl-c1">array</span> <span class="pl-k">=</span> <span class="pl-en">getInt64</span>(addr <span class="pl-k">+</span> <span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">const</span> <span class="pl-c1">len</span> <span class="pl-k">=</span> <span class="pl-en">getInt64</span>(addr <span class="pl-k">+</span> <span class="pl-c1">8</span>);</td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-k">new</span> <span class="pl-en">Uint8Array</span>(<span class="pl-c1">this</span>.<span class="pl-smi">_inst</span>.<span class="pl-smi">exports</span>.<span class="pl-smi">mem</span>.<span class="pl-smi">buffer</span>, array, len);</td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">const</span> <span class="pl-c1">loadSliceOfValues</span> <span class="pl-k">=</span> (<span class="pl-smi">addr</span>) <span class="pl-k">=&gt;</span> {</td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">const</span> <span class="pl-c1">array</span> <span class="pl-k">=</span> <span class="pl-en">getInt64</span>(addr <span class="pl-k">+</span> <span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">const</span> <span class="pl-c1">len</span> <span class="pl-k">=</span> <span class="pl-en">getInt64</span>(addr <span class="pl-k">+</span> <span class="pl-c1">8</span>);</td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">const</span> <span class="pl-c1">a</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Array</span>(len);</td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">for</span> (<span class="pl-k">let</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> len; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code blob-code-inner js-file-line">					a[i] <span class="pl-k">=</span> <span class="pl-en">loadValue</span>(array <span class="pl-k">+</span> i <span class="pl-k">*</span> <span class="pl-c1">8</span>);</td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> a;</td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">const</span> <span class="pl-c1">loadString</span> <span class="pl-k">=</span> (<span class="pl-smi">addr</span>) <span class="pl-k">=&gt;</span> {</td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">const</span> <span class="pl-c1">saddr</span> <span class="pl-k">=</span> <span class="pl-en">getInt64</span>(addr <span class="pl-k">+</span> <span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">const</span> <span class="pl-c1">len</span> <span class="pl-k">=</span> <span class="pl-en">getInt64</span>(addr <span class="pl-k">+</span> <span class="pl-c1">8</span>);</td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> <span class="pl-smi">decoder</span>.<span class="pl-en">decode</span>(<span class="pl-k">new</span> <span class="pl-en">DataView</span>(<span class="pl-c1">this</span>.<span class="pl-smi">_inst</span>.<span class="pl-smi">exports</span>.<span class="pl-smi">mem</span>.<span class="pl-smi">buffer</span>, saddr, len));</td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">const</span> <span class="pl-c1">timeOrigin</span> <span class="pl-k">=</span> <span class="pl-c1">Date</span>.<span class="pl-en">now</span>() <span class="pl-k">-</span> <span class="pl-c1">performance</span>.<span class="pl-en">now</span>();</td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-smi">importObject</span> <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code blob-code-inner js-file-line">				go<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code blob-code-inner js-file-line">					<span class="pl-c"><span class="pl-c">//</span> func wasmExit(code int32)</span></td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code blob-code-inner js-file-line">					<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-en">runtime.wasmExit</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> (<span class="pl-smi">sp</span>) <span class="pl-k">=&gt;</span> {</td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">const</span> <span class="pl-c1">code</span> <span class="pl-k">=</span> <span class="pl-en">mem</span>().<span class="pl-en">getInt32</span>(sp <span class="pl-k">+</span> <span class="pl-c1">8</span>, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code blob-code-inner js-file-line">						<span class="pl-c1">this</span>.<span class="pl-smi">exited</span> <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">delete</span> <span class="pl-c1">this</span>.<span class="pl-smi">_inst</span>;</td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">delete</span> <span class="pl-c1">this</span>.<span class="pl-smi">_values</span>;</td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">delete</span> <span class="pl-c1">this</span>.<span class="pl-smi">_refs</span>;</td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code blob-code-inner js-file-line">						<span class="pl-c1">this</span>.<span class="pl-en">exit</span>(code);</td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code blob-code-inner js-file-line">					},</td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code blob-code-inner js-file-line">					<span class="pl-c"><span class="pl-c">//</span> func wasmWrite(fd uintptr, p unsafe.Pointer, n int32)</span></td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code blob-code-inner js-file-line">					<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-en">runtime.wasmWrite</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> (<span class="pl-smi">sp</span>) <span class="pl-k">=&gt;</span> {</td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">const</span> <span class="pl-c1">fd</span> <span class="pl-k">=</span> <span class="pl-en">getInt64</span>(sp <span class="pl-k">+</span> <span class="pl-c1">8</span>);</td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">const</span> <span class="pl-c1">p</span> <span class="pl-k">=</span> <span class="pl-en">getInt64</span>(sp <span class="pl-k">+</span> <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">const</span> <span class="pl-c1">n</span> <span class="pl-k">=</span> <span class="pl-en">mem</span>().<span class="pl-en">getInt32</span>(sp <span class="pl-k">+</span> <span class="pl-c1">24</span>, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">fs</span>.<span class="pl-en">writeSync</span>(fd, <span class="pl-k">new</span> <span class="pl-en">Uint8Array</span>(<span class="pl-c1">this</span>.<span class="pl-smi">_inst</span>.<span class="pl-smi">exports</span>.<span class="pl-smi">mem</span>.<span class="pl-smi">buffer</span>, p, n));</td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code blob-code-inner js-file-line">					},</td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code blob-code-inner js-file-line">					<span class="pl-c"><span class="pl-c">//</span> func nanotime() int64</span></td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code blob-code-inner js-file-line">					<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-en">runtime.nanotime</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> (<span class="pl-smi">sp</span>) <span class="pl-k">=&gt;</span> {</td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">setInt64</span>(sp <span class="pl-k">+</span> <span class="pl-c1">8</span>, (timeOrigin <span class="pl-k">+</span> <span class="pl-c1">performance</span>.<span class="pl-en">now</span>()) <span class="pl-k">*</span> <span class="pl-c1">1000000</span>);</td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code blob-code-inner js-file-line">					},</td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code blob-code-inner js-file-line">					<span class="pl-c"><span class="pl-c">//</span> func walltime() (sec int64, nsec int32)</span></td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code blob-code-inner js-file-line">					<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-en">runtime.walltime</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> (<span class="pl-smi">sp</span>) <span class="pl-k">=&gt;</span> {</td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">const</span> <span class="pl-c1">msec</span> <span class="pl-k">=</span> (<span class="pl-k">new</span> <span class="pl-en">Date</span>).<span class="pl-c1">getTime</span>();</td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">setInt64</span>(sp <span class="pl-k">+</span> <span class="pl-c1">8</span>, msec <span class="pl-k">/</span> <span class="pl-c1">1000</span>);</td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">mem</span>().<span class="pl-en">setInt32</span>(sp <span class="pl-k">+</span> <span class="pl-c1">16</span>, (msec <span class="pl-k">%</span> <span class="pl-c1">1000</span>) <span class="pl-k">*</span> <span class="pl-c1">1000000</span>, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code blob-code-inner js-file-line">					},</td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code blob-code-inner js-file-line">					<span class="pl-c"><span class="pl-c">//</span> func scheduleCallback(delay int64) int32</span></td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code blob-code-inner js-file-line">					<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-en">runtime.scheduleCallback</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> (<span class="pl-smi">sp</span>) <span class="pl-k">=&gt;</span> {</td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">const</span> <span class="pl-c1">id</span> <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">_nextCallbackTimeoutID</span>;</td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code blob-code-inner js-file-line">						<span class="pl-c1">this</span>.<span class="pl-smi">_nextCallbackTimeoutID</span><span class="pl-k">++</span>;</td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code blob-code-inner js-file-line">						<span class="pl-c1">this</span>.<span class="pl-smi">_callbackTimeouts</span>.<span class="pl-c1">set</span>(id, <span class="pl-c1">setTimeout</span>(</td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code blob-code-inner js-file-line">							() <span class="pl-k">=&gt;</span> { <span class="pl-c1">this</span>.<span class="pl-en">_resolveCallbackPromise</span>(); },</td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code blob-code-inner js-file-line">							<span class="pl-en">getInt64</span>(sp <span class="pl-k">+</span> <span class="pl-c1">8</span>) <span class="pl-k">+</span> <span class="pl-c1">1</span>, <span class="pl-c"><span class="pl-c">//</span> setTimeout has been seen to fire up to 1 millisecond early</span></td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code blob-code-inner js-file-line">						));</td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">mem</span>().<span class="pl-en">setInt32</span>(sp <span class="pl-k">+</span> <span class="pl-c1">16</span>, id, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code blob-code-inner js-file-line">					},</td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code blob-code-inner js-file-line">					<span class="pl-c"><span class="pl-c">//</span> func clearScheduledCallback(id int32)</span></td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code blob-code-inner js-file-line">					<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-en">runtime.clearScheduledCallback</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> (<span class="pl-smi">sp</span>) <span class="pl-k">=&gt;</span> {</td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">const</span> <span class="pl-c1">id</span> <span class="pl-k">=</span> <span class="pl-en">mem</span>().<span class="pl-en">getInt32</span>(sp <span class="pl-k">+</span> <span class="pl-c1">8</span>, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code blob-code-inner js-file-line">						<span class="pl-c1">clearTimeout</span>(<span class="pl-c1">this</span>.<span class="pl-smi">_callbackTimeouts</span>.<span class="pl-c1">get</span>(id));</td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code blob-code-inner js-file-line">						<span class="pl-c1">this</span>.<span class="pl-smi">_callbackTimeouts</span>.<span class="pl-c1">delete</span>(id);</td>
      </tr>
      <tr>
        <td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-code blob-code-inner js-file-line">					},</td>
      </tr>
      <tr>
        <td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-code blob-code-inner js-file-line">					<span class="pl-c"><span class="pl-c">//</span> func getRandomData(r []byte)</span></td>
      </tr>
      <tr>
        <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-code blob-code-inner js-file-line">					<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-en">runtime.getRandomData</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> (<span class="pl-smi">sp</span>) <span class="pl-k">=&gt;</span> {</td>
      </tr>
      <tr>
        <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-code blob-code-inner js-file-line">						<span class="pl-smi">crypto</span>.<span class="pl-en">getRandomValues</span>(<span class="pl-en">loadSlice</span>(sp <span class="pl-k">+</span> <span class="pl-c1">8</span>));</td>
      </tr>
      <tr>
        <td id="L248" class="blob-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-code blob-code-inner js-file-line">					},</td>
      </tr>
      <tr>
        <td id="L249" class="blob-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L250" class="blob-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-code blob-code-inner js-file-line">					<span class="pl-c"><span class="pl-c">//</span> func stringVal(value string) ref</span></td>
      </tr>
      <tr>
        <td id="L251" class="blob-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-code blob-code-inner js-file-line">					<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-en">syscall/js.stringVal</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> (<span class="pl-smi">sp</span>) <span class="pl-k">=&gt;</span> {</td>
      </tr>
      <tr>
        <td id="L252" class="blob-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">storeValue</span>(sp <span class="pl-k">+</span> <span class="pl-c1">24</span>, <span class="pl-en">loadString</span>(sp <span class="pl-k">+</span> <span class="pl-c1">8</span>));</td>
      </tr>
      <tr>
        <td id="L253" class="blob-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-code blob-code-inner js-file-line">					},</td>
      </tr>
      <tr>
        <td id="L254" class="blob-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L255" class="blob-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-code blob-code-inner js-file-line">					<span class="pl-c"><span class="pl-c">//</span> func valueGet(v ref, p string) ref</span></td>
      </tr>
      <tr>
        <td id="L256" class="blob-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-code blob-code-inner js-file-line">					<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-en">syscall/js.valueGet</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> (<span class="pl-smi">sp</span>) <span class="pl-k">=&gt;</span> {</td>
      </tr>
      <tr>
        <td id="L257" class="blob-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">storeValue</span>(sp <span class="pl-k">+</span> <span class="pl-c1">32</span>, <span class="pl-c1">Reflect</span>.<span class="pl-c1">get</span>(<span class="pl-en">loadValue</span>(sp <span class="pl-k">+</span> <span class="pl-c1">8</span>), <span class="pl-en">loadString</span>(sp <span class="pl-k">+</span> <span class="pl-c1">16</span>)));</td>
      </tr>
      <tr>
        <td id="L258" class="blob-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-code blob-code-inner js-file-line">					},</td>
      </tr>
      <tr>
        <td id="L259" class="blob-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L260" class="blob-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-code blob-code-inner js-file-line">					<span class="pl-c"><span class="pl-c">//</span> func valueSet(v ref, p string, x ref)</span></td>
      </tr>
      <tr>
        <td id="L261" class="blob-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-code blob-code-inner js-file-line">					<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-en">syscall/js.valueSet</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> (<span class="pl-smi">sp</span>) <span class="pl-k">=&gt;</span> {</td>
      </tr>
      <tr>
        <td id="L262" class="blob-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-code blob-code-inner js-file-line">						<span class="pl-c1">Reflect</span>.<span class="pl-c1">set</span>(<span class="pl-en">loadValue</span>(sp <span class="pl-k">+</span> <span class="pl-c1">8</span>), <span class="pl-en">loadString</span>(sp <span class="pl-k">+</span> <span class="pl-c1">16</span>), <span class="pl-en">loadValue</span>(sp <span class="pl-k">+</span> <span class="pl-c1">32</span>));</td>
      </tr>
      <tr>
        <td id="L263" class="blob-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-code blob-code-inner js-file-line">					},</td>
      </tr>
      <tr>
        <td id="L264" class="blob-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L265" class="blob-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-code blob-code-inner js-file-line">					<span class="pl-c"><span class="pl-c">//</span> func valueIndex(v ref, i int) ref</span></td>
      </tr>
      <tr>
        <td id="L266" class="blob-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-code blob-code-inner js-file-line">					<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-en">syscall/js.valueIndex</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> (<span class="pl-smi">sp</span>) <span class="pl-k">=&gt;</span> {</td>
      </tr>
      <tr>
        <td id="L267" class="blob-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">storeValue</span>(sp <span class="pl-k">+</span> <span class="pl-c1">24</span>, <span class="pl-c1">Reflect</span>.<span class="pl-c1">get</span>(<span class="pl-en">loadValue</span>(sp <span class="pl-k">+</span> <span class="pl-c1">8</span>), <span class="pl-en">getInt64</span>(sp <span class="pl-k">+</span> <span class="pl-c1">16</span>)));</td>
      </tr>
      <tr>
        <td id="L268" class="blob-num js-line-number" data-line-number="268"></td>
        <td id="LC268" class="blob-code blob-code-inner js-file-line">					},</td>
      </tr>
      <tr>
        <td id="L269" class="blob-num js-line-number" data-line-number="269"></td>
        <td id="LC269" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L270" class="blob-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-code blob-code-inner js-file-line">					<span class="pl-c"><span class="pl-c">//</span> valueSetIndex(v ref, i int, x ref)</span></td>
      </tr>
      <tr>
        <td id="L271" class="blob-num js-line-number" data-line-number="271"></td>
        <td id="LC271" class="blob-code blob-code-inner js-file-line">					<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-en">syscall/js.valueSetIndex</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> (<span class="pl-smi">sp</span>) <span class="pl-k">=&gt;</span> {</td>
      </tr>
      <tr>
        <td id="L272" class="blob-num js-line-number" data-line-number="272"></td>
        <td id="LC272" class="blob-code blob-code-inner js-file-line">						<span class="pl-c1">Reflect</span>.<span class="pl-c1">set</span>(<span class="pl-en">loadValue</span>(sp <span class="pl-k">+</span> <span class="pl-c1">8</span>), <span class="pl-en">getInt64</span>(sp <span class="pl-k">+</span> <span class="pl-c1">16</span>), <span class="pl-en">loadValue</span>(sp <span class="pl-k">+</span> <span class="pl-c1">24</span>));</td>
      </tr>
      <tr>
        <td id="L273" class="blob-num js-line-number" data-line-number="273"></td>
        <td id="LC273" class="blob-code blob-code-inner js-file-line">					},</td>
      </tr>
      <tr>
        <td id="L274" class="blob-num js-line-number" data-line-number="274"></td>
        <td id="LC274" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L275" class="blob-num js-line-number" data-line-number="275"></td>
        <td id="LC275" class="blob-code blob-code-inner js-file-line">					<span class="pl-c"><span class="pl-c">//</span> func valueCall(v ref, m string, args []ref) (ref, bool)</span></td>
      </tr>
      <tr>
        <td id="L276" class="blob-num js-line-number" data-line-number="276"></td>
        <td id="LC276" class="blob-code blob-code-inner js-file-line">					<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-en">syscall/js.valueCall</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> (<span class="pl-smi">sp</span>) <span class="pl-k">=&gt;</span> {</td>
      </tr>
      <tr>
        <td id="L277" class="blob-num js-line-number" data-line-number="277"></td>
        <td id="LC277" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">try</span> {</td>
      </tr>
      <tr>
        <td id="L278" class="blob-num js-line-number" data-line-number="278"></td>
        <td id="LC278" class="blob-code blob-code-inner js-file-line">							<span class="pl-k">const</span> <span class="pl-c1">v</span> <span class="pl-k">=</span> <span class="pl-en">loadValue</span>(sp <span class="pl-k">+</span> <span class="pl-c1">8</span>);</td>
      </tr>
      <tr>
        <td id="L279" class="blob-num js-line-number" data-line-number="279"></td>
        <td id="LC279" class="blob-code blob-code-inner js-file-line">							<span class="pl-k">const</span> <span class="pl-c1">m</span> <span class="pl-k">=</span> <span class="pl-c1">Reflect</span>.<span class="pl-c1">get</span>(v, <span class="pl-en">loadString</span>(sp <span class="pl-k">+</span> <span class="pl-c1">16</span>));</td>
      </tr>
      <tr>
        <td id="L280" class="blob-num js-line-number" data-line-number="280"></td>
        <td id="LC280" class="blob-code blob-code-inner js-file-line">							<span class="pl-k">const</span> <span class="pl-c1">args</span> <span class="pl-k">=</span> <span class="pl-en">loadSliceOfValues</span>(sp <span class="pl-k">+</span> <span class="pl-c1">32</span>);</td>
      </tr>
      <tr>
        <td id="L281" class="blob-num js-line-number" data-line-number="281"></td>
        <td id="LC281" class="blob-code blob-code-inner js-file-line">							<span class="pl-en">storeValue</span>(sp <span class="pl-k">+</span> <span class="pl-c1">56</span>, <span class="pl-c1">Reflect</span>.<span class="pl-c1">apply</span>(m, v, args));</td>
      </tr>
      <tr>
        <td id="L282" class="blob-num js-line-number" data-line-number="282"></td>
        <td id="LC282" class="blob-code blob-code-inner js-file-line">							<span class="pl-en">mem</span>().<span class="pl-en">setUint8</span>(sp <span class="pl-k">+</span> <span class="pl-c1">64</span>, <span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L283" class="blob-num js-line-number" data-line-number="283"></td>
        <td id="LC283" class="blob-code blob-code-inner js-file-line">						} <span class="pl-k">catch</span> (err) {</td>
      </tr>
      <tr>
        <td id="L284" class="blob-num js-line-number" data-line-number="284"></td>
        <td id="LC284" class="blob-code blob-code-inner js-file-line">							<span class="pl-en">storeValue</span>(sp <span class="pl-k">+</span> <span class="pl-c1">56</span>, err);</td>
      </tr>
      <tr>
        <td id="L285" class="blob-num js-line-number" data-line-number="285"></td>
        <td id="LC285" class="blob-code blob-code-inner js-file-line">							<span class="pl-en">mem</span>().<span class="pl-en">setUint8</span>(sp <span class="pl-k">+</span> <span class="pl-c1">64</span>, <span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L286" class="blob-num js-line-number" data-line-number="286"></td>
        <td id="LC286" class="blob-code blob-code-inner js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L287" class="blob-num js-line-number" data-line-number="287"></td>
        <td id="LC287" class="blob-code blob-code-inner js-file-line">					},</td>
      </tr>
      <tr>
        <td id="L288" class="blob-num js-line-number" data-line-number="288"></td>
        <td id="LC288" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L289" class="blob-num js-line-number" data-line-number="289"></td>
        <td id="LC289" class="blob-code blob-code-inner js-file-line">					<span class="pl-c"><span class="pl-c">//</span> func valueInvoke(v ref, args []ref) (ref, bool)</span></td>
      </tr>
      <tr>
        <td id="L290" class="blob-num js-line-number" data-line-number="290"></td>
        <td id="LC290" class="blob-code blob-code-inner js-file-line">					<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-en">syscall/js.valueInvoke</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> (<span class="pl-smi">sp</span>) <span class="pl-k">=&gt;</span> {</td>
      </tr>
      <tr>
        <td id="L291" class="blob-num js-line-number" data-line-number="291"></td>
        <td id="LC291" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">try</span> {</td>
      </tr>
      <tr>
        <td id="L292" class="blob-num js-line-number" data-line-number="292"></td>
        <td id="LC292" class="blob-code blob-code-inner js-file-line">							<span class="pl-k">const</span> <span class="pl-c1">v</span> <span class="pl-k">=</span> <span class="pl-en">loadValue</span>(sp <span class="pl-k">+</span> <span class="pl-c1">8</span>);</td>
      </tr>
      <tr>
        <td id="L293" class="blob-num js-line-number" data-line-number="293"></td>
        <td id="LC293" class="blob-code blob-code-inner js-file-line">							<span class="pl-k">const</span> <span class="pl-c1">args</span> <span class="pl-k">=</span> <span class="pl-en">loadSliceOfValues</span>(sp <span class="pl-k">+</span> <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L294" class="blob-num js-line-number" data-line-number="294"></td>
        <td id="LC294" class="blob-code blob-code-inner js-file-line">							<span class="pl-en">storeValue</span>(sp <span class="pl-k">+</span> <span class="pl-c1">40</span>, <span class="pl-c1">Reflect</span>.<span class="pl-c1">apply</span>(v, <span class="pl-c1">undefined</span>, args));</td>
      </tr>
      <tr>
        <td id="L295" class="blob-num js-line-number" data-line-number="295"></td>
        <td id="LC295" class="blob-code blob-code-inner js-file-line">							<span class="pl-en">mem</span>().<span class="pl-en">setUint8</span>(sp <span class="pl-k">+</span> <span class="pl-c1">48</span>, <span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L296" class="blob-num js-line-number" data-line-number="296"></td>
        <td id="LC296" class="blob-code blob-code-inner js-file-line">						} <span class="pl-k">catch</span> (err) {</td>
      </tr>
      <tr>
        <td id="L297" class="blob-num js-line-number" data-line-number="297"></td>
        <td id="LC297" class="blob-code blob-code-inner js-file-line">							<span class="pl-en">storeValue</span>(sp <span class="pl-k">+</span> <span class="pl-c1">40</span>, err);</td>
      </tr>
      <tr>
        <td id="L298" class="blob-num js-line-number" data-line-number="298"></td>
        <td id="LC298" class="blob-code blob-code-inner js-file-line">							<span class="pl-en">mem</span>().<span class="pl-en">setUint8</span>(sp <span class="pl-k">+</span> <span class="pl-c1">48</span>, <span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L299" class="blob-num js-line-number" data-line-number="299"></td>
        <td id="LC299" class="blob-code blob-code-inner js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L300" class="blob-num js-line-number" data-line-number="300"></td>
        <td id="LC300" class="blob-code blob-code-inner js-file-line">					},</td>
      </tr>
      <tr>
        <td id="L301" class="blob-num js-line-number" data-line-number="301"></td>
        <td id="LC301" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L302" class="blob-num js-line-number" data-line-number="302"></td>
        <td id="LC302" class="blob-code blob-code-inner js-file-line">					<span class="pl-c"><span class="pl-c">//</span> func valueNew(v ref, args []ref) (ref, bool)</span></td>
      </tr>
      <tr>
        <td id="L303" class="blob-num js-line-number" data-line-number="303"></td>
        <td id="LC303" class="blob-code blob-code-inner js-file-line">					<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-en">syscall/js.valueNew</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> (<span class="pl-smi">sp</span>) <span class="pl-k">=&gt;</span> {</td>
      </tr>
      <tr>
        <td id="L304" class="blob-num js-line-number" data-line-number="304"></td>
        <td id="LC304" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">try</span> {</td>
      </tr>
      <tr>
        <td id="L305" class="blob-num js-line-number" data-line-number="305"></td>
        <td id="LC305" class="blob-code blob-code-inner js-file-line">							<span class="pl-k">const</span> <span class="pl-c1">v</span> <span class="pl-k">=</span> <span class="pl-en">loadValue</span>(sp <span class="pl-k">+</span> <span class="pl-c1">8</span>);</td>
      </tr>
      <tr>
        <td id="L306" class="blob-num js-line-number" data-line-number="306"></td>
        <td id="LC306" class="blob-code blob-code-inner js-file-line">							<span class="pl-k">const</span> <span class="pl-c1">args</span> <span class="pl-k">=</span> <span class="pl-en">loadSliceOfValues</span>(sp <span class="pl-k">+</span> <span class="pl-c1">16</span>);</td>
      </tr>
      <tr>
        <td id="L307" class="blob-num js-line-number" data-line-number="307"></td>
        <td id="LC307" class="blob-code blob-code-inner js-file-line">							<span class="pl-en">storeValue</span>(sp <span class="pl-k">+</span> <span class="pl-c1">40</span>, <span class="pl-c1">Reflect</span>.<span class="pl-en">construct</span>(v, args));</td>
      </tr>
      <tr>
        <td id="L308" class="blob-num js-line-number" data-line-number="308"></td>
        <td id="LC308" class="blob-code blob-code-inner js-file-line">							<span class="pl-en">mem</span>().<span class="pl-en">setUint8</span>(sp <span class="pl-k">+</span> <span class="pl-c1">48</span>, <span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L309" class="blob-num js-line-number" data-line-number="309"></td>
        <td id="LC309" class="blob-code blob-code-inner js-file-line">						} <span class="pl-k">catch</span> (err) {</td>
      </tr>
      <tr>
        <td id="L310" class="blob-num js-line-number" data-line-number="310"></td>
        <td id="LC310" class="blob-code blob-code-inner js-file-line">							<span class="pl-en">storeValue</span>(sp <span class="pl-k">+</span> <span class="pl-c1">40</span>, err);</td>
      </tr>
      <tr>
        <td id="L311" class="blob-num js-line-number" data-line-number="311"></td>
        <td id="LC311" class="blob-code blob-code-inner js-file-line">							<span class="pl-en">mem</span>().<span class="pl-en">setUint8</span>(sp <span class="pl-k">+</span> <span class="pl-c1">48</span>, <span class="pl-c1">0</span>);</td>
      </tr>
      <tr>
        <td id="L312" class="blob-num js-line-number" data-line-number="312"></td>
        <td id="LC312" class="blob-code blob-code-inner js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L313" class="blob-num js-line-number" data-line-number="313"></td>
        <td id="LC313" class="blob-code blob-code-inner js-file-line">					},</td>
      </tr>
      <tr>
        <td id="L314" class="blob-num js-line-number" data-line-number="314"></td>
        <td id="LC314" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L315" class="blob-num js-line-number" data-line-number="315"></td>
        <td id="LC315" class="blob-code blob-code-inner js-file-line">					<span class="pl-c"><span class="pl-c">//</span> func valueLength(v ref) int</span></td>
      </tr>
      <tr>
        <td id="L316" class="blob-num js-line-number" data-line-number="316"></td>
        <td id="LC316" class="blob-code blob-code-inner js-file-line">					<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-en">syscall/js.valueLength</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> (<span class="pl-smi">sp</span>) <span class="pl-k">=&gt;</span> {</td>
      </tr>
      <tr>
        <td id="L317" class="blob-num js-line-number" data-line-number="317"></td>
        <td id="LC317" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">setInt64</span>(sp <span class="pl-k">+</span> <span class="pl-c1">16</span>, <span class="pl-c1">parseInt</span>(<span class="pl-en">loadValue</span>(sp <span class="pl-k">+</span> <span class="pl-c1">8</span>).<span class="pl-c1">length</span>));</td>
      </tr>
      <tr>
        <td id="L318" class="blob-num js-line-number" data-line-number="318"></td>
        <td id="LC318" class="blob-code blob-code-inner js-file-line">					},</td>
      </tr>
      <tr>
        <td id="L319" class="blob-num js-line-number" data-line-number="319"></td>
        <td id="LC319" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L320" class="blob-num js-line-number" data-line-number="320"></td>
        <td id="LC320" class="blob-code blob-code-inner js-file-line">					<span class="pl-c"><span class="pl-c">//</span> valuePrepareString(v ref) (ref, int)</span></td>
      </tr>
      <tr>
        <td id="L321" class="blob-num js-line-number" data-line-number="321"></td>
        <td id="LC321" class="blob-code blob-code-inner js-file-line">					<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-en">syscall/js.valuePrepareString</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> (<span class="pl-smi">sp</span>) <span class="pl-k">=&gt;</span> {</td>
      </tr>
      <tr>
        <td id="L322" class="blob-num js-line-number" data-line-number="322"></td>
        <td id="LC322" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">const</span> <span class="pl-c1">str</span> <span class="pl-k">=</span> <span class="pl-smi">encoder</span>.<span class="pl-en">encode</span>(<span class="pl-c1">String</span>(<span class="pl-en">loadValue</span>(sp <span class="pl-k">+</span> <span class="pl-c1">8</span>)));</td>
      </tr>
      <tr>
        <td id="L323" class="blob-num js-line-number" data-line-number="323"></td>
        <td id="LC323" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">storeValue</span>(sp <span class="pl-k">+</span> <span class="pl-c1">16</span>, str);</td>
      </tr>
      <tr>
        <td id="L324" class="blob-num js-line-number" data-line-number="324"></td>
        <td id="LC324" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">setInt64</span>(sp <span class="pl-k">+</span> <span class="pl-c1">24</span>, <span class="pl-smi">str</span>.<span class="pl-c1">length</span>);</td>
      </tr>
      <tr>
        <td id="L325" class="blob-num js-line-number" data-line-number="325"></td>
        <td id="LC325" class="blob-code blob-code-inner js-file-line">					},</td>
      </tr>
      <tr>
        <td id="L326" class="blob-num js-line-number" data-line-number="326"></td>
        <td id="LC326" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L327" class="blob-num js-line-number" data-line-number="327"></td>
        <td id="LC327" class="blob-code blob-code-inner js-file-line">					<span class="pl-c"><span class="pl-c">//</span> valueLoadString(v ref, b []byte)</span></td>
      </tr>
      <tr>
        <td id="L328" class="blob-num js-line-number" data-line-number="328"></td>
        <td id="LC328" class="blob-code blob-code-inner js-file-line">					<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-en">syscall/js.valueLoadString</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> (<span class="pl-smi">sp</span>) <span class="pl-k">=&gt;</span> {</td>
      </tr>
      <tr>
        <td id="L329" class="blob-num js-line-number" data-line-number="329"></td>
        <td id="LC329" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">const</span> <span class="pl-c1">str</span> <span class="pl-k">=</span> <span class="pl-en">loadValue</span>(sp <span class="pl-k">+</span> <span class="pl-c1">8</span>);</td>
      </tr>
      <tr>
        <td id="L330" class="blob-num js-line-number" data-line-number="330"></td>
        <td id="LC330" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">loadSlice</span>(sp <span class="pl-k">+</span> <span class="pl-c1">16</span>).<span class="pl-c1">set</span>(str);</td>
      </tr>
      <tr>
        <td id="L331" class="blob-num js-line-number" data-line-number="331"></td>
        <td id="LC331" class="blob-code blob-code-inner js-file-line">					},</td>
      </tr>
      <tr>
        <td id="L332" class="blob-num js-line-number" data-line-number="332"></td>
        <td id="LC332" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L333" class="blob-num js-line-number" data-line-number="333"></td>
        <td id="LC333" class="blob-code blob-code-inner js-file-line">					<span class="pl-c"><span class="pl-c">//</span> func valueInstanceOf(v ref, t ref) bool</span></td>
      </tr>
      <tr>
        <td id="L334" class="blob-num js-line-number" data-line-number="334"></td>
        <td id="LC334" class="blob-code blob-code-inner js-file-line">					<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-en">syscall/js.valueInstanceOf</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> (<span class="pl-smi">sp</span>) <span class="pl-k">=&gt;</span> {</td>
      </tr>
      <tr>
        <td id="L335" class="blob-num js-line-number" data-line-number="335"></td>
        <td id="LC335" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">mem</span>().<span class="pl-en">setUint8</span>(sp <span class="pl-k">+</span> <span class="pl-c1">24</span>, <span class="pl-en">loadValue</span>(sp <span class="pl-k">+</span> <span class="pl-c1">8</span>) <span class="pl-k">instanceof</span> <span class="pl-en">loadValue</span>(sp <span class="pl-k">+</span> <span class="pl-c1">16</span>));</td>
      </tr>
      <tr>
        <td id="L336" class="blob-num js-line-number" data-line-number="336"></td>
        <td id="LC336" class="blob-code blob-code-inner js-file-line">					},</td>
      </tr>
      <tr>
        <td id="L337" class="blob-num js-line-number" data-line-number="337"></td>
        <td id="LC337" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L338" class="blob-num js-line-number" data-line-number="338"></td>
        <td id="LC338" class="blob-code blob-code-inner js-file-line">					<span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-en">debug</span><span class="pl-pds">&quot;</span></span><span class="pl-k">:</span> (<span class="pl-smi">value</span>) <span class="pl-k">=&gt;</span> {</td>
      </tr>
      <tr>
        <td id="L339" class="blob-num js-line-number" data-line-number="339"></td>
        <td id="LC339" class="blob-code blob-code-inner js-file-line">						<span class="pl-en">console</span>.<span class="pl-c1">log</span>(value);</td>
      </tr>
      <tr>
        <td id="L340" class="blob-num js-line-number" data-line-number="340"></td>
        <td id="LC340" class="blob-code blob-code-inner js-file-line">					},</td>
      </tr>
      <tr>
        <td id="L341" class="blob-num js-line-number" data-line-number="341"></td>
        <td id="LC341" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L342" class="blob-num js-line-number" data-line-number="342"></td>
        <td id="LC342" class="blob-code blob-code-inner js-file-line">			};</td>
      </tr>
      <tr>
        <td id="L343" class="blob-num js-line-number" data-line-number="343"></td>
        <td id="LC343" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L344" class="blob-num js-line-number" data-line-number="344"></td>
        <td id="LC344" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L345" class="blob-num js-line-number" data-line-number="345"></td>
        <td id="LC345" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">async</span> <span class="pl-en">run</span>(<span class="pl-smi">instance</span>) {</td>
      </tr>
      <tr>
        <td id="L346" class="blob-num js-line-number" data-line-number="346"></td>
        <td id="LC346" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-smi">_inst</span> <span class="pl-k">=</span> instance;</td>
      </tr>
      <tr>
        <td id="L347" class="blob-num js-line-number" data-line-number="347"></td>
        <td id="LC347" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-smi">_values</span> <span class="pl-k">=</span> [ <span class="pl-c"><span class="pl-c">//</span> TODO: garbage collection</span></td>
      </tr>
      <tr>
        <td id="L348" class="blob-num js-line-number" data-line-number="348"></td>
        <td id="LC348" class="blob-code blob-code-inner js-file-line">				<span class="pl-c1">NaN</span>,</td>
      </tr>
      <tr>
        <td id="L349" class="blob-num js-line-number" data-line-number="349"></td>
        <td id="LC349" class="blob-code blob-code-inner js-file-line">				<span class="pl-c1">0</span>,</td>
      </tr>
      <tr>
        <td id="L350" class="blob-num js-line-number" data-line-number="350"></td>
        <td id="LC350" class="blob-code blob-code-inner js-file-line">				<span class="pl-c1">null</span>,</td>
      </tr>
      <tr>
        <td id="L351" class="blob-num js-line-number" data-line-number="351"></td>
        <td id="LC351" class="blob-code blob-code-inner js-file-line">				<span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L352" class="blob-num js-line-number" data-line-number="352"></td>
        <td id="LC352" class="blob-code blob-code-inner js-file-line">				<span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L353" class="blob-num js-line-number" data-line-number="353"></td>
        <td id="LC353" class="blob-code blob-code-inner js-file-line">				<span class="pl-c1">global</span>,</td>
      </tr>
      <tr>
        <td id="L354" class="blob-num js-line-number" data-line-number="354"></td>
        <td id="LC354" class="blob-code blob-code-inner js-file-line">				<span class="pl-c1">this</span>.<span class="pl-smi">_inst</span>.<span class="pl-smi">exports</span>.<span class="pl-smi">mem</span>,</td>
      </tr>
      <tr>
        <td id="L355" class="blob-num js-line-number" data-line-number="355"></td>
        <td id="LC355" class="blob-code blob-code-inner js-file-line">				<span class="pl-c1">this</span>,</td>
      </tr>
      <tr>
        <td id="L356" class="blob-num js-line-number" data-line-number="356"></td>
        <td id="LC356" class="blob-code blob-code-inner js-file-line">			];</td>
      </tr>
      <tr>
        <td id="L357" class="blob-num js-line-number" data-line-number="357"></td>
        <td id="LC357" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-smi">_refs</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Map</span>();</td>
      </tr>
      <tr>
        <td id="L358" class="blob-num js-line-number" data-line-number="358"></td>
        <td id="LC358" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-smi">_callbackShutdown</span> <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L359" class="blob-num js-line-number" data-line-number="359"></td>
        <td id="LC359" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-smi">exited</span> <span class="pl-k">=</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L360" class="blob-num js-line-number" data-line-number="360"></td>
        <td id="LC360" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L361" class="blob-num js-line-number" data-line-number="361"></td>
        <td id="LC361" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">const</span> <span class="pl-c1">mem</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">DataView</span>(<span class="pl-c1">this</span>.<span class="pl-smi">_inst</span>.<span class="pl-smi">exports</span>.<span class="pl-smi">mem</span>.<span class="pl-smi">buffer</span>)</td>
      </tr>
      <tr>
        <td id="L362" class="blob-num js-line-number" data-line-number="362"></td>
        <td id="LC362" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L363" class="blob-num js-line-number" data-line-number="363"></td>
        <td id="LC363" class="blob-code blob-code-inner js-file-line">			<span class="pl-c"><span class="pl-c">//</span> Pass command line arguments and environment variables to WebAssembly by writing them to the linear memory.</span></td>
      </tr>
      <tr>
        <td id="L364" class="blob-num js-line-number" data-line-number="364"></td>
        <td id="LC364" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">let</span> offset <span class="pl-k">=</span> <span class="pl-c1">4096</span>;</td>
      </tr>
      <tr>
        <td id="L365" class="blob-num js-line-number" data-line-number="365"></td>
        <td id="LC365" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L366" class="blob-num js-line-number" data-line-number="366"></td>
        <td id="LC366" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">const</span> <span class="pl-c1">strPtr</span> <span class="pl-k">=</span> (<span class="pl-smi">str</span>) <span class="pl-k">=&gt;</span> {</td>
      </tr>
      <tr>
        <td id="L367" class="blob-num js-line-number" data-line-number="367"></td>
        <td id="LC367" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">let</span> ptr <span class="pl-k">=</span> offset;</td>
      </tr>
      <tr>
        <td id="L368" class="blob-num js-line-number" data-line-number="368"></td>
        <td id="LC368" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">new</span> <span class="pl-en">Uint8Array</span>(<span class="pl-smi">mem</span>.<span class="pl-smi">buffer</span>, offset, <span class="pl-smi">str</span>.<span class="pl-c1">length</span> <span class="pl-k">+</span> <span class="pl-c1">1</span>).<span class="pl-c1">set</span>(<span class="pl-smi">encoder</span>.<span class="pl-en">encode</span>(str <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span><span class="pl-cce">\0</span><span class="pl-pds">&quot;</span></span>));</td>
      </tr>
      <tr>
        <td id="L369" class="blob-num js-line-number" data-line-number="369"></td>
        <td id="LC369" class="blob-code blob-code-inner js-file-line">				offset <span class="pl-k">+=</span> <span class="pl-smi">str</span>.<span class="pl-c1">length</span> <span class="pl-k">+</span> (<span class="pl-c1">8</span> <span class="pl-k">-</span> (<span class="pl-smi">str</span>.<span class="pl-c1">length</span> <span class="pl-k">%</span> <span class="pl-c1">8</span>));</td>
      </tr>
      <tr>
        <td id="L370" class="blob-num js-line-number" data-line-number="370"></td>
        <td id="LC370" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">return</span> ptr;</td>
      </tr>
      <tr>
        <td id="L371" class="blob-num js-line-number" data-line-number="371"></td>
        <td id="LC371" class="blob-code blob-code-inner js-file-line">			};</td>
      </tr>
      <tr>
        <td id="L372" class="blob-num js-line-number" data-line-number="372"></td>
        <td id="LC372" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L373" class="blob-num js-line-number" data-line-number="373"></td>
        <td id="LC373" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">const</span> <span class="pl-c1">argc</span> <span class="pl-k">=</span> <span class="pl-c1">this</span>.<span class="pl-smi">argv</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L374" class="blob-num js-line-number" data-line-number="374"></td>
        <td id="LC374" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L375" class="blob-num js-line-number" data-line-number="375"></td>
        <td id="LC375" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">const</span> <span class="pl-c1">argvPtrs</span> <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L376" class="blob-num js-line-number" data-line-number="376"></td>
        <td id="LC376" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">this</span>.<span class="pl-smi">argv</span>.<span class="pl-c1">forEach</span>((<span class="pl-smi">arg</span>) <span class="pl-k">=&gt;</span> {</td>
      </tr>
      <tr>
        <td id="L377" class="blob-num js-line-number" data-line-number="377"></td>
        <td id="LC377" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">argvPtrs</span>.<span class="pl-c1">push</span>(<span class="pl-en">strPtr</span>(arg));</td>
      </tr>
      <tr>
        <td id="L378" class="blob-num js-line-number" data-line-number="378"></td>
        <td id="LC378" class="blob-code blob-code-inner js-file-line">			});</td>
      </tr>
      <tr>
        <td id="L379" class="blob-num js-line-number" data-line-number="379"></td>
        <td id="LC379" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L380" class="blob-num js-line-number" data-line-number="380"></td>
        <td id="LC380" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">const</span> <span class="pl-c1">keys</span> <span class="pl-k">=</span> <span class="pl-c1">Object</span>.<span class="pl-c1">keys</span>(<span class="pl-c1">this</span>.<span class="pl-smi">env</span>).<span class="pl-c1">sort</span>();</td>
      </tr>
      <tr>
        <td id="L381" class="blob-num js-line-number" data-line-number="381"></td>
        <td id="LC381" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">argvPtrs</span>.<span class="pl-c1">push</span>(<span class="pl-smi">keys</span>.<span class="pl-c1">length</span>);</td>
      </tr>
      <tr>
        <td id="L382" class="blob-num js-line-number" data-line-number="382"></td>
        <td id="LC382" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">keys</span>.<span class="pl-c1">forEach</span>((<span class="pl-smi">key</span>) <span class="pl-k">=&gt;</span> {</td>
      </tr>
      <tr>
        <td id="L383" class="blob-num js-line-number" data-line-number="383"></td>
        <td id="LC383" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">argvPtrs</span>.<span class="pl-c1">push</span>(<span class="pl-en">strPtr</span>(<span class="pl-s"><span class="pl-pds">`</span><span class="pl-s1"><span class="pl-pse">${</span>key<span class="pl-pse">}</span></span>=<span class="pl-s1"><span class="pl-pse">${</span><span class="pl-c1">this</span>.<span class="pl-smi">env</span>[key]<span class="pl-pse">}</span></span><span class="pl-pds">`</span></span>));</td>
      </tr>
      <tr>
        <td id="L384" class="blob-num js-line-number" data-line-number="384"></td>
        <td id="LC384" class="blob-code blob-code-inner js-file-line">			});</td>
      </tr>
      <tr>
        <td id="L385" class="blob-num js-line-number" data-line-number="385"></td>
        <td id="LC385" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L386" class="blob-num js-line-number" data-line-number="386"></td>
        <td id="LC386" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">const</span> <span class="pl-c1">argv</span> <span class="pl-k">=</span> offset;</td>
      </tr>
      <tr>
        <td id="L387" class="blob-num js-line-number" data-line-number="387"></td>
        <td id="LC387" class="blob-code blob-code-inner js-file-line">			<span class="pl-smi">argvPtrs</span>.<span class="pl-c1">forEach</span>((<span class="pl-smi">ptr</span>) <span class="pl-k">=&gt;</span> {</td>
      </tr>
      <tr>
        <td id="L388" class="blob-num js-line-number" data-line-number="388"></td>
        <td id="LC388" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">mem</span>.<span class="pl-en">setUint32</span>(offset, ptr, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L389" class="blob-num js-line-number" data-line-number="389"></td>
        <td id="LC389" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">mem</span>.<span class="pl-en">setUint32</span>(offset <span class="pl-k">+</span> <span class="pl-c1">4</span>, <span class="pl-c1">0</span>, <span class="pl-c1">true</span>);</td>
      </tr>
      <tr>
        <td id="L390" class="blob-num js-line-number" data-line-number="390"></td>
        <td id="LC390" class="blob-code blob-code-inner js-file-line">				offset <span class="pl-k">+=</span> <span class="pl-c1">8</span>;</td>
      </tr>
      <tr>
        <td id="L391" class="blob-num js-line-number" data-line-number="391"></td>
        <td id="LC391" class="blob-code blob-code-inner js-file-line">			});</td>
      </tr>
      <tr>
        <td id="L392" class="blob-num js-line-number" data-line-number="392"></td>
        <td id="LC392" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L393" class="blob-num js-line-number" data-line-number="393"></td>
        <td id="LC393" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">while</span> (<span class="pl-c1">true</span>) {</td>
      </tr>
      <tr>
        <td id="L394" class="blob-num js-line-number" data-line-number="394"></td>
        <td id="LC394" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">const</span> <span class="pl-c1">callbackPromise</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Promise</span>((<span class="pl-smi">resolve</span>) <span class="pl-k">=&gt;</span> {</td>
      </tr>
      <tr>
        <td id="L395" class="blob-num js-line-number" data-line-number="395"></td>
        <td id="LC395" class="blob-code blob-code-inner js-file-line">					<span class="pl-c1">this</span>.<span class="pl-en">_resolveCallbackPromise</span> <span class="pl-k">=</span> () <span class="pl-k">=&gt;</span> {</td>
      </tr>
      <tr>
        <td id="L396" class="blob-num js-line-number" data-line-number="396"></td>
        <td id="LC396" class="blob-code blob-code-inner js-file-line">						<span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-smi">exited</span>) {</td>
      </tr>
      <tr>
        <td id="L397" class="blob-num js-line-number" data-line-number="397"></td>
        <td id="LC397" class="blob-code blob-code-inner js-file-line">							<span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>bad callback: Go program has already exited<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L398" class="blob-num js-line-number" data-line-number="398"></td>
        <td id="LC398" class="blob-code blob-code-inner js-file-line">						}</td>
      </tr>
      <tr>
        <td id="L399" class="blob-num js-line-number" data-line-number="399"></td>
        <td id="LC399" class="blob-code blob-code-inner js-file-line">						<span class="pl-c1">setTimeout</span>(resolve, <span class="pl-c1">0</span>); <span class="pl-c"><span class="pl-c">//</span> make sure it is asynchronous</span></td>
      </tr>
      <tr>
        <td id="L400" class="blob-num js-line-number" data-line-number="400"></td>
        <td id="LC400" class="blob-code blob-code-inner js-file-line">					};</td>
      </tr>
      <tr>
        <td id="L401" class="blob-num js-line-number" data-line-number="401"></td>
        <td id="LC401" class="blob-code blob-code-inner js-file-line">				});</td>
      </tr>
      <tr>
        <td id="L402" class="blob-num js-line-number" data-line-number="402"></td>
        <td id="LC402" class="blob-code blob-code-inner js-file-line">				<span class="pl-c1">this</span>.<span class="pl-smi">_inst</span>.<span class="pl-smi">exports</span>.<span class="pl-en">run</span>(argc, argv);</td>
      </tr>
      <tr>
        <td id="L403" class="blob-num js-line-number" data-line-number="403"></td>
        <td id="LC403" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (<span class="pl-c1">this</span>.<span class="pl-smi">exited</span>) {</td>
      </tr>
      <tr>
        <td id="L404" class="blob-num js-line-number" data-line-number="404"></td>
        <td id="LC404" class="blob-code blob-code-inner js-file-line">					<span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L405" class="blob-num js-line-number" data-line-number="405"></td>
        <td id="LC405" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L406" class="blob-num js-line-number" data-line-number="406"></td>
        <td id="LC406" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">await</span> callbackPromise;</td>
      </tr>
      <tr>
        <td id="L407" class="blob-num js-line-number" data-line-number="407"></td>
        <td id="LC407" class="blob-code blob-code-inner js-file-line">			}</td>
      </tr>
      <tr>
        <td id="L408" class="blob-num js-line-number" data-line-number="408"></td>
        <td id="LC408" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L409" class="blob-num js-line-number" data-line-number="409"></td>
        <td id="LC409" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L410" class="blob-num js-line-number" data-line-number="410"></td>
        <td id="LC410" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">static</span> <span class="pl-en">_makeCallbackHelper</span>(<span class="pl-smi">id</span>, <span class="pl-smi">pendingCallbacks</span>, <span class="pl-smi">go</span>) {</td>
      </tr>
      <tr>
        <td id="L411" class="blob-num js-line-number" data-line-number="411"></td>
        <td id="LC411" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr>
        <td id="L412" class="blob-num js-line-number" data-line-number="412"></td>
        <td id="LC412" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">pendingCallbacks</span>.<span class="pl-c1">push</span>({ id<span class="pl-k">:</span> id, args<span class="pl-k">:</span> <span class="pl-c1">arguments</span> });</td>
      </tr>
      <tr>
        <td id="L413" class="blob-num js-line-number" data-line-number="413"></td>
        <td id="LC413" class="blob-code blob-code-inner js-file-line">				<span class="pl-smi">go</span>.<span class="pl-en">_resolveCallbackPromise</span>();</td>
      </tr>
      <tr>
        <td id="L414" class="blob-num js-line-number" data-line-number="414"></td>
        <td id="LC414" class="blob-code blob-code-inner js-file-line">			};</td>
      </tr>
      <tr>
        <td id="L415" class="blob-num js-line-number" data-line-number="415"></td>
        <td id="LC415" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L416" class="blob-num js-line-number" data-line-number="416"></td>
        <td id="LC416" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L417" class="blob-num js-line-number" data-line-number="417"></td>
        <td id="LC417" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">static</span> <span class="pl-en">_makeEventCallbackHelper</span>(<span class="pl-smi">preventDefault</span>, <span class="pl-smi">stopPropagation</span>, <span class="pl-smi">stopImmediatePropagation</span>, <span class="pl-smi">fn</span>) {</td>
      </tr>
      <tr>
        <td id="L418" class="blob-num js-line-number" data-line-number="418"></td>
        <td id="LC418" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-k">function</span> (<span class="pl-c1">event</span>) {</td>
      </tr>
      <tr>
        <td id="L419" class="blob-num js-line-number" data-line-number="419"></td>
        <td id="LC419" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (preventDefault) {</td>
      </tr>
      <tr>
        <td id="L420" class="blob-num js-line-number" data-line-number="420"></td>
        <td id="LC420" class="blob-code blob-code-inner js-file-line">					<span class="pl-c1">event</span>.<span class="pl-c1">preventDefault</span>();</td>
      </tr>
      <tr>
        <td id="L421" class="blob-num js-line-number" data-line-number="421"></td>
        <td id="LC421" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L422" class="blob-num js-line-number" data-line-number="422"></td>
        <td id="LC422" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (stopPropagation) {</td>
      </tr>
      <tr>
        <td id="L423" class="blob-num js-line-number" data-line-number="423"></td>
        <td id="LC423" class="blob-code blob-code-inner js-file-line">					<span class="pl-c1">event</span>.<span class="pl-c1">stopPropagation</span>();</td>
      </tr>
      <tr>
        <td id="L424" class="blob-num js-line-number" data-line-number="424"></td>
        <td id="LC424" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L425" class="blob-num js-line-number" data-line-number="425"></td>
        <td id="LC425" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (stopImmediatePropagation) {</td>
      </tr>
      <tr>
        <td id="L426" class="blob-num js-line-number" data-line-number="426"></td>
        <td id="LC426" class="blob-code blob-code-inner js-file-line">					<span class="pl-c1">event</span>.<span class="pl-c1">stopImmediatePropagation</span>();</td>
      </tr>
      <tr>
        <td id="L427" class="blob-num js-line-number" data-line-number="427"></td>
        <td id="LC427" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L428" class="blob-num js-line-number" data-line-number="428"></td>
        <td id="LC428" class="blob-code blob-code-inner js-file-line">				<span class="pl-en">fn</span>(<span class="pl-c1">event</span>);</td>
      </tr>
      <tr>
        <td id="L429" class="blob-num js-line-number" data-line-number="429"></td>
        <td id="LC429" class="blob-code blob-code-inner js-file-line">			};</td>
      </tr>
      <tr>
        <td id="L430" class="blob-num js-line-number" data-line-number="430"></td>
        <td id="LC430" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L431" class="blob-num js-line-number" data-line-number="431"></td>
        <td id="LC431" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L432" class="blob-num js-line-number" data-line-number="432"></td>
        <td id="LC432" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L433" class="blob-num js-line-number" data-line-number="433"></td>
        <td id="LC433" class="blob-code blob-code-inner js-file-line">	<span class="pl-k">if</span> (isNodeJS) {</td>
      </tr>
      <tr>
        <td id="L434" class="blob-num js-line-number" data-line-number="434"></td>
        <td id="LC434" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span class="pl-c1">process</span>.<span class="pl-smi">argv</span>.<span class="pl-c1">length</span> <span class="pl-k">&lt;</span> <span class="pl-c1">3</span>) {</td>
      </tr>
      <tr>
        <td id="L435" class="blob-num js-line-number" data-line-number="435"></td>
        <td id="LC435" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">process</span>.<span class="pl-smi">stderr</span>.<span class="pl-c1">write</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>usage: go_js_wasm_exec [wasm binary] [arguments]<span class="pl-cce">\n</span><span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L436" class="blob-num js-line-number" data-line-number="436"></td>
        <td id="LC436" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">process</span>.<span class="pl-en">exit</span>(<span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L437" class="blob-num js-line-number" data-line-number="437"></td>
        <td id="LC437" class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr>
        <td id="L438" class="blob-num js-line-number" data-line-number="438"></td>
        <td id="LC438" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L439" class="blob-num js-line-number" data-line-number="439"></td>
        <td id="LC439" class="blob-code blob-code-inner js-file-line">		<span class="pl-k">const</span> <span class="pl-c1">go</span> <span class="pl-k">=</span> <span class="pl-k">new</span> <span class="pl-en">Go</span>();</td>
      </tr>
      <tr>
        <td id="L440" class="blob-num js-line-number" data-line-number="440"></td>
        <td id="LC440" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">go</span>.<span class="pl-smi">argv</span> <span class="pl-k">=</span> <span class="pl-c1">process</span>.<span class="pl-smi">argv</span>.<span class="pl-c1">slice</span>(<span class="pl-c1">2</span>);</td>
      </tr>
      <tr>
        <td id="L441" class="blob-num js-line-number" data-line-number="441"></td>
        <td id="LC441" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">go</span>.<span class="pl-smi">env</span> <span class="pl-k">=</span> <span class="pl-c1">process</span>.<span class="pl-smi">env</span>;</td>
      </tr>
      <tr>
        <td id="L442" class="blob-num js-line-number" data-line-number="442"></td>
        <td id="LC442" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">go</span>.<span class="pl-smi">exit</span> <span class="pl-k">=</span> <span class="pl-c1">process</span>.<span class="pl-smi">exit</span>;</td>
      </tr>
      <tr>
        <td id="L443" class="blob-num js-line-number" data-line-number="443"></td>
        <td id="LC443" class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">WebAssembly</span>.<span class="pl-en">instantiate</span>(<span class="pl-smi">fs</span>.<span class="pl-en">readFileSync</span>(<span class="pl-c1">process</span>.<span class="pl-smi">argv</span>[<span class="pl-c1">2</span>]), <span class="pl-smi">go</span>.<span class="pl-smi">importObject</span>).<span class="pl-c1">then</span>((<span class="pl-smi">result</span>) <span class="pl-k">=&gt;</span> {</td>
      </tr>
      <tr>
        <td id="L444" class="blob-num js-line-number" data-line-number="444"></td>
        <td id="LC444" class="blob-code blob-code-inner js-file-line">			<span class="pl-c1">process</span>.<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>exit<span class="pl-pds">&quot;</span></span>, (<span class="pl-smi">code</span>) <span class="pl-k">=&gt;</span> { <span class="pl-c"><span class="pl-c">//</span> Node.js exits if no callback is pending</span></td>
      </tr>
      <tr>
        <td id="L445" class="blob-num js-line-number" data-line-number="445"></td>
        <td id="LC445" class="blob-code blob-code-inner js-file-line">				<span class="pl-k">if</span> (code <span class="pl-k">===</span> <span class="pl-c1">0</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span><span class="pl-smi">go</span>.<span class="pl-smi">exited</span>) {</td>
      </tr>
      <tr>
        <td id="L446" class="blob-num js-line-number" data-line-number="446"></td>
        <td id="LC446" class="blob-code blob-code-inner js-file-line">					<span class="pl-c"><span class="pl-c">//</span> deadlock, make Go print error and stack traces</span></td>
      </tr>
      <tr>
        <td id="L447" class="blob-num js-line-number" data-line-number="447"></td>
        <td id="LC447" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">go</span>.<span class="pl-smi">_callbackShutdown</span> <span class="pl-k">=</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L448" class="blob-num js-line-number" data-line-number="448"></td>
        <td id="LC448" class="blob-code blob-code-inner js-file-line">					<span class="pl-smi">go</span>.<span class="pl-smi">_inst</span>.<span class="pl-smi">exports</span>.<span class="pl-en">run</span>();</td>
      </tr>
      <tr>
        <td id="L449" class="blob-num js-line-number" data-line-number="449"></td>
        <td id="LC449" class="blob-code blob-code-inner js-file-line">				}</td>
      </tr>
      <tr>
        <td id="L450" class="blob-num js-line-number" data-line-number="450"></td>
        <td id="LC450" class="blob-code blob-code-inner js-file-line">			});</td>
      </tr>
      <tr>
        <td id="L451" class="blob-num js-line-number" data-line-number="451"></td>
        <td id="LC451" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span> <span class="pl-smi">go</span>.<span class="pl-en">run</span>(<span class="pl-smi">result</span>.<span class="pl-smi">instance</span>);</td>
      </tr>
      <tr>
        <td id="L452" class="blob-num js-line-number" data-line-number="452"></td>
        <td id="LC452" class="blob-code blob-code-inner js-file-line">		}).<span class="pl-c1">catch</span>((<span class="pl-smi">err</span>) <span class="pl-k">=&gt;</span> {</td>
      </tr>
      <tr>
        <td id="L453" class="blob-num js-line-number" data-line-number="453"></td>
        <td id="LC453" class="blob-code blob-code-inner js-file-line">			<span class="pl-k">throw</span> err;</td>
      </tr>
      <tr>
        <td id="L454" class="blob-num js-line-number" data-line-number="454"></td>
        <td id="LC454" class="blob-code blob-code-inner js-file-line">		});</td>
      </tr>
      <tr>
        <td id="L455" class="blob-num js-line-number" data-line-number="455"></td>
        <td id="LC455" class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr>
        <td id="L456" class="blob-num js-line-number" data-line-number="456"></td>
        <td id="LC456" class="blob-code blob-code-inner js-file-line">})();</td>
      </tr>
</table>

  <details class="details-reset details-overlay BlobToolbar position-absolute js-file-line-actions dropdown d-none" aria-hidden="true">
    <summary class="btn-octicon ml-0 px-2 p-0 bg-white border border-gray-dark rounded-1" aria-label="Inline file action toolbar">
      <svg class="octicon octicon-kebab-horizontal" viewBox="0 0 13 16" version="1.1" width="13" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM13 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></svg>
    </summary>
    <details-menu>
      <ul class="BlobToolbar-dropdown dropdown-menu dropdown-menu-se mt-2">
        <li><clipboard-copy role="menuitem" class="dropdown-item" id="js-copy-lines" style="cursor:pointer;" data-original-text="Copy lines">Copy lines</clipboard-copy></li>
        <li><clipboard-copy role="menuitem" class="dropdown-item" id="js-copy-permalink" style="cursor:pointer;" data-original-text="Copy permalink">Copy permalink</clipboard-copy></li>
        <li><a class="dropdown-item js-update-url-with-hash" id="js-view-git-blame" role="menuitem" href="/golang/go/blame/6fe8ee78e9b4870ebc1de2b5cfd6170a78a56c00/misc/wasm/wasm_exec.js">View git blame</a></li>
          <li><a class="dropdown-item" id="js-new-issue" role="menuitem" href="/golang/go/issues/new">Open new issue</a></li>
      </ul>
    </details-menu>
  </details>

  </div>

    </div>

  

  <details class="details-reset details-overlay details-overlay-dark">
    <summary data-hotkey="l" aria-label="Jump to line"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast linejump" aria-label="Jump to line">
      <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-jump-to-line-form Box-body d-flex" action="" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
        <input class="form-control flex-auto mr-3 linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
        <button type="submit" class="btn" data-close-dialog>Go</button>
</form>    </details-dialog>
  </details>


  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>

    </div>
  </div>

  </div>

        
<div class="footer container-lg px-3" role="contentinfo">
  <div class="position-relative d-flex flex-justify-between pt-6 pb-2 mt-6 f6 text-gray border-top border-gray-light ">
    <ul class="list-style-none d-flex flex-wrap ">
      <li class="mr-3">&copy; 2018 <span title="0.47188s from unicorn-599585658b-5b494">GitHub</span>, Inc.</li>
        <li class="mr-3"><a data-ga-click="Footer, go to terms, text:terms" href="https://github.com/site/terms">Terms</a></li>
        <li class="mr-3"><a data-ga-click="Footer, go to privacy, text:privacy" href="https://github.com/site/privacy">Privacy</a></li>
        <li class="mr-3"><a href="https://help.github.com/articles/github-security/" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li class="mr-3"><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a data-ga-click="Footer, go to help, text:help" href="https://help.github.com">Help</a></li>
    </ul>

    <a aria-label="Homepage" title="GitHub" class="footer-octicon mr-lg-4" href="https://github.com">
      <svg height="24" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
   <ul class="list-style-none d-flex flex-wrap ">
        <li class="mr-3"><a data-ga-click="Footer, go to contact, text:contact" href="https://github.com/contact">Contact GitHub</a></li>
        <li class="mr-3"><a href="https://github.com/pricing" data-ga-click="Footer, go to Pricing, text:Pricing">Pricing</a></li>
      <li class="mr-3"><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li class="mr-3"><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
        <li class="mr-3"><a href="https://blog.github.com" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a data-ga-click="Footer, go to about, text:about" href="https://github.com/about">About</a></li>

    </ul>
  </div>
  <div class="d-flex flex-justify-center pb-6">
    <span class="f6 text-gray-light"></span>
  </div>
</div>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
    </button>
    You can’t perform that action at this time.
  </div>


    <script crossorigin="anonymous" integrity="sha512-BlCeoZU+kjn7xucWZBcl0n4Bn0P8dE19/sUfLHOxySQnsoy3ufEzapurMbZWSlwab5KGfnp1X5ipJvUDMLroqw==" type="application/javascript" src="https://assets-cdn.github.com/assets/compat-0f98b12d09f3ba331eef956ab02996e3.js"></script>
    <script crossorigin="anonymous" integrity="sha512-9E3sHSwrJGUiIDmf7IURDLz9Ob2E/W2JRykVfAAaL0cvLrwnjoUYAeLu4XQ4j9RTPLclLDLAeRhbGR9bwxTiyg==" type="application/javascript" src="https://assets-cdn.github.com/assets/frameworks-8b43903482b2c45904929cdac0c62a0e.js"></script>
    
    <script crossorigin="anonymous" async="async" integrity="sha512-Uv7ykUpMT7bI4W390Z67EVhYKVaMZz1C4ADfiPVrtrdF6PCquKN7AHRzrrTaikkaL3jDnY/pYalw4ZF+5Bj90Q==" type="application/javascript" src="https://assets-cdn.github.com/assets/github-b8e8624c21ec3f2091551b4c77d879e0.js"></script>
    
    
    
  <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>
    <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
    </button>
  </div>
</div>

  <template id="site-details-dialog">
  <details class="details-reset details-overlay details-overlay-dark lh-default text-gray-dark" open>
    <summary aria-haspopup="dialog" aria-label="Close dialog"></summary>
    <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast">
      <button class="Box-btn-octicon m-0 btn-octicon position-absolute right-0 top-0" type="button" aria-label="Close dialog" data-close-dialog>
        <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
      </button>
      <div class="octocat-spinner my-6 js-details-dialog-spinner"></div>
    </details-dialog>
  </details>
</template>

  <div class="Popover js-hovercard-content position-absolute" style="display: none; outline: none;" tabindex="0">
  <div class="Popover-message Popover-message--bottom-left Popover-message--large Box box-shadow-large" style="width:360px;">
  </div>
</div>

<div id="hovercard-aria-description" class="sr-only">
  Press h to open a hovercard with more details.
</div>


  </body>
</html>

