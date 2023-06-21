import React from "react";
import { Route } from "react-router";
import { Routes } from "react-router-dom";
import "./App.scss";
import Menu from "./Components/mutual/Menu/Menu";
import Home from "./Components/home/Home";
import Skills from "./Components/skills/Skills";
import About from "./Components/about/About";
import AboutIT from "./Components/aboutIT/AboutIT";
import Projects from "./Components/projects/Projects";
import Papers from "./Components/papers/Papers";

const notFoundSvg = (
  <svg
    width="724"
    height="481"
    viewBox="0 0 724 481"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_247_18)">
      <path
        d="M366.773 135.19C360.317 124.508 352.668 113.102 340.688 109.614C326.815 105.575 312.563 113.599 300.474 121.518C264.323 145.199 229.508 170.864 196.189 198.393L196.226 198.808C222.166 197.018 248.105 195.228 274.045 193.438C292.786 192.145 312.172 190.674 328.734 181.803C335.019 178.437 341.145 173.941 348.267 173.628C357.115 173.239 364.83 179.421 370.893 185.881C406.757 224.09 417.135 282.522 457.371 316.093C431.999 253.49 401.705 193 366.773 135.19Z"
        fill="#F2F2F2"
      />
      <path
        d="M587.223 459.278C583.257 454.268 581.636 453.094 577.724 448.038C545.871 406.819 515.931 364.207 487.905 320.204C468.868 290.318 450.776 259.859 433.628 228.825C425.464 214.072 417.523 199.202 409.807 184.217C403.819 172.598 397.965 160.909 392.245 149.151C390.609 145.792 389.019 142.419 387.437 139.037C383.71 131.085 380.052 123.095 376.125 115.251C371.649 106.311 366.202 96.938 357.983 90.9315C354.243 88.0858 349.771 86.364 345.089 85.9673C338.399 85.535 332.226 88.2989 326.423 91.3175C283.967 113.467 244.22 141.238 208.27 172.837C172.227 204.508 140.01 240.288 112.277 279.448C111.429 280.66 109.422 279.502 110.279 278.282C113.651 273.511 117.09 268.791 120.596 264.123C164.188 206.116 217.638 156.234 278.504 116.756C288.744 110.117 299.177 103.789 309.802 97.7717C315.157 94.7376 320.536 91.7421 326.007 88.9319C331.37 86.1758 337.064 83.6975 343.191 83.6049C364.041 83.2806 374.836 106.905 382.252 122.801C384.582 127.804 386.941 132.791 389.328 137.763C398.348 156.64 407.716 175.344 417.431 193.875C423.426 205.317 429.553 216.691 435.811 227.999C455.287 263.212 475.988 297.712 497.913 331.498C526.958 376.253 555.771 415.79 588.859 457.642C589.769 458.8 588.141 460.452 587.223 459.278Z"
        fill="#E4E4E4"
      />
      <path
        d="M206.209 161.172C204.998 159.82 203.794 158.469 202.575 157.118C192.96 146.48 182.643 135.964 169.44 129.865C163.145 126.865 156.273 125.272 149.3 125.195C142.093 125.218 135.048 127.109 128.389 129.757C125.241 131.016 122.162 132.444 119.13 133.965C115.665 135.71 112.262 137.57 108.874 139.446C102.516 142.967 96.2399 146.642 90.0464 150.471C77.7231 158.091 65.7858 166.293 54.2344 175.076C48.2462 179.631 42.3817 184.335 36.6407 189.189C31.301 193.697 26.0693 198.327 20.9456 203.078C19.8499 204.089 18.214 202.452 19.3096 201.441C20.66 200.183 22.0258 198.932 23.3917 197.697C27.2499 194.207 31.1699 190.784 35.1517 187.428C42.4126 181.299 49.8615 175.405 57.4984 169.749C69.3741 160.948 81.6586 152.743 94.3519 145.136C100.695 141.338 107.125 137.699 113.643 134.22C115.611 133.17 117.602 132.143 119.616 131.17C124.185 128.864 128.933 126.93 133.814 125.388C140.727 123.15 148.041 122.431 155.258 123.28C162.225 124.294 168.938 126.617 175.043 130.128C188.006 137.377 198.06 148.587 207.845 159.527C208.833 160.639 207.205 162.283 206.209 161.172Z"
        fill="#E4E4E4"
      />
      <path
        d="M471.826 271.417L502.89 260.049L518.314 254.405C523.337 252.567 528.348 250.474 533.54 249.158C538.053 247.868 542.844 247.929 547.322 249.334C551.316 250.813 554.972 253.08 558.072 256.001C561.24 258.919 564.187 262.068 566.889 265.422C570.247 269.459 573.556 273.539 576.879 277.605C590.594 294.387 604.22 311.242 617.756 328.17C631.292 345.097 644.737 362.097 658.091 379.168C671.479 396.281 684.774 413.466 697.977 430.722C699.595 432.836 701.211 434.951 702.825 437.067C703.717 438.236 705.729 437.083 704.824 435.898C691.524 418.468 678.13 401.11 664.644 383.823C651.125 366.495 637.512 349.24 623.806 332.058C610.101 314.878 596.302 297.771 582.411 280.739C578.951 276.496 575.484 272.258 572.012 268.024C569.083 264.452 566.187 260.842 562.975 257.518C557.078 251.417 549.711 246.025 540.893 245.878C535.708 245.792 530.69 247.438 525.873 249.182C520.68 251.062 515.499 252.976 510.312 254.874L479.031 266.322L471.211 269.183C469.823 269.691 470.423 271.93 471.826 271.417Z"
        fill="#E4E4E4"
      />
      <path
        d="M165.352 143.252C149.566 135.135 129.35 136.725 114.844 146.866C142.513 151.642 169.88 158.033 196.804 166.005C185.623 159.449 176.878 149.179 165.352 143.252Z"
        fill="#F2F2F2"
      />
      <path
        d="M114.688 146.838L111.649 149.309C112.677 148.444 113.746 147.633 114.844 146.866C114.792 146.857 114.74 146.847 114.688 146.838Z"
        fill="#F2F2F2"
      />
      <path
        d="M556.902 271.53C553.844 267.806 550.538 263.907 545.964 262.394L541.694 262.563C574.2 320.031 618.102 370.246 670.704 410.127C632.77 363.928 594.836 317.729 556.902 271.53Z"
        fill="#F2F2F2"
      />
      <path
        d="M291.365 240.809C293.341 247.992 297.793 254.244 303.933 258.459C306.307 260.076 309.116 261.628 309.928 264.384C310.355 266.14 310.092 267.994 309.192 269.563C308.295 271.111 307.202 272.538 305.942 273.808L305.827 274.24C299.937 270.747 294.332 266.329 291.078 260.301C287.824 254.273 287.37 246.372 291.365 240.809Z"
        fill="#F2F2F2"
      />
      <path
        d="M487.488 411.768C489.465 418.951 493.916 425.203 500.056 429.418C502.43 431.036 505.239 432.587 506.051 435.343C506.478 437.1 506.215 438.954 505.316 440.522C504.418 442.07 503.326 443.497 502.065 444.768L501.95 445.199C496.06 441.706 490.455 437.288 487.201 431.26C483.947 425.232 483.493 417.332 487.488 411.768Z"
        fill="#F2F2F2"
      />
      <path
        d="M96.0832 399.978C98.0593 407.161 102.511 413.413 108.651 417.628C111.025 419.245 113.834 420.796 114.646 423.552C115.073 425.309 114.81 427.163 113.91 428.732C113.013 430.28 111.92 431.707 110.66 432.977L110.545 433.409C104.654 429.916 99.05 425.498 95.796 419.47C92.542 413.442 92.0877 405.541 96.0832 399.978Z"
        fill="#F2F2F2"
      />
      <path
        d="M546.494 85.9007C570.202 85.9007 589.422 66.6712 589.422 42.9503C589.422 19.2295 570.202 0 546.494 0C522.785 0 503.565 19.2295 503.565 42.9503C503.565 66.6712 522.785 85.9007 546.494 85.9007Z"
        fill="#6C63FF"
      />
      <path
        d="M623.963 9.99682C603.158 7.18321 579.406 18.4342 574.014 38.7344C572.655 35.125 570.184 32.0413 566.959 29.9288C563.733 27.8162 559.92 26.7843 556.07 26.9819C552.22 27.1796 548.533 28.5966 545.541 31.0284C542.548 33.4602 540.406 36.7807 539.424 40.5103L541.806 42.2171C586.39 51.8634 632.542 51.6547 677.037 41.6053C662.566 26.3884 644.768 12.8104 623.963 9.99682Z"
        fill="#F0F0F0"
      />
      <path
        d="M534.739 67.264C513.934 64.4504 490.182 75.7013 484.79 96.0016C483.431 92.3922 480.96 89.3085 477.735 87.1959C474.51 85.0834 470.697 84.0514 466.847 84.2491C462.997 84.4467 459.309 85.8638 456.317 88.2955C453.325 90.7273 451.183 94.0478 450.2 97.7774L452.582 99.4842C497.166 109.131 543.318 108.922 587.814 98.8725C573.342 83.6555 555.544 70.0775 534.739 67.264Z"
        fill="#F0F0F0"
      />
      <path
        d="M716.323 78.0923C716.237 78.0925 716.151 78.0792 716.069 78.0528C493.509 7.6327 297.354 16.8414 171.99 36.9669C154.93 39.7048 137.823 42.867 121.147 46.3664C116.889 47.2588 112.472 48.2153 108.018 49.2112C102.7 50.3963 97.4515 51.6168 92.4191 52.8373C90.2458 53.3521 88.1149 53.8711 86.0264 54.3941C82.8629 55.1754 79.653 55.9896 76.2121 56.8844C72.3672 57.8763 68.4606 58.9166 64.5984 59.9767C64.5843 59.9817 64.5699 59.9858 64.5553 59.9891L64.5557 59.9899C60.1933 61.1816 55.8539 62.4079 51.6576 63.6324C49.3864 64.2887 47.1933 64.936 45.0927 65.575C44.858 65.64 44.65 65.7025 44.4392 65.7666L43.9879 65.904C43.7265 65.9838 43.4684 66.0619 43.2103 66.1359L43.1938 66.1408L43.1942 66.1417L42.5112 66.3539C41.6966 66.6007 40.9017 66.8416 40.12 67.0818C19.4597 73.4539 8.10208 77.9871 7.98988 78.0315C7.88728 78.0727 7.77758 78.0932 7.66705 78.0919C7.55652 78.0906 7.44732 78.0676 7.34569 78.0241C7.24405 77.9806 7.15197 77.9175 7.07471 77.8385C6.99745 77.7594 6.93651 77.6658 6.89538 77.5631C6.85425 77.4605 6.83375 77.3507 6.83502 77.2401C6.83628 77.1296 6.85931 77.0203 6.90278 76.9186C6.94625 76.8169 7.00931 76.7248 7.08836 76.6475C7.16741 76.5702 7.26091 76.5092 7.36351 76.4681C7.47654 76.4237 18.8897 71.8674 39.6251 65.4714C40.4097 65.2305 41.2067 64.9895 42.0237 64.742L42.6583 64.5446C42.6801 64.5364 42.7019 64.5298 42.7241 64.5232C42.9809 64.45 43.2374 64.3719 43.498 64.2929L43.9501 64.1556C44.1753 64.0873 44.3973 64.0199 44.6245 63.9574C46.7108 63.3224 48.9113 62.6736 51.1882 62.0148C55.3862 60.7894 59.7297 59.5631 64.0954 58.3698C64.1089 58.3649 64.1229 58.3616 64.1365 58.3575C68.0122 57.2941 71.9332 56.2488 75.7904 55.2536C79.2367 54.358 82.4527 53.5422 85.6216 52.7592C87.7189 52.237 89.8539 51.7169 92.0266 51.1991C97.0647 49.9769 102.323 48.7548 107.652 47.5672C112.112 46.5704 116.537 45.6115 120.801 44.7184C137.504 41.2132 154.637 38.046 171.724 35.304C297.267 15.1497 493.703 5.92614 716.576 76.4475C716.768 76.508 716.931 76.6351 717.038 76.8059C717.144 76.9767 717.185 77.1798 717.155 77.3785C717.124 77.5772 717.023 77.7585 716.871 77.8894C716.718 78.0203 716.524 78.0923 716.323 78.0923Z"
        fill="#CCCCCC"
      />
      <path
        d="M221.366 353.574C221.075 352.721 220.584 351.95 219.935 351.325C219.696 351.103 219.437 350.903 219.161 350.727C216.964 349.262 213.681 348.934 211.594 350.727C211.384 350.91 211.189 351.11 211.013 351.325C210.39 352.092 209.75 352.841 209.094 353.574C208.016 354.803 206.914 355.991 205.761 357.145C205.432 357.465 205.104 357.793 204.767 358.113C204.574 358.307 204.38 358.492 204.187 358.677C203.446 359.385 202.688 360.067 201.922 360.741C201.518 361.103 201.114 361.457 200.702 361.802C200.087 362.316 199.473 362.829 198.85 363.326C198.791 363.368 198.732 363.41 198.673 363.461C198.656 363.469 198.648 363.486 198.631 363.495C198.623 363.495 198.614 363.495 198.606 363.511C198.583 363.52 198.563 363.535 198.547 363.554C198.362 363.68 198.236 363.764 198.143 363.84C198.177 363.823 198.21 363.798 198.244 363.781C198.092 363.899 197.932 364.017 197.781 364.135C196.308 365.221 194.801 366.265 193.261 367.242C189.45 369.683 185.447 371.809 181.291 373.601C181.014 373.71 180.727 373.828 180.441 373.937C169.562 378.397 157.76 380.137 146.057 379.007C144.861 378.915 143.666 378.788 142.471 378.628C141.09 378.426 139.718 378.182 138.355 377.904C133.163 376.868 128.084 375.333 123.187 373.323C117.061 370.516 111.234 367.096 105.796 363.116C104.955 362.518 104.105 361.92 103.254 361.339C104.222 358.964 105.174 356.589 106.1 354.197C106.562 353.043 107.009 351.89 107.446 350.727C110.889 341.775 114.121 332.739 117.219 323.669C120.35 314.481 123.305 305.239 126.082 295.945C126.368 295.001 126.646 294.058 126.916 293.115C128.372 288.205 129.769 283.284 131.107 278.352C131.234 277.872 131.368 277.4 131.486 276.92C131.873 275.505 132.252 274.091 132.623 272.676C133.464 269.484 131.562 265.669 128.212 264.903C126.599 264.489 124.888 264.718 123.441 265.541C121.993 266.364 120.921 267.717 120.451 269.315C120.089 270.68 119.727 272.036 119.357 273.4C117.581 279.994 115.712 286.566 113.751 293.115C113.465 294.058 113.178 295.001 112.892 295.945C108.566 310.211 103.816 324.334 98.6418 338.314C98.0189 340.007 97.3876 341.694 96.7479 343.375C96.4364 344.201 96.125 345.026 95.8051 345.851C95.1907 347.477 94.5594 349.102 93.9281 350.727C93.5661 351.679 93.1957 352.631 92.8254 353.574C92.5813 354.172 92.3456 354.77 92.1099 355.359C89.71 354.497 87.2235 353.898 84.6943 353.574L84.2903 353.523C82.3294 353.287 80.3463 353.304 78.3897 353.574C75.4614 353.916 72.6438 354.897 70.1363 356.448C67.6287 358 65.4924 360.083 63.8783 362.551C59.8632 368.876 59.9137 377.921 65.5449 383.294C71.3444 388.827 80.1237 388.785 86.9501 385.323C90.5677 383.365 93.618 380.505 95.8051 377.02C96.643 375.756 97.4129 374.449 98.1115 373.104C98.2883 373.222 98.465 373.339 98.6418 373.466C99.3152 373.937 99.9886 374.417 100.654 374.889C104.528 377.697 108.611 380.206 112.867 382.393C122.018 386.945 131.869 389.925 142.008 391.21C142.235 391.235 142.454 391.269 142.681 391.294C143.801 391.438 144.929 391.547 146.057 391.64C162.236 392.86 178.436 389.547 192.84 382.073C194.06 381.441 195.27 380.779 196.468 380.085C198.328 379.007 200.146 377.862 201.922 376.649C202.89 375.992 203.833 375.327 204.767 374.628C208.85 371.619 212.656 368.251 216.139 364.564C217.461 363.175 218.726 361.74 219.935 360.261C221.079 359.05 221.738 357.462 221.787 355.797C221.781 355.037 221.638 354.284 221.366 353.574ZM81.9839 373.634C82.1607 373.508 82.3374 373.373 82.5058 373.238C82.4553 373.365 82.2111 373.508 81.9839 373.634ZM84.6859 370.914C84.4923 371.133 84.3155 371.352 84.1219 371.571C83.5329 372.23 82.9002 372.849 82.228 373.424C82.1354 373.508 82.0344 373.592 81.9334 373.668C81.9323 373.668 81.9312 373.668 81.9301 373.669C81.9291 373.669 81.9282 373.67 81.9274 373.67C81.9266 373.671 81.926 373.672 81.9256 373.673C81.9252 373.674 81.925 373.675 81.925 373.676C81.8034 373.731 81.6853 373.793 81.5714 373.862C81.2095 374.081 80.8391 374.283 80.4604 374.468C79.7187 374.741 78.9558 374.952 78.1793 375.1C77.5826 375.143 76.9838 375.149 76.3864 375.116H76.3695C75.9573 375.025 75.5499 374.912 75.1491 374.78C74.947 374.679 74.7534 374.561 74.5598 374.443C74.4841 374.375 74.4167 374.308 74.3746 374.266C74.2924 374.191 74.2164 374.109 74.1474 374.022C74.1475 374.021 74.1472 374.019 74.1468 374.018C74.1464 374.017 74.1458 374.016 74.145 374.016C74.1442 374.015 74.1433 374.014 74.1423 374.014C74.1412 374.013 74.1401 374.013 74.139 374.013C74.0464 373.845 73.9454 373.676 73.8528 373.508C73.848 373.504 73.845 373.498 73.8444 373.491C73.7771 373.281 73.7182 373.062 73.6676 372.843C73.6494 372.458 73.6522 372.073 73.676 371.689C73.789 371.151 73.9409 370.622 74.1306 370.106C74.301 369.74 74.495 369.385 74.7114 369.044C74.7282 369.011 74.8124 368.876 74.905 368.724C74.9134 368.716 74.9134 368.716 74.9134 368.708C75.0397 368.564 75.1659 368.413 75.3006 368.278C75.5279 368.025 75.772 367.806 76.0161 367.579C76.4908 367.268 76.9826 366.984 77.4891 366.728C78.2927 366.443 79.1173 366.22 79.9554 366.063C81.1913 365.965 82.4335 365.976 83.6674 366.097C84.8362 366.3 85.9893 366.584 87.1185 366.947C86.4341 368.276 85.6549 369.554 84.7869 370.771C84.7532 370.821 84.7196 370.872 84.6859 370.914ZM75.3258 368.143C75.2517 368.262 75.1641 368.373 75.0649 368.472C75.1317 368.348 75.22 368.236 75.3258 368.143Z"
        fill="#3F3D56"
      />
      <path
        d="M196.064 267.564C195.988 270.208 195.912 272.853 195.837 275.497C195.677 281.367 195.511 287.24 195.34 293.115C195.163 299.726 194.978 306.334 194.784 312.94C194.692 316.35 194.596 319.761 194.498 323.172C194.237 332.36 193.979 341.545 193.724 350.727C193.699 351.679 193.665 352.622 193.64 353.574C193.513 358.13 193.387 362.686 193.261 367.242C193.118 372.186 192.977 377.129 192.84 382.073C192.739 385.778 192.635 389.487 192.529 393.198C191.771 420.088 191.013 446.978 190.256 473.869C190.224 475.534 189.548 477.122 188.371 478.299C187.194 479.477 185.607 480.153 183.943 480.185C182.273 480.171 180.675 479.502 179.494 478.32C178.313 477.138 177.643 475.54 177.63 473.869C178.051 458.743 178.477 443.618 178.909 428.493C179.288 414.816 179.672 401.139 180.062 387.463C180.189 382.957 180.315 378.449 180.441 373.937C180.635 367.15 180.826 360.362 181.014 353.574C181.039 352.622 181.073 351.679 181.098 350.727C181.115 349.894 181.14 349.068 181.165 348.235C181.536 335.055 181.906 321.872 182.276 308.687C182.428 303.499 182.574 298.308 182.714 293.115C182.882 287.195 183.051 281.277 183.219 275.362C183.295 272.76 183.362 270.166 183.438 267.564C183.47 265.899 184.145 264.311 185.322 263.133C186.499 261.955 188.087 261.28 189.751 261.248C191.421 261.261 193.019 261.931 194.2 263.112C195.381 264.294 196.05 265.893 196.064 267.564Z"
        fill="#3F3D56"
      />
      <path
        d="M542.376 269.317C535.756 294.396 527.844 319.116 518.671 343.377C516.14 350.07 513.551 356.748 510.783 363.347L511.42 361.838C510.184 364.981 508.606 367.978 506.715 370.775C506.586 370.955 506.455 371.134 506.322 371.311C506.976 370.474 507.1 370.309 506.694 370.815C506.481 371.068 506.269 371.322 506.048 371.569C505.459 372.229 504.827 372.849 504.155 373.424C503.986 373.569 503.814 373.711 503.64 373.849L504.43 373.235C504.338 373.451 503.695 373.738 503.495 373.861C502.846 374.252 502.17 374.595 501.471 374.887L502.979 374.25C501.833 374.712 500.638 375.04 499.417 375.228L501.095 375.002C499.896 375.168 498.68 375.181 497.478 375.041L499.156 375.266C498.172 375.131 497.209 374.871 496.29 374.494L497.798 375.131C497.308 374.917 496.835 374.665 496.385 374.376C496.156 374.227 495.454 373.695 496.372 374.397C497.326 375.126 496.495 374.459 496.299 374.266C496.135 374.104 495.987 373.929 495.827 373.765C495.085 373.003 496.666 375.075 496.161 374.184C495.892 373.738 495.645 373.278 495.422 372.806L496.059 374.315C495.769 373.597 495.563 372.847 495.446 372.082L495.671 373.761C495.551 372.809 495.55 371.846 495.669 370.894L495.443 372.573C495.598 371.51 495.879 370.469 496.281 369.473L495.644 370.982C495.924 370.312 496.256 369.665 496.636 369.047C496.811 368.727 497.016 368.425 497.249 368.144C497.29 368.158 496.181 369.418 496.77 368.782C496.924 368.615 497.068 368.44 497.223 368.275C497.473 368.01 497.74 367.769 498.002 367.519C498.882 366.681 496.772 368.332 497.787 367.669C498.522 367.186 499.296 366.763 500.101 366.407L498.593 367.044C499.94 366.49 501.353 366.11 502.797 365.915L501.119 366.141C502.927 365.933 504.754 365.954 506.557 366.205L504.879 365.98C507.162 366.326 509.393 366.954 511.522 367.849L510.014 367.212C514.55 369.161 518.568 372.054 522.579 374.891C526.453 377.698 530.535 380.205 534.789 382.392C543.941 386.945 553.792 389.926 563.932 391.212C578.473 392.995 593.229 391.095 606.846 385.687C620.462 380.279 632.503 371.536 641.864 360.261C643.006 359.049 643.664 357.46 643.713 355.795C643.701 354.122 643.038 352.52 641.864 351.329C639.548 349.202 635.173 348.601 632.936 351.329C630.817 353.918 628.538 356.373 626.113 358.678C624.981 359.753 623.818 360.794 622.626 361.803C621.945 362.379 621.254 362.943 620.555 363.496C620.223 363.758 619.192 364.455 620.776 363.33C620.413 363.588 620.065 363.869 619.706 364.134C614.405 368.044 608.661 371.313 602.592 373.874L604.1 373.237C597.588 375.97 590.749 377.845 583.755 378.814L585.433 378.589C578.237 379.536 570.948 379.525 563.755 378.556L565.433 378.782C558.242 377.794 551.209 375.877 544.511 373.08L546.019 373.717C539.554 370.855 533.42 367.3 527.722 363.113C524.757 360.917 521.63 358.948 518.368 357.223C514.568 355.281 510.453 354.03 506.215 353.527C498.27 352.592 490.174 355.688 485.807 362.556C481.787 368.876 481.839 377.92 487.468 383.294C493.265 388.829 502.045 388.782 508.878 385.32C515.458 381.985 519.41 375.058 522.19 368.526C528.445 353.826 533.983 338.786 539.142 323.67C544.247 308.714 548.876 293.608 553.03 278.35C553.544 276.46 554.051 274.569 554.55 272.675C555.393 269.484 553.489 265.668 550.141 264.905C548.528 264.49 546.816 264.717 545.367 265.54C543.918 266.363 542.846 267.717 542.376 269.317Z"
        fill="#3F3D56"
      />
      <path
        d="M605.365 267.563L603.092 348.237L600.832 428.49L599.554 473.869C599.568 475.54 600.238 477.138 601.418 478.319C602.599 479.501 604.197 480.171 605.867 480.185C607.531 480.153 609.118 479.477 610.295 478.3C611.472 477.122 612.148 475.534 612.18 473.869L614.452 393.196L616.712 312.942L617.991 267.563C617.976 265.893 617.307 264.294 616.126 263.113C614.945 261.931 613.348 261.261 611.678 261.247C610.013 261.279 608.426 261.955 607.249 263.133C606.072 264.31 605.397 265.898 605.365 267.563Z"
        fill="#3F3D56"
      />
      <path
        opacity="0.2"
        d="M386.852 451.345H388.813V362.041H434.543V360.084H388.813V322.402H424.128C423.61 321.743 423.078 321.093 422.53 320.451H388.813V295.563C388.164 295.286 387.511 295.019 386.852 294.768V320.451H348.426V288.562C347.767 288.592 347.119 288.638 346.465 288.693V320.451H315.809V296.659C315.151 296.951 314.503 297.257 313.859 297.579V320.451H288.089V322.402H313.859V360.084H288.089V362.041H313.859V451.345H315.809V362.041C319.835 362.04 323.822 362.833 327.542 364.374C331.262 365.915 334.641 368.174 337.488 371.022C340.335 373.871 342.593 377.252 344.133 380.974C345.674 384.695 346.466 388.684 346.465 392.712V451.345H348.426V362.041H386.852V451.345ZM315.809 360.084V322.402H346.465V360.084H315.809ZM348.426 360.084V322.402H349.195C354.14 322.402 359.037 323.377 363.607 325.271C368.176 327.165 372.327 329.941 375.824 333.44C379.321 336.939 382.094 341.093 383.987 345.665C385.879 350.236 386.853 355.136 386.852 360.084H348.426Z"
        fill="black"
      />
      <path
        d="M374.881 424.568C372.413 435.583 366.502 445.524 358.004 452.949C357.381 453.488 356.758 454.01 356.11 454.524C354.536 454.667 352.973 454.813 351.422 454.962C350.134 455.08 348.863 455.206 347.6 455.324L347.373 455.349L347.213 453.968L346.573 448.376C344.092 444.323 342.554 439.762 342.073 435.033C341.592 430.304 342.181 425.527 343.796 421.056C346.018 415.06 350.041 409.763 353.998 404.508C359.46 397.249 364.772 390.073 364.965 381.222C367.653 384.664 369.888 388.437 371.615 392.448C369.986 393.216 368.522 394.294 367.305 395.623C366.96 396.002 366.615 396.533 366.851 396.987C367.053 397.375 367.558 397.467 367.996 397.518C369.048 397.627 370.108 397.737 371.16 397.846C372.002 397.939 372.844 398.023 373.686 398.116C374.704 401.46 375.395 404.895 375.748 408.373C376.315 413.784 376.022 419.25 374.881 424.568Z"
        fill="#3F3D56"
      />
      <path
        d="M402.827 402.495C397.861 406.108 394.957 411.304 392.701 417.031C390.389 417.771 388.309 419.1 386.666 420.888C386.321 421.267 385.976 421.798 386.211 422.252C386.413 422.64 386.918 422.732 387.356 422.783C388.408 422.892 389.469 423.002 390.521 423.111C388.265 429.882 386.194 436.889 382.205 442.607C379.551 446.383 376.093 449.521 372.079 451.795C370.984 452.419 369.854 452.979 368.695 453.471C364.419 453.8 360.224 454.151 356.111 454.524C354.537 454.667 352.974 454.813 351.422 454.962C350.135 455.08 348.864 455.206 347.601 455.324C347.593 454.861 347.593 454.398 347.601 453.935C347.867 441.596 352.404 429.732 360.437 420.366C360.816 419.928 361.203 419.499 361.599 419.069C365.669 414.72 370.455 411.102 375.749 408.374C384.09 404.034 393.439 402.005 402.827 402.495Z"
        fill="#6C63FF"
      />
      <path
        d="M352.879 450.642L351.91 453.505L351.422 454.962C350.134 455.08 348.863 455.206 347.601 455.324L347.374 455.349C345.976 455.493 344.587 455.636 343.199 455.779C342.837 455.358 342.475 454.928 342.121 454.49C333.335 443.846 329.118 430.154 330.391 416.408C331.664 402.662 338.323 389.978 348.914 381.13C347.803 386.949 349.099 392.524 351.229 398.057C351.001 398.15 350.783 398.242 350.572 398.343C348.943 399.111 347.479 400.189 346.263 401.518C345.917 401.897 345.572 402.428 345.808 402.883C346.01 403.27 346.515 403.363 346.953 403.413C348.005 403.523 349.065 403.632 350.118 403.742C350.959 403.834 351.801 403.918 352.643 404.011C353.038 404.053 353.434 404.095 353.83 404.137C353.889 404.264 353.939 404.382 353.998 404.508C356.397 409.713 358.981 414.942 360.437 420.366C360.802 421.727 361.089 423.107 361.296 424.501C361.944 429.211 361.524 434.006 360.067 438.532C358.61 443.057 356.153 447.196 352.879 450.642Z"
        fill="#6C63FF"
      />
      <path
        d="M437.605 328.495C430.359 314.353 419.133 302.454 405.929 293.71C392.683 284.979 377.484 279.661 361.686 278.232C359.615 278.043 357.539 277.933 355.458 277.901C352.999 277.864 316.009 288.539 303.618 297.255C291.233 305.866 281.046 317.269 273.877 330.544C266.721 343.891 263.201 358.888 263.67 374.027C264.284 389.258 268.527 404.121 276.046 417.378C283.463 430.593 293.993 441.794 306.722 450.009C319.633 458.251 332.602 480.104 347.845 480.875C363.203 481.653 380.718 461.038 394.725 454.779C408.732 448.468 420.842 438.594 429.847 426.141C438.597 413.938 444.258 399.793 446.344 384.919C448.51 369.69 447.501 353.984 442.303 339.429C440.969 335.689 439.4 332.037 437.605 328.495C436.108 325.543 431.717 324.456 428.968 326.229C427.552 327.101 426.527 328.486 426.105 330.096C425.683 331.705 425.897 333.415 426.703 334.871C427.583 336.604 428.401 338.367 429.157 340.157L428.521 338.649C431.383 345.533 433.329 352.764 434.309 360.156L434.084 358.477C435.126 366.496 435.108 374.618 434.028 382.632L434.253 380.953C433.162 388.967 431.024 396.802 427.894 404.259L428.531 402.75C426.921 406.555 425.044 410.241 422.915 413.781C421.836 415.57 420.691 417.316 419.48 419.021C418.949 419.769 418.401 420.504 417.848 421.237C417.128 422.193 418.831 419.988 418.086 420.926C417.959 421.086 417.833 421.246 417.706 421.405C417.323 421.883 416.936 422.357 416.542 422.826C413.918 425.959 411.054 428.883 407.977 431.571C407.21 432.241 406.431 432.895 405.638 433.534C405.244 433.853 404.854 434.185 404.442 434.482C404.458 434.47 405.772 433.471 404.994 434.051C404.75 434.233 404.507 434.419 404.262 434.6C402.629 435.811 400.953 436.959 399.233 438.046C395.274 440.542 391.121 442.714 386.813 444.542L388.321 443.905C380.89 447.035 373.081 449.173 365.092 450.265L366.771 450.039C358.786 451.119 350.694 451.133 342.706 450.082L344.384 450.308C337.124 449.332 330.023 447.411 323.261 444.594L324.769 445.231C320.852 443.576 317.076 441.607 313.476 439.343C311.695 438.22 309.96 437.028 308.271 435.766C308.03 435.586 307.792 435.404 307.552 435.222C306.781 434.641 308.105 435.652 308.116 435.659C307.668 435.337 307.237 434.993 306.824 434.627C306.008 433.963 305.205 433.283 304.415 432.588C301.254 429.802 298.302 426.788 295.583 423.569C294.902 422.764 294.236 421.946 293.584 421.117C293.302 420.758 292.788 420.031 293.925 421.563C293.775 421.361 293.62 421.163 293.469 420.963C293.106 420.482 292.748 419.996 292.395 419.508C291.159 417.797 289.984 416.043 288.87 414.248C286.353 410.184 284.156 405.93 282.3 401.524L282.936 403.033C279.899 395.802 277.821 388.203 276.758 380.432L276.983 382.111C276.024 374.947 276.01 367.688 276.942 360.521L276.717 362.2C277.673 355.26 279.539 348.475 282.268 342.023L281.631 343.532C283.348 339.492 285.373 335.591 287.688 331.862C288.847 329.997 290.075 328.176 291.373 326.401C291.667 325.998 291.965 325.597 292.267 325.199C292.54 324.838 293.29 323.941 292.01 325.526C292.135 325.371 292.256 325.211 292.38 325.054C293.092 324.151 293.821 323.263 294.568 322.389C297.394 319.078 300.456 315.976 303.729 313.107C304.556 312.382 305.396 311.672 306.249 310.977C306.637 310.662 307.027 310.349 307.42 310.04C307.577 309.917 307.737 309.795 307.893 309.671C306.212 311.009 307.426 310.035 307.807 309.749C309.566 308.431 311.372 307.178 313.224 305.992C317.343 303.357 321.675 301.073 326.176 299.164L324.668 299.8C331.199 297.056 360.139 290.579 365.402 291.286L363.724 291.061C371.46 292.141 379.022 294.231 386.215 297.278L384.707 296.641C388.352 298.19 391.895 299.97 395.313 301.971C397.021 302.973 398.695 304.029 400.336 305.14C401.112 305.666 401.881 306.203 402.641 306.753C403.021 307.027 403.398 307.305 403.774 307.586C403.983 307.741 404.19 307.899 404.398 308.055C405.273 308.712 403.193 307.105 404.11 307.831C407.179 310.243 410.094 312.846 412.837 315.624C414.184 316.996 415.485 318.413 416.74 319.873C417.383 320.622 418.014 321.382 418.631 322.153C418.937 322.536 419.982 323.922 418.702 322.224C419.015 322.639 419.331 323.051 419.64 323.469C422.3 327.072 424.662 330.885 426.703 334.871C428.213 337.816 432.584 338.915 435.341 337.137C436.757 336.265 437.783 334.88 438.205 333.27C438.627 331.66 438.412 329.95 437.605 328.495Z"
        fill="#3F3D56"
      />
      <path
        d="M364.047 431.571C363.395 431.601 362.75 431.43 362.199 431.081C361.648 430.732 361.217 430.222 360.965 429.619C360.714 429.017 360.653 428.352 360.792 427.715C360.931 427.077 361.262 426.497 361.741 426.054C361.821 425.735 361.879 425.506 361.959 425.187C361.93 425.117 361.901 425.048 361.872 424.979C358.943 417.991 340.252 437.471 339.444 444.038C339.089 446.941 339.239 449.884 339.888 452.736C333.834 439.522 330.69 425.161 330.67 410.625C330.669 406.978 330.871 403.333 331.276 399.708C331.612 396.736 332.076 393.786 332.671 390.857C335.916 374.962 342.883 360.064 353 347.387C358.786 347.71 363.857 346.828 364.346 335.609C364.433 333.613 365.913 331.885 366.239 329.919C365.687 329.992 365.125 330.037 364.573 330.073C364.401 330.082 364.22 330.092 364.048 330.101L363.983 330.104C363.376 330.131 362.774 329.982 362.249 329.675C361.725 329.368 361.3 328.915 361.027 328.373C360.753 327.83 360.642 327.219 360.707 326.615C360.773 326.01 361.011 325.437 361.394 324.965C361.632 324.672 361.871 324.378 362.11 324.085C362.472 323.632 362.843 323.188 363.205 322.735C363.247 322.692 363.287 322.646 363.323 322.599C363.74 322.082 364.156 321.575 364.573 321.059C363.813 319.878 362.79 318.889 361.585 318.169C357.41 315.723 351.651 317.417 348.635 321.195C345.611 324.973 345.041 330.273 346.091 334.993C347.124 339.009 348.833 342.821 351.144 346.263C350.917 346.553 350.682 346.834 350.456 347.124C346.317 352.448 342.71 358.165 339.687 364.193C340.542 357.508 330.081 333.363 326.036 328.249C321.176 322.106 311.212 324.787 310.356 332.574C310.348 332.65 310.34 332.725 310.332 332.8C310.933 333.14 311.521 333.5 312.096 333.88C312.819 334.364 313.379 335.054 313.703 335.862C314.028 336.669 314.1 337.555 313.912 338.405C313.724 339.254 313.284 340.027 312.649 340.621C312.015 341.216 311.216 341.606 310.356 341.738L310.268 341.752C302.225 353.242 328.01 383.148 334.464 376.433C331.426 385.047 329.521 394.019 328.795 403.124C328.385 408.495 328.409 413.892 328.868 419.259L328.841 419.069C327.407 407.378 302.805 389.995 295.621 391.443C291.482 392.277 287.406 392.088 288.034 396.265C288.044 396.331 288.054 396.398 288.065 396.465C289.18 396.919 290.265 397.443 291.315 398.032C291.916 398.371 292.505 398.731 293.08 399.112C293.803 399.595 294.363 400.286 294.687 401.093C295.011 401.9 295.084 402.787 294.896 403.636C294.708 404.486 294.268 405.258 293.633 405.853C292.999 406.448 292.2 406.837 291.34 406.97L291.252 406.983C291.189 406.992 291.134 407.001 291.071 407.01C287.41 419.615 314.562 439.956 331.068 433.483H331.077C332.713 440.596 335.083 447.518 338.15 454.14H363.414C363.504 453.859 363.586 453.569 363.667 453.288C361.329 453.436 358.981 453.296 356.677 452.872C358.551 450.571 360.425 448.251 362.3 445.95C362.342 445.907 362.381 445.862 362.418 445.814C363.368 444.636 364.328 443.468 365.279 442.29L365.28 442.288C365.33 438.678 364.916 435.076 364.048 431.572L364.047 431.571ZM335.116 374.63L335.129 374.612L335.116 374.648V374.63ZM329.52 425.103L329.302 424.614C329.312 424.26 329.312 423.907 329.302 423.545C329.302 423.445 329.284 423.345 329.284 423.246C329.366 423.871 329.438 424.496 329.529 425.121L329.52 425.103Z"
        fill="#3F3D56"
      />
      <path
        d="M80.1741 378.974C85.2877 378.974 89.4331 374.826 89.4331 369.71C89.4331 364.594 85.2877 360.446 80.1741 360.446C75.0605 360.446 70.915 364.594 70.915 369.71C70.915 374.826 75.0605 378.974 80.1741 378.974Z"
        fill="#3F3D56"
      />
      <path
        d="M191.282 480.033C196.396 480.033 200.542 475.886 200.542 470.769C200.542 465.653 196.396 461.506 191.282 461.506C186.169 461.506 182.023 465.653 182.023 470.769C182.023 475.886 186.169 480.033 191.282 480.033Z"
        fill="#3F3D56"
      />
      <path
        d="M612.99 480.033C618.104 480.033 622.25 475.886 622.25 470.769C622.25 465.653 618.104 461.506 612.99 461.506C607.877 461.506 603.731 465.653 603.731 470.769C603.731 475.886 607.877 480.033 612.99 480.033Z"
        fill="#3F3D56"
      />
      <path
        d="M635.717 362.13C640.831 362.13 644.976 357.983 644.976 352.866C644.976 347.75 640.831 343.603 635.717 343.603C630.603 343.603 626.458 347.75 626.458 352.866C626.458 357.983 630.603 362.13 635.717 362.13Z"
        fill="#3F3D56"
      />
      <path
        d="M608.782 276.23C613.895 276.23 618.041 272.082 618.041 266.966C618.041 261.85 613.895 257.702 608.782 257.702C603.668 257.702 599.522 261.85 599.522 266.966C599.522 272.082 603.668 276.23 608.782 276.23Z"
        fill="#3F3D56"
      />
      <path
        d="M222.426 352.867C222.421 355.233 221.506 357.506 219.872 359.217C218.237 360.927 216.008 361.944 213.646 362.055C211.283 362.167 208.968 361.366 207.18 359.818C205.391 358.269 204.266 356.092 204.037 353.737C203.809 351.382 204.493 349.029 205.95 347.165C207.407 345.301 209.525 344.068 211.864 343.723C214.204 343.377 216.587 343.945 218.52 345.308C220.453 346.672 221.789 348.727 222.25 351.047C222.368 351.647 222.428 352.256 222.426 352.867Z"
        fill="#3F3D56"
      />
      <path
        d="M407.608 303.179C412.721 303.179 416.867 299.031 416.867 293.915C416.867 288.799 412.721 284.651 407.608 284.651C402.494 284.651 398.349 288.799 398.349 293.915C398.349 299.031 402.494 303.179 407.608 303.179Z"
        fill="#3F3D56"
      />
      <path
        d="M315.859 293.915C315.853 296.281 314.939 298.555 313.304 300.265C311.67 301.976 309.441 302.992 307.079 303.104C304.716 303.216 302.401 302.415 300.613 300.866C298.824 299.318 297.699 297.141 297.47 294.786C297.241 292.43 297.926 290.077 299.383 288.213C300.84 286.349 302.957 285.117 305.297 284.771C307.637 284.426 310.02 284.993 311.953 286.357C313.886 287.72 315.221 289.775 315.682 292.096C315.801 292.695 315.86 293.304 315.859 293.915Z"
        fill="#3F3D56"
      />
      <path
        d="M196.333 266.966C196.327 269.332 195.412 271.606 193.778 273.316C192.144 275.027 189.915 276.043 187.552 276.155C185.19 276.267 182.875 275.465 181.086 273.917C179.298 272.369 178.173 270.192 177.944 267.836C177.715 265.481 178.4 263.128 179.857 261.264C181.314 259.4 183.431 258.168 185.771 257.822C188.11 257.477 190.493 258.044 192.427 259.408C194.36 260.771 195.695 262.826 196.156 265.147C196.275 265.746 196.334 266.355 196.333 266.966Z"
        fill="#3F3D56"
      />
      <path
        d="M504.407 382.342C509.52 382.342 513.666 378.195 513.666 373.078C513.666 367.962 509.52 363.815 504.407 363.815C499.293 363.815 495.147 367.962 495.147 373.078C495.147 378.195 499.293 382.342 504.407 382.342Z"
        fill="#3F3D56"
      />
      <path
        d="M358.787 298.126C366.225 298.126 372.255 292.093 372.255 284.651C372.255 277.209 366.225 271.177 358.787 271.177C351.349 271.177 345.319 277.209 345.319 284.651C345.319 292.093 351.349 298.126 358.787 298.126Z"
        fill="#3F3D56"
      />
      <path
        d="M722.998 480.741L1.00223 481C0.870613 481 0.740283 480.974 0.618686 480.924C0.49709 480.873 0.386611 480.799 0.293545 480.706C0.200479 480.613 0.126646 480.503 0.0762794 480.381C0.0259124 480.259 0 480.129 0 479.997C0 479.865 0.0259124 479.735 0.0762794 479.613C0.126646 479.492 0.200479 479.381 0.293545 479.288C0.386611 479.195 0.49709 479.121 0.618686 479.071C0.740283 479.02 0.870613 478.994 1.00223 478.994L722.998 478.736C723.263 478.736 723.517 478.842 723.705 479.03C723.892 479.218 723.997 479.473 723.997 479.738C723.997 480.004 723.892 480.258 723.705 480.446C723.517 480.634 723.263 480.74 722.998 480.741Z"
        fill="#CACACA"
      />
    </g>
    <defs>
      <clipPath id="clip0_247_18">
        <rect width="724" height="481" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/skills" element={<Skills />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/about-the-programmer" element={<AboutIT />}></Route>
        <Route path="/published" element={<Papers />}></Route>
        <Route
          path="*"
          element={
            <div id="four04">
              <h1>There's nothing here...</h1>

              {notFoundSvg}
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
