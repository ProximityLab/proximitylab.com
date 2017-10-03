<?php
    $activePage = !empty($_GET['page']) ? trim($_GET['page']) : '';

    $bodyclass = 'ww-portfolio'; // default body class
    $activePagePhp = 'includes/pages/home.php'; // default active page include
    $pageCss = '<link rel="stylesheet" href="/css/home.css">'; //default page css
    $pageTitle = 'Proximity Lab │ Human-centered Experience Design, User Interface and Product Launch';

    switch ($activePage) {
      case '/work/solidworks':
        $pageCss = '<link rel="stylesheet" href="/css/solidworks.css">';
        $activePagePhp = 'includes/pages/solidworks.php';
        $pageTitle = 'Proximity Lab | Portfolio | SolidWorks';
        break;
      case '/work/massart':
        $pageCss = '<link rel="stylesheet" href="/css/massart.css">';
        $activePagePhp = 'includes/pages/massart.php';
        $pageTitle = 'Proximity Lab | Portfolio | MassArt';
        break;
      case '/work/mosaic':
        $pageCss = '<link rel="stylesheet" href="/css/mosaic.css">';
        $activePagePhp = 'includes/pages/mosaic.php';
        $pageTitle = 'Proximity Lab | Portfolio | Mosaic';
        break;
      case '/work/rootinsight':
        $pageCss = '<link rel="stylesheet" href="/css/rootinsight.css">';
        $activePagePhp = 'includes/pages/rootinsight.php';
        $pageTitle = 'Proximity Lab | Portfolio | Root Insights';
        break;
      case '/work/adobe':
        $pageCss = '<link rel="stylesheet" href="/css/adobe.css">';
        $activePagePhp = 'includes/pages/adobe.php';
        $pageTitle = 'Proximity Lab | Portfolio | Adobe';
        break;
      case '/work/eagle':
        $pageCss = '<link rel="stylesheet" href="/css/eagle.css">';
        $activePagePhp = 'includes/pages/eagle.php';
        $pageTitle = 'Proximity Lab | Portfolio | Eagle Genomics';
        break;
      case '/work/philips':
        $pageCss = '<link rel="stylesheet" href="/css/philips.css">';
        $activePagePhp = 'includes/pages/philips.php';
        $pageTitle = 'Proximity Lab | Portfolio | Philips Lighting';
        break;
      case '/work/scribe':
        $pageCss = '<link rel="stylesheet" href="/css/scribe.css">';
        $activePagePhp = 'includes/pages/scribe.php';
        $pageTitle = 'Proximity Lab | Portfolio | Scribe';
        break;
      case '/work/minim':
        $pageCss = '<link rel="stylesheet" href="/css/minim.css">';
        $activePagePhp = 'includes/pages/minim.php';
        $pageTitle = 'Proximity Lab | Portfolio | Minim';
        break;
      case '/work/icovia':
        $pageCss = '<link rel="stylesheet" href="/css/icovia.css">';
        $activePagePhp = 'includes/pages/icovia.php';
        $pageTitle = 'Proximity Lab | Portfolio | Icovia';
        break;
      case '/work/scheduleme':
        $pageCss = '<link rel="stylesheet" href="/css/scheduleme.css">';
        $activePagePhp = 'includes/pages/scheduleme.php';
        $pageTitle = 'Proximity Lab | Portfolio | ScheduleMe';
        break;
      case '/work/songbird':
        $pageCss = '<link rel="stylesheet" href="/css/songbird.css">';
        $activePagePhp = 'includes/pages/songbird.php';
        $pageTitle = 'Proximity Lab | Portfolio | Songbird';
        break;
      case '/work/billnye':
        $pageCss = '<link rel="stylesheet" href="/css/billnye.css">';
        $activePagePhp = 'includes/pages/billnye.php';
        $pageTitle = 'Proximity Lab | Portfolio | Bill Nye';
        break;
      case '/work/wagz':
        $pageCss = '<link rel="stylesheet" href="/css/wagz.css">';
        $activePagePhp = 'includes/pages/wagz.php';
        $pageTitle = 'Proximity Lab | Portfolio | Wagz';
        break;
      case '/work/amadeus':
        $pageCss = '<link rel="stylesheet" href="/css/amadeus.css">';
        $activePagePhp = 'includes/pages/amadeus.php';
        $pageTitle = 'Proximity Lab | Portfolio | Amadeus';
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
        $pageTitle = 'Proximity Lab | About';
        break;
      case '/work':
        $bodyclass = 'ww-work';
        $pageCss = '<link rel="stylesheet" href="/css/work.css">';
        $activePagePhp = 'includes/pages/work.php';
        $pageTitle = 'Proximity Lab | Portfolio';
        break;
      case '/404':
        $bodyclass = 'ww-work';
        $pageCss = '<link rel="stylesheet" href="/css/404.css">';
        $activePagePhp = 'includes/pages/404.php';
        $pageTitle = 'Proximity Lab | Portfolio | 404';
        break;
      default:
        if (empty($activePage)) { // If activePage is empty then we assume it's home
          $bodyclass = 'home';
          $pageCss = '<link rel="stylesheet" href="/css/home.css">';
          $activePagePhp = 'includes/pages/home.php';
        } else { // If activePage isn't empty, but doesn't match anything else then it's 404
          header('Location: /404');
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
        <title><?php echo $pageTitle ?></title>


        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Assistant:200,300,400,600">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" integrity="sha384-OHBBOqpYHNsIqQy8hL1U+8OXf9hH6QRxi0+EODezv82DfnZoV7qoHAZDwMwEJvSw" crossorigin="anonymous">
        <link rel="stylesheet" href="/css/main.css">
        <?= $pageCss ?>

        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-28875731-1"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)};
          gtag('js', new Date());

         gtag('config', 'UA-28875731-1');
        </script>

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
      <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>
      <script src="/js/carousel-swipe.js"></script>
      <script src="/js/jquery.waypoints.min.js"></script>
      <script src="/js/jquery.touchSwipe.min.js"></script>
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
