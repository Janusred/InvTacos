"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class ProductoController {
    coca(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //const {id} = req.params;
            const coca = yield database_1.default.query('SELECT * FROM Fanta_lata');
            res.json(coca);
        });
    }
    fresca(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //const {id} = req.params;
            const fresca = yield database_1.default.query('SELECT * FROM Sidral_lata');
            res.json(fresca);
        });
    }
    sumafresca(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //const {id} = req.params;
            const sumafresca = yield database_1.default.query('SELECT   id,nombre, refri_inicio,completo_inicio,created_at,(COALESCE(refri_inicio, 0) + COALESCE(completo_inicio, 0)) AS suma_total FROM Fanta_lata');
            res.json(sumafresca);
        });
    }
    sct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //const {id} = req.params;
            const sumafresca = yield database_1.default.query('SELECT GROUP_CONCAT(nombre) AS nombres_concatenados, SUM(total) AS suma_total, SUM(refri_inicio) AS suma_refri_inicio FROM Fanta_lata');
            res.json(sumafresca);
        });
    }
}
const productoController = new ProductoController();
exports.default = productoController;
