<nav class="navigation" role="navigation">
  <ul class="menu main-menu">
    <?php foreach($pages->visible() as $item): ?>
    <li class="menu-item<?= r($item->isOpen(), ' is-active') ?>">
      <?php if ($item->hasVisibleChildren()) { ?>
        <a href="<?= $item->children()->visible()->first()->url() ?>"><?= $item->title()->html() ?></a>
      <?php } else { ?>
        <a href="<?= $item->url() ?>"><?= $item->title()->html() ?></a>
      <?php } ?>
    </li>
    <?php endforeach ?>
  </ul>
</nav>