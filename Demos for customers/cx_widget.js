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
                "headerColor": "#FFFFFF",
                "primaryColor": "#E3E3E3E3",
                "secondaryColor": "rgba(0, 2, 3, 0.54)",

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

    // example of firing a bubble with a question after 2 seconds
    api.on('load', function() {
        localStorage.setItem('widgetOpened', Date.now())
    });

    window.setTimeout(function() {
        if (!localStorage.getItem('widgetOpened')) {
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
        }
    }, 2000);

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
