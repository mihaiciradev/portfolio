import React, { ReactNode, useCallback, useEffect, useRef } from 'react';


const icon1 = (<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8.84666 24.7394C7.53211 24.7394 6.42345 24.2856 5.52067 23.3779C4.61789 22.4702 4.1665 21.3591 4.1665 20.0446C4.1665 18.73 4.62034 17.6214 5.52801 16.7186C6.43569 15.8158 7.5468 15.3644 8.86135 15.3644C10.1759 15.3644 11.2846 15.8183 12.1873 16.7259C13.0901 17.6336 13.5415 18.7447 13.5415 20.0593C13.5415 21.3738 13.0877 22.4825 12.18 23.3853C11.2723 24.288 10.1612 24.7394 8.84666 24.7394ZM18.4821 15.8853C17.1675 15.8853 16.0589 15.4314 15.1561 14.5237C14.2533 13.6161 13.8019 12.505 13.8019 11.1904C13.8019 9.87586 14.2558 8.7672 15.1634 7.86442C16.0711 6.96164 17.1822 6.51025 18.4968 6.51025C19.8113 6.51025 20.92 6.96409 21.8228 7.87176C22.7255 8.77944 23.1769 9.89055 23.1769 11.2051C23.1769 12.5196 22.7231 13.6283 21.8154 14.5311C20.9077 15.4339 19.7966 15.8853 18.4821 15.8853ZM31.5029 15.8853C30.1884 15.8853 29.0797 15.4314 28.1769 14.5237C27.2741 13.6161 26.8228 12.505 26.8228 11.1904C26.8228 9.87586 27.2766 8.7672 28.1843 7.86442C29.0919 6.96164 30.203 6.51025 31.5176 6.51025C32.8321 6.51025 33.9408 6.96409 34.8436 7.87176C35.7464 8.77944 36.1978 9.89055 36.1978 11.2051C36.1978 12.5196 35.7439 13.6283 34.8362 14.5311C33.9286 15.4339 32.8175 15.8853 31.5029 15.8853ZM41.1383 24.7394C39.8238 24.7394 38.7151 24.2856 37.8123 23.3779C36.9096 22.4702 36.4582 21.3591 36.4582 20.0446C36.4582 18.73 36.912 17.6214 37.8197 16.7186C38.7274 15.8158 39.8385 15.3644 41.153 15.3644C42.4676 15.3644 43.5762 15.8183 44.479 16.7259C45.3818 17.6336 45.8332 18.7447 45.8332 20.0593C45.8332 21.3738 45.3793 22.4825 44.4717 23.3853C43.564 24.288 42.4529 24.7394 41.1383 24.7394ZM13.854 46.0936C12.3957 46.0936 11.1978 45.5463 10.2603 44.4516C9.32275 43.357 8.854 42.064 8.854 40.5728C8.854 39.1144 9.29671 37.821 10.1821 36.6925C11.0675 35.5641 12.0137 34.479 13.0207 33.4373C13.7846 32.6734 14.4964 31.8662 15.1561 31.0155C15.8158 30.1648 16.4408 29.288 17.0311 28.3853C18.038 26.8575 19.1665 25.4339 20.4165 24.1144C21.6665 22.795 23.1943 22.1353 24.9998 22.1353C26.8054 22.1353 28.3419 22.795 29.6092 24.1144C30.8766 25.4339 32.0137 26.8748 33.0207 28.4373C33.6109 29.3401 34.2273 30.2082 34.8696 31.0415C35.512 31.8748 36.2151 32.6734 36.979 33.4373C37.9859 34.479 38.9321 35.5641 39.8175 36.6925C40.703 37.821 41.1457 39.1144 41.1457 40.5728C41.1457 42.064 40.6769 43.357 39.7394 44.4516C38.8019 45.5463 37.604 46.0936 36.1457 46.0936C34.2707 46.0936 32.413 45.9373 30.5728 45.6248C28.7325 45.3123 26.8748 45.1561 24.9998 45.1561C23.1248 45.1561 21.2672 45.3123 19.4269 45.6248C17.5866 45.9373 15.729 46.0936 13.854 46.0936Z" fill="#7338D3" />
</svg>
)

