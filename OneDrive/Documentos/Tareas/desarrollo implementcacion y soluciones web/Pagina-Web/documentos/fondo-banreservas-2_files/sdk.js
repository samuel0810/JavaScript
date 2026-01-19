/* Parte 1: Estilos */
console.log("AlanChat Script Load")
var alanChatStyles = `
	:root {
			--color-accent: #34589C;
			



	}
	.alan_float_button {
		background: var(--color-accent);
		width: 48px;
		height: 48px;
		display: flex;
		position: fixed;
		right: 32px;
		bottom: 32px;
		border-radius: 50%;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
		text-align: center;
		align-items: center;
		justify-content: center;
		cursor: pointer;
    z-index: 3001;
	}
	
	.alan_float_button:hover {
		filter: brightness(95%);
	}
	.alan_float_button:active {
		filter: brightness(90%);
	}
	
	
	.alan_float_button.fab_text {
		font-family: Arial, sans-serif;
		bottom: 0;
		border-radius: 12px 12px 0 0;
		width: unset;
		background: var(--color-accent);
		height: 42px;
		text-align: center;
		color: white;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: bold;
		cursor: pointer;
		flex-direction: row;
		padding: 0 12px 0 16px;
		box-sizing: border-box;
	}
	
	.alan_float_button.fab_text h3 {
		flex-grow: 1;
		text-align: left;
		margin: 0;
		font-size: 14px;
		letter-spacing: 0.5px;
		user-select: none;
	}
	
	.alan_float_button svg {
		fill: white;
	}
	
	.alan_chat_content {
		width: 380px;
		position: fixed;

		z-index: 999999;
		right: 32px;
		bottom: 32px;
		display: flex;
		flex-direction: column;
		box-shadow: 0 0 50px 0 rgba(0,0,0,0.20);
		font-family: Arial, sans-serif;
		border-radius: 12px 12px 12px 12px;
		transition: border-radius 0.25s ease,
								width 0.25s ease,
								bottom 0.25s ease;
		overflow: hidden;
		


	}
	
	.webchat-iframe {
		overscroll-behavior: contain; 
		height: 620px;
		width: 100%;
		border: none;
		display: block !important;
	}
	
	
	.alan_chat_header {
		background: var(--color-accent);
		height: 42px;
		text-align: center;
		color: white;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: bold;
		cursor: pointer;
		flex-direction: row;
		padding: 0 12px 0 16px;
		box-sizing: border-box;
		z-index : 9999;
	}
	.alan_chat_header:hover {
		filter: brightness(95%);
	}
	.alan_chat_header:active {
		filter: brightness(90%);
	}
	
	.alan_chat_header h3 {
		flex-grow: 1;
		text-align: left;
		margin: 0;
		font-size: 14px;
		letter-spacing: 0.5px;
		user-select: none;
	}
	.alan_chat_header svg {
		fill: white;
		transition: transform 0.3s ease;
	}
	
	.alan_chat_body {
		background: white;
		height: 620px;
		text-align: center;
		font-size: 11px;
		color: white;
		transition: height 0.25s ease;
	



	}
	
	.alan_chat_content.alan_chat_hide {
		border-radius: 12px 12px 0 0;
		bottom: 0;
		width: 300px;  
	}

	
	.alan_chat_hide .alan_chat_header svg {
		transform: scaleY(-1);
	}
	
	.alan_chat_hide .alan_chat_body {
		height: 0;
	}
	.webchat-iframe-hide{
		display:none !important;
	}
	@media (max-height: 800px) {
		.webchat-iframe {
				height: 75vh;
			}
			.alan_chat_body{
				height: 74vh;
			}
	}


	@media (max-width: 480px) {
	
		.webchat-iframe {
			height: 100%;
		}
	
		.alan_chat_content {
			right: 0;
			bottom: 0;
			width: 100%;
			border-radius: 0;
		}
	
		.alan_chat_content.alan_chat_hide {
			/*height: 42px;*/
			width: 100%;
		}
	
		.alan_chat_header {
			width: 100%;
			height: 42px;
			border-radius: 0;
		}
	
		.alan_chat_body {
			width: 100%;
			height: calc(${window.innerHeight}px - 42px);
		}
	
		.alan_chat_content.alan_chat_hide .alan_chat_body {
			height: 0;
		}
		.alan_hide_mobile{
				display: none;
		}
    body.scroll-lock {
      overflow: hidden;
    }
    
	}
`;

