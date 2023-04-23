// Scroll to top and success message text for form
const scrollToTopBtn = document.querySelector('.scroll-to-top')
const rootElement = document.documentElement
const successMessage = document.querySelector('.success-message')
const form = document.getElementById('contact-form')
// Show the back to top button if the window has been scrolled 20%, otherwise hide it
handleScroll = () => {
  const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
  rootElement.scrollTop / scrollTotal > 0.2
    ? scrollToTopBtn.classList.add('show')
    : scrollToTopBtn.classList.remove('show')
}
// Function to scroll  to the top
scrollToTop = () => {
  rootElement.scrollTo({
    top: 0,
  })
}
// Display the success message, and reset the form
handleSubmit = () => {
  successMessage.style.opacity = '1'
  form.reset()
}
// Call the function when the scroll to top button is clicked
scrollToTopBtn.onclick = () => scrollToTop()
// Call the function when the page is scrolled
document.onscroll = () => handleScroll()
// Call the function when the form has been submitted
form.onsubmit = () => handleSubmit()
// Hide the form success message after 5 seconds
form.onreset = () => {
  setTimeout(() => {
    successMessage.style.opacity = '0'
  }, 5000)
}
