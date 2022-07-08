"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/questoes/[id]";
exports.ids = ["pages/api/questoes/[id]"];
exports.modules = {

/***/ "(api)/./functions/arrays.ts":
/*!*****************************!*\
  !*** ./functions/arrays.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"embaralhar\": () => (/* binding */ embaralhar)\n/* harmony export */ });\nfunction embaralhar(elementos) {\n    return elementos.map((valor)=>({\n            valor,\n            aleatorio: Math.random()\n        })\n    ).sort((obj1, obj2)=>obj1.aleatorio - obj2.aleatorio\n    ).map((obj)=>obj.valor\n    );\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9mdW5jdGlvbnMvYXJyYXlzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxTQUFTQSxVQUFVLENBQUNDLFNBQWdCLEVBQVM7SUFDaEQsT0FBT0EsU0FBUyxDQUNYQyxHQUFHLENBQUNDLENBQUFBLEtBQUssR0FBSSxDQUFDO1lBQUVBLEtBQUs7WUFBRUMsU0FBUyxFQUFFQyxJQUFJLENBQUNDLE1BQU0sRUFBRTtTQUFFLENBQUM7SUFBQSxDQUFDLENBQ25EQyxJQUFJLENBQUMsQ0FBQ0MsSUFBSSxFQUFFQyxJQUFJLEdBQUtELElBQUksQ0FBQ0osU0FBUyxHQUFHSyxJQUFJLENBQUNMLFNBQVM7SUFBQSxDQUFDLENBQ3JERixHQUFHLENBQUNRLENBQUFBLEdBQUcsR0FBSUEsR0FBRyxDQUFDUCxLQUFLO0lBQUEsQ0FBQztDQUM3QiIsInNvdXJjZXMiOlsid2VicGFjazovL3F1aXovLi9mdW5jdGlvbnMvYXJyYXlzLnRzPzNiOTIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGVtYmFyYWxoYXIoZWxlbWVudG9zOiBhbnlbXSk6IGFueVtdIHtcclxuICAgIHJldHVybiBlbGVtZW50b3NcclxuICAgICAgICAubWFwKHZhbG9yID0+ICh7IHZhbG9yLCBhbGVhdG9yaW86IE1hdGgucmFuZG9tKCkgfSkpXHJcbiAgICAgICAgLnNvcnQoKG9iajEsIG9iajIpID0+IG9iajEuYWxlYXRvcmlvIC0gb2JqMi5hbGVhdG9yaW8pXHJcbiAgICAgICAgLm1hcChvYmogPT4gb2JqLnZhbG9yKVxyXG59Il0sIm5hbWVzIjpbImVtYmFyYWxoYXIiLCJlbGVtZW50b3MiLCJtYXAiLCJ2YWxvciIsImFsZWF0b3JpbyIsIk1hdGgiLCJyYW5kb20iLCJzb3J0Iiwib2JqMSIsIm9iajIiLCJvYmoiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./functions/arrays.ts\n");

/***/ }),