const icon2 = (<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M39.1791 47.224C38.8847 47.224 38.5726 47.2087 38.2427 47.1781C37.9129 47.1472 37.5876 47.093 37.2668 47.0154L10.9647 41.3904C9.48141 41.0696 8.14988 40.4363 6.97009 39.4905C5.7903 38.5447 4.84903 37.3475 4.14629 35.899L4.01717 35.4699C4.00057 35.1506 4.11759 34.8681 4.36821 34.6224C4.6188 34.3767 4.89958 34.2497 5.21056 34.2414C5.46042 34.2331 5.67141 34.2852 5.84353 34.3977C6.01561 34.5101 6.16203 34.6739 6.2828 34.8891C6.86478 36.0002 7.60339 36.9252 8.49863 37.6642C9.39387 38.4032 10.3714 38.8942 11.4311 39.1372L12.5793 39.3852L20.2026 34.212L18.5088 26.1742C18.4311 25.7409 18.4203 25.2468 18.4765 24.692C18.5328 24.1372 18.6866 23.6779 18.938 23.3141L24.5301 14.4113H18.7206L14.8936 20.6193L11.9882 18.8553L16.9044 11.0122H28.5417C29.3818 11.0122 30.0619 11.2462 30.582 11.7142C31.102 12.1822 31.4572 12.6196 31.6474 13.0265L32.7411 15.5265C33.4537 17.1682 34.5673 18.5364 36.0819 19.6309C37.5964 20.7254 39.3301 21.3247 41.2828 21.4289V24.8279C38.9927 24.7585 36.8844 24.1133 34.9581 22.8923C33.0318 21.6714 31.4353 20.0838 30.1687 18.1295L25.916 24.9264L33.0015 30.6057L35.0849 44.1497L37.7332 44.7102C37.9763 44.7796 38.2193 44.823 38.4624 44.8404C38.7054 44.8577 38.9443 44.8664 39.1791 44.8664C39.9875 44.8664 40.8175 44.6928 41.6689 44.3456C42.5204 43.9984 43.2892 43.5032 43.9753 42.8601C44.0183 42.817 44.2565 42.7178 44.6897 42.5623C45.0438 42.554 45.3436 42.6731 45.5893 42.9195C45.835 43.1659 45.962 43.4703 45.9703 43.8327C45.9786 43.9964 45.946 44.1602 45.8724 44.3241C45.7988 44.4878 45.6974 44.6128 45.5684 44.6989C44.649 45.5488 43.6296 46.1821 42.5102 46.5988C41.3908 47.0156 40.2804 47.224 39.1791 47.224ZM31.5047 43.4103L29.8234 32.474L23.0514 27.6585L24.0557 35.7552L17.2362 40.3453L31.5047 43.4103ZM33.8349 9.6875C32.76 9.6875 31.8348 9.2997 31.0592 8.52411C30.2836 7.74852 29.8958 6.8233 29.8958 5.74844C29.8958 4.66524 30.2836 3.73585 31.0592 2.96026C31.8348 2.18467 32.76 1.79687 33.8349 1.79688C34.9181 1.79688 35.8475 2.18467 36.6231 2.96026C37.3987 3.73585 37.7864 4.66524 37.7864 5.74844C37.7864 6.8233 37.3987 7.74852 36.6231 8.52411C35.8475 9.2997 34.9181 9.6875 33.8349 9.6875Z" fill="#7338D3" />
</svg>
)

const icon3 = (<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_221_404)">
    <path d="M25.0016 35.1889C23.9173 35.1889 22.9895 34.8038 22.218 34.0335C21.4466 33.2631 21.0609 32.3358 21.0609 31.2515C21.0609 30.1672 21.4461 29.2394 22.2164 28.4679C22.9867 27.6965 23.914 27.3108 24.9983 27.3108C26.0826 27.3108 27.0105 27.696 27.7819 28.4663C28.5533 29.2366 28.939 30.1639 28.939 31.2482C28.939 32.3325 28.5539 33.2604 27.7836 34.0318C27.0132 34.8032 26.0859 35.1889 25.0016 35.1889ZM19.1338 50.1368V42.5474C16.2949 41.5486 14.2223 39.8474 12.9161 37.444C11.6098 35.0405 10.9047 32.4093 10.8005 29.5504H14.1994C14.2689 33.1268 15.2141 35.757 17.0351 37.441C18.8561 39.125 21.511 39.967 25 39.967C28.4889 39.967 31.1439 39.125 32.9649 37.441C34.7858 35.757 35.731 33.1268 35.8005 29.5504H39.1994C39.13 32.41 38.4335 35.0438 37.1099 37.452C35.7863 39.8601 33.705 41.5586 30.8661 42.5474V50.1368H19.1338ZM10.8005 26.4254L6.01387 17.3504C5.63533 17.5323 5.24811 17.6956 4.85221 17.8401C4.4563 17.9847 4.05417 18.0569 3.6458 18.0569C3.15441 18.0569 2.73585 17.9003 2.39012 17.587C2.04443 17.2737 1.87158 16.839 1.87158 16.2827V8.22111C1.87158 5.87132 4.16766 3.87836 8.75981 2.24225C13.3519 0.606142 18.7653 -0.211914 25 -0.211914C31.2346 -0.211914 36.648 0.606142 41.2401 2.24225C45.8323 3.87836 48.1284 5.87132 48.1284 8.22111V16.2827C48.1284 16.839 47.9555 17.2737 47.6098 17.587C47.2641 17.9003 46.8455 18.0569 46.3541 18.0569C45.9557 18.0569 45.5582 17.9847 45.1614 17.8401C44.7647 17.6956 44.3712 17.5323 43.981 17.3504L39.1994 26.4254H35.8005L32.5464 13.8903C31.2803 13.7167 30.0194 13.5865 28.7638 13.4997C27.5082 13.4128 26.2535 13.3694 24.9996 13.3694C23.7456 13.3694 22.4909 13.4128 21.2353 13.4997C19.9797 13.5865 18.7233 13.7167 17.466 13.8903L14.1994 26.4254H10.8005ZM12.4082 23.7148L14.4667 14.3443C13.2929 14.6138 12.2634 14.8915 11.3779 15.1776C10.4925 15.4637 9.55464 15.8109 8.56429 16.2193L12.4082 23.7148ZM37.5917 23.7272L41.4356 16.2193C40.4453 15.8109 39.5074 15.4637 38.622 15.1776C37.7366 14.8915 36.707 14.6138 35.5332 14.3443L37.5917 23.7272ZM5.42002 13.6774C8.08533 12.5912 11.1333 11.6769 14.564 10.9345C17.9948 10.1922 21.4734 9.82095 25 9.82095C28.5265 9.82095 32.0052 10.1922 35.4359 10.9345C38.8666 11.6769 41.9146 12.5912 44.5799 13.6774V8.35178C44.3218 7.96574 43.7024 7.48797 42.7219 6.91845C41.7414 6.34894 40.4195 5.79885 38.7562 5.26819C37.0929 4.73757 35.1056 4.28296 32.7943 3.90439C30.4831 3.52585 27.8849 3.33658 25 3.33658C22.115 3.33658 19.5169 3.52585 17.2056 3.90439C14.8943 4.28296 12.907 4.73757 11.2438 5.26819C9.58047 5.79885 8.25856 6.34894 7.27804 6.91845C6.29752 7.48797 5.67818 7.96574 5.42002 8.35178V13.6774Z" fill="#7338D3" />
  </g>
  <defs>
    <clipPath id="clip0_221_404">
      <rect width="50" height="50" fill="white" />
    </clipPath>
  </defs>
