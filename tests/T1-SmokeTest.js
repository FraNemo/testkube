import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  scenarios: {
    User_Journey1: {
      // name of the executor to use
      executor: 'constant-vus',

      //name of the function to execute
      exec: 'User_Journey1',

      // executor-specific configuration
      vus: 1,
      duration: "60s"
    },
    User_Journey2: {
      // name of the executor to use
      executor: 'constant-vus',

      //name of the function to execute
      exec: 'User_Journey2',

      // executor-specific configuration
      vus: 1,
      duration: "60s"
    },
    User_Journey3: {
      // name of the executor to use
      executor: 'constant-vus',

      //name of the function to execute
      exec: 'User_Journey3',

      // executor-specific configuration
      vus: 1,
      duration: "60s"
    },
    User_Journey4: {
      // name of the executor to use
      executor: 'constant-vus',

      //name of the function to execute
      exec: 'User_Journey4',

      // executor-specific configuration
      vus: 1,
      duration: "60s"
    },
    User_Journey5: {
      // name of the executor to use
      executor: 'constant-vus',

      //name of the function to execute
      exec: 'User_Journey5',

      // executor-specific configuration
      vus: 1,
      duration: "60s"
    },
  },
};

const products = [
  "OLJCESPC7Z",
  "L9ECAV7KIM",
  "66VCHSJNUP",
  "1YMWWN1N4O",
  "9SIQT8TOJO",
  "6E92ZMYYFZ",
  "2ZYFJ3GM2N",
  "0PUK6V6EV0",
  "LS4PSXUNUM"
];

const BASE_URL = "http://frontend-external.default.svc.cluster.local:80"; 

export function User_Journey1() {

  //Home page access
  let resPage = http.get(
    BASE_URL,
    {tags: {what: "home"}
  });
  check(resPage, {
    "UJ1 - status was 200 - HOME": (r) => r.status == 200,
  });
  sleep(1);

  //Product selection and visit
  let num = Math.floor(Math.random() * 4); 
  let NAV_URL = BASE_URL + "/product/" + products[num]; 
  resPage = http.get(NAV_URL);
  check(resPage, {
    "UJ1 - status was 200 - PRODUCT": (r) => r.status == 200,
  });
  sleep(1);

  //Recommended product selection and visit
  num = Math.floor(Math.random() * 4); 
  NAV_URL = BASE_URL + "/product/" + products[num]; 
  resPage = http.get(NAV_URL);
  check(resPage, {
    "UJ1 - status was 200 - RECOMMENDED PRODUCT": (r) => r.status == 200,
  });
  sleep(1);

  //Visit cart after adding product
  NAV_URL = BASE_URL + "/cart"; 
  resPage = http.post(NAV_URL, {
    product_id: products[num],
    quantity:	"1"
    });
  check(resPage, {
    "UJ1 - status was 200 - CART": (r) => r.status == 200,
  });
  sleep(1);

  //Checkout
  NAV_URL = BASE_URL + "/cart/checkout"; 
  resPage = http.post(NAV_URL, {
    email: "someone@example.com",
    street_address:	"1600+Amphitheatre+Parkway",
    zip_code: "94043", 
    city: "Mountain+View",
    state: "CA", 
    country:	"United+States",
    credit_card_number:	"4432-8015-6152-0454",
    credit_card_expiration_month:	"1",
    credit_card_expiration_year:	"2025",
    credit_card_cvv:	"672"
    });
  check(resPage, {
    "UJ1 - status was 200 - CHECKOUT": (r) => r.status == 200,
  });
  sleep(1);
}

