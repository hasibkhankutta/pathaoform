<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="style.css">
  </head>
  <body>
    <h1>Product Form</h1>
    <form id="product-form">
      <label for="product-name">Product Name:</label>
      <input type="text" id="product-name" name="product-name" required>
      <br><br>
      <label for="customer-name">Customer Name:</label>
      <input type="text" id="customer-name" name="customer-name" required>
      <br><br>
      <label for="phone-number">Phone Number:</label>
      <input type="tel" id="phone-number" name="phone-number" required>
      <br><br>
      <label for="email-address">Email Address:</label>
      <input type="email" id="email-address" name="email-address" required>
      <br><br>
      <input type="submit" value="Submit">
    </form>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="script.js"></script>
  </body>
</html>
