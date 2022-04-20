import '../styles/globals.css'
import Head from 'next/head'
import script from 'next/script';
function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" />
        <title> Admag Home</title>

        <link rel="apple-touch-icon" sizes="180x180" href="assets/img/fav/logo.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="assets/img/fav/logo.svg" />
        <link rel="icon" type="image/png" sizes="16x16" href="assets/img/fav/logo.svg" />
        <link rel="mask-icon" href="assets/img/fav/logo.svg" color="#fa7070" />

        <meta name="msapplication-TileColor" content="#fa7070" />
        <meta name="theme-color" content="#fa7070" />

        <link rel="stylesheet" href="dependencies/bootstrap/css/bootstrap.min.css" type="text/css" />
        <link rel="stylesheet" href="dependencies/fontawesome/css/all.min.css" type="text/css" />
        <link rel="stylesheet" href="dependencies/swiper/css/swiper.min.css" type="text/css" />
        <link rel="stylesheet" href="dependencies/wow/css/animate.css" type="text/css" />
        <link rel="stylesheet" href="dependencies/magnific-popup/css/magnific-popup.css" type="text/css" />
        <link rel="stylesheet" href="dependencies/components-elegant-icons/css/elegant-icons.min.css" type="text/css" />
        <link rel="stylesheet" href="dependencies/simple-line-icons/css/simple-line-icons.css" type="text/css" />

        <link rel="stylesheet" href="assets/css/app.css" type="text/css" />

        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700;800;900&family=Satisfy&display=swap" rel="stylesheet" />


      </Head>
      <main>
        <Component {...pageProps} />
        {/* <NextScript /> */}
        <script src="dependencies/jquery/jquery.min.js"></script>
        <script src="dependencies/bootstrap/js/bootstrap.min.js"></script>
        <script src="dependencies/swiper/js/swiper.min.js"></script>
        <script src="dependencies/jquery.appear/jquery.appear.js"></script>
        <script src="dependencies/wow/js/wow.min.js"></script>
        <script src="dependencies/countUp.js/countUp.min.js"></script>
        <script src="dependencies/isotope-layout/isotope.pkgd.min.js"></script>
        <script src="dependencies/imagesloaded/imagesloaded.pkgd.min.js"></script>
        <script src="dependencies/jquery.parallax-scroll/js/jquery.parallax-scroll.js"></script>
        <script src="dependencies/magnific-popup/js/jquery.magnific-popup.min.js"></script>
        <script src="dependencies/gmap3/js/gmap3.min.js"></script>
        <script type='text/javaScript' src='https://maps.googleapis.com/maps/api/js?key=AIzaSyDk2HrmqE4sWSei0XdKGbOMOHN3Mm2Bf-M&#038;ver=2.1.6'></script>


        <script src="assets/js/header.js"></script>
        <script src="assets/js/app.js"></script>
      </main>

    </>
  );
}

export default MyApp
