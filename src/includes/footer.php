<footer class="page-footer">
    <div class="container-fluid">
        <div class="row mb-5">
            <div class="col-12 col-md-8">
                <h1 class="page-footer-heading">Let us help re-think your experience.</h1>
            </div>

            <div class="col-12 col-md-4 mt-5 mt-md-4 mt-xl-3">
                <div class="footer-form-step">
                  <a href="#" class="form-close" role="button">Close</a>
                  <ul>
                    <li><a href="#" id="new-business"  class="form-dropdown" role="button"><img src="/images/icon-new-business.svg" alt="New Business"> &nbsp;New Business</a>
                      <form id="new-business-form" class="ww-form form-new-business" method="post" role="form" action="/includes/mailer.php" novalidate="true">
                        <input type="hidden" id="new-business-form-subject" name="subject" value="Proximity Lab New Business Form Submission">
                        <input type="text" id="new-business-form-name" name="name" placeholder="Name">
                        <input type="email" id="new-business-form-email" name="email" placeholder="Email" data-error="Sorry, that email address is invalid." required>
                        <input type="text" id="new-business-form-message" name="message" placeholder="Tell us what you need some help with" data-toggle="validator" data-error="Please include a message." required>
                        <input class="form-submit" type="submit" value="Send">
                      </form>

                      <div id="new-business-form-messages"></div>
                    </li>

                    <li><a href="#" id="say-hello" class="form-dropdown" role="button"><img src="/images/icon-say-hello.svg" alt="Say Hello">  &nbsp;Say Hello</a>
                      <form id="say-hello-form" class="ww-form form-say-hello" method="post" role="form" action="/includes/mailer.php" novalidate="true">
                        <input type="hidden" id="say-hello-form-subject" name="subject" value="Proximity Lab Say Hello Form Submission">
                        <input type="text" id="say-hello-form-name" name="name" placeholder="Name">
                        <input type="email" id="say-hello-form-email" name="email" placeholder="Email" data-error="Sorry, that email address is invalid." required>
                        <input type="text" id="say-hello-form-message" name="message" placeholder="Tell us what you need some help with" data-toggle="validator" data-error="Please include a message." required>
                        <input class="form-submit" type="submit" value="Send">
                      </form>

                      <div id="say-hello-form-messages"></div>
                    </li>

                    <li><a href="#" id="ww-careers"  class="form-dropdown" role="button"><img src="/images/icon-careers.svg" alt="Careers"> &nbsp;Careers</a>
                      <form id="careers-form" class="ww-form form-ww-careers" method="post" role="form" action="/includes/mailer.php" novalidate="true">
                        <input type="hidden" id="careers-form-subject" name="subject" value="Proximity Lab Careers Form Submission">
                        <input type="text" id="careers-form-name" name="name" placeholder="Name">
                        <input type="email" id="careers-form-email" name="email" placeholder="Email" data-error="Sorry, that email address is invalid." required>
                        <input type="text" id="careers-form-message" name="message" placeholder="Tell us what you need some help with" data-toggle="validator" data-error="Please include a message." required>
                        <input class="form-submit" type="submit" value="Send">
                      </form>
                    </li>
                  </ul>

                  <div id="form-messages"></div>
                </div>
                <button href="#" class="page-footer-button">Get in Touch</button>
            </div>
        </div>

        <div class="row">
            <div class="col-12">
                <p class="page-footer-credits"><span class="page-footer-copyright">© 2008-2017 Proximity Lab</span> <span class="page-footer-separator">|</span> 855.776.9522 <span class="page-footer-separator">|</span> <a href="mailto:info@proximitylab.com">info@proximitylab.com</a></p></p>
            </div>
        </div>
    </div>
</footer>
