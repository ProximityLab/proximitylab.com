<?php

if ($_POST['name'] && $_POST['email'] && $_POST['subject'] && $_POST['message']) {
  // email to send to
  $myemail = 'info@proximity-lab.com';

  // name
  $name = $_POST['name'];

  // email
  $email = $_POST['email'];

  // subject
  $subject = $_POST['subject'];

  // message
  $message = $_POST['message'];

  if( empty($errors))
  {
    // send function
    $to = $myemail; 
    $email_subject = $subject." From:".$name;
    $email_body = "You have received a new message. Here are the details:\n \n Name: $name \n Email: $email \n Subject: $subject \n Message: \n $message"; 

    $headers = "From: $myemail\n"; 
    $headers .= "Reply-To: $email";

    mail($to, $email_subject, $email_body, $headers);
  }
}

?>

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
                      <form class="ww-form form-new-business" method="post" role="form" novalidate="true">
                        <input type="hidden" name="subject" value="Proximity Lab New Business Form Submission">
                        <input type="text" name="name" placeholder="Name">
                        <input type="email" name="email" placeholder="Email" data-error="Sorry, that email address is invalid." required>
                        <input type="text" name="message" placeholder="Tell us what you need some help with" data-toggle="validator" data-error="Please include a message." required>
                        <input class="form-submit" type="submit" value="Send">
                      </form>
                    </li>

                    <li><a href="#" id="say-hello" class="form-dropdown" role="button"><img src="/images/icon-say-hello.svg" alt="Say Hello">  &nbsp;Say Hello</a>
                    <form class="ww-form form-say-hello" method="post" role="form" novalidate="true">
                      <input type="hidden" name="subject" value="Proximity Lab Say Hello Form Submission">
                      <input type="text" name="name" placeholder="Name">
                      <input type="email" name="email" placeholder="Email" data-error="Sorry, that email address is invalid." required>
                      <input type="text" name="message" placeholder="Tell us what you need some help with" data-toggle="validator" data-error="Please include a message." required>
                      <input class="form-submit" type="submit" value="Send">
                    </form>
                  </li>

                    <li><a href="#" id="ww-careers"  class="form-dropdown" role="button"><img src="/images/icon-careers.svg" alt="Careers"> &nbsp;Careers</a>
                    <form class="ww-form form-ww-careers" method="post" role="form" novalidate="true">
                      <input type="hidden" name="subject" value="Proximity Lab Careers Form Submission">
                      <input type="text" name="name" placeholder="Name">
                      <input type="email" name="email" placeholder="Email" data-error="Sorry, that email address is invalid." required>
                      <input type="text" name="message" placeholder="Tell us what you need some help with" data-toggle="validator" data-error="Please include a message." required>
                      <input class="form-submit" type="submit" value="Send">
                    </form>
                  </li>
                  </ul>
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
