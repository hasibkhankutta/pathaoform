$(document).ready(function() {
  $("#product-form").submit(function(event) {
    event.preventDefault();
    var productName = $("#product-name").val();
    var customerName = $("#customer-name").val();
    var phoneNumber = $("#phone-number").val();
    var emailAddress = $("#email-address").val();
    $.ajax({
      url: "https://script.google.com/macros/s/AKfycbys1tmU9w2tMm_aUISu6NXWz1o-Z-3i5FZIgT9a3Va7VwwJtYN3dCY5yb0deW-Vr8xL0Q/exec",
      type: "post",
      data: {
        "product-name": productName,
        "customer-name": customerName,
        "phone-number": phoneNumber,
        "email-address": emailAddress
      },
      success: function() {
        alert("
