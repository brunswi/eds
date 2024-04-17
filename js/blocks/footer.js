function createFooter(footer) {
    footer.innerHTML = `
    <div class="footer">
        <div class="footer__top">
            <section>
                <h4>Account</h4>
                <ul>
                    <li><a href="#">Sign in</a></li>
                    <li><a href="#">Register</a></li>
                    <li><a href="#">Order Status</a></li>
                </ul>
            </section>
            <section>
                <h4>About Us</h4>
                <ul>
                    <li><a href="#">Our Story</a></li>
                    <li><a href="#">Careers</a></li>
                </ul>
            </section>
            <section>
                <h4>Help</h4>
                <ul>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Order Status</a></li>
                    <li><a href="#">Returns</a></li>
                </ul>
            </section>
            <section>
                <h4>Follow Us!</h4>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi felis
                    dolor, interdum id est at, cursus congue risus.
                </p>
                <div class="social">
                    <img class="social__img" src="/assets/instagram.svg" alt="instagram">
                    <img class="social__img" src="/assets/facebook.svg" alt="facebook">
                    <img class="social__img" src="/assets/twitter.svg" alt="twitter">
                </div>
            </section>
        </div>
        <div class="footer__bottom">
            <div class="logo">
                <img class="logo logo__img" src="/assets/venia-logo.svg" alt="Logo">
            </div>
            <div class="copyright">Copyright Name Address Ave. City Name, Store ZIP</div>
            <div class="links">
                <a href="#">Terms of Use</a>
                <a href="#">Private Policy</a>
            </div>
        </div>
    </div>
  `;
}

export {
    createFooter
}
