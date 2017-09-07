<?php

$pagelist = array(
  'rootinsight',
  'amadeus',
  'scribe',
  'wagz',
  'minim',
  'nye',
  'adobe',
  'philips',
  'eagle',
  'solidworks',
  'songbird',
  'icovia',
  'mosaic',
  'scheduleme'
);

$previous;
$next;
$listamount = count($pagelist);
// && $value < $listamount - 1
// $value > 0
foreach ($pagelist as $key => $value) {

  if($value == $activePage) {
    $currentpagenum = $key;
  }
}

if (!empty($currentpagenum) && $currentpagenum < $listamount - 1){
  $next = $pagelist[$currentpagenum + 1];
}
else {
  $next = $pagelist[0];
}

if (!empty($currentpagenum) && $currentpagenum > 0){
  $previous = $pagelist[$currentpagenum - 1];
  echo $pagelist[$currentpagenum -1];
}
else {
  $previous = $pagelist[$listamount - 1];
}
// unset($value); // break the reference with the last element
// unset($key);
// unset($previous);
// unset($next);
// unset($currentpagenum);

 ?>
 <div id="home-carousel-header" class="primary-nav-holder carousel slide home-carousel-header ">
	<nav class="page-navigation">
		<a href="/" id="pl-nav-logo"class="site-title-r">Proximity Lab</a>
		<ul>
			<li><a class="page-navigation-link<?php if ($activePage == 'about') echo ' page-navigation-link-active'; ?>" href="/about">About</a></li>
			<li><a class="page-navigation-link<?php if ($activePage == 'work') echo ' page-navigation-link-active'; ?>" href="/work">Work</a></li>
			<li><a href="/work/<?php echo $previous; ?>" class="jumbotron-left" alt="Previous project"></a></li>
			<li><a href="/work/<?php echo $next; ?>" class="jumbotron-right" alt="Next project"></a></li>
		</ul>
	</nav>
	<div class="ww-underlay"></div>
</div>