/* Parte 2: JS */

var AlanChat = {
  url: "",
  title: "Ayuda en línea",
  fabType: "magic",
  parent: "body",
  buttonHidden: false,
  alwaysSameFab: false,
  callBack: function (data) {
    console.log("callback func", data);
  },
};

AlanChat.setLoading = function (status) {
  if (!status) {
    AlanChat.loadIframe();
  }
};

AlanChat.setParent = function (p) {
  AlanChat.parent = p;
};

function updateURLParameter(url, param, paramVal) {
  var newAdditionalURL = "";
  var tempArray = url.split("?");
  var baseURL = tempArray[0];
  var additionalURL = tempArray[1];
  var temp = "";
  if (additionalURL) {
    tempArray = additionalURL.split("&");
    for (var i = 0; i < tempArray.length; i++) {
      if (tempArray[i].split("=")[0] != param) {
        newAdditionalURL += temp + tempArray[i];
        temp = "&";
      }
    }
  }

  var rows_txt = temp + "" + param + "=" + paramVal;
  return baseURL + "?" + newAdditionalURL + rows_txt;
}
var positionX = "32px";
var positionY = "32px";
var isDragging = false;

AlanChat.setUrl = function (url) {
  console.log("AlanChatSetURL")
  AlanChat.url = updateURLParameter(url, "front-version", "4.3.4-SNAPSHOT");
};
AlanChat.search = function (url) {
  AlanChat.url = url;
};
AlanChat.setButtonHidden = function (buttonHidden) {
  AlanChat.buttonHidden = buttonHidden;
};

AlanChat.data = [];
AlanChat._onload = function () {
  AlanChat.ready = true;
  AlanChat._sendData();
};
AlanChat._sendData = function () {
  if (AlanChat.ready) {
    // console.log('ready:senddata',AlanChat.data)
    setTimeout(function () {
      if (AlanChat.data && AlanChat.data.length > 0) {
        for (let row of AlanChat.data) {
          var frame = document.getElementsByClassName("webchat-iframe")[0];
          frame.contentWindow.postMessage(
            { call: "sendData", value: row },
            AlanChat.url
          );
        }
      }
      AlanChat.data = [];
    }, 100);
  } else {
    console.log("not ready:queueddata", AlanChat.data);
  }
};
AlanChat.sendData = function (data) {
  console.log("data:queue", data);
  AlanChat.data = [];
  AlanChat.data.push(data);
  AlanChat._sendData();
};
AlanChat.runScripts = undefined;

AlanChat.loadScripts = function (j, file) {
  var idx = j.src.lastIndexOf("/") + 1;
  var path = j.src.substring(0, idx);

  AlanChat.runScripts = function () {
    const alanSDK = document.createElement("script");
    alanSDK.src = path + file + ".js?10";
    document.head.appendChild(alanSDK);
  };
};

AlanChat.setTitle = function (title) {
  AlanChat.title = title;
};
AlanChat.setCallBackFunc = function (func) {
  AlanChat.callBack = func;
};

AlanChat.setAccentColor = function (color) {
  document.documentElement.style.setProperty("--color-accent", color);
};