/***/ "(api)/./model/questao.ts":
/*!**************************!*\
  !*** ./model/questao.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ QuestaoModel)\n/* harmony export */ });\n/* harmony import */ var _functions_arrays__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/arrays */ \"(api)/./functions/arrays.ts\");\n/* harmony import */ var _resposta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resposta */ \"(api)/./model/resposta.ts\");\n\n\nclass QuestaoModel {\n    #id;\n    #enunciado;\n    #respostas;\n    #acertou;\n    constructor(id, enunciado, respostas, acertou = false){\n        this.#id = id;\n        this.#enunciado = enunciado;\n        this.#respostas = respostas;\n        this.#acertou = acertou;\n    }\n    get id() {\n        return this.#id;\n    }\n    get enunciado() {\n        return this.#enunciado;\n    }\n    get respostas() {\n        return this.#respostas;\n    }\n    get acertou() {\n        return this.#acertou;\n    }\n    get naoRespondida() {\n        return !this.respondida;\n    }\n    get respondida() {\n        for (let resposta of this.#respostas){\n            if (resposta.revelada) return true;\n        }\n        return false;\n    }\n    responderCom(indice) {\n        const acertou = this.#respostas[indice]?.certa;\n        const respostas = this.#respostas.map((resposta, i)=>{\n            const respostaSelecionada = indice === i;\n            const deveRevelar = respostaSelecionada || resposta.certa;\n            return deveRevelar ? resposta.revelar() : resposta;\n        });\n        return new QuestaoModel(this.id, this.enunciado, respostas, acertou);\n    }\n    embaralharRespostas() {\n        let respostasEmbaralhadas = (0,_functions_arrays__WEBPACK_IMPORTED_MODULE_0__.embaralhar)(this.#respostas);\n        return new QuestaoModel(this.#id, this.#enunciado, respostasEmbaralhadas, this.#acertou);\n    }\n    static criarUsandoObjeto(obj) {\n        const respostas = obj.respostas.map((resp)=>_resposta__WEBPACK_IMPORTED_MODULE_1__[\"default\"].criarUsandoObjeto(resp)\n        );\n        return new QuestaoModel(obj.id, obj.enunciado, respostas, obj.acertou);\n    }\n    paraObjeto() {\n        return {\n            id: this.#id,\n            enunciado: this.#enunciado,\n            respondida: this.respondida,\n            acertou: this.#acertou,\n            respostas: this.#respostas.map((resp)=>resp.paraObjeto()\n            )\n        };\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSxDQUFDLENBQUNBLEVBQUU7WUFDWkMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDQSxTQUFTO1lBQzFCSyxVQUFVLEVBQUUsSUFBSSxDQUFDQSxVQUFVO1lBQzNCSCxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUNBLE9BQU87WUFDdEJELFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQ0EsU0FBUyxDQUFDVSxHQUFHLENBQUNTLENBQUFBLElBQUksR0FBSUEsSUFBSSxDQUFDQyxVQUFVLEVBQUU7WUFBQSxDQUFDO1NBQzVEO0tBQ0o7Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovL3F1aXovLi9tb2RlbC9xdWVzdGFvLnRzPzE5ZjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZW1iYXJhbGhhciB9IGZyb20gXCIuLi9mdW5jdGlvbnMvYXJyYXlzXCJcclxuaW1wb3J0IFJlc3Bvc3RhTW9kZWwgZnJvbSBcIi4vcmVzcG9zdGFcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVlc3Rhb01vZGVsIHtcclxuICAgICNpZDogbnVtYmVyXHJcbiAgICAjZW51bmNpYWRvOiBzdHJpbmdcclxuICAgICNyZXNwb3N0YXM6IFJlc3Bvc3RhTW9kZWxbXVxyXG4gICAgI2FjZXJ0b3U6IGJvb2xlYW5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyLCBlbnVuY2lhZG86IHN0cmluZywgcmVzcG9zdGFzOiBSZXNwb3N0YU1vZGVsW10sIGFjZXJ0b3UgPSBmYWxzZSkge1xyXG4gICAgICAgIHRoaXMuI2lkID0gaWRcclxuICAgICAgICB0aGlzLiNlbnVuY2lhZG8gPSBlbnVuY2lhZG9cclxuICAgICAgICB0aGlzLiNyZXNwb3N0YXMgPSByZXNwb3N0YXNcclxuICAgICAgICB0aGlzLiNhY2VydG91ID0gYWNlcnRvdVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBpZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4jaWRcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZW51bmNpYWRvKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiNlbnVuY2lhZG9cclxuICAgIH1cclxuXHJcbiAgICBnZXQgcmVzcG9zdGFzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiNyZXNwb3N0YXNcclxuICAgIH1cclxuXHJcbiAgICBnZXQgYWNlcnRvdSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4jYWNlcnRvdVxyXG4gICAgfVxyXG5cclxuICAgIGdldCBuYW9SZXNwb25kaWRhKCkge1xyXG4gICAgICAgIHJldHVybiAhdGhpcy5yZXNwb25kaWRhXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHJlc3BvbmRpZGEoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgcmVzcG9zdGEgb2YgdGhpcy4jcmVzcG9zdGFzKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb3N0YS5yZXZlbGFkYSkgcmV0dXJuIHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICB9XHJcblxyXG4gICAgcmVzcG9uZGVyQ29tKGluZGljZTogbnVtYmVyKTogUXVlc3Rhb01vZGVsIHtcclxuICAgICAgICBjb25zdCBhY2VydG91ID0gdGhpcy4jcmVzcG9zdGFzW2luZGljZV0/LmNlcnRhXHJcbiAgICAgICAgY29uc3QgcmVzcG9zdGFzID0gdGhpcy4jcmVzcG9zdGFzLm1hcCgocmVzcG9zdGEsIGkpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9zdGFTZWxlY2lvbmFkYSA9IGluZGljZSA9PT0gaVxyXG4gICAgICAgICAgICBjb25zdCBkZXZlUmV2ZWxhciA9IHJlc3Bvc3RhU2VsZWNpb25hZGEgfHwgcmVzcG9zdGEuY2VydGFcclxuICAgICAgICAgICAgcmV0dXJuIGRldmVSZXZlbGFyID8gcmVzcG9zdGEucmV2ZWxhcigpIDogcmVzcG9zdGFcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiBuZXcgUXVlc3Rhb01vZGVsKHRoaXMuaWQsIHRoaXMuZW51bmNpYWRvLCByZXNwb3N0YXMsIGFjZXJ0b3UpXHJcbiAgICB9XHJcblxyXG4gICAgZW1iYXJhbGhhclJlc3Bvc3RhcygpOiBRdWVzdGFvTW9kZWwge1xyXG4gICAgICAgIGxldCByZXNwb3N0YXNFbWJhcmFsaGFkYXMgPSBlbWJhcmFsaGFyKHRoaXMuI3Jlc3Bvc3RhcylcclxuICAgICAgICByZXR1cm4gbmV3IFF1ZXN0YW9Nb2RlbCh0aGlzLiNpZCwgdGhpcy4jZW51bmNpYWRvLCByZXNwb3N0YXNFbWJhcmFsaGFkYXMsIHRoaXMuI2FjZXJ0b3UpXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyaWFyVXNhbmRvT2JqZXRvKG9iajogUXVlc3Rhb01vZGVsKTogUXVlc3Rhb01vZGVsIHtcclxuICAgICAgICBjb25zdCByZXNwb3N0YXMgPSBvYmoucmVzcG9zdGFzLm1hcChyZXNwID0+IFJlc3Bvc3RhTW9kZWwuY3JpYXJVc2FuZG9PYmpldG8ocmVzcCkpXHJcbiAgICAgICAgcmV0dXJuIG5ldyBRdWVzdGFvTW9kZWwob2JqLmlkLCBvYmouZW51bmNpYWRvLCByZXNwb3N0YXMsIG9iai5hY2VydG91KVxyXG4gICAgfVxyXG5cclxuICAgIHBhcmFPYmpldG8oKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IHRoaXMuI2lkLFxyXG4gICAgICAgICAgICBlbnVuY2lhZG86IHRoaXMuI2VudW5jaWFkbyxcclxuICAgICAgICAgICAgcmVzcG9uZGlkYTogdGhpcy5yZXNwb25kaWRhLFxyXG4gICAgICAgICAgICBhY2VydG91OiB0aGlzLiNhY2VydG91LFxyXG4gICAgICAgICAgICByZXNwb3N0YXM6IHRoaXMuI3Jlc3Bvc3Rhcy5tYXAocmVzcCA9PiByZXNwLnBhcmFPYmpldG8oKSksXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbImVtYmFyYWxoYXIiLCJSZXNwb3N0YU1vZGVsIiwiUXVlc3Rhb01vZGVsIiwiaWQiLCJlbnVuY2lhZG8iLCJyZXNwb3N0YXMiLCJhY2VydG91IiwiY29uc3RydWN0b3IiLCJuYW9SZXNwb25kaWRhIiwicmVzcG9uZGlkYSIsInJlc3Bvc3RhIiwicmV2ZWxhZGEiLCJyZXNwb25kZXJDb20iLCJpbmRpY2UiLCJjZXJ0YSIsIm1hcCIsImkiLCJyZXNwb3N0YVNlbGVjaW9uYWRhIiwiZGV2ZVJldmVsYXIiLCJyZXZlbGFyIiwiZW1iYXJhbGhhclJlc3Bvc3RhcyIsInJlc3Bvc3Rhc0VtYmFyYWxoYWRhcyIsImNyaWFyVXNhbmRvT2JqZXRvIiwib2JqIiwicmVzcCIsInBhcmFPYmpldG8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./model/questao.ts\n");

/***/ }),

