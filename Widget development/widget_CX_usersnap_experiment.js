//window.addEventListener('scroll', function() {
    //setTimeout(function() {
        window.onUsersnapCXLoad = function(api) {
            api.init({
                // <script type="text/javascript">
                    "@template": {
                        "id": "basicConfig",
                        "params": {
                            // CHANGE label of button
                            "buttonLabel": "Feedback & Chat",
                            // CHANGE position of button
                            "buttonPosition": "bottomRight", //bottomRight, rightBottom, rightCenter
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
                                // CHANGE - background image of header
                                "src": "https://usersnap.com/blog/wp-content/uploads/2019/11/usersnap_header3.jpg",
                                "resourceType": "IMAGE",
                            },
                            "logo_header2.png": {
                                //CHANGE - just copy the background image of header
                                "src": "https://usersnap.com/blog/wp-content/uploads/2019/11/usersnap_header4.jpg",
                                "resourceType": "IMAGE",
                            },
                            "hi-five.gif": {
                                "src": "http://static.skaip.org/img/emoticons/180x180/f6fcff/highfive.gif",
                                "resourceType": "IMAGE",
                            },
                            "fb.svg": {
                                "src": "https://resources.usersnap.com/company/6b66d72d-7fa7-4d1c-b824-6a41e1ab6e17/widget_config/fb_23ecc2ee-e8a9-4e3e-b466-19fd44102c2d.svg?etag=cb7cdaf0229670aeabcd5ba76c5cb182",
                                "resourceType": "IMAGE"
                              },
                              "chat.svg": {
                                "src": "https://resources.usersnap.com/company/6b66d72d-7fa7-4d1c-b824-6a41e1ab6e17/widget_config/chat_b3fe037b-bae3-4836-9e04-019a7652b37d.svg?etag=fe60649be579492dccd5af3e32e8db20",
                                "resourceType": "IMAGE"
                              },
                              "rate_v2.png": {
                                "src": "https://resources.usersnap.com/company/6b66d72d-7fa7-4d1c-b824-6a41e1ab6e17/widget_config/rate_v2_b70487c8-7c15-4d34-b1e6-246a8f445c60.png?etag=850a6e435c5ed7611915a1eb45a2bc7e",
                                "resourceType": "IMAGE"
                              },
                              "feedback_v3.png": {
                                "src": "https://resources.usersnap.com/company/6b66d72d-7fa7-4d1c-b824-6a41e1ab6e17/widget_config/feedback_v3_33d4ea0a-910f-40a6-a28f-f3d8fa85bdf3.png?etag=30705d4e8ea2b97c7d290ff40550a272",
                                "resourceType": "IMAGE"
                              },
                              "thankyou_v2.png": {
                                "src": "https://resources.usersnap.com/company/6b66d72d-7fa7-4d1c-b824-6a41e1ab6e17/widget_config/thankyou_v2_780312df-58d3-47b7-9277-e750e5d48643.png?etag=e42179fed6171d0d01eac2affb385782",
                                "resourceType": "IMAGE"
                              },
                              "feedback_icon.svg": {
                                "src": "https://resources.usersnap.com/company/6b66d72d-7fa7-4d1c-b824-6a41e1ab6e17/widget_config/feedback_icon_9e023cc7-36c0-4f7e-83dd-3611e640a380.svg?etag=321aabfd58244a1fe87018b014d842d7",
                                "resourceType": "IMAGE"
                              },
                              "smiley_chat.svg": {
                                  "src": "https://usersnap.com/blog/wp-content/uploads/2019/11/smily_chat.svg",
                                  "resourceType": "IMAGE"
                              },
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
                                        "title": null,
                                        "@resource": "logo_header.png",
                                        
                                        "component": "HeaderImageDisplay",
                                        // do not change. this has subscription pricing impacts
                                        //"poweredByLink": "https://usersnap.com/cx?utm_source=cxbutton&utm_medium=poweredbylink&utm_campaign=customer",
                                        "showGradientOverlay": false,
                                    },
                                    {
                                        "id": "button-field-feedback",
                                        "icon": {
                                            "@resource": "feedback_icon.svg",
                                            /*"@template": {
                                                "id": "bubblesIcon"
                                            }*/
                                        },
                                        // CHANGE - button for getting feedback via Usersnap
                                        /*"text": "Give us feedback and rate your experience.",*/
                                        "text": {
                                            "en":"Give us feedback and rate your experience.",
                                        },
                                        "title": "Feedback",
                                        "styles": {
                                            "container": {
                                                "color": "#3a21ce",
                                                "background": "#f4f4f7",
                                                "border-style": "none",
                                                //"borderRadius": "0px 0px 0 0",
                                            }
                                        },
                                        "allowHTML": true,
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
                                    },
                                    {
                                        "id": "button-field-support",
                                        "icon": {
                                            /*"@template": {
                                                "supportIcon",
                                            }*/
                                            "@resource": {
                                                "id": "smiley_chat.svg",
                                            },
                                        },
                                        // CHANGE - can be used to channel the communication to your chat tool
                                        "text": "Get in touch with our lovely customer success team.",
                                        "title": "Live chat",
                                        "styles": {
                                        "container": {
                                            "color": "#3a21ce",
                                            "background": "#f4f4f7",
                                            "height": "20px"
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
                                            "functionBody": "Intercom('show');"
                                            }
                                        }
                                        ],
                                        "component": "ButtonField",
                                        "multiline": true
                                    },
                                    {
                                        "id": "button-field-demo",
                                        "icon": {
                                        "@template": {
                                            "id": "feedbackIcon"
                                        }
                                        },
                                        // CHANGE - can be used to channel the communication to your chat tool
                                        "text": "Learn more about Usersnap",
                                        "title": "Have a demo with a product expert",
                                        "styles": {
                                        "container": {
                                            "color": "#3a21ce",
                                            "background": "#f4f4f7"
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
                                                "url": "https://usersnap.com/lets-schedule-a-demo-call"
                                                }
                                            }
                                            ],
                                        "component": "ButtonField",
                                        "multiline": true
                                    },
                                    /*
                                    {
                                        "id": "faq-textField",
                                        
                                        "text": {
                                          "en": "<div style='background-color: #f4f4f7;display: flex;padding: 2rem;'><div style='flex: 1;'><img src='' style='margin-right: auto;margin-left: auto;display: block;'/></div><div style='flex: 3;font-size: 1em;'><p style='font-weight: 600;'>Rather talk to a product person?</p><div style='float: right;width: 50%;text-align: right;border-left: 1px solid black;'><b><a href='https://usersnap.com/lets-schedule-a-demo-call' style='text-decoration: none;color: inherit;'>Demo</a></b><br></div><div style='width: 50%;'><b><a href='#' style='text-decoration: none;color: inherit;'></a></b><br></div></div></div>"
                                        },
                                        "allowHTML": true,
                                        "component": "TextDisplay",
                                        "textStyle": {},
                                        "titleStyle": {}
                                    }
                                    */
                                    /*
                                    {
                                        "id": "button-field-bug",
                                        "icon": {
                                        "@template": {
                                            "id": "bugIcon"
                                        }
                                        },
                                        // CHANGE - can be used to channel the communication to your chat tool
                                        "text": "Something is broken? Let us know.",
                                        "title": "Report a Bug",
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
                                            "functionBody": "window._ClApi.open();"
                                            }
                                        }
                                        ],
                                        "component": "ButtonField",
                                        "multiline": true
                                    },
                                    */    
                                    /*
                                    {
                                        "id": "button-field-help",
                                        "icon": {
                                        "@template": {
                                            // here we have some icons available or you can specify your own SVG
                                            "id": "bubblesIcon"
                                        }
                                        },
                                        "text": "Visit the documentation page.",
                                        "title": "Help Center",
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
                                    */                                                   
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
                                    "title": null,
                                    "@resource": "logo_header.png",
                                    "component": "HeaderImageDisplay",
                                    // do not change. this has subscription pricing impacts
                                    //"poweredByLink": "https://usersnap.com/cx?utm_source=cxbutton&utm_medium=poweredbylink&utm_campaign=customer",
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
                                        "en": "<h1>Are you looking for a solution for this use case?</h1>",
                                        },
                                    "styles": {
                                        "label": {
                                            "color": "red",
                                            "fontWeight": "bold",
                                            "textTransform": "none"
                                        },
                                    },
                                    "allowHTML": true,
                                },
                                ],
                                "id": "feedback-form-fieldset"
                            },
                            {
                                "fields": [
                                        {
                                        "@metric": "comment",
                                        // CHANGE - question in case of positive rating
                                        "label": {
                                            "en": "How was your experience so far?"
                                        },
                                        "multiline": true,
                                        "required": true
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
                                        "required": true
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
                                            "en": "Please, enter your email"
                                        },
                                        "memorizeKey": "usersnapTrackEmail",
                                        "required": true
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
                                            "en": "Add screenshot (optional)"
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
                                },
                                {
                                "fields": [
                                        {
                                        // CHANGE - main question
                                        "label": {
                                            "en": "<h1>Are you lookixxxxxxxng for a solution for this use case?</h1>",
                                            },
                                        "styles": {
                                            "label": {  
                                                "color": "red",
                                                "fontWeight": "bold",
                                                "textTransform": "none"
                                            },
                                        },
                                        "allowHTML": true,
                                    },
                                    ],
                                    "id": "extra_content"
                                },
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
                                    "@resource": "logo_header2.png",
                                    "component": "HeaderImageDisplay",
                                    // do not change - has subscription pricing issues
                                    //"poweredByLink": "https://usersnap.com/cx?utm_source=cxbutton&utm_medium=poweredbylink&utm_campaign=customer",
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
                }  
                , { merge: true });
 /*           
                // after 30 seconds
                setInterval(function(){call_bubble()},30000);

                function call_bubble() {
                    var MAX = 5;
                    var rand = Math.floor((Math.random() * MAX) + 1);
                    // only 1 in 5 send the bubble
                    console.log('rand visitor '+rand);
                    console.log('cookie for bubble '+getCookie('bubble_fired'));

                    if (rand == 2 && getCookie('bubble_fired') != 'yes') {
                        // only use this in case you want to show a bubble for triggering feedback
                        api.showBubble({
                            "isHidden": true,
                            // CHANGE - for the bubble
                            "text": {
                                //"en": "Please give us some feedback to improve our website."
                            },
                            "title": {
                                "en": "Are you looking for a solution for this use case?"
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
                        setCookie('bubble_fired','yes',30);
                    }   
                }
 */
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
            

/*
            //Usersnap QA / Classic
            window.onUsersnapLoad = function(api) {
                api.init({
                    //hide button for not having two buttons on the page.
                    button: null
                });
                //export api to later call it via the javascript code.
                window._ClApi = api;
            };
*/
            /*
            load Usersnap QA too
            var script = document.createElement('script');
            script.async = 1;
            
            // CHANGE - to your API key for Usersnap Classic in the URL - IMPORTANT
            script.src = '//api.usersnap.com/load/181c6e2e-9665-4ee7-88c8-4923a01824fc.js?onload=onUsersnapLoad';
            document.getElementsByTagName('head')[0].appendChild(script);
            */
    
//  }, 2000);
//}, {once: true});
            
//</script>