</svg>
)

const icon4 = (<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M29.6174 21.7775L27.1185 19.2911L33.3164 13.0932L27.1706 6.9994L29.6694 4.50055L35.8153 10.5943L42.0132 4.39638L44.4996 6.89523L38.3017 13.0932L44.4996 19.2911L42.0132 21.7775L35.8153 15.5796L29.6174 21.7775ZM3.44434 22.9414L14.409 3.23242L25.3613 22.9414H3.44434ZM14.4736 44.3477C12.0929 44.3477 10.0548 43.5017 8.35944 41.8096C6.66409 40.1174 5.81642 38.0833 5.81642 35.7071C5.81642 33.295 6.66347 31.2504 8.35757 29.5736C10.0517 27.8967 12.0882 27.0583 14.4671 27.0583C16.8461 27.0583 18.8807 27.9047 20.5707 29.5976C22.2608 31.2905 23.1058 33.3256 23.1058 35.7028C23.1058 38.0834 22.2606 40.1194 20.5701 41.8108C18.8796 43.5021 16.8474 44.3477 14.4736 44.3477ZM14.4731 40.7868C15.8903 40.7868 17.0919 40.2955 18.0781 39.3129C19.0643 38.3304 19.5574 37.1271 19.5574 35.703C19.5574 34.2858 19.0635 33.0821 18.0758 32.092C17.0881 31.1018 15.8853 30.6067 14.4674 30.6067C13.046 30.6067 11.8423 31.1018 10.8563 32.0918C9.87031 33.0819 9.3773 34.2875 9.3773 35.7088C9.3773 37.1301 9.86977 38.3317 10.8547 39.3137C11.8396 40.2958 13.0457 40.7868 14.4731 40.7868ZM9.50413 19.393H19.3139L14.409 10.575L9.50413 19.393ZM27.1581 44.3477V27.0583H44.4476V44.3477H27.1581ZM30.7191 40.7868H40.8991V30.6067H30.7191V40.7868Z" fill="#7338D3" />
</svg>
)

const icon5 = (<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M14.5131 48.1286L20.8526 15.6747C21.0262 14.8082 21.44 14.1388 22.094 13.6667C22.7481 13.1945 23.4389 12.9584 24.1666 12.9584C24.886 12.9584 25.5619 13.1209 26.1945 13.4459C26.827 13.7709 27.3426 14.2409 27.7411 14.8561L29.7599 18.1894C30.4196 19.3005 31.3062 20.2735 32.4196 21.1084C33.533 21.9432 34.8335 22.5954 36.3213 23.0649V19.1338H38.6786V48.1286H36.3213V26.5533C34.6252 26.1797 33.0146 25.5254 31.4894 24.5906C29.9643 23.6558 28.5941 22.4973 27.3788 21.1152L25.9431 28.3185L30.3453 32.5124V48.1286H26.9463V35.3577L21.9621 30.6215L18.1329 48.1286H14.5131ZM15.2241 27.3131L11.2556 26.559C10.8503 26.4813 10.5029 26.2265 10.2134 25.7947C9.92391 25.363 9.81804 24.9312 9.89578 24.4994L11.4583 16.3224C11.6485 15.2656 12.1872 14.4474 13.0745 13.8677C13.9619 13.2879 14.9339 13.0932 15.9907 13.2834L17.9155 13.6729L15.2241 27.3131ZM27.6041 10.5921C26.5209 10.5921 25.5936 10.2022 24.8222 9.42245C24.0508 8.6427 23.6651 7.71539 23.6651 6.64053C23.6651 5.55733 24.0508 4.62794 24.8222 3.85235C25.5936 3.07676 26.5209 2.68896 27.6041 2.68896C28.6873 2.68896 29.6146 3.07676 30.386 3.85235C31.1575 4.62794 31.5432 5.55733 31.5432 6.64053C31.5432 7.71539 31.1575 8.6427 30.386 9.42245C29.6146 10.2022 28.6873 10.5921 27.6041 10.5921Z" fill="#7338D3" />
</svg>
)

