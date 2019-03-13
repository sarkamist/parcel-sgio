/* DEPENDENCIES */
import bsn from 'bootstrap.native/dist/bootstrap-native-v4';
import _  from 'underscore';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/js/all';

/* IMPORTS */
const manifest = require('../projects/config.json');

function init() {
    _.each(manifest.projects, function(project) {
        /* TAB PANE CREATION */
        let tab_panes = document.getElementById('tab-panes');

        let tab_pane = document.createElement('div');

        tab_pane.setAttribute('id', 'p-' + project.id);

        tab_pane.classList.add('tab-pane');
        tab_pane.classList.add('fade');
        tab_pane.setAttribute('role', "tabpanel");
        tab_pane.setAttribute('aria-labelledby', "p-" + project.id + '-tab');

        //CONTAINER
        let container = document.createElement('div');

        container.classList.add('container');
        container.classList.add('mt-2');

        tab_pane.appendChild(container);
        //JUMBOTRON
        let jumbotron = document.createElement('div');

        jumbotron.classList.add('jumbotron');

        container.appendChild(jumbotron);
        //TITLE
        let title = document.createElement('h1');

        title.classList.add('display-4');
        title.innerHTML = project.name;

        jumbotron.appendChild(title);

        //DESCRIPTION
        let description = document.createElement('p');

        description.classList.add('lead');
        description.classList.add('lead');
        description.innerHTML = project.description;

        jumbotron.appendChild(description);

        //BADGE CONTAINER
        let badge_container = document.createElement('h4');

        badge_container.classList.add('text-center');

        jumbotron.appendChild(badge_container);

        //BADGES
        _.each(project.tags, function(tag) {
            let badge = document.createElement('span');

            badge.classList.add('badge');
            badge.classList.add('badge-dark');
            badge.classList.add('m-1');
            if (manifest.technologies[tag]){
                let conf = manifest.technologies[tag];
                badge.style.backgroundColor = conf.color;
                badge.style.color = conf.font_color;
                badge.innerHTML = conf.fa_icon + tag;
            } else {
                badge.innerHTML = tag;
            }

            badge_container.appendChild(badge);
        });

        //SEPARATOR
        let separator = document.createElement('hr');

        separator.classList.add('my-4');

        jumbotron.appendChild(separator);
        //ACTION PANE
        let actions = document.createElement('p');

        actions.classList.add('text-center');

        jumbotron.appendChild(actions);

        //ACTIONS
        let link = document.createElement('a');
        link.setAttribute('id', 'p-' + project.id + '-launch-button');

        link.classList.add('btn');
        link.classList.add('btn-dark');
        link.classList.add('f-inconsolata');
        link.classList.add('mt-1');
        link.setAttribute('href', project.url);
        link.setAttribute('role', 'button');
        link.innerHTML = '<i class="fas fa-play"></i>&nbsp;Launch';

        actions.appendChild(link);

        tab_panes.appendChild(tab_pane);

        /* DROPDOWN CREATION */
        let projects = document.getElementById('projects');

        let dropdown_item = document.createElement('a');
        dropdown_item.setAttribute('id', 'p-' + project.id + '-tab');

        dropdown_item.classList.add('dropdown-item');
        dropdown_item.setAttribute('href', '#' + tab_pane.getAttribute('id'));
        dropdown_item.setAttribute('data-toggle', 'tab');
        dropdown_item.setAttribute('data-height', 'true');
        dropdown_item.setAttribute('aria-controls', tab_pane.getAttribute('id'));
        dropdown_item.setAttribute('aria-selected', 'false');
        dropdown_item.setAttribute('role', 'tab');
        dropdown_item.innerHTML = project.fa_icon + project.shortname;

        projects.appendChild(dropdown_item);
        new bsn.Tab(dropdown_item);

        /* HOME QUICK BUTTON CREATION */
        let quick_buttons = document.getElementById('quick-buttons');

        let button = document.createElement('a');
        button.setAttribute('id', 'home-' + project.id + '-button');

        button.classList.add('btn');
        button.classList.add('btn-lg');
        button.classList.add('btn-dark');
        button.classList.add('f-inconsolata');
        button.classList.add('m-1');
        button.setAttribute('href', '#' + dropdown_item.getAttribute('id'));
        button.setAttribute('role', 'button');
        button.innerHTML = project.fa_icon + project.shortname;

        quick_buttons.appendChild(button);
    });
    _.each(document.querySelectorAll('[role="button"]'), function(element) {
        let href = element.getAttribute('href');
        if (href && href.startsWith('#') && href.length > 1) {
            let target = document.getElementById(href.substr(1));
            if (target && target.Tab) {
                element.Tab = target.Tab;
                element.addEventListener('click', function(e) {
                    e.preventDefault();
                    this.Tab.show();
                });
            }
        }
    });
}

if (document.readyState !== 'complete') {
    document.addEventListener('DOMContentLoaded', init());
} else {
    init();
}