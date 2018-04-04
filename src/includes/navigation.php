<?php

$pagelist = array(
  '/work/scribe',
  '/work/amadeus',
  '/work/minim',
  '/work/wagz',
  '/work/eagle',
  '/work/billnye',
  '/work/adobe',
  '/work/rootinsight',
  '/work/mosaic',
  '/work/massart',
  '/work/solidworks',
  '/work/songbird',
  '/work/philips',
  '/work/scheduleme',
  '/work/icovia'
);

$isWorkCurrent = false;
$previous;
$next;
$listamount = count($pagelist);
// && $value < $listamount - 1
// $value > 0
foreach ($pagelist as $key => $value) {

  if($value == $activePage) {
    $currentpagenum = $key;
    $isWorkCurrent = true;
  }
}

if (isset($currentpagenum)){
  $current = $pagelist[$currentpagenum];
}

if (isset($currentpagenum) && $currentpagenum < $listamount - 1){
  $next = $pagelist[$currentpagenum + 1];
}
else {
  $next = $pagelist[0];
}

if (isset($currentpagenum) && $currentpagenum > 0){
  $previous = $pagelist[$currentpagenum - 1];
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
 <div class="primary-nav-holder">
	<nav class="page-navigation">
		<a href="/" id="pl-nav-logo" class="site-title-r">Proximity Lab</a>
		<ul class="d-flex">
			<li class="align-self-center"><a class="page-navigation-link<?php if ($activePage == '/about') echo ' page-navigation-link-active'; ?>" href="/about">About</a></li>
			<li class="align-self-center"><a class="page-navigation-link<?php if ($activePage == '/work' || $isWorkCurrent) echo ' page-navigation-link-active'; ?><?php if ($isWorkCurrent) echo ' work-page'; ?>" href="/work">Work</a></li>
			<?php if ($isWorkCurrent) { ?><li class="align-self-center"><a href="<?php echo $previous; ?>" data-role="previous-page" class="jumbotron-left d-flex justify-content-center" alt="Previous project"><span class="align-self-center"></span></a></li><?php } ?>
			<?php if ($isWorkCurrent) { ?><li class="align-self-center"><a href="<?php echo $next; ?>" data-role="next-page"  class="jumbotron-right d-flex justify-content-center" alt="Next project"><span class="align-self-center"></span></a></li><?php } ?>
		</ul>
	</nav>
	<div class="ww-underlay"></div>
</div>