export function User_Journey2() {

  //Home page access
  let resPage = http.get(BASE_URL);
  check(resPage, {
    "UJ2 - status was 200 - HOME": (r) => r.status == 200,
  });
  sleep(1);

  //Visit cart
  let NAV_URL = BASE_URL + "/cart"; 
  resPage = http.get(NAV_URL);
  check(resPage, {
    "UJ2 - status was 200 - CART": (r) => r.status == 200,
  });
  sleep(1);

  //Home page access
  resPage = http.get(BASE_URL);
  check(resPage, {
    "UJ2 - status was 200 - HOME": (r) => r.status == 200,
  });
  sleep(1);

  //Product selection and visit
  let num = Math.floor(Math.random() * 4); 
  NAV_URL = BASE_URL + "/product/" + products[num]; 
  resPage = http.get(NAV_URL);
  check(resPage, {
    "UJ2 - status was 200 - PRODUCT": (r) => r.status == 200,
  });
  sleep(1);

  //Visit cart after adding product
  NAV_URL = BASE_URL + "/cart"; 
  resPage = http.post(NAV_URL, {
    product_id: products[num],
    quantity:	"1"
    });
  check(resPage, {
    "UJ2 - status was 200 - CART": (r) => r.status == 200,
  });
  sleep(1);
}

export function User_Journey3() {

  //Home page access
  let resPage = http.get(BASE_URL);
  check(resPage, {
    "UJ3 - status was 200 - HOME": (r) => r.status == 200,
  });
  sleep(1);

  //Change of currency
  let NAV_URL = BASE_URL + "/setCurrency";
  resPage = http.post(NAV_URL, {
    currency_code: "GBP"
  });
  check(resPage, {
    "UJ3 - status was 200 - CURRENCY HOME": (r) => r.status == 200,
  });
  sleep(1);

  //Product selection and visit
  let num = Math.floor(Math.random() * 4); 
  NAV_URL = BASE_URL + "/product/" + products[num];  
  resPage = http.get(NAV_URL);
  check(resPage, {
    "UJ3 - status was 200 - PRODUCT": (r) => r.status == 200,
  });
  sleep(1);

  //Visit cart after adding product
  NAV_URL = BASE_URL + "/cart"; 
  resPage = http.post(NAV_URL, {
    product_id: products[num],
    quantity:	"1"
    });
  check(resPage, {
    "UJ3 - status was 200 - CART": (r) => r.status == 200,
  });
  sleep(1);
}

export function User_Journey4() {

  //Home page access
  let resPage = http.get(BASE_URL);
  check(resPage, {
    "UJ4 - status was 200 - HOME": (r) => r.status == 200,
  });
  sleep(1);

  //Product selection and visit
  let num = Math.floor(Math.random() * 4); 
  let NAV_URL = BASE_URL + "/product/" + products[num]; 
  resPage = http.get(NAV_URL);
  check(resPage, {
    "UJ4 - status was 200 - PRODUCT": (r) => r.status == 200,
  });
  sleep(1);

  //Visit cart after adding product
  NAV_URL = BASE_URL + "/cart"; 
  resPage = http.post(NAV_URL, {
    product_id: products[num],
    quantity:	"1"
    });
  check(resPage, {
    "UJ4 - status was 200 - CART": (r) => r.status == 200,
  });
  sleep(1);
}

export function User_Journey5() {

  //Home page access
  let resPage = http.get(BASE_URL);
  check(resPage, {
    "UJ5 - status was 200 - HOME": (r) => r.status == 200,
  });
  sleep(1);

  //Visit cart
  let NAV_URL = BASE_URL + "/cart"; 
  resPage = http.get(NAV_URL);
  check(resPage, {
    "UJ5 - status was 200 - CART": (r) => r.status == 200,
  });
  sleep(1);

  //Checkout
  NAV_URL = BASE_URL + "/cart/checkout"; 
  resPage = http.post(NAV_URL, {
    email: "someone@example.com",
    street_address:	"1600+Amphitheatre+Parkway",
    zip_code: "94043", 
    city: "Mountain+View",
    state: "CA", 
    country:	"United+States",
    credit_card_number:	"4432-8015-6152-0454",
    credit_card_expiration_month:	"1",
    credit_card_expiration_year:	"2025",
    credit_card_cvv:	"672"
    });
  check(resPage, {
    "UJ5 - status was 200 - CHECKOUT": (r) => r.status == 200,
  });
  sleep(1);
}