import create from "zustand";

// unsafe merge state
// and mew properties will added or existing properties will be changed
// but the type of value of the property must not change
function mergeState(baseState, newState) {
  if (
    typeof newState === "object" &&
    !Array.isArray(newState) &&
    newState !== null
  ) {
    const keys = Object.keys(newState);
    keys.forEach((key) => {
      // create a new key in base if not exists
      if (!(key in baseState)) {
        baseState[key] = {};
      }
      if (typeof newState[key] === "object" && !Array.isArray(newState[key]))
        mergeState(baseState[key], newState[key]);
      else baseState[key] = newState[key];
    });
  }
}

const useStore = create((set) => {
  return {
    setPage: (pageName, newState) =>
      set((state) => {
        const pageState = JSON.parse(JSON.stringify(state[pageName]));
        mergeState(pageState, newState);
        return { [pageName]: pageState };
      }),
  };
});

export function updateStoreStateFromController(pageName, newState) {
  useStore.getState().setPage(pageName, newState);
}

const desktopModeProps = {
  ...{
  "Home": {
    "background_felx": {
      "callbacks": {}
    },
    "Flex2": {
      "callbacks": {}
    },
    "Flex3": {
      "callbacks": {}
    },
    "Flex4": {
      "callbacks": {}
    },
    "Flex5": {
      "callbacks": {}
    },
    "Flex6": {
      "callbacks": {}
    },
    "TextBox1": {
      "custom": {
        "text": "WELCOME"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox2": {
      "custom": {
        "text": "KARIM' RESTRO"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button1": {
      "custom": {
        "text": "BOOK"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/SLOT"
            }
          }
        ]
      }
    }
  },
  "SLOT": {
    "BACKGROUND_FLEX": {
      "callbacks": {}
    },
    "Flex8": {
      "callbacks": {}
    },
    "Flex9": {
      "callbacks": {}
    },
    "Flex10": {
      "callbacks": {}
    },
    "Flex11": {
      "callbacks": {}
    },
    "TextBox4": {
      "custom": {
        "text": "SELECT SLOT"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Dropdown2": {
      "custom": {
        "values": [
          "",
          "",
          "",
          "",
          ""
        ],
        "displayedValues": [
          "",
          "9 AM - 11 AM",
          "11 AM - 1 PM",
          "2 PM - 4 PM",
          "4 PM - 6 PM",
          "6 PM - 9 PM"
        ],
        "selectedValue": ""
      },
      "callbacks": {}
    },
    "Step1": {
      "custom": {
        "color": "#336699",
        "current": 3,
        "title": [
          "BOOK",
          "SCAN",
          "CONFIRM"
        ],
        "description": [
          ""
        ]
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button2": {
      "custom": {
        "text": "SCAN"
      },
      "callbacks": {
        "onClick": [
          {
            "navigate": {
              "type": "internal",
              "url": "/SCANNER"
            }
          }
        ]
      }
    }
  },
  "SCANNER": {
    "BACKDROUND_FELX": {
      "callbacks": {}
    },
    "Flex13": {
      "callbacks": {}
    },
    "Flex14": {
      "callbacks": {}
    },
    "Flex15": {
      "callbacks": {}
    },
    "Image1": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/p%20scanner.png"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox5": {
      "custom": {
        "text": "THANK YOU"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image2": {
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/pexels-anete-lusina-14800850.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    }
  }
}};

useStore.setState(desktopModeProps);

export default useStore;
