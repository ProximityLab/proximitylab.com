<!-- Form -->
<div class="container mt-5 pt-md-5">
    <div class="row mt-3 px-4 px-md-0">
        <div class="col">
            <h1 class="contact-heading mb-5">Talk to us.</h1>
        </div>
    </div>

    <form class="px-4 px-md-0" action="https://formspree.io/info@proximitylab.com" method="POST">
        <div class="form-row">
            <div class="col-12 col-md-6 col-xl-4 mb-4">
                <input type="text" class="form-control form-control-lg contact-input" placeholder="First name" name="firstName" required>
            </div>

            <div class="col-12 col-md-6 col-xl-4 mb-4">
                <input type="text" class="form-control form-control-lg contact-input" placeholder="Last name" name="lastName">
            </div>

            <div class="col-12 col-xl-8 mb-4">
                <input type="text" class="form-control form-control-lg contact-input" placeholder="Company" name="company">
            </div>

            <div class="col-12 col-md-6 col-xl-8 mb-4">
                <input type="email" class="form-control form-control-lg contact-input" placeholder="Email" name="_replyto" required>
            </div>

            <div class="col-12 col-md-6 col-xl-8 mb-4">
                <input type="tel" class="form-control form-control-lg contact-input" placeholder="Phone" name="phone">
            </div>

            <div class="col-12 col-xl-8 mb-5">
                <textarea class="form-control form-control-lg contact-input" rows="5" placeholder="Comments" name="comments" required></textarea>
                <input type="text" name="_gotcha" style="display:none">
            </div>
        </div>

        <button type="submit" class="btn btn-primary btn-lg contact-button px-5">Submit</button>
    </form>
</div>
