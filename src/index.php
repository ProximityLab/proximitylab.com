<?php
    $activePage = !empty($_GET['page']) ? trim($_GET['page']) : '';

    $bodyclass = 'ww-portfolio'; // default body class
    $activePagePhp = 'includes/pages/home.php'; // default active page include
    $pageCss = '<link rel="stylesheet" href="/css/home.css">'; //default page css

    switch ($activePage) {
      case '/work/solidworks':
        $pageCss = '<link rel="stylesheet" href="/css/solidworks.css">';
        $activePagePhp = 'includes/pages/solidworks.php';
        break;
      case '/work/massart':
        $pageCss = '<link rel="stylesheet" href="/css/massart.css">';
        $activePagePhp = 'includes/pages/massart.php';
        break;
      case '/work/mosaic':
        $pageCss = '<link rel="stylesheet" href="/css/mosaic.css">';
        $activePagePhp = 'includes/pages/mosaic.php';
        break;
      case '/work/rootinsight':
        $pageCss = '<link rel="stylesheet" href="/css/rootinsight.css">';
        $activePagePhp = 'includes/pages/rootinsight.php';
        break;
      case '/work/adobe':
        $pageCss = '<link rel="stylesheet" href="/css/adobe.css">';
        $activePagePhp = 'includes/pages/adobe.php';
        break;
      case '/work/eagle':
        $pageCss = '<link rel="stylesheet" href="/css/eagle.css">';
        $activePagePhp = 'includes/pages/eagle.php';
        break;
      case '/work/philips':
        $pageCss = '<link rel="stylesheet" href="/css/philips.css">';
        $activePagePhp = 'includes/pages/philips.php';
        break;
      case '/work/scribe':
        $pageCss = '<link rel="stylesheet" href="/css/scribe.css">';
        $activePagePhp = 'includes/pages/scribe.php';
        break;
      case '/work/minim':
        $pageCss = '<link rel="stylesheet" href="/css/minim.css">';
        $activePagePhp = 'includes/pages/minim.php';
        break;
      case '/work/icovia':
        $pageCss = '<link rel="stylesheet" href="/css/icovia.css">';
        $activePagePhp = 'includes/pages/icovia.php';
        break;
      case '/work/scheduleme':
        $pageCss = '<link rel="stylesheet" href="/css/scheduleme.css">';
        $activePagePhp = 'includes/pages/scheduleme.php';
        break;
      case '/work/songbird':
        $pageCss = '<link rel="stylesheet" href="/css/songbird.css">';
        $activePagePhp = 'includes/pages/songbird.php';
        break;
      case '/work/billnye':
        $pageCss = '<link rel="stylesheet" href="/css/billnye.css">';
        $activePagePhp = 'includes/pages/billnye.php';
        break;
      case '/work/wagz':
        $pageCss = '<link rel="stylesheet" href="/css/wagz.css">';
        $activePagePhp = 'includes/pages/wagz.php';
        break;
      case '/work/amadeus':
        $pageCss = '<link rel="stylesheet" href="/css/amadeus.css">';
        $activePagePhp = 'includes/pages/amadeus.php';
        break;
      case '':
      case '/home':
        $bodyclass = 'home';
        $pageCss = '<link rel="stylesheet" href="/css/home.css">';
        $activePagePhp = 'includes/pages/home.php';
        break;
      case '/about':
        $bodyclass = 'about';
        $pageCss = '<link rel="stylesheet" href="/css/about.css">';
        $activePagePhp = 'includes/pages/about.php';
        break;
      case '/work':
        $bodyclass = 'ww-work';
        $pageCss = '<link rel="stylesheet" href="/css/work.css">';
        $activePagePhp = 'includes/pages/work.php';
        break;
      case '/404':
        $bodyclass = 'ww-work';
        $pageCss = '<link rel="stylesheet" href="/css/404.css">';
        $activePagePhp = 'includes/pages/404.php';
        break;
      default:
        if (empty($activePage)) { // If activePage is empty then we assume it's home
          $bodyclass = 'home';
          $pageCss = '<link rel="stylesheet" href="/css/home.css">';
          $activePagePhp = 'includes/pages/home.php';
        } else { // If activePage isn't empty, but doesn't match anything else then it's 404
          header('Location: /?page=/404');
          exit;
        }
        break;
    }
?>
<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>Proximity Lab │ Human-centered Experience Design, User Interface and Product Launch</title>


        <link rel="stylesheet" href="/css/jquery.mobile.custom.structure.min.css">
        <link rel="stylesheet" href="/css/jquery.mobile.custom.theme.min.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Assistant:200,300,400,600">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" integrity="sha384-OHBBOqpYHNsIqQy8hL1U+8OXf9hH6QRxi0+EODezv82DfnZoV7qoHAZDwMwEJvSw" crossorigin="anonymous">
        <link rel="stylesheet" href="/css/main.css">
        <?= $pageCss ?>

        <script>
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

          ga('create', 'UA-28875731-1', 'auto');
          ga('send', 'pageview');

        </script>
    </head>
    <body id="waypoint" class="animated fadeIn <?php echo $bodyclass ?>">
      <?php
        include('includes/navigation.php');
        include($activePagePhp);
        include('includes/footer.php');
      ?>

      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
      <script src="/js/jquery-migrate-3.0.0.js"></script>
      <script src="/js/jquery.mobile.custom.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>
      <script src="/js/jquery.waypoints.min.js"></script>
      <!-- <script>
        if ('registerElement' in document
          && 'createShadowRoot' in HTMLElement.prototype
          && 'import' in document.createElement('link')
          && 'content' in document.createElement('template')) {
          // We're using a browser with native WC support!
        } else {
          document.write('<script src="https:\/\/cdnjs.cloudflare.com/ajax/libs/polymer/0.3.4/platform.js"><\/script>')
        }
      </script> -->
      <script src="/custom.js"></script>
    </body>
</html>
