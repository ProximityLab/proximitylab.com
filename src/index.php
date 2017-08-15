<?php
    $activePage = $_GET['page'];
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
                case 'amadeus':
                    include('includes/pages/amadeus.php');
                    break;
                case 'wagz':
                    include('includes/pages/wagz.php');
                    break;
                case 'nye':
                    include('includes/pages/nye.php');
                    break;
                case 'work':
                    include('includes/pages/work.php');
                    break;
                case 'about':
                    include('includes/pages/about.php');
                    break;
                default:
                    include('includes/pages/home.php');
            }
        ?>

        <?php include('includes/footer.php'); ?>

        <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>
        <script src="custom.js"></script>
    </body>
</html>
