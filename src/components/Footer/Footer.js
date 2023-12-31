const Footer = () => {
  return (
    <div style={{ textAlign: "center", marginBottom: 10 }}>
      <div class="container h-100 d-flex align-items-center justify-content-center">
        <div class="row">
          <div class="col">
            <div class="r-icon text-center mt-3">
              <ul>
                <li class="list-inline-item">
                  <a href="mailto: tanvijain1511@gmail.com">
                    <i class="fa-solid fa-envelope"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="https://twitter.com/tanvijain1511">
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="https://github.com/itstanvii">
                    <i class="fab fa-github"></i>
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="https://www.linkedin.com/in/itanvi-jain-/">
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
            <p class="text-muted" style="font-size:14px;">
              &copy;copyright Tanvi | 2023 All Rights Reserved
            </p>
            <p class="text-muted text-center " style="font-size:14px;">
              Designed By Tanvi Jain
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
