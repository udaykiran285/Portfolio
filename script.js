let date = new Date();
let year = date.getFullYear();
document.getElementById("year").innerHTML = year;


// footer

class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class="section">
        <div class="container-fluid">
          <div class="footer">
            <div class="sort-note">
              <a class="navbar-brand" href="index.html">Uday Kiran</a>
              <p>I’m Uday Kiran, a junior and talented Web Designer with front end development skills.</p>
              <hr style="margin: 20px 0; color: rgb(82, 82, 82); width: 60%;">
              <span class="contact"><a href="mailto:uday83788@gmail.com" class="email">
              <i class="fa-solid fa-envelope fa-2xl" style="color: #f26c4f;"></i> &nbsp; &nbsp;
                uday83788@gmail.com</a></span>
            </div>
            <div class="quike-links text-center">
              <ul>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li><a href="about.html">About Me</a></li>
                <li>
                  <a href="pricing.html">Pricing</a>
                </li>
                <li>
                  <a href="projects.html">Projects</a>
                </li>
                
              </ul>
            </div>
            <div class="social-links text-center">
            <a href="https://www.linkedin.com/in/iamdivyak/" class="social-link">
            <i class="fa-brands fa-linkedin fa-2xl" style="color: #030303;"></i>
          </a><br>
          <a href="https://twitter.com/Imdivyakumari" class="social-link">
            <i class="fa-brands fa-twitter fa-2xl" style="color: #0a0a0a;"></i>
          </a><br>
          <a href="https://github.com/Iamdivyak" class="social-link">
            <i class="fa-brands fa-github fa-2xl" style="color: #0c0d0d;"></i>
          </a>
            </div>
          </div>
        </div>
      </div>
  
    </footer>  
        `;
  }
}

// customElements.define("main-header", Header);
customElements.define("main-footer", Footer);

// Back to top
const amountScrolled = 200;
const btnBackToTop = document.querySelector('.back-to-top');

const backToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
const toggleBtnBackToTop = () => {
  window.scrollY > amountScrolled 
    ? btnBackToTop.classList.add('back-to-top_show')
    : btnBackToTop.classList.remove('back-to-top_show');
}

btnBackToTop.addEventListener('click', backToTop);
window.addEventListener('scroll', toggleBtnBackToTop);