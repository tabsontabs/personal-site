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
        dots[i].class = dots[i].className.replace('active', '');
    }
    projects[projectIndex - 1].style.display = 'flex';
    dots[projectIndex - 1].class += 'active';
}