/***/ "(api)/./model/resposta.ts":
/*!***************************!*\
  !*** ./model/resposta.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RespostaModel)\n/* harmony export */ });\nclass RespostaModel {\n    #valor;\n    #certa;\n    #revelada;\n    constructor(valor, certa, revelada = false){\n        this.#valor = valor;\n        this.#certa = certa;\n        this.#revelada = revelada;\n    }\n    static certa(valor) {\n        return new RespostaModel(valor, true);\n    }\n    static errada(valor) {\n        return new RespostaModel(valor, false);\n    }\n    get valor() {\n        return this.#valor;\n    }\n    get certa() {\n        return this.#certa;\n    }\n    get revelada() {\n        return this.#revelada;\n    }\n    revelar() {\n        return new RespostaModel(this.#valor, this.#certa, true);\n    }\n    static criarUsandoObjeto(obj) {\n        return new RespostaModel(obj.valor, obj.certa, obj.revelada);\n    }\n    paraObjeto() {\n        return {\n            valor: this.#valor,\n            certa: this.#certa,\n            revelada: this.#revelada\n        };\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbC9yZXNwb3N0YS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsTUFBTUEsYUFBYTtJQUM5QixDQUFDQyxLQUFLLENBQVE7SUFDZCxDQUFDQyxLQUFLLENBQVM7SUFDZixDQUFDQyxRQUFRLENBQVM7SUFFbEJDLFlBQVlILEtBQWEsRUFBRUMsS0FBYyxFQUFFQyxRQUFRLEdBQUcsS0FBSyxDQUFFO1FBQ3pELElBQUksQ0FBQyxDQUFDRixLQUFLLEdBQUdBLEtBQUs7UUFDbkIsSUFBSSxDQUFDLENBQUNDLEtBQUssR0FBR0EsS0FBSztRQUNuQixJQUFJLENBQUMsQ0FBQ0MsUUFBUSxHQUFHQSxRQUFRO0tBQzVCO0lBRUQsT0FBT0QsS0FBSyxDQUFDRCxLQUFhLEVBQUU7UUFDeEIsT0FBTyxJQUFJRCxhQUFhLENBQUNDLEtBQUssRUFBRSxJQUFJLENBQUM7S0FDeEM7SUFFRCxPQUFPSSxNQUFNLENBQUNKLEtBQWEsRUFBRTtRQUN6QixPQUFPLElBQUlELGFBQWEsQ0FBQ0MsS0FBSyxFQUFFLEtBQUssQ0FBQztLQUN6QztJQUVELElBQUlBLEtBQUssR0FBRztRQUNSLE9BQU8sSUFBSSxDQUFDLENBQUNBLEtBQUs7S0FDckI7SUFFRCxJQUFJQyxLQUFLLEdBQUc7UUFDUixPQUFPLElBQUksQ0FBQyxDQUFDQSxLQUFLO0tBQ3JCO0lBRUQsSUFBSUMsUUFBUSxHQUFHO1FBQ1gsT0FBTyxJQUFJLENBQUMsQ0FBQ0EsUUFBUTtLQUN4QjtJQUVERyxPQUFPLEdBQUc7UUFDTixPQUFPLElBQUlOLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQ0MsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDQyxLQUFLLEVBQUUsSUFBSSxDQUFDO0tBQzNEO0lBRUQsT0FBT0ssaUJBQWlCLENBQUNDLEdBQWtCLEVBQWlCO1FBQ3hELE9BQU8sSUFBSVIsYUFBYSxDQUFDUSxHQUFHLENBQUNQLEtBQUssRUFBRU8sR0FBRyxDQUFDTixLQUFLLEVBQUVNLEdBQUcsQ0FBQ0wsUUFBUSxDQUFDO0tBQy9EO0lBRURNLFVBQVUsR0FBRztRQUNULE9BQU87WUFDSFIsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDQSxLQUFLO1lBQ2xCQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUNBLEtBQUs7WUFDbEJDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQ0EsUUFBUTtTQUMzQjtLQUNKO0NBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9xdWl6Ly4vbW9kZWwvcmVzcG9zdGEudHM/ZTY0NSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBSZXNwb3N0YU1vZGVsIHtcclxuICAgICN2YWxvcjogc3RyaW5nXHJcbiAgICAjY2VydGE6IGJvb2xlYW5cclxuICAgICNyZXZlbGFkYTogYm9vbGVhblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHZhbG9yOiBzdHJpbmcsIGNlcnRhOiBib29sZWFuLCByZXZlbGFkYSA9IGZhbHNlKSB7XHJcbiAgICAgICAgdGhpcy4jdmFsb3IgPSB2YWxvclxyXG4gICAgICAgIHRoaXMuI2NlcnRhID0gY2VydGFcclxuICAgICAgICB0aGlzLiNyZXZlbGFkYSA9IHJldmVsYWRhXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNlcnRhKHZhbG9yOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFJlc3Bvc3RhTW9kZWwodmFsb3IsIHRydWUpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIHN0YXRpYyBlcnJhZGEodmFsb3I6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiBuZXcgUmVzcG9zdGFNb2RlbCh2YWxvciwgZmFsc2UpXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHZhbG9yKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiN2YWxvclxyXG4gICAgfVxyXG5cclxuICAgIGdldCBjZXJ0YSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4jY2VydGFcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0IHJldmVsYWRhKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiNyZXZlbGFkYVxyXG4gICAgfVxyXG5cclxuICAgIHJldmVsYXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBSZXNwb3N0YU1vZGVsKHRoaXMuI3ZhbG9yLCB0aGlzLiNjZXJ0YSwgdHJ1ZSlcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JpYXJVc2FuZG9PYmpldG8ob2JqOiBSZXNwb3N0YU1vZGVsKTogUmVzcG9zdGFNb2RlbCB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBSZXNwb3N0YU1vZGVsKG9iai52YWxvciwgb2JqLmNlcnRhLCBvYmoucmV2ZWxhZGEpXHJcbiAgICB9XHJcblxyXG4gICAgcGFyYU9iamV0bygpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB2YWxvcjogdGhpcy4jdmFsb3IsXHJcbiAgICAgICAgICAgIGNlcnRhOiB0aGlzLiNjZXJ0YSxcclxuICAgICAgICAgICAgcmV2ZWxhZGE6IHRoaXMuI3JldmVsYWRhXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbIlJlc3Bvc3RhTW9kZWwiLCJ2YWxvciIsImNlcnRhIiwicmV2ZWxhZGEiLCJjb25zdHJ1Y3RvciIsImVycmFkYSIsInJldmVsYXIiLCJjcmlhclVzYW5kb09iamV0byIsIm9iaiIsInBhcmFPYmpldG8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./model/resposta.ts\n");

/***/ }),

