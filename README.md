# Amazon Payment Backend


## Opening/Serving the backend locally:

1. **NodeJS:** <br>
   Please install [NodeJS >= 10.15.0](https://nodejs.org/en/download/). Which automatically installs NPM. If you already have them, you're good to go. 

Once you have the [Prerequisites](#prerequisites) covered:
1. Clone this repository from GitHub onto your local computer.

    ```sh
    $ git clone https://github.com/Ary-an/amazon-payment-backend
    ```
    
1. Navigate into the project folder and install all of its necessary dependencies with npm.

    ```sh
    $ cd amazon-payment-backend
    $ npm install
    ```

1. Create `.env` file and added following credentials
    ```sh
    STRIPE_PAYMENT_KEY = (Your stripe Secret key)
    ```

1. Once that's done, You are ready to start server locally 😃 <br>
   Now you can run -

   ```sh
   $ nodemon index.js
   ```
   
   to start the local development server.