const icon6 = (<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M24.9998 43.8746C24.3582 43.8746 23.7427 43.7576 23.1531 43.5236C22.5636 43.2896 22.0392 42.9427 21.5799 42.483L7.60852 28.4477L7.2179 28.0571C7.09637 27.9356 6.98352 27.8054 6.87936 27.6665H11.5907L23.9684 40.0566C24.1337 40.2137 24.2947 40.3248 24.4514 40.3901C24.6081 40.4554 24.7909 40.488 24.9998 40.488C25.2087 40.488 25.3916 40.4554 25.5483 40.3901C25.705 40.3248 25.866 40.2137 26.0313 40.0566L39.9126 26.1108C40.7988 25.2246 41.4655 24.1908 41.9127 23.0096C42.36 21.8282 42.5836 20.5819 42.5836 19.2705C42.5919 16.6137 41.7378 14.3169 40.0214 12.38C38.305 10.4431 36.1656 9.47466 33.6034 9.47466C32.3982 9.47466 31.2417 9.72539 30.134 10.2268C29.0263 10.7283 28.0558 11.4283 27.2224 12.3268L25.8286 13.8372C25.7079 13.9497 25.5871 14.0448 25.4663 14.1225C25.3455 14.2003 25.19 14.2391 24.9998 14.2391C24.8096 14.2391 24.6423 14.2019 24.4979 14.1276C24.3536 14.0532 24.2314 13.9564 24.1314 13.8372L22.7251 12.3268C21.8906 11.4387 20.9177 10.7455 19.8065 10.2471C18.6952 9.74873 17.5444 9.49955 16.354 9.49955C13.9483 9.49955 11.9208 10.3584 10.2714 12.0762C8.62194 13.7939 7.67922 15.8657 7.44321 18.2915H4.08154C4.34272 14.9347 5.6184 12.0679 7.90857 9.69091C10.1987 7.31396 13.0139 6.12549 16.354 6.12549C18.0041 6.12549 19.5678 6.4512 21.0453 7.10262C22.5228 7.75401 23.8419 8.66169 25.0025 9.82565C26.1284 8.66169 27.4292 7.75401 28.9049 7.10262C30.3806 6.4512 31.9435 6.12549 33.5936 6.12549C37.0907 6.12549 40.0257 7.41854 42.3985 10.0047C44.7713 12.5908 45.9577 15.6799 45.9577 19.2719C45.9577 20.9975 45.6563 22.6478 45.0536 24.2227C44.4509 25.7977 43.5592 27.197 42.3787 28.4205L28.3683 42.483C27.9086 42.9427 27.3927 43.2896 26.8205 43.5236C26.2483 43.7576 25.6414 43.8746 24.9998 43.8746ZM24.8017 24.5415H4.13139V21.4165H33.1101C33.8479 21.4165 34.4664 21.1678 34.9656 20.6704C35.4647 20.173 35.7142 19.5567 35.7142 18.8214C35.7142 18.0862 35.4647 17.4668 34.9656 16.9634C34.4664 16.4599 33.8479 16.2081 33.1101 16.2081C32.624 16.2081 32.1639 16.3297 31.7299 16.5727C31.2958 16.8158 30.9747 17.163 30.7663 17.6144L27.7517 16.7811C28.1642 15.67 28.8566 14.7759 29.8288 14.0988C30.8011 13.4217 31.8948 13.0831 33.1101 13.0831C34.7015 13.0831 36.0543 13.6407 37.1683 14.7559C38.2823 15.8711 38.8392 17.2253 38.8392 18.8184C38.8392 20.4116 38.2823 21.7637 37.1683 22.8748C36.0543 23.9859 34.7015 24.5415 33.1101 24.5415H29.9059C30.1142 24.9317 30.2704 25.3413 30.3746 25.7701C30.4788 26.1989 30.5309 26.6574 30.5309 27.1456C30.5309 28.7371 29.9739 30.0898 28.8598 31.2038C27.7458 32.3178 26.3931 32.8748 24.8017 32.8748C23.5864 32.8748 22.4927 32.5383 21.5205 31.8654C20.5482 31.1925 19.8538 30.2969 19.4371 29.1788L22.458 28.3436C22.6663 28.795 22.9854 29.1422 23.4152 29.3852C23.8451 29.6283 24.3073 29.7498 24.8017 29.7498C25.5395 29.7498 26.158 29.5011 26.6572 29.0037C27.1563 28.5064 27.4059 27.89 27.4059 27.1548C27.4059 26.4195 27.1563 25.8002 26.6572 25.2967C26.158 24.7932 25.5395 24.5415 24.8017 24.5415Z" fill="#7338D3" />
</svg>
)