AlanChat.setFabType = function (type) {
  AlanChat.fabType = type;
};
AlanChat.setAlwaysSameFab = function (value) {
  AlanChat.alwaysSameFab = value;
  if (value && AlanChat.fabType == "icon") {
    let baseElement = document.getElementsByTagName("body")[0];
    if (AlanChat.parent != "body") {
      baseElement = document.getElementById(AlanChat.parent);
    }

    let element = document.getElementById("alanActionButton");
    baseElement.removeChild(element);

    var iDiv = document.createElement("div");
    iDiv.id = "alanActionButton";
    iDiv.className = "alan_float_button";

    baseElement.appendChild(iDiv);
    iDiv.insertAdjacentHTML(
      "afterbegin",
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="24px" height="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/></svg>'
    );

    iDiv.addEventListener("click", function () {
      iDiv.className = "alan_float_button";
      AlanChat.loadIframe();
    });
  }
};
AlanChat.open = function (type) {
  try {
    document.getElementById("alanActionButton").click();
  } catch (ex) {
    try {
      document.getElementById("alanHeaderButton").click();
    } catch (ex) {}
  }
};
var isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return (
      navigator.userAgent.match(/IEMobile/i) ||
      navigator.userAgent.match(/WPDesktop/i)
    );
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};
function scrollListener() {
  // element.classList.toggle("alan_chat_hide");
  // Get the current page scroll position
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  (scrollLeft = window.pageXOffset || document.documentElement.scrollLeft),
    // if any scroll is attempted, // set this to the previous value
    (window.onscroll = function () {
      var element = document.getElementById("alanChatContent");
      if (element && !element.classList.contains("alan_chat_hide")) {
        window.scrollTo(scrollLeft, scrollTop);
      }
    });
}
if (isMobile.any() != null) {
  scrollListener();
}

if (window.addEventListener) {
  window.addEventListener("message", onMessage, false);
} else if (window.attachEvent) {
  window.attachEvent("onmessage", onMessage, false);
}

function onMessage(event) {
  var data = event.data;

  if (typeof window[data.func] == "function") {
    window[data.func].call(null, data.message);
  }
}

