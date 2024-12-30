
window.addEventListener("scroll", () => {
    const cabeca = document.getElementById("header")
    if (window.scrollY > 0){
        cabeca.setAttribute("class","headerScroll")
    }else{
        cabeca.setAttribute("class"," ")
    }
    
});

const observador = new IntersectionObserver((entries) =>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
        entry.target.classList.add('show')
    } else{
        entry.target.classList.remove('show')
    }
      
  })
})
const elementos = document.querySelectorAll('.hidden')
elementos.forEach((el) => observador.observe(el))


let sections = document.querySelectorAll('section');
let linkNav = document.querySelectorAll('header nav ul li a');

window.onscroll = () => {
    sections.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        // Verifica se o scroll está dentro do intervalo do section
        if (top >= offset && top < offset + height) {
            linkNav.forEach((links) => {
                links.classList.remove('active');
            });
            document.querySelector('header nav ul li a [href*="' + id + '"]').classList.add('active');
        }
    });
};


// let sections = document.querySelectorAll('section')
// let linkNav = document.querySelectorAll('header nav ul li a')
// window.scroll = () =>{
//     sections.forEach((sec)=>{
//         let top = window.screenY
//         let offset = sec.offsetTop
//         let height = sec.offsetHeight
//         let id = sec.getAttribute('id')

//         if(top >= offset && offset + height){
//             linkNav.forEach(links =>{
//                 links.classList.remove('active')
//                 document.querySelector('header nav ul li a[href*=' + id +']').classList.add('active')
//             })
//         }
//     })
// }