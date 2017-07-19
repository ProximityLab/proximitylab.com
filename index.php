<!doctype html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>Proximity Lab │ Human-centered Experience Design, User Interface and Product Launch</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Assistant:200,300,400,600">
        <link rel="stylesheet" href="custom.css">
    </head>
    <body>
        <div class="jumbotron jumbotron-fluid project-jumbotron diagonal-grad-1">
            <img class="pl-logo" src="images/logo-proximity-lab-white.svg" alt="Proximity Lab logo">
            <img class="icon-grid-view" src="images/icon-grid-view.svg" alt="Grid view icon">
            <img class="icon-arrow-left" src="images/icon-arrow-left.svg" alt="Left arrow icon">
            <img class="icon-arrow-right" src="images/icon-arrow-right.svg" alt="Right arrow icon">
            
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 col-md-4 project-jumbotron-padding">
                        <h1 class="pl-heading-xl pl-color-white pl-heading-jumbotron">keep fido safe from the world</h1>
                        <p class="pl-text-lg pl-color-white">Lorem ipsum dolor sit amet, consectetur</p>
                        <img class="icon-arrow-bottom mx-auto d-block" src="images/icon-arrow-bottom.svg" alt="Bottom arrow icon">
                    </div>
                    <div class="col-12 col-sm-6 col-md-4 project-jumbotron-padding"><img class="img-fluid" src="images/iphone-mockup-wagz.png" alt="Wagz iPhone Mockup"></div>
                    <div class="col-12 col-sm-6 col-md-4 align-self-center project-jumbotron-padding">
                        <img class="project-logo" src="images/logo-wagz.png" alt="Wagz logo">
                        <p class="pl-text-sm pl-color-white">Lorem ipsum dolor sit amet, consectetur</p>
                    </div>
                </div><!-- row -->
            </div><!-- container -->
        </div><!-- jumbotron -->

        <section class="service-info">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 col-md-6 align-self-center">
                        <div class="service-info-text">
                            <h4 class="pl-heading-sm pl-color-boulder service-info-heading1">PORTFOLIO</h4>
                            <h2 class="pl-heading-lg pl-color-mineshaft service-info-heading2">Creating an easier way to project your best companion</h2>
                            <p class="pl-text-lg pl-color-boulder service-info-paragraph">Our team can support your initiatives by developing design concepts, detailed interface designs and templates or by producing complete solutions from concept and design through development, testing and deployment.</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 carousel-placeholder"></div>
                </div>
            </div>
        </section>

        <section class="project-video">
            <img class="img-fluid" src="images/video-background-wagz.jpg" alt="Wagz video background">
            <img class="project-video-play" src="images/icon-play.svg" alt="Play icon" data-toggle="modal" data-target="#video-modal">
        </section>

        <!-- Modal -->
        <div class="modal fade" id="video-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="embed-responsive embed-responsive-16by9">
                            <iframe id="video-iframe" class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="container-fluid">
            <div class="row">
                <div class="col-12 col-sm-4 align-self-center text-center">
                    <div class="how-info">
                        <img class="how-circle" src="images/icon-circle.svg" alt="Circle icon">
                        <h3 class="pl-heading-md pl-color-tundora how-heading">Designing</h3>
                        <p class="pl-text-md pl-color-boulder how-text">Our team can support your initiatives by developing design concepts, detailed interface designs and templates or by</p>
                    </div>
                </div>
                <div class="col-12 col-sm-4"><img class="img-fluid how-dog" src="images/wagz-dog.png" alt="Wagz dog"></div>
                <div class="col-12 col-sm-4 align-self-center text-center">
                    <div class="how-info">
                        <img class="how-circle" src="images/icon-circle.svg" alt="Circle icon">
                        <h3 class="pl-heading-md pl-color-tundora how-heading">Designing</h3>
                        <p class="pl-text-md pl-color-boulder how-text">Our team can support your initiatives by developing design concepts, detailed interface designs and templates or by</p>
                    </div>
                </div>
            </div>
        </div>

        <?php include('includes/footer.php'); ?>

        <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>
        <script src="custom.js"></script>
    </body>
</html>
