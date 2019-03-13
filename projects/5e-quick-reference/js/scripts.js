import jquery from 'jquery'; window.jQuery = window.$ = jquery;
import md5 from 'md5';
import Base64 from 'js-base64';
import '@fortawesome/fontawesome-free/js/all';

function add_quickref_item(parent, data, type) {
    let icon = data.icon || "perspective-dice-six-faces-one";
    let subtitle = data.subtitle || "";
    let title = data.title || "[no title]";
    if (data.locked && !/^#/.test(data.locked)){
        title += '&ensp;<i class="fas fa-lock"></i>';
    } else if (/^#/.test(data.locked)){
        title += '&ensp;<i class="fas fa-unlock-alt"></i>';
    }

    let item = document.createElement("div");
    item.className += "item itemsize";
    item.id = data.title.replace(/ /g, "-").toLowerCase();
    item.innerHTML =
    '\
    <div class="item-icon iconsize icon-' + icon + '"></div>\
    <div class="item-text-container text">\
        <div class="item-title">' + title + '</div>\
        <div class="item-desc">' + subtitle + '</div>\
    </div>\
    ';

    let style = window.getComputedStyle(parent.parentNode.parentNode);
    let color = style.backgroundColor;

    item.onclick = function () {
        show_modal(data, color, type);
    };

    parent.appendChild(item);

    let href = window.location.href;
    if(href.indexOf('#') !== -1) {
        let anchor = window.location.href.substring(href.indexOf('#') + 1, href.length);
        console.log("Anchor for: " + anchor.charAt(0).toUpperCase() + anchor.slice(1).replace(/-/g, " "));
        if (item.id === anchor) item.click();
    }
}

function show_modal(data, color, type, check) {
    if (check === undefined) check = true;
    let title = data.title || "[no title]";
    let bullets = data.bullets || [];
    if (check && data.locked && !/^#/.test(data.locked)){
        show_password(data, color, type);
        return;
    } else if (data.locked){
        title += '&ensp;<i class="fas fa-unlock-alt"></i>';
    }
    let subtitle = data.description || data.subtitle || "";
    let reference = data.reference || "";
    type = type || "";
    color = color || "black";

    $("body").addClass("modal-open");
    $("#modal").addClass("modal-visible");
    $("#modal-backdrop").css("height", window.innerHeight + "px");
    $("#modal-container").css("background-color", color).css("border-color", color);
    $("#modal-title").html(title).append("<span class=\"float-right\">" + type + "</span>");
    $("#modal-subtitle").text(subtitle);
    $("#modal-reference").text(reference);

    let bullets_html = bullets.map(function(item){
        let value = (data.locked)?Base64.decode(item):item;
        return "<p class=\"fonstsize\">" + value + "</p>";
    }).join("\n<hr>\n");
    $("#modal-bullets")
        .html(bullets_html)
        .find("a")
        .addClass('reference')
        .click(function (e){
            e.preventDefault();
            let item = $("#" + $(this).attr("href"));
            hide_modal();
            setTimeout(function(){
                item.click();
            }, 0);
        });
}

function show_password(data, color, type) {
    color = color || "black";

    $("body").addClass("modal-open");
    $("#password").addClass("modal-visible");
    $("#password-backdrop").css("height", window.innerHeight + "px");
    $("#password-container").css("background-color", color).css("border-color", color);
    $("#password-cancel").css("color", color);
    let password_field = $("#password-field");
    password_field.focus(function() {
        password_field.css('border', color).css('box-shadow', '0px 0px 4px ' + color);
    });
    password_field.blur(function() {
        password_field.css('border', '').css('box-shadow', 'none');
    });
    password_field.on('keyup', function(e){
        if (e.key === "Enter"){
            $("#password-button").focus();
            validate_password(data, color, type);
        }
    });
    password_field.focus();
    let password_button = $("#password-button");
    password_button.css("background-color", color).css("color", "white").css("border-color", color);
    password_button.click(function(){
        validate_password(data, color, type);
    });
}

function validate_password(data, color, type) {
    let input_field = $("#password-field");
    if (md5(input_field.val()) === data.locked){
        hide_password();
        show_modal(data, color, type, false);
    } else {
        let password_button = $("#password-button");
        input_field.css('color', '#a94442').css('border', '1px solid #a94442').css('box-shadow', '0 0 6px #a94442');
        password_button.css('background-color', '#f2dede').css('color', '#a94442').css('border-color', '#ebcccc');
        password_button.html('<i class="fas fa-ban"></i>');
        setTimeout(function(){
            password_button.css('background-color', color).css('color', 'white').css('border-color', color);
            password_button.html('Unlock');
            input_field.removeAttr('style');
            input_field.val('').focus();
        }, 750);
    }
}

function hide_modal() {
    $("body").removeClass("modal-open");
    $("#modal").removeClass("modal-visible");
}

function hide_password() {
    $("body").removeClass("modal-open");
    $("#password").removeClass("modal-visible");
    $("#password-field").off().val('');
    $("#password-button").off().removeAttr('style');
}

function fill_section(data, parentname, type) {
    let parent = document.getElementById(parentname);
    data.forEach(function (item) {
        add_quickref_item(parent, item, type);
    });
}

function init() {
    console.log('[STATUS] scripts.js initialized!');

    let modal = document.getElementById("modal");
    modal.onclick = hide_modal;

    let password_cancel = document.getElementById("password-cancel");
    password_cancel.onclick = hide_password;
}

function load_data() {
    import('./data/data_adventuring.js').then(function(){
        fill_section(data_adventuring_rests, "adventuring-rests", "Adventuring");
        fill_section(data_traveling, "traveling", "Traveling");
    });
    import('./data/data_movement.js').then(function(){
        fill_section(data_movement, "basic-movement", "Move");
    });
    import('./data/data_action.js').then(function(){
        fill_section(data_action, "basic-actions", "Action");
    });
    import('./data/data_bonusaction.js').then(function(){
        fill_section(data_bonusaction, "basic-bonus-actions", "Bonus action");
    });
    import('./data/data_reaction.js').then(function(){
        fill_section(data_reaction, "basic-reactions", "Reaction");
    });
    import('./data/data_condition.js').then(function(){
        fill_section(data_condition, "basic-conditions", "Condition");
        fill_section(data_physiological_needs, "physiological-conditions", "Physiological");
        fill_section(data_modifiers, "modifiers", "Modifiers");
        fill_section(data_diseases, "diseases", "Diseases");
        fill_section(data_curses, "curses", "Curses");
    });
    import('./data/data_environment.js').then(function(){
        fill_section(data_environment_obscurance, "environment-obscurance", "Environment");
        fill_section(data_environment_light, "environment-light", "Environment");
        fill_section(data_environment_vision, "environment-vision", "Environment");
        fill_section(data_environment_cover, "environment-cover", "Environment");
        fill_section(data_environment_hazards, "environment-hazards", "Environment");
    });

    init();
}

$(window).on("load", load_data);