/***/ "(api)/./pages/api/bancoDeQuestoes.ts":
/*!**************************************!*\
  !*** ./pages/api/bancoDeQuestoes.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _model_questao__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../model/questao */ \"(api)/./model/questao.ts\");\n/* harmony import */ var _model_resposta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/resposta */ \"(api)/./model/resposta.ts\");\n\n\nconst questoes = [\n    new _model_questao__WEBPACK_IMPORTED_MODULE_0__[\"default\"](306, \"Qual bicho transmite a Doen\\xe7a de Chagas?\", [\n        _model_resposta__WEBPACK_IMPORTED_MODULE_1__[\"default\"].errada(\"Abelha\"),\n        _model_resposta__WEBPACK_IMPORTED_MODULE_1__[\"default\"].errada(\"Barata\"),\n        _model_resposta__WEBPACK_IMPORTED_MODULE_1__[\"default\"].errada(\"Pulga\"),\n        _model_resposta__WEBPACK_IMPORTED_MODULE_1__[\"default\"].certa(\"Barbeiro\"), \n    ]),\n    new _model_questao__WEBPACK_IMPORTED_MODULE_0__[\"default\"](202, 'Qual fruto \\xe9 conhecido no Norte e Nordeste como \"jerimum\"?', [\n        _model_resposta__WEBPACK_IMPORTED_MODULE_1__[\"default\"].errada(\"Caju\"),\n        _model_resposta__WEBPACK_IMPORTED_MODULE_1__[\"default\"].errada(\"C\\xf4co\"),\n        _model_resposta__WEBPACK_IMPORTED_MODULE_1__[\"default\"].errada(\"Chuchu\"),\n        _model_resposta__WEBPACK_IMPORTED_MODULE_1__[\"default\"].certa(\"Ab\\xf3bora\"), \n    ]),\n    new _model_questao__WEBPACK_IMPORTED_MODULE_0__[\"default\"](203, \"Qual \\xe9 o coletivo de c\\xe3es?\", [\n        _model_resposta__WEBPACK_IMPORTED_MODULE_1__[\"default\"].errada(\"Manada\"),\n        _model_resposta__WEBPACK_IMPORTED_MODULE_1__[\"default\"].errada(\"Alcateia\"),\n        _model_resposta__WEBPACK_IMPORTED_MODULE_1__[\"default\"].errada(\"Rebanho\"),\n        _model_resposta__WEBPACK_IMPORTED_MODULE_1__[\"default\"].certa(\"Matilha\"), \n    ]),\n    new _model_questao__WEBPACK_IMPORTED_MODULE_0__[\"default\"](204, \"Qual \\xe9 o tri\\xe2ngulo que tem todos os lados diferentes?\", [\n        _model_resposta__WEBPACK_IMPORTED_MODULE_1__[\"default\"].errada(\"Equil\\xe1tero\"),\n        _model_resposta__WEBPACK_IMPORTED_MODULE_1__[\"default\"].errada(\"Is\\xf3celes\"),\n        _model_resposta__WEBPACK_IMPORTED_MODULE_1__[\"default\"].errada(\"Trap\\xe9zio\"),\n        _model_resposta__WEBPACK_IMPORTED_MODULE_1__[\"default\"].certa(\"Escaleno\"), \n    ]),\n    new _model_questao__WEBPACK_IMPORTED_MODULE_0__[\"default\"](205, \"Quem comp\\xf4s o Hino da Independ\\xeancia?\", [\n        _model_resposta__WEBPACK_IMPORTED_MODULE_1__[\"default\"].errada(\"Castro Alves\"),\n        _model_resposta__WEBPACK_IMPORTED_MODULE_1__[\"default\"].errada(\"Manuel Bandeira\"),\n        _model_resposta__WEBPACK_IMPORTED_MODULE_1__[\"default\"].errada(\"Carlos Gomes\"),\n        _model_resposta__WEBPACK_IMPORTED_MODULE_1__[\"default\"].certa(\"Dom Pedro I\"), \n    ]),\n    new _model_questao__WEBPACK_IMPORTED_MODULE_0__[\"default\"](206, 'Qual \\xe9 o ant\\xf4nimo de \"malograr\"?', [\n        _model_resposta__WEBPACK_IMPORTED_MODULE_1__[\"default\"].errada(\"Perder\"),\n        _model_resposta__WEBPACK_IMPORTED_MODULE_1__[\"default\"].errada(\"Fracassar\"),\n        _model_resposta__WEBPACK_IMPORTED_MODULE_1__[\"default\"].errada(\"Desprezar\"),\n        _model_resposta__WEBPACK_IMPORTED_MODULE_1__[\"default\"].certa(\"Conseguir\"), \n    ]),\n    new _model_questao__WEBPACK_IMPORTED_MODULE_0__[\"default\"](207, \"Em que pa\\xeds nasceu Carmen Miranda?\", [\n        _model_resposta__WEBPACK_IMPORTED_MODULE_1__[\"default\"].errada(\"Argentina\"),\n        _model_resposta__WEBPACK_IMPORTED_MODULE_1__[\"default\"].errada(\"Espanha\"),\n        _model_resposta__WEBPACK_IMPORTED_MODULE_1__[\"default\"].errada(\"Brasil\"),\n        _model_resposta__WEBPACK_IMPORTED_MODULE_1__[\"default\"].certa(\"Portugal\"), \n    ]),\n    new _model_questao__WEBPACK_IMPORTED_MODULE_0__[\"default\"](208, \"Qual foi o \\xfaltimo Presidente do per\\xedodo da ditadura militar no Brasil?\", [\n        _model_resposta__WEBPACK_IMPORTED_MODULE_1__[\"default\"].errada(\"Costa e Silva\"),\n        _model_resposta__WEBPACK_IMPORTED_MODULE_1__[\"default\"].errada(\"Em\\xedlio M\\xe9dici\"),\n        _model_resposta__WEBPACK_IMPORTED_MODULE_1__[\"default\"].errada(\"Ernesto Geisel\"),\n        _model_resposta__WEBPACK_IMPORTED_MODULE_1__[\"default\"].certa(\"Jo\\xe3o Figueiredo\"), \n    ]),\n    new _model_questao__WEBPACK_IMPORTED_MODULE_0__[\"default\"](209, \"Seguindo a sequ\\xeancia do baralho, qual carta vem depois do dez?\", [\n        _model_resposta__WEBPACK_IMPORTED_MODULE_1__[\"default\"].errada(\"\\xc1s\"),\n        _model_resposta__WEBPACK_IMPORTED_MODULE_1__[\"default\"].errada(\"Nove\"),\n        _model_resposta__WEBPACK_IMPORTED_MODULE_1__[\"default\"].errada(\"Rei\"),\n        _model_resposta__WEBPACK_IMPORTED_MODULE_1__[\"default\"].certa(\"Valete\"), \n    ]),\n    new _model_questao__WEBPACK_IMPORTED_MODULE_0__[\"default\"](210, 'O adjetivo \"venoso\" est\\xe1 relacionado a:', [\n        _model_resposta__WEBPACK_IMPORTED_MODULE_1__[\"default\"].errada(\"Vela\"),\n        _model_resposta__WEBPACK_IMPORTED_MODULE_1__[\"default\"].errada(\"Vento\"),\n        _model_resposta__WEBPACK_IMPORTED_MODULE_1__[\"default\"].errada(\"V\\xeania\"),\n        _model_resposta__WEBPACK_IMPORTED_MODULE_1__[\"default\"].certa(\"Veia\"), \n    ]),\n    new _model_questao__WEBPACK_IMPORTED_MODULE_0__[\"default\"](211, \"Que nome se d\\xe1 \\xe0 purifica\\xe7\\xe3o por meio da \\xe1gua?\", [\n        _model_resposta__WEBPACK_IMPORTED_MODULE_1__[\"default\"].errada(\"Abrup\\xe7\\xe3o\"),\n        _model_resposta__WEBPACK_IMPORTED_MODULE_1__[\"default\"].errada(\"Aboli\\xe7\\xe3o\"),\n        _model_resposta__WEBPACK_IMPORTED_MODULE_1__[\"default\"].errada(\"Abnega\\xe7\\xe3o\"),\n        _model_resposta__WEBPACK_IMPORTED_MODULE_1__[\"default\"].certa(\"Ablu\\xe7\\xe3o\"), \n    ]),\n    new _model_questao__WEBPACK_IMPORTED_MODULE_0__[\"default\"](212, \"Qual montanha se localiza entre a fronteira do Tibet com o Nepal?\", [\n        _model_resposta__WEBPACK_IMPORTED_MODULE_1__[\"default\"].errada(\"Monte Branco\"),\n        _model_resposta__WEBPACK_IMPORTED_MODULE_1__[\"default\"].errada(\"Monte Fuji\"),\n        _model_resposta__WEBPACK_IMPORTED_MODULE_1__[\"default\"].errada(\"Monte Carlo\"),\n        _model_resposta__WEBPACK_IMPORTED_MODULE_1__[\"default\"].certa(\"Monte Everest\"), \n    ]),\n    new _model_questao__WEBPACK_IMPORTED_MODULE_0__[\"default\"](213, \"Em que parte do corpo se encontra a epiglote?\", [\n        _model_resposta__WEBPACK_IMPORTED_MODULE_1__[\"default\"].errada(\"Est\\xf4mago\"),\n        _model_resposta__WEBPACK_IMPORTED_MODULE_1__[\"default\"].errada(\"P\\xe2ncreas\"),\n        _model_resposta__WEBPACK_IMPORTED_MODULE_1__[\"default\"].errada(\"Rim\"),\n        _model_resposta__WEBPACK_IMPORTED_MODULE_1__[\"default\"].certa(\"Pesco\\xe7o\"), \n    ]),\n    new _model_questao__WEBPACK_IMPORTED_MODULE_0__[\"default\"](214, \"A compensa\\xe7\\xe3o por perda \\xe9 chamada de...\", [\n        _model_resposta__WEBPACK_IMPORTED_MODULE_1__[\"default\"].errada(\"D\\xe9ficit\"),\n        _model_resposta__WEBPACK_IMPORTED_MODULE_1__[\"default\"].errada(\"Indexa\\xe7\\xe3o\"),\n        _model_resposta__WEBPACK_IMPORTED_MODULE_1__[\"default\"].errada(\"Ind\\xe9bito\"),\n        _model_resposta__WEBPACK_IMPORTED_MODULE_1__[\"default\"].certa(\"Indeniza\\xe7\\xe3o\"), \n    ]),\n    new _model_questao__WEBPACK_IMPORTED_MODULE_0__[\"default\"](215, \"Que personagem do folclore brasileiro tem uma perna s\\xf3?\", [\n        _model_resposta__WEBPACK_IMPORTED_MODULE_1__[\"default\"].errada(\"Cuca\"),\n        _model_resposta__WEBPACK_IMPORTED_MODULE_1__[\"default\"].errada(\"Curupira\"),\n        _model_resposta__WEBPACK_IMPORTED_MODULE_1__[\"default\"].errada(\"Boitat\\xe1\"),\n        _model_resposta__WEBPACK_IMPORTED_MODULE_1__[\"default\"].certa(\"Saci-perer\\xea\"), \n    ]),\n    new _model_questao__WEBPACK_IMPORTED_MODULE_0__[\"default\"](216, 'Quem \\xe9 o \"patrono\" do Ex\\xe9rcito Brasileiro?', [\n        _model_resposta__WEBPACK_IMPORTED_MODULE_1__[\"default\"].errada(\"Marechal Deodoro\"),\n        _model_resposta__WEBPACK_IMPORTED_MODULE_1__[\"default\"].errada(\"Bar\\xe3o de Mau\\xe1\"),\n        _model_resposta__WEBPACK_IMPORTED_MODULE_1__[\"default\"].errada(\"Marqu\\xeas de Pombal\"),\n        _model_resposta__WEBPACK_IMPORTED_MODULE_1__[\"default\"].certa(\"Duque de Caxias\"), \n    ]), \n];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (questoes);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFLGtEQUE0QyxFQUFJO1FBQ2hFQyw4REFBa0IsQ0FBQyxrQkFBa0IsQ0FBQztRQUN4Q0EsOERBQW9CLENBQUMscUJBQWUsQ0FBRztRQUNyQ0EsOERBQWtCLENBQUMsc0JBQW1CLENBQUM7UUFDekNBLDZEQUFtQixDQUFDLGlCQUFpQixDQUFDO0tBQ3pDLENBQUM7Q0FDTDtBQUVELGlFQUFlQyxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcXVpei8uL3BhZ2VzL2FwaS9iYW5jb0RlUXVlc3RvZXMudHM/ODk5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUXVlc3Rhb01vZGVsIGZyb20gXCIuLi8uLi9tb2RlbC9xdWVzdGFvXCI7XHJcbmltcG9ydCBSZXNwb3N0YU1vZGVsIGZyb20gXCIuLi8uLi9tb2RlbC9yZXNwb3N0YVwiO1xyXG5cclxuY29uc3QgcXVlc3RvZXM6IFF1ZXN0YW9Nb2RlbFtdID0gW1xyXG4gICAgbmV3IFF1ZXN0YW9Nb2RlbCgzMDYsICdRdWFsIGJpY2hvIHRyYW5zbWl0ZSBhIERvZW7Dp2EgZGUgQ2hhZ2FzPycsIFtcclxuICAgICAgICBSZXNwb3N0YU1vZGVsLmVycmFkYSgnQWJlbGhhJyksXHJcbiAgICAgICAgUmVzcG9zdGFNb2RlbC5lcnJhZGEoJ0JhcmF0YScpLFxyXG4gICAgICAgIFJlc3Bvc3RhTW9kZWwuZXJyYWRhKCdQdWxnYScpLFxyXG4gICAgICAgIFJlc3Bvc3RhTW9kZWwuY2VydGEoJ0JhcmJlaXJvJyksXHJcbiAgICBdKSxcclxuICAgIG5ldyBRdWVzdGFvTW9kZWwoMjAyLCAnUXVhbCBmcnV0byDDqSBjb25oZWNpZG8gbm8gTm9ydGUgZSBOb3JkZXN0ZSBjb21vIFwiamVyaW11bVwiPycsIFtcclxuICAgICAgICBSZXNwb3N0YU1vZGVsLmVycmFkYSgnQ2FqdScpLFxyXG4gICAgICAgIFJlc3Bvc3RhTW9kZWwuZXJyYWRhKCdDw7RjbycpLFxyXG4gICAgICAgIFJlc3Bvc3RhTW9kZWwuZXJyYWRhKCdDaHVjaHUnKSxcclxuICAgICAgICBSZXNwb3N0YU1vZGVsLmNlcnRhKCdBYsOzYm9yYScpLFxyXG4gICAgXSksXHJcbiAgICBuZXcgUXVlc3Rhb01vZGVsKDIwMywgJ1F1YWwgw6kgbyBjb2xldGl2byBkZSBjw6Nlcz8nLCBbXHJcbiAgICAgICAgUmVzcG9zdGFNb2RlbC5lcnJhZGEoJ01hbmFkYScpLFxyXG4gICAgICAgIFJlc3Bvc3RhTW9kZWwuZXJyYWRhKCdBbGNhdGVpYScpLFxyXG4gICAgICAgIFJlc3Bvc3RhTW9kZWwuZXJyYWRhKCdSZWJhbmhvJyksXHJcbiAgICAgICAgUmVzcG9zdGFNb2RlbC5jZXJ0YSgnTWF0aWxoYScpLFxyXG4gICAgXSksXHJcbiAgICBuZXcgUXVlc3Rhb01vZGVsKDIwNCwgJ1F1YWwgw6kgbyB0cmnDom5ndWxvIHF1ZSB0ZW0gdG9kb3Mgb3MgbGFkb3MgZGlmZXJlbnRlcz8nLCBbXHJcbiAgICAgICAgUmVzcG9zdGFNb2RlbC5lcnJhZGEoJ0VxdWlsw6F0ZXJvJyksXHJcbiAgICAgICAgUmVzcG9zdGFNb2RlbC5lcnJhZGEoJ0lzw7NjZWxlcycpLFxyXG4gICAgICAgIFJlc3Bvc3RhTW9kZWwuZXJyYWRhKCdUcmFww6l6aW8nKSxcclxuICAgICAgICBSZXNwb3N0YU1vZGVsLmNlcnRhKCdFc2NhbGVubycpLFxyXG4gICAgXSksXHJcbiAgICBuZXcgUXVlc3Rhb01vZGVsKDIwNSwgJ1F1ZW0gY29tcMO0cyBvIEhpbm8gZGEgSW5kZXBlbmTDqm5jaWE/JywgW1xyXG4gICAgICAgIFJlc3Bvc3RhTW9kZWwuZXJyYWRhKCdDYXN0cm8gQWx2ZXMnKSxcclxuICAgICAgICBSZXNwb3N0YU1vZGVsLmVycmFkYSgnTWFudWVsIEJhbmRlaXJhJyksXHJcbiAgICAgICAgUmVzcG9zdGFNb2RlbC5lcnJhZGEoJ0NhcmxvcyBHb21lcycpLFxyXG4gICAgICAgIFJlc3Bvc3RhTW9kZWwuY2VydGEoJ0RvbSBQZWRybyBJJyksXHJcbiAgICBdKSxcclxuICAgIG5ldyBRdWVzdGFvTW9kZWwoMjA2LCAnUXVhbCDDqSBvIGFudMO0bmltbyBkZSBcIm1hbG9ncmFyXCI/JywgW1xyXG4gICAgICAgIFJlc3Bvc3RhTW9kZWwuZXJyYWRhKCdQZXJkZXInKSxcclxuICAgICAgICBSZXNwb3N0YU1vZGVsLmVycmFkYSgnRnJhY2Fzc2FyJyksXHJcbiAgICAgICAgUmVzcG9zdGFNb2RlbC5lcnJhZGEoJ0Rlc3ByZXphcicpLFxyXG4gICAgICAgIFJlc3Bvc3RhTW9kZWwuY2VydGEoJ0NvbnNlZ3VpcicpLFxyXG4gICAgXSksXHJcbiAgICBuZXcgUXVlc3Rhb01vZGVsKDIwNywgJ0VtIHF1ZSBwYcOtcyBuYXNjZXUgQ2FybWVuIE1pcmFuZGE/JywgW1xyXG4gICAgICAgIFJlc3Bvc3RhTW9kZWwuZXJyYWRhKCdBcmdlbnRpbmEnKSxcclxuICAgICAgICBSZXNwb3N0YU1vZGVsLmVycmFkYSgnRXNwYW5oYScpLFxyXG4gICAgICAgIFJlc3Bvc3RhTW9kZWwuZXJyYWRhKCdCcmFzaWwnKSxcclxuICAgICAgICBSZXNwb3N0YU1vZGVsLmNlcnRhKCdQb3J0dWdhbCcpLFxyXG4gICAgXSksXHJcbiAgICBuZXcgUXVlc3Rhb01vZGVsKDIwOCwgJ1F1YWwgZm9pIG8gw7psdGltbyBQcmVzaWRlbnRlIGRvIHBlcsOtb2RvIGRhIGRpdGFkdXJhIG1pbGl0YXIgbm8gQnJhc2lsPycsIFtcclxuICAgICAgICBSZXNwb3N0YU1vZGVsLmVycmFkYSgnQ29zdGEgZSBTaWx2YScpLFxyXG4gICAgICAgIFJlc3Bvc3RhTW9kZWwuZXJyYWRhKCdFbcOtbGlvIE3DqWRpY2knKSxcclxuICAgICAgICBSZXNwb3N0YU1vZGVsLmVycmFkYSgnRXJuZXN0byBHZWlzZWwnKSxcclxuICAgICAgICBSZXNwb3N0YU1vZGVsLmNlcnRhKCdKb8OjbyBGaWd1ZWlyZWRvJyksXHJcbiAgICBdKSxcclxuICAgIG5ldyBRdWVzdGFvTW9kZWwoMjA5LCAnU2VndWluZG8gYSBzZXF1w6puY2lhIGRvIGJhcmFsaG8sIHF1YWwgY2FydGEgdmVtIGRlcG9pcyBkbyBkZXo/JywgW1xyXG4gICAgICAgIFJlc3Bvc3RhTW9kZWwuZXJyYWRhKCfDgXMnKSxcclxuICAgICAgICBSZXNwb3N0YU1vZGVsLmVycmFkYSgnTm92ZScpLFxyXG4gICAgICAgIFJlc3Bvc3RhTW9kZWwuZXJyYWRhKCdSZWknKSxcclxuICAgICAgICBSZXNwb3N0YU1vZGVsLmNlcnRhKCdWYWxldGUnKSxcclxuICAgIF0pLFxyXG4gICAgbmV3IFF1ZXN0YW9Nb2RlbCgyMTAsICdPIGFkamV0aXZvIFwidmVub3NvXCIgZXN0w6EgcmVsYWNpb25hZG8gYTonLCBbXHJcbiAgICAgICAgUmVzcG9zdGFNb2RlbC5lcnJhZGEoJ1ZlbGEnKSxcclxuICAgICAgICBSZXNwb3N0YU1vZGVsLmVycmFkYSgnVmVudG8nKSxcclxuICAgICAgICBSZXNwb3N0YU1vZGVsLmVycmFkYSgnVsOqbmlhJyksXHJcbiAgICAgICAgUmVzcG9zdGFNb2RlbC5jZXJ0YSgnVmVpYScpLFxyXG4gICAgXSksXHJcbiAgICBuZXcgUXVlc3Rhb01vZGVsKDIxMSwgJ1F1ZSBub21lIHNlIGTDoSDDoCBwdXJpZmljYcOnw6NvIHBvciBtZWlvIGRhIMOhZ3VhPycsIFtcclxuICAgICAgICBSZXNwb3N0YU1vZGVsLmVycmFkYSgnQWJydXDDp8OjbycpLFxyXG4gICAgICAgIFJlc3Bvc3RhTW9kZWwuZXJyYWRhKCdBYm9sacOnw6NvJyksXHJcbiAgICAgICAgUmVzcG9zdGFNb2RlbC5lcnJhZGEoJ0FibmVnYcOnw6NvJyksXHJcbiAgICAgICAgUmVzcG9zdGFNb2RlbC5jZXJ0YSgnQWJsdcOnw6NvJyksXHJcbiAgICBdKSxcclxuICAgIG5ldyBRdWVzdGFvTW9kZWwoMjEyLCAnUXVhbCBtb250YW5oYSBzZSBsb2NhbGl6YSBlbnRyZSBhIGZyb250ZWlyYSBkbyBUaWJldCBjb20gbyBOZXBhbD8nLCBbXHJcbiAgICAgICAgUmVzcG9zdGFNb2RlbC5lcnJhZGEoJ01vbnRlIEJyYW5jbycpLFxyXG4gICAgICAgIFJlc3Bvc3RhTW9kZWwuZXJyYWRhKCdNb250ZSBGdWppJyksXHJcbiAgICAgICAgUmVzcG9zdGFNb2RlbC5lcnJhZGEoJ01vbnRlIENhcmxvJyksXHJcbiAgICAgICAgUmVzcG9zdGFNb2RlbC5jZXJ0YSgnTW9udGUgRXZlcmVzdCcpLFxyXG4gICAgXSksXHJcbiAgICBuZXcgUXVlc3Rhb01vZGVsKDIxMywgJ0VtIHF1ZSBwYXJ0ZSBkbyBjb3JwbyBzZSBlbmNvbnRyYSBhIGVwaWdsb3RlPycsIFtcclxuICAgICAgICBSZXNwb3N0YU1vZGVsLmVycmFkYSgnRXN0w7RtYWdvJyksXHJcbiAgICAgICAgUmVzcG9zdGFNb2RlbC5lcnJhZGEoJ1DDom5jcmVhcycpLFxyXG4gICAgICAgIFJlc3Bvc3RhTW9kZWwuZXJyYWRhKCdSaW0nKSxcclxuICAgICAgICBSZXNwb3N0YU1vZGVsLmNlcnRhKCdQZXNjb8OnbycpLFxyXG4gICAgXSksXHJcbiAgICBuZXcgUXVlc3Rhb01vZGVsKDIxNCwgJ0EgY29tcGVuc2HDp8OjbyBwb3IgcGVyZGEgw6kgY2hhbWFkYSBkZS4uLicsIFtcclxuICAgICAgICBSZXNwb3N0YU1vZGVsLmVycmFkYSgnRMOpZmljaXQnKSxcclxuICAgICAgICBSZXNwb3N0YU1vZGVsLmVycmFkYSgnSW5kZXhhw6fDo28nKSxcclxuICAgICAgICBSZXNwb3N0YU1vZGVsLmVycmFkYSgnSW5kw6liaXRvJyksXHJcbiAgICAgICAgUmVzcG9zdGFNb2RlbC5jZXJ0YSgnSW5kZW5pemHDp8OjbycpLFxyXG4gICAgXSksXHJcbiAgICBuZXcgUXVlc3Rhb01vZGVsKDIxNSwgJ1F1ZSBwZXJzb25hZ2VtIGRvIGZvbGNsb3JlIGJyYXNpbGVpcm8gdGVtIHVtYSBwZXJuYSBzw7M/JywgW1xyXG4gICAgICAgIFJlc3Bvc3RhTW9kZWwuZXJyYWRhKCdDdWNhJyksXHJcbiAgICAgICAgUmVzcG9zdGFNb2RlbC5lcnJhZGEoJ0N1cnVwaXJhJyksXHJcbiAgICAgICAgUmVzcG9zdGFNb2RlbC5lcnJhZGEoJ0JvaXRhdMOhJyksXHJcbiAgICAgICAgUmVzcG9zdGFNb2RlbC5jZXJ0YSgnU2FjaS1wZXJlcsOqJyksXHJcbiAgICBdKSxcclxuICAgIG5ldyBRdWVzdGFvTW9kZWwoMjE2LCAnUXVlbSDDqSBvIFwicGF0cm9ub1wiIGRvIEV4w6lyY2l0byBCcmFzaWxlaXJvPycsIFtcclxuICAgICAgICBSZXNwb3N0YU1vZGVsLmVycmFkYSgnTWFyZWNoYWwgRGVvZG9ybycpLFxyXG4gICAgICAgIFJlc3Bvc3RhTW9kZWwuZXJyYWRhKCdCYXLDo28gZGUgTWF1w6EnKSxcclxuICAgICAgICBSZXNwb3N0YU1vZGVsLmVycmFkYSgnTWFycXXDqnMgZGUgUG9tYmFsJyksXHJcbiAgICAgICAgUmVzcG9zdGFNb2RlbC5jZXJ0YSgnRHVxdWUgZGUgQ2F4aWFzJyksXHJcbiAgICBdKSxcclxuXVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcXVlc3RvZXMiXSwibmFtZXMiOlsiUXVlc3Rhb01vZGVsIiwiUmVzcG9zdGFNb2RlbCIsInF1ZXN0b2VzIiwiZXJyYWRhIiwiY2VydGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/bancoDeQuestoes.ts\n");

