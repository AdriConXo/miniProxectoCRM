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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qYXZhc2NyaXB0L2J1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPLE1BQU0sWUFBWTtJQUVyQixNQUFNLENBQUMsS0FBSyxDQUFTO0lBRXJCLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLFFBQWdCO1FBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUMsUUFBUSxDQUFDO1FBQ3RDLElBQUksWUFBWSxHQUFHLE1BQU0sS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDM0MsQ0FBQztJQUVELE1BQU0sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLFFBQWdCO1FBT3BDLElBQUksVUFBVSxHQUFnQjtZQUMxQixLQUFLLEVBQUUsU0FBUztZQUNoQixLQUFLLEVBQUUsUUFBUTtZQUNmLEtBQUssRUFBRSxDQUFDO1NBQ1g7UUFFRCxJQUFJLFdBQVcsR0FBRztZQUNkLE1BQU0sRUFBRSxNQUFNO1lBQ2QsT0FBTyxFQUFFO2dCQUNMLGNBQWMsRUFBQyxrQkFBa0I7YUFDcEM7WUFDRCxJQUFJLEVBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUM7U0FDbEM7UUFDRCxJQUFJLFFBQVEsR0FBRyxNQUFNLEtBQUssQ0FBQyxRQUFRLEVBQUMsV0FBVyxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUV2QyxDQUFDO0lBRUQsTUFBTSxLQUFLLGdCQUFnQjtRQUN2QixPQUFPLElBQUksQ0FBQyxLQUFLO0lBQ3JCLENBQUM7Q0FDSjs7Ozs7Ozs7Ozs7O0FDdENEOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNMcUQ7QUFFN0IsQ0FBQyxzREFBc0Q7QUFFL0UsSUFBRyxRQUFRLENBQUMsUUFBUSxJQUFJLGdCQUFnQixFQUFDLENBQUM7SUFDdEMsTUFBTSxXQUFXLEdBQXNCLFFBQVEsQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNoRixNQUFNLFlBQVksR0FBc0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQztJQUVqRiw4Q0FBOEM7SUFDOUMsVUFBVTtJQUNWLFVBQVU7SUFHVixXQUFXLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFDLEtBQUssSUFBSSxFQUFFO1FBQzVDLElBQUksUUFBUSxHQUFHLDJCQUEyQixDQUFDO1FBQzNDLE1BQU0sOERBQVksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDO1FBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsOERBQVksQ0FBQyxnQkFBZ0IsQ0FBQztRQUMxQyx5REFBeUQ7SUFDN0QsQ0FBQyxDQUFDO0lBQ0YsWUFBWSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBQyxLQUFLLElBQUcsRUFBRTtRQUM1QyxJQUFJLFFBQVEsR0FBRyx5QkFBeUI7UUFDeEMsTUFBTSw4REFBWSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7UUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw4REFBWSxDQUFDLGdCQUFnQixDQUFDO1FBQzFDLHlEQUF5RDtJQUM3RCxDQUFDLENBQUM7QUFDTixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29udHlwZXNjcmlwdDAvLi9zcmMvY2xhc2VzL0NvbXVuaWNhY2lvbi50cyIsIndlYnBhY2s6Ly9jb250eXBlc2NyaXB0MC8uL3NyYy9jc3MvbWFpbi5jc3M/YzA4ZSIsIndlYnBhY2s6Ly9jb250eXBlc2NyaXB0MC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jb250eXBlc2NyaXB0MC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY29udHlwZXNjcmlwdDAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jb250eXBlc2NyaXB0MC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NvbnR5cGVzY3JpcHQwLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDb211bmljYWNpb257XG4gICAgXG4gICAgc3RhdGljIGRhdG9zOiBPYmplY3Q7XG4gICAgXG4gICAgc3RhdGljIGFzeW5jIG1ldG9kb0dldChlbmRwb2ludDogc3RyaW5nKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzLmVuZHBvaW50IFwiLGVuZHBvaW50KVxuICAgICAgICBsZXQgZGF0b1NlcnZpZG9yID0gYXdhaXQgZmV0Y2goZW5kcG9pbnQpO1xuICAgICAgICB0aGlzLmRhdG9zID0gYXdhaXQgZGF0b1NlcnZpZG9yLmpzb24oKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYXN5bmMgbWV0b2RvUG9zdChlbmRwb2ludDogc3RyaW5nKXtcbiAgICAgICAgdHlwZSBkYXRvc09ieGV0byA9IHtcbiAgICAgICAgICAgIGRhdG8xOiBzdHJpbmcsXG4gICAgICAgICAgICBkYXRvMjogc3RyaW5nLFxuICAgICAgICAgICAgZGF0bzM6IG51bWJlclxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBsZXQgZGF0b3NFbnZpbzogZGF0b3NPYnhldG8gPSB7XG4gICAgICAgICAgICBkYXRvMTogXCJtYXJpYW5vXCIsXG4gICAgICAgICAgICBkYXRvMjogXCJwZXBpdG9cIixcbiAgICAgICAgICAgIGRhdG8zOiA1XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgbGV0IG9ieGV0b0VudmlvID0ge1xuICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgXCJDb250ZW50LXR5cGVcIjpcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6SlNPTi5zdHJpbmdpZnkoZGF0b3NFbnZpbylcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVzcG9zdGEgPSBhd2FpdCBmZXRjaChlbmRwb2ludCxvYnhldG9FbnZpbyk7XG4gICAgICAgIHRoaXMuZGF0b3MgPSBhd2FpdCByZXNwb3N0YS5qc29uKCk7XG5cbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0IHJlc3Bvc3RhU2Vydmlkb3IoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0b3NcbiAgICB9XG59XG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiXG5pbXBvcnQgeyBDb211bmljYWNpb24gfSBmcm9tIFwiLi9jbGFzZXMvQ29tdW5pY2FjaW9uXCI7XG5cbmltcG9ydCAnLi9jc3MvbWFpbi5jc3MnOyAvLyBUZW1vcyBxdWUgaW50ZWdyYXIgbyBDU1MgcGFyYSBxdWUgd2VicGFjayBvIGNvbXBpbGVcblxuaWYobG9jYXRpb24ucGF0aG5hbWUgPT0gXCIvbG9ndWVvLWJhc2ljb1wiKXtcbiAgICBjb25zdCByZWZCb3RvbkdFVDogSFRNTEJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NvbGljaXR1ZGVHRVRcIik7XG4gICAgY29uc3QgcmVmQm90b25QT1NUOiBIVE1MQnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc29saWNpdHVkZVBPU1RcIilcbiAgICBcbiAgICAvLyBJTlRST0RVWkNPIERPVVMgQk9Uw5NOUyBTSU1VTEFORE8gJ0VWRU5UT1MnIFxuICAgIC8vIFVOIFBPU1RcbiAgICAvLyBVTiBHRVQgXG4gICAgXG5cbiAgICByZWZCb3RvbkdFVC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixhc3luYyAoKSA9PntcbiAgICAgICAgbGV0IGVuZHBvaW50ID0gXCIvcmVjaWJvLWRhdG9zLWRvLXNlcnZpZG9yXCI7XG4gICAgICAgIGF3YWl0IENvbXVuaWNhY2lvbi5tZXRvZG9HZXQoZW5kcG9pbnQpXG4gICAgICAgIGNvbnNvbGUubG9nKENvbXVuaWNhY2lvbi5yZXNwb3N0YVNlcnZpZG9yKVxuICAgICAgICAvLyBVVElMSVpBUsONQU1PUyBPIERBVE8gUVVFIENIRUdBIERPIFNFUlZJRE9SIFBBUkEgUElOVEFSXG4gICAgfSlcbiAgICByZWZCb3RvblBPU1QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsYXN5bmMgKCk9PntcbiAgICAgICAgbGV0IGVuZHBvaW50ID0gXCIvZW52aW8tZGF0b3Mtby1zZXJ2aWRvclwiXG4gICAgICAgIGF3YWl0IENvbXVuaWNhY2lvbi5tZXRvZG9Qb3N0KGVuZHBvaW50KVxuICAgICAgICBjb25zb2xlLmxvZyhDb211bmljYWNpb24ucmVzcG9zdGFTZXJ2aWRvcilcbiAgICAgICAgLy8gVVRJTElaQVLDjUFNT1MgTyBEQVRPIFFVRSBDSEVHQSBETyBTRVJWSURPUiBQQVJBIFBJTlRBUlxuICAgIH0pXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=