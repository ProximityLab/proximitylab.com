<?php
    $activePage = !empty($_GET['page']) ? trim($_GET['page']) : '';
?>
<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>Proximity Lab │ Human-centered Experience Design, User Interface and Product Launch</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Assistant:200,300,400,600">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" integrity="sha384-OHBBOqpYHNsIqQy8hL1U+8OXf9hH6QRxi0+EODezv82DfnZoV7qoHAZDwMwEJvSw" crossorigin="anonymous">
        <link rel="stylesheet" href="/css/main.css">
        <?php
            if (empty($activePage)) echo '<link rel="stylesheet" href="/css/home.css">';
            if ($activePage == '/work/solidworks') echo '<link rel="stylesheet" href="/css/solidworks.css">';
            if ($activePage == '/work/mosaic') echo '<link rel="stylesheet" href="/css/mosaic.css">';
            if ($activePage == '/work/rootinsight') echo '<link rel="stylesheet" href="/css/rootinsight.css">';
            if ($activePage == '/work/adobe') echo '<link rel="stylesheet" href="/css/adobe.css">';
            if ($activePage == '/work/eagle') echo '<link rel="stylesheet" href="/css/eagle.css">';
            if ($activePage == '/work/philips') echo '<link rel="stylesheet" href="/css/philips.css">';
            if ($activePage == '/work/scribe') echo '<link rel="stylesheet" href="/css/scribe.css">';
            if ($activePage == '/work/minim') echo '<link rel="stylesheet" href="/css/minim.css">';
            if ($activePage == '/work/icovia') echo '<link rel="stylesheet" href="/css/icovia.css">';
            if ($activePage == '/work/scheduleme') echo '<link rel="stylesheet" href="/css/scheduleme.css">';
            if ($activePage == '/work/songbird') echo '<link rel="stylesheet" href="/css/songbird.css">';
            if ($activePage == '/about') echo '<link rel="stylesheet" href="/css/about.css">';
            if ($activePage == '/work') echo '<link rel="stylesheet" href="/css/work.css">';
            if ($activePage == '/work/billnye') echo '<link rel="stylesheet" href="/css/nye.css">';
            if ($activePage == '/work/wagz') echo '<link rel="stylesheet" href="/css/wagz.css">';
            if ($activePage == '/work/amadeus') echo '<link rel="stylesheet" href="/css/amadeus.css">';
        ?>
        <script>
          (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

          ga('create', 'UA-28875731-1', 'auto');
          ga('send', 'pageview');

        </script>
    </head>
    <body id="waypoint" class="animated fadeIn">
      <?= empty($activePage); ?>
      <?php include('includes/navigation.php'); ?>
        <?php
            switch ($activePage) {
                case '/work/solidworks':
                  include('includes/pages/solidworks.php');
                  break;
                case '/work/mosaic':
                  include('includes/pages/mosaic.php');
                  break;
                case '/work/rootinsight':
                  include('includes/pages/rootinsight.php');
                  break;
                case '/work/adobe':
                  include('includes/pages/adobe.php');
                  break;
                case '/work/eagle':
                  include('includes/pages/eagle.php');
                  break;
                case '/work/philips':
                  include('includes/pages/philips.php');
                  break;
                case '/work/minim':
                  include('includes/pages/minim.php');
                  break;
                case '/work/icovia':
                  include('includes/pages/icovia.php');
                  break;
                case '/work/scribe':
                  include('includes/pages/scribe.php');
                  break;
                case '/work/scheduleme':
                  include('includes/pages/scheduleme.php');
                  break;
                case '/work/songbird':
                  include('includes/pages/songbird.php');
                  break;
                case '/work/amadeus':
                  include('includes/pages/amadeus.php');
                  break;
                case '/work/wagz':
                  include('includes/pages/wagz.php');
                  break;
                case '/work/billnye':
                  include('includes/pages/billnye.php');
                  break;
                case '/work':
                  include('includes/pages/work.php');
                  break;
                case '/about':
                  include('includes/pages/about.php');
                  break;
                default:
                  include('includes/pages/home.php');
            }
        ?>

        <?php include('includes/footer.php'); ?>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
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
