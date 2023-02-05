$(document).ready(function() {
  $("#product-form").submit(function(event) {
    event.preventDefault();
    var productName = $("#product-name").val();
    var customerName = $("#customer-name").val();
    var phoneNumber = $("#phone-number").val();
    var emailAddress = $("#email-address").val();
    $.ajax({
      url: "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec",
      type: "post",
      data: {
        "product-name": productName,
        "customer-name": customerName,
        "phone-number": phoneNumber,
        "email-address": emailAddress
      },
      success: function() {
        alert("
