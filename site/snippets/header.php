<!doctype html>
<html lang="<?= site()->language() ? site()->language()->code() : 'en' ?>">
<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">

  <title><?= $site->title()->html() ?> | <?= $page->title()->html() ?></title>
  <meta name="description" content="<?= $site->description()->html() ?>">
  <?= css('assets/min/style.css') ?>

</head>
<body class="loading page-<?= $page->uid() ?><?php
if (!empty($page->parent()->uid())) {
   echo ' '.$page->parent()->uid().'-child-page';
 }  ?>">
  <div id="mediaqueries"></div>
  <header class="header" role="banner">
    <div class="inner-header">
      <div class="branding">
        <a class="logo" href="<?= url() ?>" rel="home">logo</a>
      </div>
      <?php snippet('menu') ?>
    </div>
  </header>