const icon7 = (<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M41.6667 29.1667V6.25L18.75 10.4167V33.3333" stroke="#7338D3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M35.4167 39.5832H37.5C39.8013 39.5832 41.6667 37.7178 41.6667 35.4165V29.1665H35.4167C33.1154 29.1665 31.25 31.0319 31.25 33.3332V35.4165C31.25 37.7178 33.1154 39.5832 35.4167 39.5832Z" stroke="#7338D3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
  <path d="M12.4997 43.7502H14.583C16.8842 43.7502 18.7497 41.8847 18.7497 39.5835V33.3335H12.4997C10.1985 33.3335 8.33301 35.1989 8.33301 37.5002V39.5835C8.33301 41.8847 10.1985 43.7502 12.4997 43.7502Z" stroke="#7338D3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>
)

const icon8 = (<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M7.45599 23.4499H14.4669C14.2155 21.7832 13.7377 20.2224 13.0334 18.7675C12.3292 17.3126 11.443 16.0469 10.3749 14.9705C9.58464 16.1858 8.92 17.4949 8.38104 18.8977C7.84208 20.3006 7.53373 21.818 7.45599 23.4499ZM35.5085 23.4499H42.5319C42.4624 21.818 42.1582 20.3006 41.6193 18.8977C41.0803 17.4949 40.4115 16.1858 39.6129 14.9705C38.4407 16.1511 37.5264 17.4428 36.8701 18.8456C36.2137 20.2485 35.7599 21.7832 35.5085 23.4499ZM10.3749 34.9898C11.5472 33.8092 12.4594 32.5262 13.1116 31.1407C13.7637 29.7552 14.2155 28.2333 14.4669 26.5749H7.44354C7.52958 28.2069 7.84208 29.7114 8.38104 31.0886C8.92 32.4658 9.58464 33.7662 10.3749 34.9898ZM39.6129 34.9898C40.4115 33.7662 41.0803 32.4658 41.6193 31.0886C42.1582 29.7114 42.4624 28.2069 42.5319 26.5749H35.5085C35.7599 28.2333 36.2137 29.7552 36.8701 31.1407C37.5264 32.5262 38.4407 33.8092 39.6129 34.9898ZM17.644 23.4499H23.4252V7.46824C21.2724 7.7196 19.2818 8.26894 17.4532 9.11626C15.6246 9.96355 13.9596 11.1164 12.4583 12.5747C13.8736 13.9983 15.0223 15.6372 15.9043 17.4915C16.7863 19.3457 17.3662 21.3319 17.644 23.4499ZM26.5502 23.4499H32.3315C32.6175 21.3319 33.2103 19.3457 34.1096 17.4915C35.009 15.6372 36.1664 13.9983 37.5817 12.5747C36.0803 11.1164 34.4046 9.96355 32.5545 9.11626C30.7044 8.26894 28.703 7.7196 26.5502 7.46824V23.4499ZM23.4252 42.5441V26.5749H17.644C17.3662 28.693 16.7863 30.6684 15.9043 32.5011C15.0223 34.3338 13.8736 35.962 12.4583 37.3856C13.9596 38.8439 15.5812 40.0054 17.323 40.8701C19.0647 41.7348 21.0988 42.2928 23.4252 42.5441ZM26.5502 42.5441C28.8766 42.2928 30.9214 41.7348 32.6847 40.8701C34.448 40.0054 36.0803 38.8439 37.5817 37.3856C36.1664 35.962 35.009 34.3338 34.1096 32.5011C33.2103 30.6684 32.6175 28.693 32.3315 26.5749H26.5502V42.5441ZM24.9877 46.1446C22.0642 46.1446 19.3165 45.5916 16.7444 44.4854C14.1723 43.3792 11.9342 41.8719 10.0302 39.9637C8.12609 38.0555 6.62095 35.8154 5.51474 33.2433C4.40856 30.6712 3.85547 27.9234 3.85547 25C3.85547 22.0765 4.40856 19.3287 5.51474 16.7566C6.62095 14.1845 8.12609 11.9444 10.0302 10.0362C11.9342 8.12798 14.1723 6.61869 16.7444 5.50835C19.3165 4.39796 22.0642 3.84277 24.9877 3.84277C27.9195 3.84277 30.6714 4.39796 33.2435 5.50835C35.8156 6.61869 38.0557 8.12798 39.9639 10.0362C41.8721 11.9444 43.3814 14.1845 44.4918 16.7566C45.6022 19.3287 46.1573 22.0765 46.1573 25C46.1573 27.9234 45.6022 30.6712 44.4918 33.2433C43.3814 35.8154 41.8721 38.0555 39.9639 39.9637C38.0557 41.8719 35.8156 43.3792 33.2435 44.4854C30.6714 45.5916 27.9195 46.1446 24.9877 46.1446Z" fill="#7338D3" />
</svg>
)


