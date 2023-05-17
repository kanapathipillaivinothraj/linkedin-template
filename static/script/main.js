$(function () {
  $("#navbar").load("./include/navbar.html");
  // $("#sidebar").load("./include/sidebar.html");
  // $("#post").load("./include/post.html");
  // $("#poster").load("./include/poster.html");
  // $("#post").load("./include/post.html");
});
// 
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))