/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./ts/clearInputs.ts":
/*!***************************!*\
  !*** ./ts/clearInputs.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.clearInputs = void 0;
function clearInputs(numberInput, codeInput) {
    numberInput.value = '';
    codeInput.value = '';
}
exports.clearInputs = clearInputs;


/***/ }),

/***/ "./ts/displayModal.ts":
/*!****************************!*\
  !*** ./ts/displayModal.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.displayModal = void 0;
const clearInputs_1 = __webpack_require__(/*! ./clearInputs */ "./ts/clearInputs.ts");
const elements_1 = __webpack_require__(/*! ./elements */ "./ts/elements.ts");
const wait_1 = __webpack_require__(/*! ./wait */ "./ts/wait.ts");
function displayModal(time) {
    return __awaiter(this, void 0, void 0, function* () {
        elements_1.modalInner.innerHTML = `
  <h2>Paczka odebrana!</h2>
  <p>Zrobiłeś to w czasie ${time} sekund! Czy możemy zrobić dla Ciebie coś jeszcze?</p>
  `;
        elements_1.endBtn.innerText = 'To wszystko na dziś';
        elements_1.endBtn.addEventListener('click', e => {
            elements_1.modalOuter.classList.remove('modal__outer--open');
            (0, clearInputs_1.clearInputs)(elements_1.inputsNumber, elements_1.inputsCode);
            elements_1.inputs.classList.toggle('inputs--active');
        });
        elements_1.repeatBtn.innerText = 'Odbierz kolejną paczkę';
        elements_1.repeatBtn.addEventListener('click', e => {
            elements_1.modalOuter.classList.remove('modal__outer--open');
            (0, clearInputs_1.clearInputs)(elements_1.inputsNumber, elements_1.inputsCode);
        });
        elements_1.modalInner.appendChild(elements_1.endBtn);
        elements_1.modalInner.appendChild(elements_1.repeatBtn);
        elements_1.shadow.classList.add('shadow--active');
        elements_1.loader.classList.add('loader--active');
        yield (0, wait_1.wait)(2000);
        elements_1.shadow.classList.remove('shadow--active');
        elements_1.loader.classList.remove('loader--active');
        elements_1.modalOuter.classList.add('modal__outer--open');
    });
}
exports.displayModal = displayModal;


/***/ }),

/***/ "./ts/elements.ts":
/*!************************!*\
  !*** ./ts/elements.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loader = exports.repeatBtn = exports.endBtn = exports.modalInner = exports.modalOuter = exports.inputsCode = exports.inputsNumber = exports.inputs = exports.collectBtn = exports.shadow = void 0;
exports.shadow = document.querySelector('.shadow');
exports.collectBtn = document.querySelector('.collect-btn');
exports.inputs = document.querySelector('.inputs');
exports.inputsNumber = document.querySelector('.inputs__number input');
exports.inputsCode = document.querySelector('.inputs__code input');
exports.modalOuter = document.querySelector('.modal__outer');
exports.modalInner = document.querySelector('.modal__inner');
exports.endBtn = document.querySelector('.end-btn');
exports.repeatBtn = document.querySelector('.repeat-btn');
exports.loader = document.querySelector('.loader');


/***/ }),

/***/ "./ts/inputsValidation.ts":
/*!********************************!*\
  !*** ./ts/inputsValidation.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validateNumber = exports.Validators = void 0;
var Validators;
(function (Validators) {
    Validators[Validators["NUMBER"] = 0] = "NUMBER";
    Validators[Validators["CODE"] = 1] = "CODE";
})(Validators = exports.Validators || (exports.Validators = {}));
function validateNumber(inputElement, type) {
    const reg = /^[0-9]+$/;
    const trimmedNum = inputElement.value.trim();
    if (type === Validators.NUMBER) {
        if (trimmedNum.match(reg) && trimmedNum.length === 9) {
            return true;
        }
    }
    if (type === Validators.CODE) {
        if (trimmedNum.match(reg) && trimmedNum.length === 4) {
            return true;
        }
    }
    return false;
}
exports.validateNumber = validateNumber;


/***/ }),