const icon9 = (<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M22.6234 37.4954C18.5411 37.4954 15.0185 36.0525 12.0557 33.1667C9.09277 30.2809 7.61133 26.854 7.61133 22.886V9.16321C7.61133 8.24081 7.95555 7.43542 8.64398 6.74701C9.33239 6.05857 10.1378 5.71436 11.0602 5.71436H39.0108C40.984 5.71436 42.6642 6.38969 44.0516 7.74035C45.4389 9.09097 46.1326 10.7464 46.1326 12.7065C46.1326 14.6666 45.4389 16.3194 44.0516 17.6648C42.6642 19.0102 40.984 19.6829 39.0108 19.6829H37.6215V22.886C37.6215 26.8636 36.1416 30.2929 33.1816 33.1739C30.2217 36.0549 26.7023 37.4954 22.6234 37.4954ZM11.1723 16.1344H34.073V9.27529H11.1723V16.1344ZM22.6225 33.9469C25.7574 33.9469 28.4496 32.8562 30.699 30.6749C32.9484 28.4935 34.073 25.8972 34.073 22.886V19.6829H11.1723V22.886C11.1723 25.9037 12.2969 28.5016 14.5462 30.6797C16.7954 32.8578 19.4875 33.9469 22.6225 33.9469ZM37.6215 16.1344H39.0108C39.9866 16.1344 40.8282 15.8042 41.5356 15.1437C42.243 14.4832 42.5966 13.6682 42.5966 12.6986C42.5966 11.729 42.243 10.9161 41.5356 10.2598C40.8282 9.60345 39.9866 9.27529 39.0108 9.27529H37.6215V16.1344ZM7.61133 44.2855V40.7246H41.2425V44.2855H7.61133Z" fill="#7338D3" />
</svg>
)

const icon10 = (<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8.19634 32.9497V1.93408H27.3698V11.5209C27.3698 12.5298 27.5896 13.4453 28.0293 14.2675C28.469 15.0896 29.1715 15.6354 30.137 15.9049L36.0519 17.4153C37.76 17.8569 39.1581 18.7856 40.2462 20.2015C41.3343 21.6175 41.8784 23.2314 41.8784 25.0434V32.9497H8.19634ZM11.7448 29.4013H38.3299V25.0381C38.3299 24.0356 38.0233 23.1518 37.41 22.3866C36.7967 21.6215 36.0204 21.1083 35.0812 20.8472L29.1395 19.2847C27.737 18.8778 26.6848 18.2539 25.9828 17.413C25.2808 16.5722 24.7449 15.592 24.3751 14.4726H19.521C19.3127 14.4726 19.1304 14.3945 18.9742 14.2382C18.8179 14.082 18.7398 13.8997 18.7398 13.6914C18.7398 13.483 18.8179 13.3007 18.9742 13.1445C19.1304 12.9882 19.3127 12.9101 19.521 12.9101H23.9006C23.8394 12.4836 23.8088 12.0755 23.8088 11.6856C23.8088 11.2959 23.8129 10.8609 23.821 10.3806H19.5239C19.3137 10.3806 19.1304 10.3025 18.9742 10.1463C18.8179 9.99002 18.7398 9.80773 18.7398 9.59939C18.7398 9.39106 18.8179 9.20877 18.9742 9.05252C19.1304 8.89627 19.3137 8.81814 19.524 8.81814H23.8213V5.48257H11.7448V29.4013ZM9.60129 48.3403C7.99973 48.3403 6.62299 47.7644 5.47108 46.6125C4.31914 45.4606 3.74316 44.0751 3.74316 42.4562C3.74316 40.8373 4.31914 39.4558 5.47108 38.3117C6.62299 37.1676 8.00841 36.5955 9.62733 36.5955C11.2463 36.5955 12.6278 37.169 13.7719 38.316C14.916 39.463 15.488 40.8517 15.488 42.4823C15.488 44.0838 14.9145 45.4606 13.7675 46.6125C12.6206 47.7644 11.2318 48.3403 9.60129 48.3403ZM9.62915 45.0784C10.3451 45.0784 10.9548 44.82 11.4583 44.3034C11.9618 43.7866 12.2135 43.1703 12.2135 42.4544C12.2135 41.7384 11.964 41.1287 11.4648 40.6252C10.9657 40.1218 10.3472 39.87 9.60936 39.87C8.90662 39.87 8.2969 40.1196 7.7802 40.6187C7.26353 41.1178 7.0052 41.7363 7.0052 42.4742C7.0052 43.1769 7.26353 43.7866 7.7802 44.3034C8.2969 44.82 8.91322 45.0784 9.62915 45.0784ZM40.3906 48.3403C38.7866 48.3403 37.4058 47.7644 36.2483 46.6125C35.0907 45.4606 34.512 44.0751 34.512 42.4562C34.512 40.8373 35.0907 39.4558 36.2483 38.3117C37.4058 37.1676 38.7953 36.5955 40.4167 36.5955C42.038 36.5955 43.4188 37.169 44.559 38.316C45.6992 39.463 46.2693 40.8517 46.2693 42.4823C46.2693 44.0838 45.6977 45.4606 44.5546 46.6125C43.4116 47.7644 42.0236 48.3403 40.3906 48.3403ZM40.4167 45.0784C41.1285 45.0784 41.7361 44.82 42.2396 44.3034C42.743 43.7866 42.9948 43.1682 42.9948 42.4481C42.9948 41.7363 42.7452 41.1287 42.2461 40.6252C41.7469 40.1218 41.1285 39.87 40.3906 39.87C39.6962 39.87 39.0885 40.1196 38.5677 40.6187C38.0469 41.1178 37.7864 41.7363 37.7864 42.4742C37.7864 43.1769 38.0469 43.7866 38.5677 44.3034C39.0885 44.82 39.7048 45.0784 40.4167 45.0784ZM25.0022 48.3403C23.3967 48.3403 22.0173 47.7644 20.8639 46.6125C19.7105 45.4606 19.1338 44.0751 19.1338 42.4562C19.1338 40.8373 19.7098 39.4558 20.8617 38.3117C22.0136 37.1676 23.401 36.5955 25.0238 36.5955C26.6467 36.5955 28.0261 37.169 29.1621 38.316C30.2981 39.463 30.8661 40.8517 30.8661 42.4823C30.8661 44.0838 30.2974 45.4606 29.16 46.6125C28.0225 47.7644 26.6366 48.3403 25.0022 48.3403ZM25.026 45.0784C25.7378 45.0784 26.3455 44.82 26.8489 44.3034C27.3524 43.7866 27.6042 43.1682 27.6042 42.4481C27.6042 41.7363 27.3546 41.1287 26.8555 40.6252C26.3563 40.1218 25.7378 39.87 25 39.87C24.3055 39.87 23.6979 40.1196 23.1771 40.6187C22.6562 41.1178 22.3958 41.7363 22.3958 42.4742C22.3958 43.1769 22.6562 43.7866 23.1771 44.3034C23.6979 44.82 24.3142 45.0784 25.026 45.0784Z" fill="#7338D3" />
</svg>
)

