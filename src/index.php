<?php
    $activePage = $_GET['page'];
?>
<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>Proximity Lab │ Human-centered Experience Design, User Interface and Product Launch</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Assistant:200,300,400,600">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" integrity="sha384-OHBBOqpYHNsIqQy8hL1U+8OXf9hH6QRxi0+EODezv82DfnZoV7qoHAZDwMwEJvSw" crossorigin="anonymous">
        <link rel="stylesheet" href="css/main.css">
        <?php
            if (!$activePage) echo '<link rel="stylesheet" href="css/home.css">';
            if ($activePage == 'about') echo '<link rel="stylesheet" href="css/about.css">';
            if ($activePage == 'work') echo '<link rel="stylesheet" href="css/work.css">';
        ?>
    </head>
    <body class="animated fadeIn">
        <?php
            switch ($activePage) {
                case 'about':
                    include('includes/pages/about.php');
                    break;
                case 'work':
                    include('includes/pages/work.php');
                    break;
                default:
                    include('includes/pages/home.php');
            }
        ?>

        <?php
            switch ($_GET['project']) {
                case 'wagz':
                    include('includes/wagz.php');
                    break;
                case 'nye':
                    include('includes/nye.php');
                    break;
                case 'amadeus':
                    include('includes/amadeus.php');
                    break;
            }
        ?>

        <?php include('includes/footer.php'); ?>

        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>
        <script src="custom.js"></script>
    </body>
</html>
