var enable_items_with;
(function($){
    'use strict';

    // Send item-selected or item-deselected to its group when an input changes.
    (function(){
        var itemKeys = $('input[name="item-key"]');

        var sendSelectEvents = function(evt) {
            // Alert the deselected items firet, and then the checked ones.
            var checked = [];
            for(var itemKey of itemKeys) {
                if (itemKey.checked) {
                    checked.push(itemKey);
                }
                else {
                    $(itemKey).trigger('item-deselected');
                }
            }
            for (var itemKey of checked) {
                $(itemKey).trigger('item-selected');
            }
        };

        itemKeys.on('change', sendSelectEvents);
    })();

    // When a contribution is selected, focus the price input.
    $('input').on('item-selected', function(evt) {
        var check = evt.target;
        var priceId = 'price_' + check.value;
        var contribPrice = document.getElementById(priceId);
        if (contribPrice) {
            contribPrice.focus();
        }
    });

    // Disable a form's submit buttons when the form is submitted.
    $('form').each(
        function(_, form) {
            $(this).submit(
                function() {
                    $(this).find('button[type=submit]').each(
                        function() {
                            this.disabled = true;
                        }
                    );
                }
            );
        }
    );

    // Required elements get error messages on blur if they are empty.
    (function(){
        // Add a floating messages next to the given element.
        var addError = function(element,message,gap) {
            element = $(element);
            removeError(element);
            gap = gap || 20;

            var msg = $('<span class="floating-error">' + message + '</span>');

            var ofs = element.offset();
            var w = element.outerWidth();
            ofs.left += w + gap;

            msg.offset(ofs);
            msg.css('position', 'absolute');
            
            $('body').append(msg);
            element.data('floating-error', msg);
        };
        // Remove the floating error from the given element.
        var removeError = function(element) {
            element = $(element);
            var msg = element.data('floating-error');
            if (msg) {
                element.data('floating-error', null);
                msg.remove();
            }
        };

        $('input.required,select.required').on('blur',
            function(evt) {
                var input = $(this),
                    spaces = /^\s*$/,
                    names = {
                        'fname':     'given name',
                        'lname':     'family name',
                        'address1':  'address',
                        'email':     'email address',
                        'username':  'user name',
                        'password1': 'password',
                        'password2': 'confirmation password'
                    },
                    val = input.val();
                if (spaces.test(val)) {
                    var name = input.attr('name');
                    name = names[name] || name;
                    addError(input, 'A value is required for your ' + name + '.');
                }
                else {
                    removeError(input);
                }
            });
    })();

    // The state becomes required if the country has them.
    (function(){
        var country_select = $('#country');
        var state_select   = $('#state');

        country_select.change(function() {
            var country = country_select.val().toUpperCase();
            if (country=='AUSTRALIA' || country=='CANADA' || country=='USA') {
                //state_select.attr('disabled', false);
                state_select.closest('tr').addClass('required');
            }
            else {
                state_select.val('');
                //state_select.attr('disabled', true);
                state_select.closest('tr').removeClass('required');
            }
        });
        country_select.change();
    })();

/* Selecting and de-selecting a joint membership will hide and show the table
 * for the joint primary member. */
/* XXX
(function(){
var show_table = function(chk) {
    //var table = find_nearest('table.joint-details', chk);
    // The id of the radio button/checkbox is an underscore and the item_key.
    // The id of the (row containing the) joint member table is "joint-table-"
    // and the item_key.
    var id = chk.prop('id');
    var item_key = id.substring(1);
    var table_id = "joint-table-" + item_key;
    var tr = $('#' + table_id);
    var table = tr.find('table');
    if (chk.prop('checked')) {
        table.show();
        //table.slideDown('slow');
        //table.fadeIn('slow');
    }
    else {
        table.hide();
        //table.slideUp('slow');
        //table.fadeOut('slow');
    }
};
$(document).ready(
    function(){
        // Hide the joint-details.tables.
        $('table.joint-details').hide();
        // Show/hide the joint-details with the checkbox.
        $('input.joint-chk').on('item-selected',
            function(evt) {
                var chk = $(this);
                show_table(chk);
            })
        $('input.joint-chk').on('item-deselected',
            function(evt) {
                var chk = $(this);
                show_table(chk);
            })
            .trigger('item-selected');
    });
})();
XXX */

    // When an item-selected or item-deselected event hits an input.panel-switch,
    // show or hide the corresponding panel.
    (function(){
        var switches = $('input.panel-switch');
        var setDisplay = function(radioOrCheck, display) {
            var ownTr = radioOrCheck.closest('tr');
            var nextTr = ownTr.nextElementSibling;
            if (nextTr.classList.contains('hidden-panel')) {
                nextTr.style.display = display;
            }
        };
        switches.on('item-selected',   ((e) => setDisplay(e.target, '')));
        switches.on('item-deselected', ((e) => setDisplay(e.target, 'none')));
        switches.trigger('change');
    })();

    // When a 'leader' (package) is selected, enable and select the optional
    // components.
    (function() {
        var enab = function(elem) {
            elem.prop('checked','checked');
            elem.prop('disabled','');
        },
        disab = function(elem) {
            elem.prop('checked','');
            elem.prop('disabled','disabled');
        },
        enable_with = function(leader, followers) {
            leader.on('item-selected', function(evt) {
                followers.forEach(function(f) {
                    enab(f);
                });
            });
            leader.on('item-deselected', function(evt) {
                followers.forEach(function(f) {
                    disab(f);
                });
            });
        };

        /* XXX NOTE This is global so that inline code outside this module can
         * find it. */
        enable_items_with = function(leader, followers) {
            leader.forEach(function(l) {
                enable_with($(l), followers.map(function(f) { return $(f) }));
            });
        };
    })();


    /* Adds a scrollbar on top of the div, for elements that have large amounts
     * of data that push the scrollbar too far down. 
     * Uses the jquery.doubleScroll.js jquery plugin.  
     * Currently used on the membership directory*/
    $('.double-scroll').doubleScroll({resetOnWindowResize: true});


    // Show/hide the tips on the directory page on button press.
    (function(){
        var acc = document.getElementById('usertips-accordion');
        var panel = document.getElementById('usertips-panel');
        if (acc && panel) {
            acc.addEventListener('click', function() {
                this.classList.toggle('active');
                if (panel.style.display === 'block') {
                    panel.style.display = 'none';
                } 
                else {
                    panel.style.display = 'block';
                }
            });
        }
    })();

})(jQuery);
