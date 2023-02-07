import React from 'react';

const Social = () => {
    return (
        <div className='home__social'>

            <a href="https://github.com/sjain-28" title='GitHub' className="home__social-icon github" target="_blank">
                <i className="uil uil-github-alt"></i>
            </a>
            <a href="https://www.linkedin.com/in/shubhamjaindev/" title='LinkedIn' className="home__social-icon linkedin" target="_blank">
                <i className="uil uil-linkedin-alt"></i>
            </a>
            <a href="https://leetcode.com/shubhamjain_28/" title="Leetcode" className="home__social-icon leetcode" target="_blank">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" role="img" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><title></title><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"></path></svg>
                {/* <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEnUlEQVR4nNWZeYhXVRTHP2WpNWMzhmSWVGZJtmAFLdBCghUtSKaZabZYTqUFhbiVtkDRZkVFoUUxRUEoKE3ETCkUlUphSVGaUdji0p6paVM6vzjxfXC4vPm995u5v5/PL9w/3j13Offec+79nvOgdjgfeBf4CfgIuIq9COOAXUApKFPZCzAG+FcKPwDUA9cBHcCfwH4UGKOAf6T8fYFsreqPo6AYCbS7nfc4CvhLp9BAAXEhsFPKPx7I+gNrJGum4Mo/FsgOAb6Q7GOgkYJhBLBDCj4J7ONkjVLaZJ8B/SgYzga2ScHnA+UbdPebbB0wgILhHGC7FFwQKN8D+ECy34DDKRjOcjv/ArBvIK93i7OyChhOQXCmHiNT7KUU5f21OQtYr7a7gZnsYZwGbJFCr8hUsrA/MMe9zE8F5lYznAr8LiVey6m8x6Xuqp1HjXGynNEmX5TCZYwazAVeBRYCTwAXp+z0JWVe6qrhJOAXTbpEJpHA7P9h2XcppawEBpbhSvdUW/njxeVtshagp5PZ7j4nWbvegSZgvEjcd5KZEw8Kxh3rqLY5elVgZrFZk7wJ9AqUf1oyI2jnpfS3V3i52thiBgfyCW4Ro2MrPwTYqMHfAnoH8nmS7RSV6Ax9gPfU9gfg2EB+s2RfxVR+sCazgZcBBwTy+53ZmKNmoQ54R31sU8JYIKHY4TxdwqHOdm3SAwP5HMnMCS+rYFwbZ6n6bgZOUP25rq7b6On4y/vaOY/pku2SE1YK2+E25zfL3ZU6O8YCEgW/TaG9tzk6MLEbc5gvPSuTScZ7NEaMbLv9swYNnbJJE1q5kTjoL0LYN9J4/+drSjpWj9HapY4c6ZA6KRSj9Kl0Ac1awO3BPf6H6s28OsMoBSylyGU9cG3eBXyuTsZ5EkxR3dtl+g139rxdZC9G2eoWckWeBSRcxzvvyymnEqJVbe6uAkW+xQVDmUiuM0/UWlRnWbbO8LXaHE181Gtsi/wy8aMa2+2Q4EXVzSjTry3mPR7gBo39CTnwqRqf7uomOUrcmXmMcD6wNaIPbHE+kCujPT+F2ta5k3mwTN+xLu6NWTYCk8mJy9VpdbDbF7hYNiv4OCjiO9BAhejlGGhI0q50vH12xEBpJHAMETHFMcMwEXW1CxundWMOe2EXBabSnBJvdAk9FLwkSdiQp1zvFmHkrlKYWaxw2boW92A9RCQc7GjBhym26ImdRVN50ajxwhj5FNX9GvMhHOgeqBUpxOpWtwi7avNsyiqN9w1wZJDViBqRJTjCXY1pwc0dOeODfnqIkrg3TLHMksy4WHQMyggvZ7oIzZw8xAD3QH4JHBbIp2rnd+u6rgoswN8gJZamHPNcyTqUerlLDv6M7LqkvzMWa3tMdmZoflVVWIplk5RpDfJDyU76VLovrSnh6TUuSOrKbdYlDHW04o0gQ5f8B2tS5nmBshdnZPz8nkaNcaKLm19P8YksTHS05E72EIY5216t7yz01cmUapXQzeMTyR/3Dp3GJGXcGuQjdl1epL+WSVzdLo5fCJiij+gRykON24J4m6LAIribgMU6Fdvtv4HvldS9V392ouI/RQnR/HhH8NkAAAAASUVORK5CYII="></img> */}
            </a>
        </div>
    );
}

export default Social;
