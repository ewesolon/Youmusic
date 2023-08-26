const newHtml = `
<!DOCTYPE html>
<html lang="pt" data-fp="3x5u5f1ra9gi">
<head>
    <title>YouMusic</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=0.5, maximum-scale=3.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="robots" content="index, follow">
    <!-- ... outras meta tags ... -->
    <link rel="stylesheet" href="/x2download/css/style.min.css?v=7">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/fontawesome.min.css" crossorigin="anonymous">
    <link rel="preconnect" href="https://my.rtmark.net" crossorigin="use-credentials">
    <link rel="dns-prefetch" href="https://my.rtmark.net" crossorigin="use-credentials">

</head>
<body>
    <div class="section-search bg-black">
        <div class="container">
            <div class="ftco-section center" id="convert">
                <h1 class="title">You Music</h1>
                <form id="search-form" class="search-form relative" action="/pt49" method="GET">
                    <input id="s_input" type="search" name="q" class="search__input" aria-label="Search" placeholder="Cole o link do Youtube aqui">
                    <button class="btn-red" type="button" onclick="ksearchvideo()"> Carregar </button>
                </form>
                <div id="loader-wrapper" class="hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin:auto;display:block" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                        <!-- ... animações do loader ... -->
                    </svg>
                </div>
                <div id="search-result"> </div>
            </div>
        </div>
    </div>
</body>
</html>

`;

