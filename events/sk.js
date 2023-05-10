
let observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
      })
});

var eles = document.querySelectorAll('.elements') ;
eles.forEach(ele => {
    observer.observe(ele);
})