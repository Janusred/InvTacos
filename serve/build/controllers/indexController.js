"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, res) {
        res.json({ text: 'APi esta en /api/producto' });
    }
}
exports.indexController = new IndexController();
