const lineUp = document.querySelectorAll('.lineup');
const percent = document.querySelectorAll('.percent');

percent.forEach((elem, i) => {
    lineUp[i].style.width = elem.innerHTML;
});