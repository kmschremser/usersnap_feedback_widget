
            
            window.onUsersnapCXLoad = function(api) {
                api.init({
                    "@template": {
                        "id": "basicConfig",
                        "params": {
                            // CHANGE label of button
                            "buttonLabel": "Feedback",
                            // CHANGE position of button
                            "buttonPosition": "rightCenter", //rightBottom, rightCenter
                            // CHANGE colors
                            "headerColor": "#fff",
                            "primaryColor": "#3a21ce",
                            "secondaryColor": "rgba(0, 0, 0, 0.54)",
                            "commentId": "comment",
                            "preview": false,
                            "ratingId": "rating",
                            "screenshotId": "screenshot",
                        }
                    },
                    "references": {
                        "resources": {
                            
                            "logo_header.png": {
                                "resourceType": "IMAGE",
                                // CHANGE - background image of header
                                "src": "https://usersnapdemo.com/demo/widget_bg.png"
                            },
                            //CHANGE - just copy the background image of header
                            "header.svg": {
                                "src": "https://usersnap.com/blog/wp-content/uploads/2019/07/trans2.png",
                                "resourceType": "IMAGE"
                            }
                        }
                    },
                    "widget": {
                        "pages": [
                            {
                            "fieldsets": [
                                {
                                "fields": [
                                    {
                                    // CHANGE - title on the header image
                                    "title": "",
                                    "@resource": "logo_header.png",
                                    "component": "HeaderImageDisplay",
                                    // do not change. this has subscription pricing impacts
                                    "poweredByLink": "https://usersnap.com/cx?utm_source=cxbutton&utm_medium=poweredbylink&utm_campaign=customer",
                                    "showGradientOverlay": false,
                                    }
                                ],
                                "id": "feedback-header-fieldset",
                                // do not change - changes widget layout
                                "isFullSize": true
                            },
                            {
                                "fields": [
                                    {
                                    "@metric": "comment",
                                    // CHANGE - main question
                                    "label": {
                                        "en": "Didn't you find what you were looking for?",
                                        }
                                    }
                                ],
                                "id": "feedback-form-fieldset"
                            },
                            /*
                            {
                                "fields": [
                                        {
                                        "@metric": "comment",
                                        // CHANGE - question in case of positive rating
                                        "label": {
                                            "en": "How was your experience so far?"
                                        },
                                        "multiline": true,
                                        "required": false
                                        }
                                    ],
                                    "id": "positiveRating-fieldset",
                                    "isHidden": {
                                        "@if": {
                                        "else": true,
                                        "gte": 4,
                                        "isSet": true,
                                        "select": "rating",
                                        "then": false
                                        }
                                    }
                                },
                                {
                                    "fields": [
                                        {
                                        "@metric": "comment",
                                        // CHANGE - question in case of negative rating
                                        "label": {
                                            "en": "We are sorry. What are you missing?"
                                        },
                                        "multiline": true,
                                        "required": false
                                        }
                                    ],
                                    "id": "negativeRating-fieldset",
                                    "isHidden": {
                                        "@if": {
                                        "else": true,
                                        "isSet": true,
                                        "lt": 4,
                                        "select": "rating",
                                        "then": false
                                        }
                                    }
                                },
                                */
                                {
                                    "fields": [
                                        {
                                        "@metric": "visitor",
                                        // CHANGE - label for email
                                        "label": {
                                            "en": "Email (optional)"
                                        },
                                        "memorizeKey": "usersnapTrackEmail",
                                        "required": false
                                        }
                                    ],
                                "footer": {
                                    "buttons": [
                                    // CHANGE - remove to deactivate screenshot feature
                                    /*{
                                        "hidden": {
                                        "@if": {
                                            "else": false,
                                            "isSet": true,
                                            "select": "screenshot",
                                            "then": true
                                        }
                                        },
                                        "id": "annotate-button",
                                        "isPrimary": false,
                                        // CHANGE - button for screenshot adding
                                        "label": {
                                            "en": "Add screenshot"
                                        },
                                        "onClick": {
                                        "@breakpoint": {
                                            "sm": [
                                            {
                                                "action": "updateWidgetMode",
                                                "options": {
                                                "mode": "drawing"
                                                }
                                            }
                                            ],
                                            "xs": {
                                                "action": "updateWidgetMode",
                                                "options": {
                                                    "mode": "scrolling"
                                                }
                                            }
                                        }
                                        }
                                    },*/
                                    {
                                        "id": "send",
                                        "isPrimary": true,
                                        // CHANGE - feedback submission button
                                        "label": {
                                            "en": "Send feedback"
                                        },
                                        "type": "submit"
                                    }
                                    ]
                                },
                                "id": "email-fieldset",
                                "isHidden": {
                                    "@if": {
                                    "else": true,
                                    "isSet": true,
                                    "select": "rating",
                                    "then": false
                                    }
                                }
                                },
                                {
                                "fields": [
                                    {
                                    "@metric": "screenshot"
                                    }
                                ],
                                "id": "feedback-annotate-fieldset"
                                }
                            ],
                            "id": "feedback-page",
                            "onSubmit": {
                                "action": "submit",
                                "options": {
                                "onSuccess": [
                                    {
                                    "action": "updateActivePage",
                                    "options": {
                                        "pageId": "thankyou-page",
                                        // CHANGE - thank you 
                                        "title": {
                                            "en": "Thank you!"
                                        }
                                    }
                                    }
                                ]
                                }
                            }
                            },
                            {
                            "fieldsets": [
                                {
                                "fields": [
                                    {
                                    "@resource": "logo_header.png",
                                    "component": "HeaderImageDisplay",
                                    // do not change - has subscription pricing issues
                                    "poweredByLink": "https://usersnap.com/cx?utm_source=cxbutton&utm_medium=poweredbylink&utm_campaign=customer",
                                    "showGradientOverlay": false,
                                    // CHANGE - thank you page
                                    "title": {
                                        "en": "Thank you!"
                                    }
                                    }
                                ],
                                "id": "thankYou-fieldset",
                                "isFullSize": true
                                }
                            ],
                            "footer": {
                                "buttons": [
                                {
                                    "id": "close-button-thank-you",
                                    "isPrimary": true,
                                    // CHANGE - closing the widget
                                    "label": {
                                        "en": "Close"
                                    },
                                    "onClick": {
                                        "action": "close"
                                    }
                                }
                                ]
                            },
                            "header": {
                                "closeButton": {
                                "id": "close-botton",
                                // CHANGE - closing the widget
                                "label": {
                                    "en": "Close"
                                },
                                "onClick": {
                                    "action": "close"
                                }
                                }
                            },
                            "id": "thankyou-page"
                            }
                        ]
                    }
                }  , { merge: true });
            
                setTimeout(function() {
                    document.addEventListener("mouseout", function(evt) {
                        if(evt.toElement === null && evt.relatedTarget === null) {
                            // An intent to exit has happened
                            if (getCookie('widget_fired') != 'yes') {
                                window.UsersnapCX.open();
                                setCookie('widget_fired','yes',30);
                            }
                        }
                    });
                }, 3000);

                function setCookie(name, value, days) {
                    var date, expires;
                    if (days) {
                        date = new Date();
                        date.setTime(date.getTime()+(days*24*60*60*1000));
                        expires = "; expires="+date.toGMTString();
                    } else {
                        expires = "";
                    }
                    document.cookie = name+"="+value+expires+"; path=/";
                }
                
                function getCookie(name) {
                    var value = "; " + document.cookie;
                    var parts = value.split("; " + name + "=");
                    if (parts.length == 2) return parts.pop().split(";").shift();
                }

                // CHANGE - how to add the email from your app
                api.on('open', function(event) {
                    //event.api.setValue('visitor', 'john@doe.me');
                    //event.api.setValue('comment', 'Quit playing games with my heart!');
                });
            
                window.UsersnapCX = api; // expose api
            };
            var script = document.createElement('script');
            script.async = 1;
            
            // CHANGE - to your API key for Usersnap CX in the URL - IMPORTANT
            script.src = '//widget.usersnap.com/load/ab5afb0a-4e46-417b-a4f0-2ff492819ae6?onload=onUsersnapCXLoad&isdev=true';
            document.getElementsByTagName('head')[0].appendChild(script);
            


            //Usersnap Classic
            window.onUsersnapLoad = function(api) {
                api.init({
                    //hide button for not having two buttons on the page.
                    button: null
                });
                //export api to later call it via the javascript code.
                window._ClApi = api;
            };

            var script = document.createElement('script');
            script.async = 1;
            
            // CHANGE - to your API key for Usersnap Classic in the URL - IMPORTANT
            script.src = '//api.usersnap.com/load/181c6e2e-9665-4ee7-88c8-4923a01824fc.js?onload=onUsersnapLoad';
            document.getElementsByTagName('head')[0].appendChild(script);
            
            