/***/ "./ts/wait.ts":
/*!********************!*\
  !*** ./ts/wait.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.wait = void 0;
const wait = (amount = 0) => new Promise(resolve => setTimeout(resolve, amount));
exports.wait = wait;


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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!****************!*\
  !*** ./app.ts ***!
  \****************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const elements_1 = __webpack_require__(/*! ./ts/elements */ "./ts/elements.ts");
const inputsValidation_1 = __webpack_require__(/*! ./ts/inputsValidation */ "./ts/inputsValidation.ts");
const displayModal_1 = __webpack_require__(/*! ./ts/displayModal */ "./ts/displayModal.ts");
const clearInputs_1 = __webpack_require__(/*! ./ts/clearInputs */ "./ts/clearInputs.ts");
(0, clearInputs_1.clearInputs)(elements_1.inputsNumber, elements_1.inputsCode);
let initTime;
elements_1.collectBtn.addEventListener('click', e => {
    console.log(elements_1.inputsNumber.value);
    if (elements_1.inputsNumber.value === '') {
        initTime = new Date();
    }
    if (!elements_1.inputs.classList.contains('inputs--active')) {
        elements_1.inputs.classList.toggle('inputs--active');
        initTime = new Date();
        console.log(initTime);
        return;
    }
    if ((0, inputsValidation_1.validateNumber)(elements_1.inputsNumber, inputsValidation_1.Validators.NUMBER) && (0, inputsValidation_1.validateNumber)(elements_1.inputsCode, inputsValidation_1.Validators.CODE)) {
        const currentTime = new Date();
        const diff = Math.ceil(Math.abs(currentTime.getTime() - initTime.getTime()) / 1000);
        (0, displayModal_1.displayModal)(diff);
    }
    else {
        alert('Niepoprawne dane.');
    }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7Ozs7Ozs7Ozs7O0FDUE47QUFDYjtBQUNBLDRCQUE0QiwrREFBK0QsaUJBQWlCO0FBQzVHO0FBQ0Esb0NBQW9DLE1BQU0sK0JBQStCLFlBQVk7QUFDckYsbUNBQW1DLE1BQU0sbUNBQW1DLFlBQVk7QUFDeEYsZ0NBQWdDO0FBQ2hDO0FBQ0EsS0FBSztBQUNMO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELG9CQUFvQjtBQUNwQixzQkFBc0IsbUJBQU8sQ0FBQywwQ0FBZTtBQUM3QyxtQkFBbUIsbUJBQU8sQ0FBQyxvQ0FBWTtBQUN2QyxlQUFlLG1CQUFPLENBQUMsNEJBQVE7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsTUFBTTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLG9CQUFvQjs7Ozs7Ozs7Ozs7QUMxQ1A7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsY0FBYyxHQUFHLGlCQUFpQixHQUFHLGNBQWMsR0FBRyxrQkFBa0IsR0FBRyxrQkFBa0IsR0FBRyxrQkFBa0IsR0FBRyxvQkFBb0IsR0FBRyxjQUFjLEdBQUcsa0JBQWtCLEdBQUcsY0FBYztBQUNoTSxjQUFjO0FBQ2Qsa0JBQWtCO0FBQ2xCLGNBQWM7QUFDZCxvQkFBb0I7QUFDcEIsa0JBQWtCO0FBQ2xCLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEIsY0FBYztBQUNkLGlCQUFpQjtBQUNqQixjQUFjOzs7Ozs7Ozs7OztBQ1pEO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELHNCQUFzQixHQUFHLGtCQUFrQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsc0NBQXNDLGtCQUFrQixLQUFLO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjs7Ozs7Ozs7Ozs7QUN2QlQ7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsWUFBWTtBQUNaO0FBQ0EsWUFBWTs7Ozs7OztVQ0paO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7QUN0QmE7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsbUJBQW1CLG1CQUFPLENBQUMsdUNBQWU7QUFDMUMsMkJBQTJCLG1CQUFPLENBQUMsdURBQXVCO0FBQzFELHVCQUF1QixtQkFBTyxDQUFDLCtDQUFtQjtBQUNsRCxzQkFBc0IsbUJBQU8sQ0FBQyw2Q0FBa0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Rhc2svLi90cy9jbGVhcklucHV0cy50cyIsIndlYnBhY2s6Ly90YXNrLy4vdHMvZGlzcGxheU1vZGFsLnRzIiwid2VicGFjazovL3Rhc2svLi90cy9lbGVtZW50cy50cyIsIndlYnBhY2s6Ly90YXNrLy4vdHMvaW5wdXRzVmFsaWRhdGlvbi50cyIsIndlYnBhY2s6Ly90YXNrLy4vdHMvd2FpdC50cyIsIndlYnBhY2s6Ly90YXNrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Rhc2svLi9hcHAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5jbGVhcklucHV0cyA9IHZvaWQgMDtcclxuZnVuY3Rpb24gY2xlYXJJbnB1dHMobnVtYmVySW5wdXQsIGNvZGVJbnB1dCkge1xyXG4gICAgbnVtYmVySW5wdXQudmFsdWUgPSAnJztcclxuICAgIGNvZGVJbnB1dC52YWx1ZSA9ICcnO1xyXG59XHJcbmV4cG9ydHMuY2xlYXJJbnB1dHMgPSBjbGVhcklucHV0cztcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbnZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmRpc3BsYXlNb2RhbCA9IHZvaWQgMDtcclxuY29uc3QgY2xlYXJJbnB1dHNfMSA9IHJlcXVpcmUoXCIuL2NsZWFySW5wdXRzXCIpO1xyXG5jb25zdCBlbGVtZW50c18xID0gcmVxdWlyZShcIi4vZWxlbWVudHNcIik7XHJcbmNvbnN0IHdhaXRfMSA9IHJlcXVpcmUoXCIuL3dhaXRcIik7XHJcbmZ1bmN0aW9uIGRpc3BsYXlNb2RhbCh0aW1lKSB7XHJcbiAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xyXG4gICAgICAgIGVsZW1lbnRzXzEubW9kYWxJbm5lci5pbm5lckhUTUwgPSBgXG4gIDxoMj5QYWN6a2Egb2RlYnJhbmEhPC9oMj5cbiAgPHA+WnJvYmnFgmXFmyB0byB3IGN6YXNpZSAke3RpbWV9IHNla3VuZCEgQ3p5IG1vxbxlbXkgenJvYmnEhyBkbGEgQ2llYmllIGNvxZsgamVzemN6ZT88L3A+XG4gIGA7XHJcbiAgICAgICAgZWxlbWVudHNfMS5lbmRCdG4uaW5uZXJUZXh0ID0gJ1RvIHdzenlzdGtvIG5hIGR6acWbJztcclxuICAgICAgICBlbGVtZW50c18xLmVuZEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgICAgICBlbGVtZW50c18xLm1vZGFsT3V0ZXIuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWxfX291dGVyLS1vcGVuJyk7XHJcbiAgICAgICAgICAgICgwLCBjbGVhcklucHV0c18xLmNsZWFySW5wdXRzKShlbGVtZW50c18xLmlucHV0c051bWJlciwgZWxlbWVudHNfMS5pbnB1dHNDb2RlKTtcclxuICAgICAgICAgICAgZWxlbWVudHNfMS5pbnB1dHMuY2xhc3NMaXN0LnRvZ2dsZSgnaW5wdXRzLS1hY3RpdmUnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBlbGVtZW50c18xLnJlcGVhdEJ0bi5pbm5lclRleHQgPSAnT2RiaWVyeiBrb2xlam7EhSBwYWN6a8SZJztcclxuICAgICAgICBlbGVtZW50c18xLnJlcGVhdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xyXG4gICAgICAgICAgICBlbGVtZW50c18xLm1vZGFsT3V0ZXIuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWxfX291dGVyLS1vcGVuJyk7XHJcbiAgICAgICAgICAgICgwLCBjbGVhcklucHV0c18xLmNsZWFySW5wdXRzKShlbGVtZW50c18xLmlucHV0c051bWJlciwgZWxlbWVudHNfMS5pbnB1dHNDb2RlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBlbGVtZW50c18xLm1vZGFsSW5uZXIuYXBwZW5kQ2hpbGQoZWxlbWVudHNfMS5lbmRCdG4pO1xyXG4gICAgICAgIGVsZW1lbnRzXzEubW9kYWxJbm5lci5hcHBlbmRDaGlsZChlbGVtZW50c18xLnJlcGVhdEJ0bik7XHJcbiAgICAgICAgZWxlbWVudHNfMS5zaGFkb3cuY2xhc3NMaXN0LmFkZCgnc2hhZG93LS1hY3RpdmUnKTtcclxuICAgICAgICBlbGVtZW50c18xLmxvYWRlci5jbGFzc0xpc3QuYWRkKCdsb2FkZXItLWFjdGl2ZScpO1xyXG4gICAgICAgIHlpZWxkICgwLCB3YWl0XzEud2FpdCkoMjAwMCk7XHJcbiAgICAgICAgZWxlbWVudHNfMS5zaGFkb3cuY2xhc3NMaXN0LnJlbW92ZSgnc2hhZG93LS1hY3RpdmUnKTtcclxuICAgICAgICBlbGVtZW50c18xLmxvYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdsb2FkZXItLWFjdGl2ZScpO1xyXG4gICAgICAgIGVsZW1lbnRzXzEubW9kYWxPdXRlci5jbGFzc0xpc3QuYWRkKCdtb2RhbF9fb3V0ZXItLW9wZW4nKTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydHMuZGlzcGxheU1vZGFsID0gZGlzcGxheU1vZGFsO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLmxvYWRlciA9IGV4cG9ydHMucmVwZWF0QnRuID0gZXhwb3J0cy5lbmRCdG4gPSBleHBvcnRzLm1vZGFsSW5uZXIgPSBleHBvcnRzLm1vZGFsT3V0ZXIgPSBleHBvcnRzLmlucHV0c0NvZGUgPSBleHBvcnRzLmlucHV0c051bWJlciA9IGV4cG9ydHMuaW5wdXRzID0gZXhwb3J0cy5jb2xsZWN0QnRuID0gZXhwb3J0cy5zaGFkb3cgPSB2b2lkIDA7XHJcbmV4cG9ydHMuc2hhZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoYWRvdycpO1xyXG5leHBvcnRzLmNvbGxlY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29sbGVjdC1idG4nKTtcclxuZXhwb3J0cy5pbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5wdXRzJyk7XHJcbmV4cG9ydHMuaW5wdXRzTnVtYmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0c19fbnVtYmVyIGlucHV0Jyk7XHJcbmV4cG9ydHMuaW5wdXRzQ29kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnB1dHNfX2NvZGUgaW5wdXQnKTtcclxuZXhwb3J0cy5tb2RhbE91dGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX19vdXRlcicpO1xyXG5leHBvcnRzLm1vZGFsSW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2lubmVyJyk7XHJcbmV4cG9ydHMuZW5kQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVuZC1idG4nKTtcclxuZXhwb3J0cy5yZXBlYXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVwZWF0LWJ0bicpO1xyXG5leHBvcnRzLmxvYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2FkZXInKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy52YWxpZGF0ZU51bWJlciA9IGV4cG9ydHMuVmFsaWRhdG9ycyA9IHZvaWQgMDtcclxudmFyIFZhbGlkYXRvcnM7XHJcbihmdW5jdGlvbiAoVmFsaWRhdG9ycykge1xyXG4gICAgVmFsaWRhdG9yc1tWYWxpZGF0b3JzW1wiTlVNQkVSXCJdID0gMF0gPSBcIk5VTUJFUlwiO1xyXG4gICAgVmFsaWRhdG9yc1tWYWxpZGF0b3JzW1wiQ09ERVwiXSA9IDFdID0gXCJDT0RFXCI7XHJcbn0pKFZhbGlkYXRvcnMgPSBleHBvcnRzLlZhbGlkYXRvcnMgfHwgKGV4cG9ydHMuVmFsaWRhdG9ycyA9IHt9KSk7XHJcbmZ1bmN0aW9uIHZhbGlkYXRlTnVtYmVyKGlucHV0RWxlbWVudCwgdHlwZSkge1xyXG4gICAgY29uc3QgcmVnID0gL15bMC05XSskLztcclxuICAgIGNvbnN0IHRyaW1tZWROdW0gPSBpbnB1dEVsZW1lbnQudmFsdWUudHJpbSgpO1xyXG4gICAgaWYgKHR5cGUgPT09IFZhbGlkYXRvcnMuTlVNQkVSKSB7XHJcbiAgICAgICAgaWYgKHRyaW1tZWROdW0ubWF0Y2gocmVnKSAmJiB0cmltbWVkTnVtLmxlbmd0aCA9PT0gOSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZSA9PT0gVmFsaWRhdG9ycy5DT0RFKSB7XHJcbiAgICAgICAgaWYgKHRyaW1tZWROdW0ubWF0Y2gocmVnKSAmJiB0cmltbWVkTnVtLmxlbmd0aCA9PT0gNCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuZXhwb3J0cy52YWxpZGF0ZU51bWJlciA9IHZhbGlkYXRlTnVtYmVyO1xyXG4iLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLndhaXQgPSB2b2lkIDA7XHJcbmNvbnN0IHdhaXQgPSAoYW1vdW50ID0gMCkgPT4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIGFtb3VudCkpO1xyXG5leHBvcnRzLndhaXQgPSB3YWl0O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuY29uc3QgZWxlbWVudHNfMSA9IHJlcXVpcmUoXCIuL3RzL2VsZW1lbnRzXCIpO1xyXG5jb25zdCBpbnB1dHNWYWxpZGF0aW9uXzEgPSByZXF1aXJlKFwiLi90cy9pbnB1dHNWYWxpZGF0aW9uXCIpO1xyXG5jb25zdCBkaXNwbGF5TW9kYWxfMSA9IHJlcXVpcmUoXCIuL3RzL2Rpc3BsYXlNb2RhbFwiKTtcclxuY29uc3QgY2xlYXJJbnB1dHNfMSA9IHJlcXVpcmUoXCIuL3RzL2NsZWFySW5wdXRzXCIpO1xyXG4oMCwgY2xlYXJJbnB1dHNfMS5jbGVhcklucHV0cykoZWxlbWVudHNfMS5pbnB1dHNOdW1iZXIsIGVsZW1lbnRzXzEuaW5wdXRzQ29kZSk7XHJcbmxldCBpbml0VGltZTtcclxuZWxlbWVudHNfMS5jb2xsZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhlbGVtZW50c18xLmlucHV0c051bWJlci52YWx1ZSk7XHJcbiAgICBpZiAoZWxlbWVudHNfMS5pbnB1dHNOdW1iZXIudmFsdWUgPT09ICcnKSB7XHJcbiAgICAgICAgaW5pdFRpbWUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgfVxyXG4gICAgaWYgKCFlbGVtZW50c18xLmlucHV0cy5jbGFzc0xpc3QuY29udGFpbnMoJ2lucHV0cy0tYWN0aXZlJykpIHtcclxuICAgICAgICBlbGVtZW50c18xLmlucHV0cy5jbGFzc0xpc3QudG9nZ2xlKCdpbnB1dHMtLWFjdGl2ZScpO1xyXG4gICAgICAgIGluaXRUaW1lID0gbmV3IERhdGUoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhpbml0VGltZSk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKCgwLCBpbnB1dHNWYWxpZGF0aW9uXzEudmFsaWRhdGVOdW1iZXIpKGVsZW1lbnRzXzEuaW5wdXRzTnVtYmVyLCBpbnB1dHNWYWxpZGF0aW9uXzEuVmFsaWRhdG9ycy5OVU1CRVIpICYmICgwLCBpbnB1dHNWYWxpZGF0aW9uXzEudmFsaWRhdGVOdW1iZXIpKGVsZW1lbnRzXzEuaW5wdXRzQ29kZSwgaW5wdXRzVmFsaWRhdGlvbl8xLlZhbGlkYXRvcnMuQ09ERSkpIHtcclxuICAgICAgICBjb25zdCBjdXJyZW50VGltZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgY29uc3QgZGlmZiA9IE1hdGguY2VpbChNYXRoLmFicyhjdXJyZW50VGltZS5nZXRUaW1lKCkgLSBpbml0VGltZS5nZXRUaW1lKCkpIC8gMTAwMCk7XHJcbiAgICAgICAgKDAsIGRpc3BsYXlNb2RhbF8xLmRpc3BsYXlNb2RhbCkoZGlmZik7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBhbGVydCgnTmllcG9wcmF3bmUgZGFuZS4nKTtcclxuICAgIH1cclxufSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==