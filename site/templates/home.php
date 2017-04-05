<?php snippet('header') ?>

  <main class="main" role="main">
    
    <div class="text right">
      <h1 class="pagetitle"><?= $page->title()->html() ?></h1>
      <?= $page->text()->kirbytext() ?>

<?php snippet('footer') ?>