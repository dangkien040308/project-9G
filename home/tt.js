
var elements = document.querySelectorAll('.elements');

let options = {
    rootMargin : "10px",
    threshold : 0.4
};

let observer = new IntersectionObserver( entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    },options);
})

elements.forEach( ele => {
     observer.observe(ele);
})

