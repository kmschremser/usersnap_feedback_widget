{
  "button": {
    "icon": {
      "svg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 90 90\"><path class=\"st0\" d=\"M44.2 4.2c0.6 0 1.3 0 1.9 0 0.3 0.1 0.6 0.1 1 0 0.2 0 0.3 0 0.5 0 0.1 0.1 0.2 0.1 0.3 0 0.2 0 0.4 0 0.6 0 1.2 0.2 2.5 0.2 3.7 0.3 1.9 0.1 3.7 0.6 5.4 1.2 5.3 1.6 10.2 4.1 14.5 7.6 2.9 2.4 5.4 5 7.5 8.1 2.5 3.7 4.4 7.7 5.5 12 0.4 1.6 0.4 3.3 0.6 4.9 0 0.2-0.1 0.4 0.1 0.5 0 0.2 0 0.3 0 0.5 -0.1 0.1-0.1 0.2 0 0.3 0 0.3 0 0.6 0 1 -0.1 0.3-0.1 0.6 0 1 0 0.7 0 1.4 0 2.1 -0.1 0.1-0.1 0.2-0.1 0.3s0 0.2 0.1 0.3c0 0.2 0 0.4 0 0.6 -0.2 0.8-0.2 1.6-0.2 2.4 -0.2 3.4-1.3 6.5-2.7 9.6 -2.2 4.8-5.3 8.9-9.2 12.4 -6.3 5.7-13.8 9-22.2 10.3 -2.8 0.4-5.6 0.6-8.4 0.4 -2.8-0.1-5.5-0.5-8.2-1.2 -1-0.3-1.8-0.2-2.7 0.3 -3.7 2.1-7.4 4.1-11.1 6.1L21 85.3c-1.4 0.7-1.8 0.5-1.8-1.1 0-3.9 0-7.7 0-11.6 0-0.9-0.3-1.5-1-2C11.4 65.3 6.9 58.5 4.8 50.1c-0.3-1.4-0.5-2.8-0.5-4.2 -0.2-3.1-0.1-6.3 0.1-9.4 0.2-2.8 1.1-5.5 2.2-8.1 1.4-3.3 3.2-6.4 5.5-9.2 3.3-4 7.1-7.3 11.6-9.8 3.9-2.2 8-3.7 12.4-4.6 1.7-0.3 3.3-0.3 5-0.4 0.2 0 0.4 0.1 0.5-0.1 0.2 0 0.3 0 0.5 0 0.1 0.1 0.2 0.1 0.3 0 0.2 0 0.4 0 0.6 0C43.5 4.3 43.9 4.3 44.2 4.2z\"/><path style=\"fill:#D71920;\" d=\"M26.2 45h0.2c2.1 0 3.8-1.7 3.8-3.8s-1.7-3.8-3.8-3.8h-0.2c-2.1 0-3.8 1.7-3.8 3.8C22.4 43.3 24.1 45 26.2 45\"/><path style=\"fill:#D71920;\" d=\"M51.8 45h0.3c2.1 0 3.8-1.7 3.8-3.8s-1.7-3.8-3.8-3.8h-0.3c-2.1 0-3.8 1.7-3.8 3.8S49.7 45 51.8 45zM39 45h0.3c2.1 0 3.8-1.7 3.8-3.8s-1.7-3.8-3.8-3.8H39c-2.1 0-3.8 1.7-3.8 3.8S36.9 45 39 45z\"/><path style=\"fill:#D71920;\" d=\"M64.7 45h0.2c2.1 0 3.8-1.7 3.8-3.8s-1.7-3.8-3.8-3.8h-0.2c-2.1 0-3.8 1.7-3.8 3.8C60.9 43.3 62.6 45 64.7 45\"/></svg>"
    },
    "label": {
      "en": "Chat & feedback"
    },
    "styles": {
      "label": {
        "fontStyle": "italic",
        "fontWeight": "bold",
        "textTransform": "none"
      },
      "iframe": {
        "right": "0"
      },
      "container": {
        "color": "#FFFFFF",
        "height": "3em",
        "background": "#D71920",
        "paddingLeft": "1em",
        "border-style": "none",
        "borderRadius": "15px 0px 0 0",
        "paddingRight": "1em"
      }
    },
    "@template": "button"
  },
  "locale": "en",
  "widget": {
    "mode": "normal",
    "modes": {
      "@template": {
        "id": "modes",
        "params": {
          "screenshotMetricId": "screenshot"
        }
      }
    },
    "pages": [
      {
        "id": "welcome-select-page",
        "fieldsets": [
          {
            "id": "welcome-fieldset",
            "fields": [
              {
                "@resource": "feedback_v3.png"
              },
              {
                "id": "chatButton",
                "icon": {
                  "@resource": "chat.svg"
                },
                "text": {
                  "en": "Chat with us, we're happy to help!"
                },
                "title": {
                  "en": "Live Chat"
                },
                "styles": {
                  "container": {
                    "color": "#2F516C",
                    "background": "#FFFFFF"
                  }
                },
                "onClick": {
                  "action": "evaluateJavascript",
                  "options": {
                    "functionBody": "showOlark()"
                  }
                },
                "component": "ButtonField",
                "multiline": true
              },
              {
                "id": "messengerButton",
                "icon": {
                  "@resource": "fb.svg"
                },
                "text": {
                  "en": "Chat with us on Facebook Messenger"
                },
                "title": {
                  "en": "FB Messenger"
                },
                "styles": {
                  "container": {
                    "color": "#2F516C",
                    "background": "#FFFFFF"
                  }
                },
                "onClick": {
                  "action": "evaluateJavascript",
                  "options": {
                    "functionBody": "launchFBCustomerChat()"
                  }
                },
                "component": "ButtonField",
                "multiline": true
              },
              {
                "id": "feedbackButton",
                "icon": {
                  "@resource": "feedback_icon.svg"
                },
                "text": {
                  "en": "We always love to hear your thoughts!"
                },
                "title": {
                  "en": "Have feedback?"
                },
                "styles": {
                  "container": {
                    "color": "#2F516C",
                    "background": "#FFFFFF"
                  }
                },
                "onClick": [
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
                "id": "faq-textField",
                "text": {
                  "en": "<div style='margin-top: -6px;margin-bottom: -7px;background-color: #e0e0e0;display: flex;padding: 2rem;'><div style='flex: 1;'><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAABTCAYAAADdl1ROAAAAAXNSR0IArs4c6QAAAAlwSFlzAAALEwAACxMBAJqcGAAAA6hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDUuNC4wIj4KICAgPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICAgICAgPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIKICAgICAgICAgICAgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAxOC0wNy0wNFQxNzowNzo2NTwveG1wOk1vZGlmeURhdGU+CiAgICAgICAgIDx4bXA6Q3JlYXRvclRvb2w+UGl4ZWxtYXRvciAzLjcuMTwveG1wOkNyZWF0b3JUb29sPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpDb21wcmVzc2lvbj41PC90aWZmOkNvbXByZXNzaW9uPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4yPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WFJlc29sdXRpb24+NzI8L3RpZmY6WFJlc29sdXRpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj41MDwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+MTwvZXhpZjpDb2xvclNwYWNl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' style='margin-right: auto;margin-left: auto;display: block;'/></div><div style='flex: 3;font-size: 1em;'><p style='font-weight: 600;'>Rather talk to us in person?</p><div style='float: right;width: 50%;text-align: right;border-left: 1px solid black;'><b><a href='tel:1800754386' style='text-decoration: none;color: inherit;'>1800 754 386</a></b><br>(within Aussie)</div><div style='width: 50%;'><b><a href='tel:0800440800' style='text-decoration: none;color: inherit;'>0800 440 800</a></b><br>(within NZ)</div></div></div>"
                },
                "allowHTML": true,
                "component": "TextDisplay",
                "textStyle": {},
                "titleStyle": {}
              }
            ],
            "footer": {
              "buttons": []
            },
            "isFullSize": true
          }
        ]
      },
      {
        "id": "feedback-page",
        "onSubmit": {
          "action": "submit",
          "options": {
            "onSuccess": [
              {
                "action": "updateActivePage",
                "options": {
                  "pageId": "thankyou-page"
                }
              }
            ]
          }
        },
        "fieldsets": [
          {
            "id": "feedback-header-fieldset",
            "fields": [
              {
                "@resource": "rate_v2.png"
              }
            ],
            "isFullSize": true
          },
          {
            "id": "feedback-form-fieldset",
            "fields": [
              {
                "label": {
                  "en": "How do you like our website?"
                },
                "onLoad": {
                  "action": "conditionals",
                  "options": [
                    {
                      "do": [],
                      "eq": null
                    },
                    {
                      "do": [
                        {
                          "action": "updateHiddenFieldsets",
                          "options": {
                            "isHidden": false,
                            "fieldsetId": "positiveRating-fieldset"
                          }
                        },
                        {
                          "action": "updateHiddenFieldsets",
                          "options": {
                            "isHidden": true,
                            "fieldsetId": "negativeRating-fieldset"
                          }
                        },
                        {
                          "action": "updateHiddenFieldsets",
                          "options": {
                            "isHidden": false,
                            "fieldsetId": "email-fieldset"
                          }
                        }
                      ],
                      "gte": 4
                    },
                    {
                      "do": [
                        {
                          "action": "updateHiddenFieldsets",
                          "options": {
                            "isHidden": true,
                            "fieldsetId": "positiveRating-fieldset"
                          }
                        },
                        {
                          "action": "updateHiddenFieldsets",
                          "options": {
                            "isHidden": false,
                            "fieldsetId": "negativeRating-fieldset"
                          }
                        },
                        {
                          "action": "updateHiddenFieldsets",
                          "options": {
                            "isHidden": false,
                            "fieldsetId": "email-fieldset"
                          }
                        }
                      ],
                      "lt": 4,
                      "neq": null
                    }
                  ]
                },
                "@metric": "stars",
                "onChange": {
                  "action": "conditionals",
                  "options": [
                    {
                      "do": [],
                      "eq": null
                    },
                    {
                      "do": [
                        {
                          "action": "updateHiddenFieldsets",
                          "options": {
                            "isHidden": false,
                            "fieldsetId": "positiveRating-fieldset"
                          }
                        },
                        {
                          "action": "updateHiddenFieldsets",
                          "options": {
                            "isHidden": true,
                            "fieldsetId": "negativeRating-fieldset"
                          }
                        },
                        {
                          "action": "updateHiddenFieldsets",
                          "options": {
                            "isHidden": false,
                            "fieldsetId": "email-fieldset"
                          }
                        }
                      ],
                      "gte": 4
                    },
                    {
                      "do": [
                        {
                          "action": "updateHiddenFieldsets",
                          "options": {
                            "isHidden": true,
                            "fieldsetId": "positiveRating-fieldset"
                          }
                        },
                        {
                          "action": "updateHiddenFieldsets",
                          "options": {
                            "isHidden": false,
                            "fieldsetId": "negativeRating-fieldset"
                          }
                        },
                        {
                          "action": "updateHiddenFieldsets",
                          "options": {
                            "isHidden": false,
                            "fieldsetId": "email-fieldset"
                          }
                        }
                      ],
                      "lt": 4,
                      "neq": null
                    }
                  ]
                }
              }
            ],
            "footer": {
              "buttons": []
            }
          },
          {
            "id": "positiveRating-fieldset",
            "fields": [
              {
                "label": {
                  "en": "What did you like most?"
                },
                "@metric": "comment",
                "required": false,
                "multiline": true
              }
            ],
            "isHidden": true
          },
          {
            "id": "negativeRating-fieldset",
            "fields": [
              {
                "label": {
                  "en": "What can we do better?"
                },
                "@metric": "comment",
                "required": false,
                "multiline": true
              }
            ],
            "isHidden": true
          },
          {
            "id": "email-fieldset",
            "fields": [
              {
                "label": {
                  "en": "Email (optional)"
                },
                "@metric": "visitor",
                "required": false,
                "memorizeKey": "usersnapTrackEmail"
              }
            ],
            "footer": {
              "buttons": [
                {
                  "@template": {
                    "id": "annotateButton",
                    "params": {
                      "id": "annotate-button",
                      "screenshotMetricId": "screenshot"
                    }
                  }
                },
                {
                  "id": "send",
                  "type": "submit",
                  "label": {
                    "en": "Send feedback"
                  }
                }
              ]
            },
            "isHidden": true
          },
          {
            "@template": {
              "id": "annotateFieldset",
              "params": {
                "id": "feedback-annotate-fieldset",
                "screenshotMetricId": "screenshot"
              }
            }
          }
        ]
      },
      {
        "@template": {
          "id": "thankYouPage",
          "params": {
            "id": "thankyou-page",
            "color": "#FFFFFF",
            "resource": "thankyou_v2.png",
            "showGradientOverlay": true
          }
        }
      }
    ],
    "tools": {
      "@template": "tools"
    },
    "header": {
      "color": "#D71921",
      "styles": {
        "icon": {},
        "text": {},
        "container": {}
      },
      "closeButton": {
        "id": "close-botton",
        "label": {
          "en": "Close"
        },
        "onClick": {
          "action": "cancel"
        }
      },
      "isTransparent": true
    },
    "styles": {
      "container": {
        "borderRadius": "2rem 0 0 0"
      }
    },
    "position": "centered"
  },
  "textColor": "#58595B",
  "references": {
    "metrics": {
      "geo": {
        "metricType": "GEO"
      },
      "stars": {
        "metricType": "ONE_TO_FIVE",
        "displayType": "SMILEY"
      },
      "client": {
        "metricType": "CLIENT"
      },
      "comment": {
        "metricType": "TEXT"
      },
      "visitor": {
        "metricType": "VISITOR"
      },
      "screenshot": {
        "metricType": "SCREENSHOT"
      }
    },
    "resources": {
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
      }
    }
  },
  "primaryColor": "#D71921",
  "secondaryColor": "#58595B"
}
