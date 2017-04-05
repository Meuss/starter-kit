<!DOCTYPE html>
<html lang="en">
<head>

  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0">

  <title><?php echo $site->title()->html() ?> | <?php echo $page->title()->html() ?></title>
  <meta name="description" content="<?php echo $site->description()->html() ?>">
  <meta name="keywords" content="<?php echo $site->keywords()->html() ?>">

  <?php echo css('assets/min/style.css') ?>

</head>
<body class="page-<?php echo $site->uri() ?>">

  <header class="header cf" role="banner">
    <a class="logo" href="<?php echo url() ?>">
      Logo
    </a>
    <?php snippet('menu') ?>
  </header>