const newCss = `
/* Adicione aqui suas modificações de CSS */
html,body {
    font-family: Roboto,sans-serif;
    font-size: 15px;
    margin: 0 auto;
    color: #fafafa;
    padding: 0;
    background-color: #191a1f
}

a {
    color: #00b887
}

a:visited,a:hover,a:link {
    text-decoration: none !important
}

.clearfix:after {
    visibility: hidden;
    display: block;
    font-size: 0;
    content: " ";
    clear: both;
    height: 0
}

h1,h2,h3 {
    margin: 0
}

.fl {
    float: left
}

ul {
    padding: 0;
    margin: 0;
    list-style: none
}

p {
    margin: 0 0 10px;
    line-height: 25px
}

.mag0 {
    margin: 0 !important
}

.magr10 {
    margin-right: 10px
}

.magT40 {
    margin-top: 40px
}

.magT10 {
    margin-top: 10px
}

.relative {
    position: relative
}

.img,img {
    max-width: 100%
}

.container {
    max-width: 960px;
    margin: 0 auto
   
}

.container-main {
    background: #fff;
    -webkit-box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);
    box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);
    border-radius: .25rem;
    margin-bottom: 10px
}

.flex {
    display: flex
}

.flex-a-i-center {
    align-items: center
}

.center {
    text-align: center
}

html:not(.tab-outline) *:focus {
    outline: none
}

table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%
}

.language {
    float: right;
    position: absolute;
    right: 40px;
    cursor: pointer
}

.ftco-section {
    padding: 30px 20px 30px
}

h1.title,h2.title,h3.title {
    font-weight: 600;
    font-size: 29px;
    margin-bottom: 15px
}

.search-form {
    margin: 28px 0 25px
}
/* ***ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff***** */
.search-form input {
    width: 60%;
    border: 0px;
    box-sizing: border-box;
    border-radius: 50px;
    height: 56px;
    padding: 17px 20px;
    font-size: 15px
}

.search-form .btn-red {
    margin-left: 10px
}

.btn-red,.btn-gray {
    background: #cf4242;
    border-radius: 50px;
    padding: 18px 40px;
    display: inline-block;
    border: none;
    color: #dbdbdd;
    font-size: 17px;
    font-weight: 600;
    cursor: pointer;
    transition: all .3s

}

.btn-red:hover {
    background: #d15757;
    color: #dbdbdd;
    box-shadow: none
}

.listitem {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    padding: 2rem 0 0;
    text-align: left
}

.listitem li {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    margin-bottom: 3rem
}

.listitem li .post-content h3 {
    margin-bottom: .5rem;
    font-weight: 600
}

.listitem li .post-content img {
    width: 32px;
    height: auto;
    vertical-align: middle;
    margin-right: 5px
}

.listitem li .post-content p {
    line-height: 20px;
    margin-bottom: 0
}

@media only screen and (min-width: 992px) {
    .listitem {
        -ms-flex-wrap:wrap;
        flex-wrap: wrap
    }

    .listitem li {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 30%;
        flex: 0 0 30%;
        text-align: left
    }
}

@media only screen and (max-width: 992px) {
    .listitem li {
        text-align:center
    }
}

.bg1 {
    background: #d2e3fc
}

.bg2 {
    background: #fad2cf
}

.bg3 {
    background: #ceead6
}

.bg4 {
    background: #feefc3
}

.bg5 {
    background: #ffd5ec
}

.bg6 {
    background: #d1f4ff
}

ul.listicon {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 50px 0
}

ul.listicon li:not(:last-child) {
    margin-right: 25px
}

.mw70 {
    max-width: 700px;
    margin: 0 auto
}

ul.liststep {
    flex-wrap: nowrap;
    max-width: 100%
}

ul.liststep li {
    display: table;
    width: 33.33333%
}

ul.liststep li .number {
    font-weight: 600;
    font-size: 45px;
    width: 80px;
    height: 80px;
    line-height: 80px;
    border-radius: 50%;
    display: table;
    color: #4285f4;
    text-align: center;
    margin-right: 20px;
    background: #fff;
    -webkit-box-shadow: 0 1px 5px #d0d0d0;
    box-shadow: 0 1px 5px #d0d0d0
}

ul.liststep li span {
    text-align: left;
    display: table-cell;
    vertical-align: middle
}

.contact {
    border-top: 1px solid #dfdfdf;
    padding: 60px 0;
    margin-top: 20px
}

.contact .container {
    max-width: 840px;
    text-align: center
}

.contact-form {
    text-align: left;
    margin: 50px 0 20px
}

.form-control {
    background: #fafafa;
    border: 1px solid #e8e8e8;
    box-sizing: border-box;
    border-radius: 6px;
    color: #666;
    font-size: 13px;
    padding: 20px
}

textarea.form-control {
    width: 100%;
    resize: none;
    margin-bottom: 10px;
    font-family: Roboto,sans-serif
}

input.form-control {
    height: 56px;
    width: 38.333333%;
    margin-right: 10px
}

.btn-gray {
    background: #dfdfdf;
    border-radius: 6px;
    color: #191a1f;
    box-shadow: none;
    font-weight: 400;
    padding: 18px 60px;
    margin: 0
}

.btn-gray:hover {
    background: #f00;
    color: #fff
}

.copyright {
    background: #f5f5f5;
    color: #fff;
    padding: 15px 0;
    text-align: center
}

.copyright ul {
    justify-content: center
}

.copyright ul a,.copyright ul p {
    color: #6c757d;
    font-weight: 500;
    display: inline-block;
    padding: 0 25px;
    margin: 0
}

.sub-language.show-language .sub_menu {
    transform: scale(1);
    visibility: visible;
    opacity: 1
}

.sub_menu {
    position: absolute;
    background: #fff;
    width: 230px;
    border: 1px solid #f4f4f4;
    visibility: hidden;
    opacity: 0;
    z-index: 1;
    top: 30px;
    right: 0;
    box-shadow: 0 4px 18px rgba(0,0,0,.14);
    border-radius: 5px
}

.sub_menu li a {
    display: block;
    padding: 10px 20px;
    color: #000;
    text-align: left
}

.sub_menu a:hover {
    background: #eaeaea;
    color: #0066a5 !important
}

.listvideo {
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px
}

.listvideo li {
    max-width: 31.222%;
    margin: 0 3% 30px 0;
    width: 31.222%
}

.listvideo li a:hover .content h3 {
    color: #f00
}

.listvideo li:nth-child(3n) {
    margin-right: 0
}

.listvideo li .img-thumb {
    height: 168px;
    overflow: hidden;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    position: relative;
    display: block;
    border-radius: 7px;
    width: 100%;
    object-fit: cover
}

.listvideo li .content {
    display: table;
    margin-top: 10px
}

.listvideo li .content .avarta,.thumbnail .content .avarta {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    display: table;
    margin-right: 15px
}

.listvideo li .content .clearfix {
    display: table-cell;
    vertical-align: top;
    text-align: left
}

.listvideo li .content h3,.thumbnail .content h3 {
    color: #fafafa;
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 5px
}

.listvideo li .content p {
    color: #666;
    font-size: 13px;
    margin-bottom: 0
}

.line {
    border-bottom: 1px solid #dfdfdf
}

.thumbnail {
    background: #2c2d32;
    border-radius: 14px;
    padding: 20px;
    text-align: left;
    display: flex;
    margin: 28px 0 25px
}

.thumbnail .content {
    display: flex;
    margin-left: 20px
}

.thumbnail img {
    border-radius: 7px;
    width: 300px;
    z-index: 999
}

table.table-bordered tr td {
    border-bottom: 1px solid #dfdfdf;
    padding: 10px 15px;
    color: #333;
    text-align: left;
    font-size: 14px
}

.btn-gray-small,.btn-blue-small,.btn-white-small {
    background: #e8e8e8;
    border-radius: 6px;
    border: none;
    width: 150px;
    padding: 10px 0;
    font-weight: 600;
    font-size: 13px;
    cursor: pointer;
    transition: all .3s
}

.btn-gray-small:hover {
    background: #f00;
    color: #fff
}

.btn-blue-small {
    background: #cf4242;
    color: #fff
}

.btn-blue-small:hover {
    background: #d15757
}

.btn-white-small {
    background: #fff;
    border: 1px solid #e8e8e8;
    color: #2879fe;
    font-weight: 400
}

.btn-white-small:hover {
    background: #2879fe;
    color: #fff
}

.mesg-convert {
    background: #03a9f4;
    border-radius: 6px;
    padding: 9px 20px;
    display: inline-block;
    color: #ffffff;
    font-size: 13px;
    font-weight: 600;
    white-space: nowrap
}

.success {
    background: #a394e7
}

.mesg-convert.success {
    padding: 9px 50px
}

a.success {
    color: #fff;
    font-weight: 600;
    font-size: 13px
}

table.table-bordered tr td:first-child {
    width: 20%
}

table.table-bordered tr td:nth-child(2n) {
    width: 20%
}

table.table-bordered tr td:last-child {
    width: 60%
}

.items-more li {
    margin-bottom: 10px
}

.error {
    border: 1px solid #ffdd57;
    border-radius: 6px;
    text-align: center;
    padding: 10px;
    background: #ffdd57;
    margin-top: 20px;
    width: 80%;
    margin: 0 auto
}

@media only screen and (max-width: 640px) {
    .error {
        width:auto
    }
}

.error p {
    color: rgba(0,0,0,.7);
    margin: 0
}

.error p a {
    text-decoration: underline !important;
    color: rgba(0,0,0,.7)
}

.magT10 .error {
    margin: 0
}

.h1-title {
    font-size: 18px;
    margin-bottom: 5px
}

.privacy p {
    font-size: 15px;
    line-height: 24px;
    color: #000
}

.privacy ul {
    list-style: disc;
    padding-left: 20px;
    font-size: 15px;
    line-height: 24px;
    color: #000
}

.privacy ul li {
    margin-bottom: 5px
}

.form-control-small {
    padding: 10px;
    margin-right: 10px !important
}

.form-control-small {
    display: block;
    font-size: 15px;
    font-family: Roboto,sans-serif;
    font-weight: 700;
    color: #444;
    line-height: 1.3;
    padding: .6em 1.4em .5em .8em;
    box-sizing: border-box;
    border: 1px solid #aaa;
    box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
    border-radius: .5em;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background-color: #fff;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOTIuNCIgaGVpZ2h0PSIyOTIuNCI+PHBhdGggZmlsbD0iIzAwN0NCMiIgZD0iTTI4NyA2OS40YTE3LjYgMTcuNiAwIDAgMC0xMy01LjRIMTguNGMtNSAwLTkuMyAxLjgtMTIuOSA1LjRBMTcuNiAxNy42IDAgMCAwIDAgODIuMmMwIDUgMS44IDkuMyA1LjQgMTIuOWwxMjggMTI3LjljMy42IDMuNiA3LjggNS40IDEyLjggNS40czkuMi0xLjggMTIuOC01LjRMMjg3IDk1YzMuNS0zLjUgNS40LTcuOCA1LjQtMTIuOCAwLTUtMS45LTkuMi01LjUtMTIuOHoiLz48L3N2Zz4=),linear-gradient(to bottom,#fff 0%,#e5e5e5 100%);
    background-repeat: no-repeat,repeat;
    background-position: right .7em top 50%,0 0;
    background-size: .65em auto,100%
}

.form-control-small::-ms-expand {
    display: none
}

.form-control-small:hover {
    border-color: #888
}

.form-control-small:focus {
    color: #222;
    outline: none
}

.form-control-small option {
    font-weight: 400
}

@media only screen and (max-width: 740px) {
    .container {
        margin:0
    }

    .language {
        right: 15px
    }

    .search-form input {
        width: 100%
    }

    .listitem,ul.liststep,.listvideo {
        display: block
    }

    ul.liststep li {
        width: 100%
    }

    .search-form .btn-red {
        width: 100%;
        margin: 10px 0 0
    }

    ul.listicon {
        margin: 20px 0 0
    }

    ul.listicon li {
        margin: 0 10px 2% !important
    }

    .ftco-section {
        padding: 30px 5px 30px
    }

    h1.title,h2.title,h3.title {
        font-size: 19px
    }

    .contact {
        padding: 30px 0
    }

    input.form-control {
        width: 100%;
        margin: 0 0 10px
    }

    .btn-gray {
        width: 100%
    }

    ul.listicon li img {
        max-width: 85px
    }

    .listvideo li {
        max-width: 100%;
        width: 100%;
        margin: 0 0 20px;
        display: flex
    }

    .listvideo li .img-thumb {
        height: auto;
        width: 120px;
        margin-right: 15px;
        float: left
    }

    .listvideo li .content {
        margin-top: 0
    }

    .listvideo li .content .avarta,.thumbnail .content .avarta {
        display: none
    }

    .nowidth {
        width: auto;
        margin-bottom: 40px
    }

    .thumbnail img {
        max-width: 100%;
        width: 100%
    }

    table.table-bordered tr td {
        padding: 10px 5px
    }

    table.table-bordered tr td:first-child {
        width: 30%;
        text-align: left !important
    }

    table.table-bordered tr td:nth-child(2n) {
        width: 30%
    }

    table.table-bordered tr td:last-child {
        width: 40%;
        text-align: right
    }

    table.table-bordered tr td .magr10 {
        margin: 0 0 10px
    }

    .thumbnail {
        padding: 15px;
        display: block
    }

    .thumbnail .content {
        display: block;
        margin-left: 0
    }

    .thumbnail .content h3 {
        font-size: 15px;
        padding-top: 5px
    }

    .detail .form-control {
        display: block;
        width: 100%;
        margin-bottom: 10px
    }

    .mesg-convert {
        display: block;
        text-align: center
    }
}

@media only screen and (max-width: 380px) {
    .container {
        margin:0 15px
    }

    .copyright ul a {
        padding: 0 10px
    }
}

.lds-dual-ring {
    display: inline-block;
    width: 16px;
    height: 13px
}

.lds-dual-ring:after {
    content: " ";
    display: block;
    width: 10px;
    height: 10px;
    margin: 0;
    border-radius: 50%;
    border: 3px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-dual-ring 2.1s linear infinite
}

@keyframes lds-dual-ring {
    0% {
        transform: rotate(0deg)
    }

    100% {
        transform: rotate(360deg)
    }
}

#loader-wrapper {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000
}

#loader {
    display: block;
    position: relative;
    left: 50%;
    top: 50%;
    width: 150px;
    height: 150px;
    margin: 0 0 0 -75px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: #3498db;
    -webkit-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;
    z-index: 1001
}

#loader:before {
    content: "";
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: #e74c3c;
    -webkit-animation: spin 3s linear infinite;
    animation: spin 3s linear infinite
}

#loader:after {
    content: "";
    position: absolute;
    top: 15px;
    left: 15px;
    right: 15px;
    bottom: 15px;
    border-radius: 50%;
    border: 3px solid transparent;
    border-top-color: #f9c922;
    -webkit-animation: spin 1.5s linear infinite;
    animation: spin 1.5s linear infinite
}

@-webkit-keyframes spin {
    0% {
        -webkit-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        transform: rotate(0deg)
    }

    100% {
        -webkit-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        transform: rotate(360deg)
    }
}

@keyframes spin {
    0% {
        -webkit-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        transform: rotate(0deg)
    }

    100% {
        -webkit-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        transform: rotate(360deg)
    }
}

#loader-wrapper .loader-section {
    position: relative;
    top: 0;
    width: 51%;
    height: 100%;
    z-index: 1000;
    -webkit-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0)
}

#loader-wrapper .loader-section.section-left {
    left: 0
}

#loader-wrapper .loader-section.section-right {
    right: 0
}

.loaded #loader-wrapper .loader-section.section-left {
    -webkit-transform: translateX(-100%);
    -ms-transform: translateX(-100%);
    transform: translateX(-100%);
    -webkit-transition: all .7s .3s cubic-bezier(.645,.045,.355,1);
    transition: all .7s .3s cubic-bezier(.645,.045,.355,1)
}

.loaded #loader-wrapper .loader-section.section-right {
    -webkit-transform: translateX(100%);
    -ms-transform: translateX(100%);
    transform: translateX(100%);
    -webkit-transition: all .7s .3s cubic-bezier(.645,.045,.355,1);
    transition: all .7s .3s cubic-bezier(.645,.045,.355,1)
}

.loaded #loader {
    opacity: 0;
    -webkit-transition: all .3s ease-out;
    transition: all .3s ease-out
}

.loaded #loader-wrapper {
    visibility: hidden;
    -webkit-transform: translateY(-100%);
    -ms-transform: translateY(-100%);
    transform: translateY(-100%);
    -webkit-transition: all .3s 1s ease-out;
    transition: all .3s 1s ease-out
}

.nopading {
    padding-bottom: 0
}

.detail .form-control.hidden,.hidden {
    display: none
}

.caret {
    width: 0;
    height: 0;
    display: inline-block;
    border: 40px solid transparent
}

.caret.down {
    border-top-color: #fff
}

.caret.right {
    border-left-color: #000
}

.caret.up {
    border-bottom-color: #000
}

.caret.left {
    border-right-color: #000
}

.topnav {
    overflow: hidden
}

.topnav a {
    float: left;
    display: block;
    color: #333;
    font-weight: bold;
    text-align: center;
    padding: 18px 10px;
    text-decoration: none;
    font-size: 15px
}

.active {
    background-color: #4caf50;
    color: #fff
}

.topnav .icon {
    display: none
}

.dropdown {
    float: left;
    overflow: hidden;
    cursor: pointer
}

.dropdown .dropbtn {
    font-size: 15px;
    border: none;
    outline: none;
    color: #888;
    padding: 18px 10px;
    background-color: inherit;
    font-family: inherit;
    margin: 0
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,.2);
    z-index: 1;
    margin-bottom: 10px
}

.dropdown-content a {
    float: none;
    color: #212529;
    font-weight: 400;
    padding: 5px 16px;
    text-decoration: none;
    display: block;
    text-align: left
}

.topnav a:hover,.dropdown:hover .dropbtn {
    color: #00b887
}

.topnav .nav-logo a {
    color: #00b887;
    font-size: 24px;
    padding: 12px;
    font-weight: bold
}

.dropdown-content a:hover {
    background-color: #ddd;
    color: #000
}

.topnav .nav-item {
    float: right
}

.cl-red {
    color: #f00
}

.tips {
    margin-top: 5px
}

.tips img {
    max-width: 100%;
    height: auto
}

@media screen and (max-width: 900px) {
    .topnav .nav-item a,.dropdown .dropbtn {
        display:none
    }

    .topnav .nav-item {
        width: 100%
    }

    .topnav a.icon {
        float: right;
        display: block
    }

    .topnav.responsive {
        position: relative
    }

    .dropdown-content {
        background: #fff;
        box-shadow: none;
        padding-left: 20px
    }

    .dropdown-content a:hover {
        background-color: #00b887;
        color: #fff
    }

    .topnav.responsive a.icon {
        position: absolute;
        right: 0;
        top: 0
    }

    .topnav.responsive a {
        float: none;
        display: block;
        text-align: left
    }

    .topnav.responsive .dropdown {
        float: none
    }

    .topnav.responsive .dropdown-content {
        position: relative
    }

    .topnav.responsive .dropdown .dropbtn {
        display: block;
        width: 100%;
        text-align: left
    }
}

.btn {
    display: inline-block;
    margin-bottom: 0;
    font-weight: normal;
    text-align: center;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    padding: 6px 12px;
    font-size: 15px;
    line-height: 1.42857143;
    border-radius: 4px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none
}

.btn-info {
    color: #fff;
    background-color: #5bc0de;
    border-color: #46b8da
}

.btn-success {
    color: #fff;
    background-color: #5cb85c;
    border-color: #4cae4c
}

.extension {
    display: none;
    position: fixed;
    bottom: 14px;
    right: 0;
    z-index: 1200;
    width: 220px;
    font-weight: 400;
    color: #fff;
    cursor: pointer;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.19);
    background: #c10841;
    transform: translateZ(0)
}

.extension.is-rolledUp {
    margin-right: 20px;
    border-radius: 5px;
    animation: extRollUp 2.6s ease-in-out
}

@media(min-width: 1025px) {
    .extension {
        display:block;
        animation: extAppear .8s ease-in-out
    }
}

.extension-header {
    padding: 5px 10px;
    font-size: 0;
    line-height: 0
}

.is-init .extension-header {
    border-radius: 0;
    background: 0 0
}

.is-rolledUp .extension-header {
    border-radius: 5px;
    background: #048966;
    animation: extRollUpHeader 2.6s ease-in-out
}

.is-rolledUp--half .extension-header {
    animation: none;
    transition: all .78s ease-in-out .78s
}

.is-superCollapsed .extension-header,.is-rolledDown .extension-header {
    padding: 6px;
    border-radius: 5px 0 0 5px;
    animation: extRollDownHeader 2.6s ease-in-out
}

.is-superCollapsed .extension-header {
    animation: none
}

.is-rolledDown--half .extension-header {
    animation: extRollDownHeaderHalf 1.95s ease-in-out
}

.extension-headerImgContainer {
    display: inline-block;
    width: 56px;
    height: 60px;
    margin-right: 16px;
    vertical-align: middle;
    line-height: 60px
}

.is-rolledUp .extension-headerImgContainer {
    transition: all 0 ease-in-out .91s
}

.is-superCollapsed .extension-headerImgContainer,.is-rolledDown .extension-headerImgContainer {
    width: 26px;
    height: 26px;
    margin-right: 0;
    text-align: center;
    line-height: 26px;
    transition: all 0 ease-in-out 1.82s
}

.is-rolledDown--half .extension-headerImgContainer {
    transition: all 0 ease-in-out 1.17s
}

.extension-headerImg {
    max-width: 100%;
    max-height: 100%
}

.extension-headerText {
    display: inline-block;
    overflow: hidden;
    width: calc(100% - 56px - 16px);
    max-height: 150px;
    line-height: 1.25em;
    vertical-align: middle;
    font-size: 15px;
    font-weight: 700
}

.is-rolledUp .extension-headerText {
    transition: all 0 ease-in-out .91s
}

.is-superCollapsed .extension-headerText,.is-rolledDown .extension-headerText {
    max-height: 0;
    width: 0;
    transition: all 0 ease-in-out 1.82s
}

.is-rolledDown--half .extension-headerText {
    transition: all 0 ease-in-out 1.17s
}

.alert {
    border-radius: 6px;
    margin: 10px auto;
    padding: 10px;
    font-size: 12px
}

.alert-warning {
    background-color: #fcf8e3;
    border-color: #faebcc;
    color: #8a6d3b
}

.alert-warning a {
    color: #b50808
}

.text-left p img {
    display: block;
    max-width: 100%;
    margin: 0 auto
}

.section-search h1 {
    color: #dbdbdd
}

.bg-black {
    background: #191a1f
}

.bg-black p {
    color: #fff
}

#navbar {
    background: #fff;
    border-bottom: 1px solid #e1e1e1
}

.input-fshare {
    margin-bottom: 10px
}

.input-fshare input {
    height: 50px
}

.gl-load {
    color: #f00;
    font-size: 18px
}

.getlink {
    border: 2px solid #00b887;
    border-radius: 10px;
    padding: 30px
}

.getlink h3 {
    font-size: 20px !important;
    margin-bottom: 10px !important
}

.getlink ul.block-info {
    list-style-type: none;
    margin-bottom: 15px
}

.getlink .block-info>li {
    display: inline;
    list-style-type: none;
    margin-right: 10px
}

.getlink .block-info>li span {
    display: inline-block;
    margin-left: 8px;
    font-weight: bold;
    color: #333;
    padding: 2px 10px 3px;
    position: relative;
    top: 1px;
    border-radius: 999px;
    border: 1px solid #eee;
    -webkit-box-shadow: 0 1px 3px #d0d0d0;
    box-shadow: 0 1px 3px #d0d0d0
}

.getlink .thumbnail {
    background: #fff
}

.getlink .mesg-convert {
    padding: 15px 50px;
    font-size: 18px
}

.getlink .mesg-convert.success {
    padding: 15px 50px;
    font-size: 18px
}

@media only screen and (max-width: 450px) {
    .getlink {
        padding:10px
    }
}

.note-ct {
    margin-top: 10px
}

.note-ct strong {
    color: #f00
}

.table>tbody>tr>td,.table>tbody>tr>th,.table>tfoot>tr>td,.table>tfoot>tr>th,.table>thead>tr>td,.table>thead>tr>th {
    padding: 8px;
    line-height: 1.42857143;
    vertical-align: top;
    border-top: 1px solid #ddd
}

.table-bordered {
    border: 1px solid #ddd
}

.table-bordered>tbody>tr>td,.table-bordered>tbody>tr>th,.table-bordered>tfoot>tr>td,.table-bordered>tfoot>tr>th,.table-bordered>thead>tr>td,.table-bordered>thead>tr>th {
    border: 1px solid #ddd
}

.table-bordered>thead>tr>td,.table-bordered>thead>tr>th {
    border-bottom-width: 2px
}

.table>caption+thead>tr:first-child>td,.table>caption+thead>tr:first-child>th,.table>colgroup+thead>tr:first-child>td,.table>colgroup+thead>tr:first-child>th,.table>thead:first-child>tr:first-child>td,.table>thead:first-child>tr:first-child>th {
    border-top: 0
}

.table-fcode table.table-bordered tr td:last-child,.table-fcode table.table-bordered tr td:first-child {
    width: inherit
}

.table-fcode table.table-bordered thead {
    background: #00b887;
    color: #fff
}

.table-fcode table.table-bordered tr td {
    font-size: 15px !important
}

.table-fcode .text-center {
    text-align: center
}

.btn-fcode {
    background: #00b887;
    color: #fff;
    padding: 2px 5px;
    font-size: 12px
}

.btn-share-fcode {
    background: #f00;
    color: #fff;
    padding: 2px 5px;
    font-size: 15px
}

.f-security {
    color: #f00
}

.f-note {
    margin-top: 10px;
    font-weight: bold
}

.form_share_fcode {
    max-width: 500px;
    margin: 0 auto;
    border: 1px solid #dde;
    border-radius: 5px;
    padding: 20px 0;
    margin-bottom: 10px
}

.form_share_fcode .input-fshare input {
    height: 40px
}

.form_share_fcode .search-form input {
    width: 80%
}

.btn-send-fcode {
    padding: 10px 15px;
    font-size: 14px
}

.share-f-title {
    font-size: 20px;
    font-weight: bold
}

.s-fcode-success {
    color: #00b887;
    font-weight: bold;
    margin: 0
}

.g-code-title {
    font-size: 20px;
    font-weight: bold;
    margin: 0
}

.g-code-sub-title {
    display: block;
    margin-bottom: 5px
}

.f-code-ne {
    color: #f00
}

.g-code-title-success {
    font-size: 20px;
    font-weight: bold
}

.s-fcode-error {
    color: #f00;
    font-weight: bold;
    margin: 0
}

.btn-danger {
    background: #f00
}

.btn-active {
    background: #227dc7
}

@media(max-width: 480px) {
    .copyright ul li:first-child {
        display:none
    }

    .magT10 .flex {
        display: block
    }

    .addthis_inline_share_toolbox {
        text-align: center
    }
}

div.img-thumb {
    position: relative;
    display: inline-block
}

span.time {
    position: absolute;
    right: 4px;
    bottom: 5px;
    display: inline-block;
    padding: 4px 6px;
    background: rgba(0,0,0,.8);
    border-radius: 4px;
    color: #fff;
    font-size: 12px
}

.btn-fb {
    line-height: 20px
}

.mg-r-10 {
    margin-right: 10px
}

#ads_b {
    margin-top: 10px
}

.alert-gr {
    width: 80%;
    text-align: center
}

.alert-success {
    background-color: #d4edda;
    border-color: #d4edda;
    color: #155724;
    font-size: 15px
}

.alert-success a {
    color: #2196f3;
    font-size: 15px
}

@media only screen and (max-width: 640px) {
    .alert-gr {
        width:auto
    }
}

.share-button {
    position: fixed;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    line-height: 40px;
    border: none;
    background-color: #29b76b;
    bottom: 80px;
    right: 16px;
    display: none;
    align-items: center;
    justify-content: center;
    z-index: 100;
    cursor: pointer
}

#cnext {
  display: none;
  height: 2em;
  width: 2em
}

#cnext:hover {
  background-color: #2980b9;
}


.share-button .icon {
    align-items: center;
    display: inline-flex;
    justify-content: center;
    height: 1.5rem;
    width: 1.5rem
}


.share-button i.icon {
    display: table-cell;
    height: 2em;
    width: 2em
}


`;

document.documentElement.innerHTML = newHtml;
const styleElement = document.createElement("style");
styleElement.innerHTML = newCss;
document.head.appendChild(styleElement);

