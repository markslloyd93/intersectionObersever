let changeNav = (entries, observer) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting && entry.intersectionRatio >= 0.45){
            //remove the old active class
            document.querySelector('.active').classList.remove('active');

            //get id
            let id = entry.target.getAttribute('id');

            //apply highlighting to active
            document.querySelector('[href="#${id}"]').classList.add('active');
        }
    });
}

//init the observer
let options = {
    threshold: 0.45
  };

let observer = new IntersectionObserver(changeNav, options);

//target each section
let section = document.querySelectorAll('section');
section.forEach((section) =>{
    observer.observe(section);
});