/***/ }),

/***/ "(api)/./pages/api/questoes/[id].ts":
/*!************************************!*\
  !*** ./pages/api/questoes/[id].ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ questoesProId)\n/* harmony export */ });\n/* harmony import */ var _bancoDeQuestoes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bancoDeQuestoes */ \"(api)/./pages/api/bancoDeQuestoes.ts\");\n\nfunction questoesProId(req, res) {\n    const idSelecionado = +req.query.id;\n    const unicaQuestaoOuNada = _bancoDeQuestoes__WEBPACK_IMPORTED_MODULE_0__[\"default\"].filter((questao)=>questao.id === idSelecionado\n    );\n    if (unicaQuestaoOuNada.length === 1) {\n        const questaoSelecionada = unicaQuestaoOuNada[0].embaralharRespostas();\n        res.status(200).json(questaoSelecionada.paraObjeto());\n    } else {\n        res.status(204).send();\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcXVlc3RvZXMvW2lkXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUF5QztBQUMxQixTQUFTQyxhQUFhLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzVDLE1BQU1DLGFBQWEsR0FBRyxDQUFDRixHQUFHLENBQUNHLEtBQUssQ0FBQ0MsRUFBRTtJQUVuQyxNQUFNQyxrQkFBa0IsR0FBR1AsK0RBQWUsQ0FBQ1MsQ0FBQUEsT0FBTyxHQUFJQSxPQUFPLENBQUNILEVBQUUsS0FBS0YsYUFBYTtJQUFBLENBQUM7SUFFbkYsSUFBSUcsa0JBQWtCLENBQUNHLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDakMsTUFBTUMsa0JBQWtCLEdBQUdKLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDSyxtQkFBbUIsRUFBRTtRQUN0RVQsR0FBRyxDQUFDVSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0gsa0JBQWtCLENBQUNJLFVBQVUsRUFBRSxDQUFDO0tBQ3hELE1BQU07UUFDSFosR0FBRyxDQUFDVSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNHLElBQUksRUFBRTtLQUN6QjtDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcXVpei8uL3BhZ2VzL2FwaS9xdWVzdG9lcy9baWRdLnRzPzVhNTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHF1ZXN0b2VzIGZyb20gJy4uL2JhbmNvRGVRdWVzdG9lcydcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcXVlc3RvZXNQcm9JZChyZXEsIHJlcykge1xyXG4gICAgY29uc3QgaWRTZWxlY2lvbmFkbyA9ICtyZXEucXVlcnkuaWRcclxuXHJcbiAgICBjb25zdCB1bmljYVF1ZXN0YW9PdU5hZGEgPSBxdWVzdG9lcy5maWx0ZXIocXVlc3RhbyA9PiBxdWVzdGFvLmlkID09PSBpZFNlbGVjaW9uYWRvKVxyXG5cclxuICAgIGlmICh1bmljYVF1ZXN0YW9PdU5hZGEubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgY29uc3QgcXVlc3Rhb1NlbGVjaW9uYWRhID0gdW5pY2FRdWVzdGFvT3VOYWRhWzBdLmVtYmFyYWxoYXJSZXNwb3N0YXMoKVxyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHF1ZXN0YW9TZWxlY2lvbmFkYS5wYXJhT2JqZXRvKCkpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlcy5zdGF0dXMoMjA0KS5zZW5kKClcclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJxdWVzdG9lcyIsInF1ZXN0b2VzUHJvSWQiLCJyZXEiLCJyZXMiLCJpZFNlbGVjaW9uYWRvIiwicXVlcnkiLCJpZCIsInVuaWNhUXVlc3Rhb091TmFkYSIsImZpbHRlciIsInF1ZXN0YW8iLCJsZW5ndGgiLCJxdWVzdGFvU2VsZWNpb25hZGEiLCJlbWJhcmFsaGFyUmVzcG9zdGFzIiwic3RhdHVzIiwianNvbiIsInBhcmFPYmpldG8iLCJzZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/questoes/[id].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/questoes/[id].ts"));
module.exports = __webpack_exports__;

})();