const icon11 = (<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4.16699 20.9375V18.8542C4.16699 15.0694 5.98991 12.0226 9.63574 9.71354C13.2816 7.40451 18.4031 6.25 25.0003 6.25C31.5975 6.25 36.7191 7.40451 40.3649 9.71354C44.0107 12.0226 45.8337 15.0694 45.8337 18.8542V20.9375H4.16699ZM7.39616 17.8125H42.6045C42.5003 15.4167 40.825 13.4115 37.5785 11.7969C34.3319 10.1823 30.1392 9.375 25.0003 9.375C19.8614 9.375 15.6514 10.1823 12.3701 11.7969C9.08887 13.4115 7.43088 15.4167 7.39616 17.8125ZM4.16699 30.1042V26.9792C5.31283 26.9792 6.31109 26.5972 7.16178 25.8333C8.01248 25.0694 9.37533 24.6875 11.2503 24.6875C13.1253 24.6875 14.3666 25.0694 14.9743 25.8333C15.5819 26.5972 16.5975 26.9792 18.0212 26.9792C19.4448 26.9792 20.4951 26.5972 21.1722 25.8333C21.8493 25.0694 23.1253 24.6875 25.0003 24.6875C26.8753 24.6875 28.1514 25.0694 28.8285 25.8333C29.5055 26.5972 30.5559 26.9792 31.9795 26.9792C33.4031 26.9792 34.4187 26.5972 35.0264 25.8333C35.634 25.0694 36.8753 24.6875 38.7503 24.6875C40.6253 24.6875 41.9882 25.0694 42.8389 25.8333C43.6896 26.5972 44.6878 26.9792 45.8337 26.9792V30.1042C43.9587 30.1042 42.6653 29.7222 41.9535 28.9583C41.2416 28.1944 40.1739 27.8125 38.7503 27.8125C37.3267 27.8125 36.3111 28.1944 35.7035 28.9583C35.0958 29.7222 33.8545 30.1042 31.9795 30.1042C30.1045 30.1042 28.8285 29.7222 28.1514 28.9583C27.4743 28.1944 26.4239 27.8125 25.0003 27.8125C23.5767 27.8125 22.5264 28.1944 21.8493 28.9583C21.1722 29.7222 19.8962 30.1042 18.0212 30.1042C16.1462 30.1042 14.9048 29.7222 14.2972 28.9583C13.6896 28.1944 12.6739 27.8125 11.2503 27.8125C9.82671 27.8125 8.76149 28.1944 8.05465 28.9583C7.34781 29.7222 6.05192 30.1042 4.16699 30.1042ZM7.29199 43.75C6.45866 43.75 5.72949 43.4375 5.10449 42.8125C4.47949 42.1875 4.16699 41.4583 4.16699 40.625V33.9583H45.8337V40.625C45.8337 41.4583 45.5212 42.1875 44.8962 42.8125C44.2712 43.4375 43.542 43.75 42.7087 43.75H7.29199ZM7.29199 40.625H42.7087V37.0833H7.29199V40.625Z" fill="#7338D3" />
</svg>
)

