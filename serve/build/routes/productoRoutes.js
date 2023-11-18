"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productoController_1 = __importDefault(require("../controllers/productoController"));
class ProductoRoutes {
    /**
     *
     */
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/fr', productoController_1.default.fresca);
        this.router.get('/co', productoController_1.default.coca);
        this.router.get('/sf', productoController_1.default.sumafresca);
    }
}
const productoRoutes = new ProductoRoutes();
exports.default = productoRoutes.router;