// Function to be called from iframe
function receiveActivity(message) {
  AlanChat.callBack(message);
}
AlanChat.ready = false;
AlanChat.start = function () {
  if (AlanChat.parent != "body") {
    alanChatStyles = alanChatStyles + " #alanActionButton{position: relative;}";
  }

  // If using magic, hide iconFab when width over 480px
  if (AlanChat.fabType == "magic") {
    alanChatStyles +=
      " @media (min-width: 481px) { #alanActionButton:not(.fab_text) { display: none; } }";
  }
  // If using icon, hide header when hiding chat
  else if (AlanChat.fabType == "icon") {
    alanChatStyles += " .alan_hide_mobile { display: none; }";
  }

  var styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = alanChatStyles;
  styleSheet.rel = "stylesheet";
  styleSheet.media = "screen,print";
  document.head.appendChild(styleSheet);

  function getVW() {
    return Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    );
  }

  // // Unused
  // function getVH() {
  //   return Math.max(
  //     document.documentElement.clientHeight || 0,
  //     window.innerHeight || 0
  //   );
  // }

  function createDiv(id, className) {
    const div = document.createElement("div");
    div.id = id;
    if (className) {
      div.className = className;
    }
    return div;
  }

  // "Should the textFab be visible now?"
  function isTextFab() {
    return (
      AlanChat.fabType === "text" ||
      (AlanChat.fabType === "magic" && !(getVW() <= 480 && isMobile.any()))
    );
  }

  // "Are we using the iconFab at all?"
  function usingIconFab() {
    return (
      AlanChat.fabType === "icon" ||
      (AlanChat.fabType === "magic" && isMobile.any())
    );
  }
  function usingIconFabMobile() {
    return (
      AlanChat.fabType === "icon" ||
      (AlanChat.fabType === "magic" && getVW() <= 480 && !!isMobile.any())
    );
  }

  const iconFabSvg =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="24px" height="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 9h12v2H6V9zm8 5H6v-2h8v2zm4-6H6V6h12v2z"/></svg>';
  const textFabText = "<h3>" + AlanChat.title + "</h3>";

  let baseElement =
    AlanChat.parent == "body"
      ? document.getElementsByTagName("body")[0]
      : (baseElement = document.getElementById(AlanChat.parent));

  const iDiv = createDiv(
    "alanActionButton",
    isTextFab() ? "alan_float_button fab_text" : "alan_float_button"
  );
  baseElement.appendChild(iDiv);
  iDiv.insertAdjacentHTML("afterbegin", isTextFab() ? textFabText : iconFabSvg);

  const iDivChat = createDiv("alanChat");

  const iDivHeaderTitle = document.createElement("h3");
  iDivHeaderTitle.id = "alanHeaderText";

  const iDivHeader = createDiv("alanHeaderButton");

  const iDivContent = createDiv("alanChatContent", "alan_chat_content");

  if (AlanChat.buttonHidden) {
    try {
      document
        .getElementById("alanActionButton")
        .style.setProperty("display", "none");
    } catch (ex) {
      try {
        document
          .getElementById("alanHeaderButton")
          .style.setProperty("display", "none");
      } catch (ex) {}
    }
  }

  if (usingIconFabMobile()) {
    var isDragging = false;
    var initialX, initialY, offsetX, offsetY;

    const element = document.getElementById("alanActionButton");

    element.addEventListener(
      "touchstart",
      (e) => {
        isDragging = true;
        var touch = e.touches[0];
        initialX = touch.clientX;
        initialY = touch.clientY;
        offsetX = parseFloat(getComputedStyle(element).left);
        offsetY = parseFloat(getComputedStyle(element).top);
        element.style.transition = "none";
        document.body.style.overflow = "hidden";
        document.body.classList.add("scroll-lock");
      },
      { passive: false }
    );

    document.addEventListener(
      "touchmove",
      (e) => {
        if (!isDragging) return;
        var touch = e.touches[0];
        const deltaX = touch.clientX - initialX;
        const deltaY = touch.clientY - initialY;

        element.style.left = offsetX + deltaX + "px";
        element.style.top = offsetY + deltaY + "px";
        e.preventDefault();
      },
      { passive: false }
    );

    document.addEventListener("touchend", () => {
      isDragging = false;
      positionX = element.style.left;
      positionY = element.style.top;
      element.style.transition = "";
      document.body.style.overflow = "auto";
      document.body.classList.remove("scroll-lock");
    });
  }

  AlanChat.loadIframe = function () {
    if (baseElement.contains(iDiv)) {
      positionX = iDiv.style.left;
      positionY = iDiv.style.top;

      // iDiv.setProperty("display", "none"); // Didn't work for some reason, I have no idea
      baseElement.removeChild(iDiv);
    }

    iDivChat.className = "alan_chat_body";
    iDivChat.innerHTML =
      '<iframe #iframeId onload="AlanChat._onload()" class="webchat-iframe" src="' +
      AlanChat.url +
      '"></iframe>';

    iDivHeader.className = "alan_chat_header";
    iDivHeaderTitle.innerHTML = AlanChat.title;

    iDivHeader.appendChild(iDivHeaderTitle);
    iDivHeader.insertAdjacentHTML(
      "beforeend",
      '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/></svg>'
    );

    iDivContent.className = "alan_chat_content";
    iDivContent.appendChild(iDivHeader);
    iDivContent.appendChild(iDivChat);

    baseElement.appendChild(iDivContent);

    // var elementExists = document.getElementById("alanChat"); // Unused?

    var openButton;
    if (usingIconFab()) {
      // iconFab
      openButton = createDiv("alanActionButton", "alan_float_button");
      baseElement.appendChild(openButton);
      openButton.insertAdjacentHTML("afterbegin", iconFabSvg);
      openButton.style.display = "none";
      openButton.style.top = positionY;
      openButton.style.left = positionX;

      // Hide alanActionButton when it's clicked
      openButton.addEventListener("click", function () {
        const element = document.getElementById("alanChatContent");

        if (element.classList.toggle("alan_chat_hide")) {
          element.classList.add("alan_hide_mobile");
        } else {
          element.classList.remove("alan_hide_mobile");
        }
        openButton.style.setProperty("display", "none");

        let e = document.getElementsByClassName("webchat-iframe")[0];
        if (e) {
          e.classList.toggle("webchat-iframe-hide");
        }
      });
    }

    document
      .getElementById("alanHeaderButton")
      .addEventListener("click", function () {
        var element = document.getElementById("alanChatContent");
        var isChatHidden = element.classList.toggle("alan_chat_hide");

        // console.log(AlanChat.alwaysSameFab);

        if (usingIconFab()) {
          if (isChatHidden) {
            element.classList.add("alan_hide_mobile");
          } else {
            element.classList.remove("alan_hide_mobile");
          }

          openButton.style.removeProperty("display");
          openButton.style.top = positionY;
          openButton.style.left = positionX;

          // // CONSIDER: What does alwaysSameFab do anyways?
          // if (AlanChat.alwaysSameFab) {
          //   this.style.setProperty("display", "none");

          //   openButton.addEventListener("click", function () {
          //     document
          //       .getElementById("alanHeaderButton")
          //       .style.setProperty("display", "flex");

          //     // CONSIDER: Why is this here?
          //     let e = document.getElementsByClassName("webchat-iframe")[0];
          //     if (e) {
          //       e.classList.toggle("webchat-iframe-hide");
          //     }
          //   });
          // }
        }

        let e = document.getElementsByClassName("webchat-iframe")[0];
        if (e) {
          e.classList.toggle("webchat-iframe-hide");
        }
      });

    if (usingIconFabMobile()) {
      var isDragging = false;
      var initialX, initialY, offsetX, offsetY;

      const element = document.getElementById("alanActionButton");

      element.addEventListener(
        "touchstart",
        (e) => {
          isDragging = true;
          var touch = e.touches[0];
          initialX = touch.clientX;
          initialY = touch.clientY;
          offsetX = parseFloat(getComputedStyle(element).left);
          offsetY = parseFloat(getComputedStyle(element).top);
          element.style.transition = "none";
          document.body.style.overflow = "hidden";
          document.body.classList.add("scroll-lock");
        },
        { passive: false }
      );

      document.addEventListener(
        "touchmove",
        (e) => {
          if (!isDragging) return;
          var touch = e.touches[0];
          const deltaX = touch.clientX - initialX;
          const deltaY = touch.clientY - initialY;

          element.style.left = offsetX + deltaX + "px";
          element.style.top = offsetY + deltaY + "px";
          e.preventDefault();
        },
        { passive: false }
      );

      document.addEventListener("touchend", () => {
        isDragging = false;
        positionX = element.style.left;
        positionY = element.style.top;
        element.style.transition = "";
        document.body.style.overflow = "auto";
        document.body.classList.remove("scroll-lock");
      });
    }
  };
  // if (isMobile.any() != null) {
  //   window.onresize = function () {
  //     iDivChat.style.setProperty("min-height", `${window.innerHeight - 42}px`)
  //   }
  // }
  document
    .getElementById("alanActionButton")
    .addEventListener("click", function () {
      if (AlanChat.runScripts) {
        document.getElementById("alanActionButton").innerHTML =
          '<svg version="1.1" id="L7" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve"><path fill="#fff" d="M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3    c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z"><animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="2s" from="0 50 50" to="360 50 50" repeatCount="indefinite"></animateTransform> </path> <path fill="#fff" d="M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7    c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z"> <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1s" from="0 50 50" to="-360 50 50" repeatCount="indefinite"></animateTransform>  </path> <path fill="#fff" d="M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5    L82,35.7z"> <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="2s" from="0 50 50" to="360 50 50" repeatCount="indefinite"></animateTransform>  </path></svg>';
        document.getElementById("alanActionButton").style = "padding: 10px";

        AlanChat.runScripts();
      } else {
        AlanChat.loadIframe();
      }
    });
};

