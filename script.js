let projectIndex = 1;
showProjects(projectIndex);

function plusProjects(p) {
    showProjects(projectIndex += p);
}

function currentProject(p) {
    showProjects(projectIndex = p);
}

function showProjects(p) {
    let i;
    let projects = document.getElementsByClassName('myProjects');
    let dots = document.getElementsByClassName('dot');
    if (p > projects.length) {projectIndex = 1}
    if (p < 1) {projectIndex = projects.length}
    for (i = 0; i < projects.length; i++) {
        projects[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }
    projects[projectIndex - 1].style.display = 'flex';
    dots[projectIndex - 1].className += ' active';
}

function toggleNav() {
    let nv = document.getElementById('navDisplay');
    let imgNav = document.getElementById('navToggleImg');

    if (nv.style.display === 'flex') {
        (nv.style.display = 'none') 
    } else {
        nv.style.display = 'flex';
    }

    if (nv.style.display === 'flex') {
        (imgNav.style.opacity = 1)
    } else {
        imgNav.style.opacity = 0.5;
    }
}