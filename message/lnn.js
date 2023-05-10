var txt = document.querySelectorAll('.text');
var infor = document.querySelectorAll('.grade-infor');

var options = {
    rootMargin : "10px",
    threshold : 1
}
let observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                 entry.target.classList.add('showText');
            }
        },options)
  })

  let observer2 = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                 entry.target.classList.add('showInfor');
            }
        },options)
  })

txt.forEach(ele => {
    observer.observe(ele);
})
infor.forEach(ele => {
    observer2.observe(ele);
})