const icon12 = (<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M38.6185 48.1286C37.7602 48.1286 36.9041 48.0592 36.05 47.9203C35.1959 47.7814 34.3695 47.5863 33.5709 47.3349L4.00684 36.5682L4.73371 34.4395L19.7858 39.9083L23.3694 30.7677L15.1753 22.2339C14.3103 21.2813 13.9562 20.1927 14.1132 18.968C14.2703 17.7432 14.8896 16.8067 15.9713 16.1583L24.0193 11.4708C24.5303 11.1847 25.076 11.0247 25.6565 10.9907C26.237 10.9567 26.7786 11.0224 27.2813 11.1877C27.784 11.3447 28.2412 11.6121 28.653 11.9899C29.0648 12.3677 29.3574 12.8212 29.5311 13.3503L30.233 15.6522C30.8067 17.5023 31.6557 18.9836 32.78 20.0963C33.9044 21.2089 35.2742 22.0305 36.8895 22.5611L38.0082 19.2154L40.0994 19.8256L37.9686 26.3893C35.5493 25.8866 33.473 24.9802 31.7395 23.6702C30.006 22.3602 28.6498 20.562 27.6708 18.2756L20.9951 22.0969L27.416 29.6366L22.9765 41.062L30.1504 43.6583L35.0462 28.5745C35.4017 28.687 35.7482 28.7887 36.0856 28.8796C36.423 28.9706 36.7605 29.0508 37.0979 29.1203L32.2145 44.4373L34.3499 45.1789C35.0013 45.422 35.6805 45.6043 36.3874 45.7258C37.0943 45.8473 37.838 45.9081 38.6185 45.9081C39.6254 45.9081 40.608 45.8105 41.5663 45.6154C42.5245 45.4203 43.4633 45.0929 44.3827 44.6332L46.0449 46.3078C44.8658 46.9231 43.6653 47.3804 42.4432 47.6797C41.2211 47.979 39.9462 48.1286 38.6185 48.1286ZM35.1028 12.8125C34.0197 12.8125 33.0924 12.4247 32.3209 11.6491C31.5495 10.8735 31.1638 9.9483 31.1638 8.87344C31.1638 7.79024 31.5495 6.86085 32.3209 6.08526C33.0924 5.30967 34.0197 4.92188 35.1028 4.92188C36.1777 4.92188 37.103 5.30967 37.8786 6.08526C38.6541 6.86085 39.0419 7.79024 39.0419 8.87344C39.0419 9.9483 38.6541 10.8735 37.8786 11.6491C37.103 12.4247 36.1777 12.8125 35.1028 12.8125Z" fill="#7338D3" />
</svg>
)

const icon13 = (<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4.04199 46.0451V36.3146L22.7988 10.9409L19.2718 6.19117L22.1726 4.11914L24.9999 7.97555L27.8667 4.11914L30.7279 6.19117L27.253 10.9409L45.9577 36.3146V46.0451H4.04199ZM24.9999 13.9584L7.60288 37.5057V42.4966H14.7315L24.9999 28.116L35.2682 42.4966H42.3968V37.5057L24.9999 13.9584ZM19.1213 42.4966H30.8785L24.9999 34.2154L19.1213 42.4966Z" fill="#7338D3" />
</svg>
)


function IconsOverlay() {
  const icons = [icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9, icon11,  icon13, icon12, icon10]

  const container = useRef<HTMLDivElement>(null);

  const generateIcons = (): ReactNode[] => {
    return icons.map((icon, i) => {
      return <div id={`icon-${i}`} className={`type-${i % 3}`}>
        {icon}
      </div>
    })
  }

  const checkScroll = useCallback(() => {
    const type0 = document.querySelectorAll('#iconOverlayContainer .type-0')
    const type1 = document.querySelectorAll('#iconOverlayContainer .type-1')
    const type2 = document.querySelectorAll('#iconOverlayContainer .type-2')

    const translateValue = window.scrollY / 140;
    type0.forEach(node => {
      (node as HTMLElement).style!.transform = `translateY(${translateValue}px)`;
    })

    type1.forEach(node => {
      (node as HTMLElement).style!.transform = `translateY(-${translateValue * 1.3}px)`;
    })

    type2.forEach(node => {
      (node as HTMLElement).style!.transform = `translateY(${translateValue * 0.5}px)`;
    })
  }, [])

  useEffect(() => {
    checkScroll();

    document.addEventListener('scroll', checkScroll);

    return () => { document.removeEventListener('scroll', checkScroll) }
  }, [checkScroll])

  const nodes: ReactNode[] = generateIcons();

  return (<div id='iconOverlayContainer' ref={container}>
    {nodes}
  </div>)
}

export default IconsOverlay;
