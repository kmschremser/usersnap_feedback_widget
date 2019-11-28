window.onUsersnapCXLoad = function(api) {
    api.init({
        "@template": {
            "id": "basicConfig",
            "params": {
                // CHANGE label of button
                "buttonLabel": "Send Feedback",
                // CHANGE position of button
                "buttonPosition": "rightBottom", //rightBottom, rightCenter
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
                    "src": "https://img.freepik.com/free-photo/wall-wallpaper-concrete-colored-painted-textured-concept_53876-31799.jpg?size=626&ext=jpg"
                },
                //CHANGE - just copy the background image of header
                "header.svg": {
                    "src": "https://resources.usersnap.com/company/06893e40-7805-4018-aa74-27397b6d674d/widget_config/header_ebf677b2-871b-493f-afae-aecc177ef20e.svg?etag=0342236ef38fb04ae49379a3bd6381c6",
                    "resourceType": "IMAGE"
                }
            }
        },
        "widget": {
            "pages": [
                // beginning of start page with options
                {
                    // FIRST PAGE WITH OPTIONS TO CHANNEL FEEDBACK - can be removed!!! (whole object)
                    "id": "welcome-select-page",
                    "fieldsets": [
                    {
                        "id": "welcome-fieldset",
                        "fields": [
                        {
                            // CHANGE - title on the header image
                            "title": "Your Feedback Matters",
                            "@resource": "logo_header.png",
                            "component": "HeaderImageDisplay",
                            // do not change. this has subscription pricing impacts
                            "poweredByLink": "https://usersnap.com/cx?utm_source=cxbutton&utm_medium=poweredbylink&utm_campaign=customer",
                            "showGradientOverlay": false,
                        },
                        {
                            "id": "button-field-help",
                            "icon": {
                            "@template": {
                                // here we have some icons available or you can specify your own SVG
                                "id": "bubblesIcon"
                            }
                            },
                            "text": "Visit the Usersnap documentation page.",
                            "title": "Help Center",
                            "styles": {
                            "container": {
                                // CHANGE - with this color you can change the color of the icon
                                "color": "#ff0000",
                                "background": "#dee7fd"
                            }
                            },
                            "onClick": [
                            {
                                "action": "close"
                            },
                            {
                                // CHANGE - opens a new URL to your documentation - Example
                                "action": "openUrl",
                                "options": {
                                "url": "https://help.usersnap.com"
                                }
                            }
                            ],
                            "component": "ButtonField",
                            "multiline": true
                        },
                        {
                            "id": "button-field-support",
                            "icon": {
                            "@template": {
                                "id": "supportIcon"
                            }
                            },
                            // CHANGE - can be used to channel the communication to your chat tool
                            "text": "Get in touch with the Usersnap support team.",
                            "title": "Support",
                            "styles": {
                            "container": {
                                "color": "#3a21ce",
                                "background": "#e9effe"
                            }
                            },
                            "onClick": [
                            {
                                "action": "close"
                            },
                            {
                                "action": "evaluateJavascript",
                                "options": {
                                    // CHANGE - here you have to use a valid Javascript function for your chat
                                "functionBody": "cxHelpers.openIntercom()"
                                }
                            }
                            ],
                            "component": "ButtonField",
                            "multiline": true
                        },
                        {
                            "id": "button-field-feedback",
                            "icon": {
                            "@template": {
                                "id": "feedbackIcon"
                            }
                            },
                            // CHANGE - button for getting feedback via Usersnap
                            "text": "Give us feedback and rate your experience.",
                            "title": "Feedback",
                            "styles": {
                            "container": {
                                "color": "#3a21ce",
                                "background": "#f3f7fe"
                            }
                            },
                            "onClick": [
                            {
                                "action": "updateInitialValue",
                                "options": {
                                "value": "feedback",
                                "fieldId": "category"
                                }
                            },
                            {
                                "action": "updateActivePage",
                                "options": {
                                "pageId": "feedback-page"
                                }
                            }
                            ],
                            "component": "ButtonField",
                            "multiline": true
                        }
                        ],
                        "footer": {
                        "buttons": []
                        },
                        "isFullSize": true
                    }
                    ]
                },
                // end of start page with options
                {
                "fieldsets": [
                    {
                    "fields": [
                        {
                        // CHANGE - title on the header image
                        "title": "Your Feedback Matters",
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
                        "@metric": "rating",
                        // CHANGE - main question
                        "label": {
                            "en": "Do you like our webapp?",
                            "de": "Mögen Sie unsere Webapp?"
                            }
                        }
                    ],
                    "id": "feedback-form-fieldset"
                },
                {
                    "fields": [
                            {
                            "@metric": "comment",
                            // CHANGE - question in case of positive rating
                            "label": {
                                "en": "What did you like most?"
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
                                "en": "What can we do better?"
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
                        {
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
                                "de": "Screenshot anhängen",
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
                        },
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
                                "de": "Danke!",
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
                            "de": "Danke!",
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
                            "de": "Schließen",
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
                        "de": "Schließen",
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
    }  
    , { merge: true });


    // only use this in case you want to show a bubble for triggering feedback
    api.showBubble({
        "isHidden": true,
        // CHANGE - for the bubble
        "text": {
            "de": "Wir bitten dich um dein Feedback, um unsere Website zu verbessern.",
            "en": "Please give us some feedback to improve our website."
        },
        "title": {
            "de": "Wie gefällt dir unsere Website?",
            "en": "How do you like our website?"
        },
        "icon": null,
        "onClick": {
            "action":"open",
            "options": {
                "config": {
                    "widget": {
                        "activePageId": "feedback-page"
                    }
                }
            }
        }
    });

    // CHANGE - how to add the email from your app
    api.on('open', function(event) {
        event.api.setValue('visitor', 'john@doe.me');
        event.api.setValue('comment', 'Quit playing games with my heart!');
    });

    window.UsersnapCX = api; // expose api
};
var script = document.createElement('script');
script.async = 1;

// CHANGE - to your API key in the URL -IMPORTANT
script.src = '//widget.usersnap.com/load/f73dda22-6208-4625-b2da-493c5d2c3893?onload=onUsersnapCXLoad&isdev=true';
document.getElementsByTagName('head')[0].appendChild(script);
