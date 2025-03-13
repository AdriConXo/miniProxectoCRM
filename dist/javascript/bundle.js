/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/clases/Comunicacion.ts":
/*!************************************!*\
  !*** ./src/clases/Comunicacion.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Comunicacion: () => (/* binding */ Comunicacion)
/* harmony export */ });
class Comunicacion {
    static datos;
    static async metodoGet(endpoint) {
        console.log("this.endpoint ", endpoint);
        let datoServidor = await fetch(endpoint);
        this.datos = await datoServidor.json();
    }
    static async metodoPost(endpoint) {
        let datosEnvio = {
            dato1: "mariano",
            dato2: "pepito",
            dato3: 5
        };
        let obxetoEnvio = {
            method: 'post',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(datosEnvio)
        };
        let resposta = await fetch(endpoint, obxetoEnvio);
        this.datos = await resposta.json();
    }
    static get respostaServidor() {
        return this.datos;
    }
}


/***/ }),

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _clases_Comunicacion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clases/Comunicacion */ "./src/clases/Comunicacion.ts");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/main.css */ "./src/css/main.css");

 // Temos que integrar o CSS para que webpack o compile
if (location.pathname == "/logueo-basico") {
    const refBotonGET = document.querySelector("#solicitudeGET");
    const refBotonPOST = document.querySelector("#solicitudePOST");
    // INTRODUZCO DOUS BOTÓNS SIMULANDO 'EVENTOS' 
    // UN POST
    // UN GET 
    refBotonGET.addEventListener("click", async () => {
        let endpoint = "/recibo-datos-do-servidor";
        await _clases_Comunicacion__WEBPACK_IMPORTED_MODULE_0__.Comunicacion.metodoGet(endpoint);
        console.log(_clases_Comunicacion__WEBPACK_IMPORTED_MODULE_0__.Comunicacion.respostaServidor);
        // UTILIZARÍAMOS O DATO QUE CHEGA DO SERVIDOR PARA PINTAR
    });
    refBotonPOST.addEventListener("click", async () => {
        let endpoint = "/envio-datos-o-servidor";
        await _clases_Comunicacion__WEBPACK_IMPORTED_MODULE_0__.Comunicacion.metodoPost(endpoint);
        console.log(_clases_Comunicacion__WEBPACK_IMPORTED_MODULE_0__.Comunicacion.respostaServidor);
        // UTILIZARÍAMOS O DATO QUE CHEGA DO SERVIDOR PARA PINTAR
    });
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamF2YXNjcmlwdC9idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBTyxNQUFNLFlBQVk7SUFFckIsTUFBTSxDQUFDLEtBQUssQ0FBUztJQUVyQixNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxRQUFnQjtRQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFDLFFBQVEsQ0FBQztRQUN0QyxJQUFJLFlBQVksR0FBRyxNQUFNLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzNDLENBQUM7SUFFRCxNQUFNLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxRQUFnQjtRQU9wQyxJQUFJLFVBQVUsR0FBZ0I7WUFDMUIsS0FBSyxFQUFFLFNBQVM7WUFDaEIsS0FBSyxFQUFFLFFBQVE7WUFDZixLQUFLLEVBQUUsQ0FBQztTQUNYO1FBRUQsSUFBSSxXQUFXLEdBQUc7WUFDZCxNQUFNLEVBQUUsTUFBTTtZQUNkLE9BQU8sRUFBRTtnQkFDTCxjQUFjLEVBQUMsa0JBQWtCO2FBQ3BDO1lBQ0QsSUFBSSxFQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDO1NBQ2xDO1FBQ0QsSUFBSSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQUMsUUFBUSxFQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7SUFFdkMsQ0FBQztJQUVELE1BQU0sS0FBSyxnQkFBZ0I7UUFDdkIsT0FBTyxJQUFJLENBQUMsS0FBSztJQUNyQixDQUFDO0NBQ0o7Ozs7Ozs7Ozs7OztBQ3RDRDs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTHFEO0FBRTdCLENBQUMsc0RBQXNEO0FBRS9FLElBQUcsUUFBUSxDQUFDLFFBQVEsSUFBSSxnQkFBZ0IsRUFBQyxDQUFDO0lBQ3RDLE1BQU0sV0FBVyxHQUFzQixRQUFRLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDaEYsTUFBTSxZQUFZLEdBQXNCLFFBQVEsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUM7SUFFakYsOENBQThDO0lBQzlDLFVBQVU7SUFDVixVQUFVO0lBR1YsV0FBVyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBQyxLQUFLLElBQUksRUFBRTtRQUM1QyxJQUFJLFFBQVEsR0FBRywyQkFBMkIsQ0FBQztRQUMzQyxNQUFNLDhEQUFZLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQztRQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLDhEQUFZLENBQUMsZ0JBQWdCLENBQUM7UUFDMUMseURBQXlEO0lBQzdELENBQUMsQ0FBQztJQUNGLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUMsS0FBSyxJQUFHLEVBQUU7UUFDNUMsSUFBSSxRQUFRLEdBQUcseUJBQXlCO1FBQ3hDLE1BQU0sOERBQVksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO1FBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMsOERBQVksQ0FBQyxnQkFBZ0IsQ0FBQztRQUMxQyx5REFBeUQ7SUFDN0QsQ0FBQyxDQUFDO0FBQ04sQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbnR5cGVzY3JpcHQwLy4vc3JjL2NsYXNlcy9Db211bmljYWNpb24udHMiLCJ3ZWJwYWNrOi8vY29udHlwZXNjcmlwdDAvLi9zcmMvY3NzL21haW4uY3NzP2MwOGUiLCJ3ZWJwYWNrOi8vY29udHlwZXNjcmlwdDAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY29udHlwZXNjcmlwdDAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2NvbnR5cGVzY3JpcHQwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY29udHlwZXNjcmlwdDAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jb250eXBlc2NyaXB0MC8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ29tdW5pY2FjaW9ue1xuICAgIFxuICAgIHN0YXRpYyBkYXRvczogT2JqZWN0O1xuICAgIFxuICAgIHN0YXRpYyBhc3luYyBtZXRvZG9HZXQoZW5kcG9pbnQ6IHN0cmluZyl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidGhpcy5lbmRwb2ludCBcIixlbmRwb2ludClcbiAgICAgICAgbGV0IGRhdG9TZXJ2aWRvciA9IGF3YWl0IGZldGNoKGVuZHBvaW50KTtcbiAgICAgICAgdGhpcy5kYXRvcyA9IGF3YWl0IGRhdG9TZXJ2aWRvci5qc29uKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGFzeW5jIG1ldG9kb1Bvc3QoZW5kcG9pbnQ6IHN0cmluZyl7XG4gICAgICAgIHR5cGUgZGF0b3NPYnhldG8gPSB7XG4gICAgICAgICAgICBkYXRvMTogc3RyaW5nLFxuICAgICAgICAgICAgZGF0bzI6IHN0cmluZyxcbiAgICAgICAgICAgIGRhdG8zOiBudW1iZXJcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgbGV0IGRhdG9zRW52aW86IGRhdG9zT2J4ZXRvID0ge1xuICAgICAgICAgICAgZGF0bzE6IFwibWFyaWFub1wiLFxuICAgICAgICAgICAgZGF0bzI6IFwicGVwaXRvXCIsXG4gICAgICAgICAgICBkYXRvMzogNVxuICAgICAgICB9XG4gICAgXG4gICAgICAgIGxldCBvYnhldG9FbnZpbyA9IHtcbiAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC10eXBlXCI6XCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2R5OkpTT04uc3RyaW5naWZ5KGRhdG9zRW52aW8pXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJlc3Bvc3RhID0gYXdhaXQgZmV0Y2goZW5kcG9pbnQsb2J4ZXRvRW52aW8pO1xuICAgICAgICB0aGlzLmRhdG9zID0gYXdhaXQgcmVzcG9zdGEuanNvbigpO1xuXG4gICAgfVxuXG4gICAgc3RhdGljIGdldCByZXNwb3N0YVNlcnZpZG9yKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdG9zXG4gICAgfVxufVxuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlxuaW1wb3J0IHsgQ29tdW5pY2FjaW9uIH0gZnJvbSBcIi4vY2xhc2VzL0NvbXVuaWNhY2lvblwiO1xuXG5pbXBvcnQgJy4vY3NzL21haW4uY3NzJzsgLy8gVGVtb3MgcXVlIGludGVncmFyIG8gQ1NTIHBhcmEgcXVlIHdlYnBhY2sgbyBjb21waWxlXG5cbmlmKGxvY2F0aW9uLnBhdGhuYW1lID09IFwiL2xvZ3Vlby1iYXNpY29cIil7XG4gICAgY29uc3QgcmVmQm90b25HRVQ6IEhUTUxCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzb2xpY2l0dWRlR0VUXCIpO1xuICAgIGNvbnN0IHJlZkJvdG9uUE9TVDogSFRNTEJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NvbGljaXR1ZGVQT1NUXCIpXG4gICAgXG4gICAgLy8gSU5UUk9EVVpDTyBET1VTIEJPVMOTTlMgU0lNVUxBTkRPICdFVkVOVE9TJyBcbiAgICAvLyBVTiBQT1NUXG4gICAgLy8gVU4gR0VUIFxuICAgIFxuXG4gICAgcmVmQm90b25HRVQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsYXN5bmMgKCkgPT57XG4gICAgICAgIGxldCBlbmRwb2ludCA9IFwiL3JlY2liby1kYXRvcy1kby1zZXJ2aWRvclwiO1xuICAgICAgICBhd2FpdCBDb211bmljYWNpb24ubWV0b2RvR2V0KGVuZHBvaW50KVxuICAgICAgICBjb25zb2xlLmxvZyhDb211bmljYWNpb24ucmVzcG9zdGFTZXJ2aWRvcilcbiAgICAgICAgLy8gVVRJTElaQVLDjUFNT1MgTyBEQVRPIFFVRSBDSEVHQSBETyBTRVJWSURPUiBQQVJBIFBJTlRBUlxuICAgIH0pXG4gICAgcmVmQm90b25QT1NULmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGFzeW5jICgpPT57XG4gICAgICAgIGxldCBlbmRwb2ludCA9IFwiL2VudmlvLWRhdG9zLW8tc2Vydmlkb3JcIlxuICAgICAgICBhd2FpdCBDb211bmljYWNpb24ubWV0b2RvUG9zdChlbmRwb2ludClcbiAgICAgICAgY29uc29sZS5sb2coQ29tdW5pY2FjaW9uLnJlc3Bvc3RhU2Vydmlkb3IpXG4gICAgICAgIC8vIFVUSUxJWkFSw41BTU9TIE8gREFUTyBRVUUgQ0hFR0EgRE8gU0VSVklET1IgUEFSQSBQSU5UQVJcbiAgICB9KVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9